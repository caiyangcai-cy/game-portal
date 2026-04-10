/**
 * 分享卡 DOM → PNG data URL（html-to-image 优先于 Safari，html2canvas 作备选）
 * 依赖：sakuraShareCapture、window.html2canvas、window.htmlToImage
 */
(function (global) {
  'use strict';

  async function exportShareCardToDataUrl(el) {
    if (!el) throw new Error('缺少分享卡节点');
    var wrapper = el.parentElement;
    var cap = global.sakuraShareCapture;

    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    var isSafariDesktop =
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !/Chrome/i.test(navigator.userAgent);
    var preferHtmlToImage = isIOS || isSafariDesktop;

    var scale = isIOS ? 1 : Math.min(2, global.devicePixelRatio || 2);

    function waitImages() {
      var imgs = el.querySelectorAll('img');
      return Promise.all(
        Array.prototype.map.call(imgs, function (img) {
          return new Promise(function (resolve) {
            if (img.complete && img.naturalWidth > 0) return resolve();
            var done = function () {
              img.onload = img.onerror = null;
              resolve();
            };
            img.onload = done;
            img.onerror = done;
            setTimeout(done, 5000);
          });
        })
      );
    }

    function runWithCaptureEnv(captureFn) {
      var rw = function () {};
      var ri = function () {};
      return Promise.resolve()
        .then(function () {
          if (cap) {
            rw = cap.styleShareWrapperForCapture(wrapper);
            return Promise.race([
              cap.prepareImagesForHtml2Canvas(el),
              new Promise(function (r) {
                setTimeout(function () {
                  r(function () {});
                }, 10000);
              }),
            ]).then(function (cleanup) {
              ri = cleanup;
            });
          }
          if (wrapper) {
            var prev = wrapper.style.cssText;
            wrapper.style.cssText =
              'position:fixed;left:0;top:0;width:360px;height:640px;transform:translate3d(-120vw,0,0);z-index:2147483646;pointer-events:none;opacity:1;overflow:visible;';
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
      return runWithCaptureEnv(function () {
        return Promise.race([
          global.html2canvas(el, {
            backgroundColor: '#0a0818',
            scale: scale,
            useCORS: true,
            allowTaint: false,
            logging: false,
            foreignObjectRendering: false,
          }),
          new Promise(function (_, rej) {
            setTimeout(function () {
              rej(new Error('html2canvas 超时'));
            }, 28000);
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
        return Promise.race([
          hti.toPng(el, {
            pixelRatio: scale,
            backgroundColor: '#0a0818',
            cacheBust: true,
          }),
          new Promise(function (_, rej) {
            setTimeout(function () {
              rej(new Error('html-to-image 超时'));
            }, 32000);
          }),
        ]);
      });
    }

    var order = preferHtmlToImage ? [tryHtmlToImage, tryHtml2Canvas] : [tryHtml2Canvas, tryHtmlToImage];
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

  global.sakuraExportShareToDataUrl = exportShareCardToDataUrl;
})(typeof window !== 'undefined' ? window : globalThis);
