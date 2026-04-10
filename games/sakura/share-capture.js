/**
 * html2canvas 截图辅助：线上环境常见失败原因
 * 1) 跨域或未带 CORS 的图片会把 canvas 污染，toDataURL 抛 SecurityError
 * 2) 同源但经 CDN 时，部分浏览器对 <img> 绘制仍可能污染 —— 先用 fetch 拉成 blob: 再赋给 img，保证同源位图
 * 3) z-index 过小 / opacity:0 可能导致离屏节点不被合成，截图异常
 */
(function (global) {
  'use strict';

  /**
   * 将容器内所有 img 换为 blob: URL（同源 fetch），返回恢复函数
   */
  async function prepareImagesForHtml2Canvas(containerEl) {
    const imgs = Array.from(containerEl.querySelectorAll('img'));
    const cleanups = [];

    for (const img of imgs) {
      const attr = img.getAttribute('src');
      if (!attr || attr.startsWith('data:') || attr.startsWith('blob:')) continue;

      const previous = img.currentSrc || img.src;
      try {
        const abs = new URL(attr, window.location.href).href;
        const res = await fetch(abs, { credentials: 'same-origin', mode: 'same-origin', cache: 'force-cache' });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const blob = await res.blob();
        const burl = URL.createObjectURL(blob);
        await new Promise((resolve) => {
          const done = () => {
            img.onload = img.onerror = null;
            resolve();
          };
          img.onload = done;
          img.onerror = done;
          img.src = burl;
          setTimeout(done, 12000);
        });
        cleanups.push(() => {
          try {
            URL.revokeObjectURL(burl);
          } catch (_) {}
          img.src = previous;
        });
      } catch (_) {
        cleanups.push(() => {});
      }
    }

    return () => cleanups.forEach((fn) => fn());
  }

  /**
   * 把分享卡父级挪到视口外但仍参与绘制（避免 z-index:-9999 被跳过合成）
   */
  function styleShareWrapperForCapture(wrapperEl) {
    if (!wrapperEl) return () => {};
    const prev = wrapperEl.style.cssText;
    wrapperEl.style.cssText =
      'position:fixed;left:0;top:0;width:360px;height:640px;transform:translate3d(-120vw,0,0);' +
      'z-index:2147483646;pointer-events:none;opacity:1;visibility:visible;overflow:visible;';
    return () => {
      wrapperEl.style.cssText = prev;
    };
  }

  global.sakuraShareCapture = {
    prepareImagesForHtml2Canvas,
    styleShareWrapperForCapture,
  };
})(typeof window !== 'undefined' ? window : globalThis);
