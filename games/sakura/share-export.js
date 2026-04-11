/**
 * 分享卡 DOM → PNG data URL
 * - Chrome/Firefox/Edge：先 html2canvas（快且稳）
 * - Safari/WebKit：先 html-to-image（html2canvas 常长时间卡住）；失败再短超时回退 html2canvas
 * 依赖：sakuraShareCapture、window.html2canvas、window.htmlToImage
 */
(function (global) {
  'use strict';

  /** 1×1 透明 PNG，避免某张图加载失败导致 html-to-image 整段失败 */
  var IMG_PLACEHOLDER =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';

  /** Safari / iOS / iOS Chrome：html2canvas 易卡死，优先 html-to-image */
  function prefersHtmlToImageFirst() {
    var ua = navigator.userAgent || '';
    if (/iPhone|iPad|iPod|CriOS/i.test(ua)) return true;
    if (/Chrome|Chromium|Edg|Firefox/i.test(ua)) return false;
    return /^((?!chrome|android).)*safari/i.test(ua);
  }

  async function exportShareCardToDataUrl(el) {
    if (!el) throw new Error('缺少分享卡节点');
    var wrapper = el.parentElement;
    var cap = global.sakuraShareCapture;

    // 分享卡约 360×640，固定 2× 输出约 720×1280（避免 1× / 低采样发糊）
    var exportScale = 2;

    /**
     * Safari/WebKit：常出现 complete 已 true 但 naturalWidth 仍为 0、或已 load 未 decode 就截图 → 首存无卡图
     * 必须等到 naturalWidth>0，再 decode，并轮询覆盖「缓存秒 complete」的竞态
     */
    function waitForImageReady(img) {
      return new Promise(function (resolve) {
        var settled = false;
        var pollTimer = null;
        var deadlineTimer = null;
        function finish() {
          if (settled) return;
          settled = true;
          if (pollTimer != null) {
            try {
              clearInterval(pollTimer);
            } catch (_) {}
            pollTimer = null;
          }
          if (deadlineTimer != null) {
            try {
              clearTimeout(deadlineTimer);
            } catch (_) {}
            deadlineTimer = null;
          }
          img.onload = img.onerror = null;
          if (img.decode && typeof img.decode === 'function') {
            img.decode().then(resolve).catch(resolve);
          } else {
            resolve();
          }
        }
        function maybeReady() {
          if (img.naturalWidth > 0 && img.naturalHeight > 0) finish();
        }
        if (img.naturalWidth > 0 && img.naturalHeight > 0) {
          return finish();
        }
        img.onload = maybeReady;
        img.onerror = finish;
        maybeReady();
        pollTimer = setInterval(maybeReady, 40);
        deadlineTimer = setTimeout(finish, 15000);
      });
    }

    function waitImages() {
      var imgs = el.querySelectorAll('img');
      if (!imgs.length) return Promise.resolve();
      return Promise.all(Array.prototype.map.call(imgs, waitForImageReady)).then(function () {
        return new Promise(function (r) {
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              requestAnimationFrame(r);
            });
          });
        });
      });
    }

    /** decode 完成后，位图写入 GPU/合成仍可能落后一帧；WebKit 上更明显 → 首存空白卡 */
    function settleBeforeCapture() {
      var ua = navigator.userAgent || '';
      var ms = 120;
      if (/iPhone|iPad|iPod|CriOS/i.test(ua)) ms = 500;
      else if (/^((?!chrome|android).)*safari/i.test(ua)) ms = 500;
      return new Promise(function (r) {
        setTimeout(r, ms);
      });
    }

    function runWithCaptureEnv(captureFn) {
      var rw = function () {};
      var ri = function () {};
      return Promise.resolve()
        .then(function () {
          Array.prototype.forEach.call(el.querySelectorAll('img'), function (im) {
            try {
              im.setAttribute('loading', 'eager');
              im.setAttribute('decoding', 'sync');
            } catch (_) {}
          });
          if (cap) {
            // 必须先内联/准备图片，再移动离屏 wrapper；否则 WebKit 在错误布局下内联，首截仍无卡图
            return Promise.race([
              cap.prepareImagesForHtml2Canvas(el),
              new Promise(function (r) {
                setTimeout(function () {
                  r(function () {});
                }, 15000);
              }),
            ]).then(function (cleanup) {
              ri = typeof cleanup === 'function' ? cleanup : function () {};
              rw = cap.styleShareWrapperForCapture(wrapper);
            });
          }
          if (wrapper) {
            var prev = wrapper.style.cssText;
            wrapper.style.cssText =
              'position:fixed;left:0;top:0;width:360px;height:640px;transform:translate3d(0,calc(100vh + 32px),0);z-index:2147483646;pointer-events:none;opacity:1;overflow:visible;';
            rw = function () {
              wrapper.style.cssText = prev;
            };
          }
        })
        .then(function () {
          return new Promise(function (r) {
            requestAnimationFrame(function () {
              requestAnimationFrame(r);
            });
          });
        })
        .then(function () {
          return waitImages();
        })
        .then(function () {
          return settleBeforeCapture();
        })
        .then(function () {
          return captureFn();
        })
        .finally(function () {
          try {
            ri();
          } catch (_) {}
          try {
            rw();
          } catch (_) {}
        });
    }

    function tryHtml2Canvas() {
      if (!global.html2canvas) return Promise.reject(new Error('no html2canvas'));
      var h2cMs = prefersHtmlToImageFirst() ? 18000 : 28000;
      return runWithCaptureEnv(function () {
        return Promise.race([
          global.html2canvas(el, {
            backgroundColor: '#0a0818',
            scale: exportScale,
            useCORS: true,
            allowTaint: false,
            logging: false,
            foreignObjectRendering: false,
            scrollX: 0,
            scrollY: 0,
            imageTimeout: 20000,
            removeContainer: false,
            onclone: function (clonedDoc) {
              try {
                var st = clonedDoc.createElement('style');
                st.setAttribute('data-sakura-capture', '1');
                st.textContent =
                  '#sr-share-card::before,#share-card::before{display:none!important;content:none!important}' +
                  '#sr-share-card,#share-card{box-shadow:none!important}' +
                  '#sr-share-card *,#share-card *{animation:none!important;transition:none!important}';
                (clonedDoc.head || clonedDoc.documentElement).appendChild(st);
              } catch (e) {
                console.warn('[ShareImage] onclone', e);
              }
            },
          }),
          new Promise(function (_, rej) {
            setTimeout(function () {
              rej(new Error('html2canvas 超时'));
            }, h2cMs);
          }),
        ]).then(function (canvas) {
          return canvas.toDataURL('image/png');
        });
      });
    }

    function tryHtmlToImage() {
      var hti = global.htmlToImage;
      if (!hti || typeof hti.toPng !== 'function') return Promise.reject(new Error('no html-to-image'));
      return runWithCaptureEnv(function () {
        var bbox = el.getBoundingClientRect();
        var outW = Math.max(1, Math.round(bbox.width || el.offsetWidth)) || 360;
        var outH = Math.max(1, Math.round(bbox.height || el.offsetHeight)) || 640;
        var opts = {
          pixelRatio: exportScale,
          width: outW,
          height: outH,
          backgroundColor: '#0a0818',
          cacheBust: true,
          skipFonts: true,
          includeQueryParams: false,
          imagePlaceholder: IMG_PLACEHOLDER,
          fetchRequestInit: {
            credentials: 'same-origin',
            mode: 'cors',
            cache: 'force-cache',
          },
        };
        var timeout = new Promise(function (_, rej) {
          setTimeout(function () { rej(new Error('html-to-image 超时')); }, 45000);
        });

        if (prefersHtmlToImageFirst()) {
          // Safari: 截两次，第一次预热（丢弃），第二次拿真实结果
          return Promise.race([
            hti.toPng(el, opts)
              .then(function () {
                // 第一次完成，等 200ms 让 WebKit 合成层稳定
                return new Promise(function (r) { setTimeout(r, 200); });
              })
              .then(function () {
                // 第二次截图：此时图片一定已在合成层
                return hti.toPng(el, opts);
              }),
            timeout,
          ]);
        }

        return Promise.race([hti.toPng(el, opts), timeout]);
      });
    }

    var order = prefersHtmlToImageFirst()
      ? [tryHtmlToImage, tryHtml2Canvas]
      : [tryHtml2Canvas, tryHtmlToImage];
    var lastErr;
    for (var i = 0; i < order.length; i++) {
      try {
        return await order[i]();
      } catch (e) {
        lastErr = e;
        console.warn('[ShareImage] 尝试失败', e);
      }
    }
    throw lastErr || new Error('分享图生成失败');
  }

  /**
   * 保存 PNG：优先系统「另存为」（File System Access API），否则 <a download>
   * @returns {Promise<{ok:boolean, method:'picker'|'download'|'aborted'|'error', error?:* }>}
   */
  async function saveShareDataUrl(dataUrl, suggestedName) {
    var name = suggestedName || 'sakura-share.png';
    if (typeof global.showSaveFilePicker === 'function') {
      try {
        var blob = await (await fetch(dataUrl)).blob();
        var handle = await global.showSaveFilePicker({
          suggestedName: name,
          types: [{ description: 'PNG 图片', accept: { 'image/png': ['.png'] } }],
        });
        var writable = await handle.createWritable();
        await writable.write(blob);
        await writable.close();
        return { ok: true, method: 'picker' };
      } catch (e) {
        if (e && (e.name === 'AbortError' || e.name === 'NotAllowedError')) {
          return { ok: false, method: 'aborted', error: e };
        }
        console.warn('[ShareImage] 另存为不可用，回退为下载', e);
      }
    }
    try {
      var a = global.document.createElement('a');
      a.href = dataUrl;
      a.download = name;
      global.document.body.appendChild(a);
      a.click();
      a.remove();
      return { ok: true, method: 'download' };
    } catch (e2) {
      return { ok: false, method: 'error', error: e2 };
    }
  }

  function ensureAlbumOverlayStyles() {
    var doc = global.document;
    if (doc.getElementById('sakura-share-album-style')) return;
    var s = doc.createElement('style');
    s.id = 'sakura-share-album-style';
    s.textContent =
      '.sakura-share-album-overlay{position:fixed;inset:0;z-index:200000;display:flex;align-items:center;justify-content:center;' +
      'padding:max(16px,env(safe-area-inset-top)) max(16px,env(safe-area-inset-right)) max(16px,env(safe-area-inset-bottom)) max(16px,env(safe-area-inset-left));' +
      'box-sizing:border-box;}' +
      '.sakura-share-album-backdrop{position:absolute;inset:0;background:rgba(0,0,0,.92);}' +
      '.sakura-share-album-panel{position:relative;z-index:1;max-width:100%;max-height:100%;display:flex;flex-direction:column;align-items:center;gap:12px;}' +
      '.sakura-share-album-img{max-width:100%;max-height:min(56vh,640px);width:auto;height:auto;border-radius:12px;' +
      'box-shadow:0 12px 48px rgba(0,0,0,.55);-webkit-touch-callout:default;-webkit-user-select:auto;user-select:auto;' +
      'pointer-events:auto;touch-action:manipulation;}' +
      '.sakura-share-album-hint{color:#f0ebe3;font-size:15px;font-weight:600;text-align:center;line-height:1.55;padding:0 10px;margin:0;}' +
      '.sakura-share-album-sub{color:rgba(255,255,255,.48);font-size:12px;text-align:center;margin:0;line-height:1.45;}' +
      '.sakura-share-album-close{padding:11px 26px;border-radius:40px;border:1px solid rgba(255,215,0,.5);' +
      'background:rgba(255,215,0,.1);color:#ffd700;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;}' +
      '.sakura-share-album-dl{color:rgba(255,255,255,.5);font-size:13px;text-decoration:underline;margin-top:4px;}';
    (doc.head || doc.documentElement).appendChild(s);
  }

  /**
   * 手机端：优先系统分享（可选「存储图像/照片」），否则全屏展示图片供长按存相册
   * 不使用 a[download]，避免只进「下载/文件」且与「长按保存」文案不符
   */
  async function presentShareImageForAlbum(dataUrl, suggestedName) {
    ensureAlbumOverlayStyles();
    var name = suggestedName || 'sakura-share.png';
    var blob = await (await fetch(dataUrl)).blob();

    if (typeof navigator.share === 'function' && typeof navigator.canShare === 'function') {
      try {
        var file = new File([blob], name, { type: 'image/png' });
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({ files: [file], title: '小樱塔罗分享图' });
          return { ok: true, method: 'share' };
        }
      } catch (e) {
        if (e && e.name === 'AbortError') return { ok: false, method: 'aborted' };
        console.warn('[ShareImage] Web Share 不可用，使用长按预览', e);
      }
    }

    return new Promise(function (resolve) {
      var objectUrl = URL.createObjectURL(blob);
      var doc = global.document;
      var root = doc.createElement('div');
      root.className = 'sakura-share-album-overlay';
      root.setAttribute('role', 'dialog');
      root.setAttribute('aria-modal', 'true');

      var backdrop = doc.createElement('div');
      backdrop.className = 'sakura-share-album-backdrop';

      var panel = doc.createElement('div');
      panel.className = 'sakura-share-album-panel';

      var img = doc.createElement('img');
      img.className = 'sakura-share-album-img';
      img.src = objectUrl;
      img.alt = '分享图，长按可保存到相册';

      var hint = doc.createElement('p');
      hint.className = 'sakura-share-album-hint';
      hint.textContent = '长按图片，选择「存储到照片」或「存储图像」';

      var hint2 = doc.createElement('p');
      hint2.className = 'sakura-share-album-sub';
      hint2.textContent = '部分机型也可在分享面板里选「存储到相册」';

      var closeBtn = doc.createElement('button');
      closeBtn.type = 'button';
      closeBtn.className = 'sakura-share-album-close';
      closeBtn.textContent = '关闭';

      var dl = doc.createElement('a');
      dl.className = 'sakura-share-album-dl';
      dl.href = dataUrl;
      dl.download = name;
      dl.textContent = '仅下载到文件（备用）';

      function cleanup() {
        try {
          URL.revokeObjectURL(objectUrl);
        } catch (_) {}
        if (root.parentNode) root.parentNode.removeChild(root);
      }

      function finish() {
        cleanup();
        resolve({ ok: true, method: 'overlay' });
      }

      closeBtn.addEventListener('click', finish);
      backdrop.addEventListener('click', finish);

      panel.appendChild(img);
      panel.appendChild(hint);
      panel.appendChild(hint2);
      panel.appendChild(closeBtn);
      panel.appendChild(dl);

      root.appendChild(backdrop);
      root.appendChild(panel);
      doc.body.appendChild(root);
    });
  }

  global.sakuraExportShareToDataUrl = exportShareCardToDataUrl;
  global.sakuraSaveShareDataUrl = saveShareDataUrl;
  global.sakuraPresentShareImageForAlbum = presentShareImageForAlbum;
})(typeof window !== 'undefined' ? window : globalThis);
