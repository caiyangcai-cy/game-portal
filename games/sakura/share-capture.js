/**
 * html2canvas / html-to-image 截图辅助
 * - fetch 必须带超时，否则线上 CDN 挂起会一直停在「生成中…」
 * - 多图并行 + AbortController，避免串行阻塞
 * - 离屏容器用 translate 移出视口，避免负 z-index 不合成
 */
(function (global) {
  'use strict';

  var FETCH_MS = 6000;

  async function prepareImagesForHtml2Canvas(containerEl) {
    var imgs = Array.from(containerEl.querySelectorAll('img'));
    var cleanups = [];

    await Promise.all(
      imgs.map(function (img) {
        return (async function () {
          var attr = img.getAttribute('src');
          if (!attr || attr.indexOf('data:') === 0 || attr.indexOf('blob:') === 0) return;

          var previous = img.currentSrc || img.src;
          try {
            var abs = new URL(attr, window.location.href).href;
            var controller = new AbortController();
            var timer = setTimeout(function () {
              controller.abort();
            }, FETCH_MS);
            var res = await fetch(abs, {
              credentials: 'same-origin',
              mode: 'same-origin',
              cache: 'force-cache',
              signal: controller.signal,
            });
            clearTimeout(timer);
            if (!res.ok) throw new Error('HTTP ' + res.status);
            var blob = await res.blob();
            var burl = URL.createObjectURL(blob);
            await new Promise(function (resolve) {
              var done = function () {
                img.onload = img.onerror = null;
                resolve();
              };
              img.onload = done;
              img.onerror = done;
              img.src = burl;
              setTimeout(done, 5000);
            });
            cleanups.push(function () {
              try {
                URL.revokeObjectURL(burl);
              } catch (_) {}
              img.src = previous;
            });
          } catch (_) {
            cleanups.push(function () {});
          }
        })();
      })
    );

    return function () {
      cleanups.forEach(function (fn) {
        try {
          fn();
        } catch (_) {}
      });
    };
  }

  function styleShareWrapperForCapture(wrapperEl) {
    if (!wrapperEl) return function () {};
    var prev = wrapperEl.style.cssText;
    wrapperEl.style.cssText =
      'position:fixed;left:0;top:0;width:360px;height:640px;transform:translate3d(-120vw,0,0);' +
      'z-index:2147483646;pointer-events:none;opacity:1;visibility:visible;overflow:visible;';
    return function () {
      wrapperEl.style.cssText = prev;
    };
  }

  global.sakuraShareCapture = {
    prepareImagesForHtml2Canvas: prepareImagesForHtml2Canvas,
    styleShareWrapperForCapture: styleShareWrapperForCapture,
  };
})(typeof window !== 'undefined' ? window : globalThis);
