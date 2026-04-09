(function () {
  var params = new URLSearchParams(window.location.search);
  var id = params.get("game");
  var games = window.PORTFOLIO_GAMES || [];
  var game = games.find(function (g) {
    return g.id === id;
  });

  var frame = document.getElementById("game-frame");
  var frameWrap = document.getElementById("play-frame-wrap");
  var previewHint = document.getElementById("play-preview-hint");
  var badgeEl = document.getElementById("play-intro-badge");
  var titleIntroEl = document.getElementById("play-intro-title");
  var descEl = document.getElementById("play-intro-desc");
  var tagsEl = document.getElementById("play-intro-tags");
  var tipsEl = document.getElementById("play-intro-tips");
  var actionsEl = document.getElementById("play-intro-actions");
  var fsBtn = document.getElementById("play-fullscreen");
  var startFullBtn = document.getElementById("play-start-full");
  var infoToggleBtn = document.getElementById("play-info-toggle");
  var sheetHandleBtn = document.getElementById("play-sheet-handle");
  var sidebar = document.getElementById("play-sidebar");
  var wechatTip = document.getElementById("wechat-tip");
  var wechatCopyBtn = document.getElementById("wechat-copy-link");
  var wechatCloseBtn = document.getElementById("wechat-close-tip");
  var wechatCopyStatus = document.getElementById("wechat-copy-status");

  /**
   * 全屏 + 摄像头流程：
   * 1. 用户点「全屏体验」→ 先请求摄像头权限（弹窗在非全屏下出现）
   * 2. 用户确认权限 → 父页面保持持有 stream（不释放！）→ 进入全屏
   * 3. iframe 内游戏再调 getUserMedia → 浏览器已有活跃 stream，不弹窗
   * 4. iframe 通知 cygame-camera-granted → 父页面释放自己持有的 stream
   *
   * 关键：父页面的 stream 必须保持活跃直到 iframe 拿到自己的 stream，
   * 否则某些浏览器会认为权限已过期而重新弹窗。
   */
  var parentStream = null; // 父页面持有的摄像头 stream
  var cameraPreGranted = false;
  var restoreBtn = null;

  function ensureRestoreButton() {
    if (restoreBtn) return restoreBtn;
    restoreBtn = document.createElement("button");
    restoreBtn.type = "button";
    restoreBtn.id = "btn-restore-fullscreen";
    restoreBtn.textContent = "点击恢复全屏";
    restoreBtn.style.cssText =
      "position:fixed;left:50%;bottom:22px;transform:translateX(-50%);" +
      "padding:12px 18px;border-radius:999px;border:1px solid rgba(255,255,255,0.35);" +
      "background:rgba(0,0,0,0.55);color:#fff;font-weight:600;letter-spacing:0.5px;" +
      "z-index:99999;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);" +
      "box-shadow:0 10px 30px rgba(0,0,0,0.35);display:none;cursor:pointer;";
    restoreBtn.addEventListener("click", function () {
      restoreBtn.style.display = "none";
      requestFs();
    });
    document.body.appendChild(restoreBtn);
    return restoreBtn;
  }

  function requestFs() {
    var root = frameWrap || document.querySelector(".play-frame-wrap");
    if (!root) return;
    var fn =
      root.requestFullscreen ||
      root.webkitRequestFullscreen ||
      root.msRequestFullscreen;
    if (fn) {
      try {
        var p = fn.call(root);
        if (p && typeof p.catch === "function") {
          p.catch(function () {});
        }
      } catch (e) {}
    }
  }

  /** 释放父页面持有的摄像头 stream */
  function releaseParentStream() {
    if (parentStream) {
      parentStream.getTracks().forEach(function (t) { t.stop(); });
      parentStream = null;
    }
  }

  function enterFullscreen() {
    // 已授权过，直接全屏
    if (cameraPreGranted) {
      requestFs();
      return;
    }

    // 检查游戏是否需要摄像头（comingSoon 或无 entry 的不需要）
    var needsCamera = !!(game && !game.comingSoon && game.entry);
    if (!needsCamera) {
      requestFs();
      return;
    }

    // 用 permissions API 检查当前权限状态
    if (navigator.permissions && navigator.permissions.query) {
      navigator.permissions
        .query({ name: "camera" })
        .then(function (status) {
          if (status.state === "granted") {
            cameraPreGranted = true;
            requestFs();
          } else {
            // prompt 或 denied → 先请求权限再全屏
            requestCameraThenFullscreen();
          }
        })
        .catch(function () {
          requestCameraThenFullscreen();
        });
    } else {
      // 不支持 permissions API → 直接尝试
      requestCameraThenFullscreen();
    }
  }

  function requestCameraThenFullscreen() {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then(function (stream) {
        // ★ 不释放 stream！保持持有，让浏览器知道摄像头权限是活跃的
        parentStream = stream;
        cameraPreGranted = true;
        // 尝试全屏（getUserMedia 的 then 回调仍在用户手势栈内，大多数浏览器允许）
        requestFs();
        // 300ms 后检查是否成功进入全屏，若没有则显示按钮让用户手动点
        setTimeout(function () {
          var isFs = !!(
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.msFullscreenElement
          );
          if (!isFs) {
            ensureRestoreButton().textContent = "摄像头已就绪 · 点击进入全屏";
            ensureRestoreButton().style.display = "block";
          }
        }, 300);
      })
      .catch(function () {
        // 摄像头被拒绝也允许进全屏（游戏内部会自行提示错误）
        requestFs();
      });
  }

  if (fsBtn) {
    fsBtn.addEventListener("click", function () {
      enterFullscreen();
    });
  }
  if (startFullBtn) {
    startFullBtn.addEventListener("click", function () {
      enterFullscreen();
    });
  }

  function isWeChat() {
    var ua = (navigator && navigator.userAgent) || "";
    return /MicroMessenger/i.test(ua);
  }

  function showWeChatTip() {
    if (!wechatTip) return;
    wechatTip.hidden = false;
    // 尽量避免底层页面可滚动/可点
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }

  function hideWeChatTip() {
    if (!wechatTip) return;
    wechatTip.hidden = true;
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }

  function setCopyStatus(msg) {
    if (!wechatCopyStatus) return;
    wechatCopyStatus.textContent = msg || "";
  }

  async function copyLink() {
    var url = window.location.href;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
        setCopyStatus("已复制链接。去浏览器打开即可。");
        return;
      }
    } catch (e) {}
    try {
      var input = document.createElement("input");
      input.value = url;
      input.setAttribute("readonly", "readonly");
      input.style.position = "fixed";
      input.style.left = "-9999px";
      document.body.appendChild(input);
      input.select();
      input.setSelectionRange(0, input.value.length);
      var ok = document.execCommand && document.execCommand("copy");
      document.body.removeChild(input);
      setCopyStatus(ok ? "已复制链接。去浏览器打开即可。" : "复制失败，请手动复制地址栏链接。");
    } catch (e2) {
      setCopyStatus("复制失败，请手动复制地址栏链接。");
    }
  }

  if (wechatCloseBtn) {
    wechatCloseBtn.addEventListener("click", function () {
      hideWeChatTip();
    });
  }
  if (wechatCopyBtn) {
    wechatCopyBtn.addEventListener("click", function () {
      copyLink();
    });
  }

  function setSheetOpen(open) {
    document.body.classList.toggle("play-sheet-open", !!open);
    if (infoToggleBtn) infoToggleBtn.setAttribute("aria-expanded", String(!!open));
    if (sidebar) sidebar.setAttribute("data-open", open ? "1" : "0");
  }

  function toggleSheet() {
    setSheetOpen(!document.body.classList.contains("play-sheet-open"));
  }

  if (infoToggleBtn) {
    infoToggleBtn.addEventListener("click", function () {
      toggleSheet();
    });
  }
  if (sheetHandleBtn) {
    sheetHandleBtn.addEventListener("click", function () {
      toggleSheet();
    });
  }

  // 安全兜底：页面卸载时释放父页面的 stream（避免摄像头被持续占用）
  window.addEventListener("beforeunload", function () {
    releaseParentStream();
  });
  // 如果 10 秒后 iframe 仍未通知 camera-granted/denied，主动释放
  // （极端情况：游戏 JS 出错没发 postMessage）
  setTimeout(function () {
    releaseParentStream();
  }, 10000);

  window.addEventListener("message", function (ev) {
    var d = ev && ev.data;
    if (!d || typeof d !== "object") return;

    if (d.type === "cygame-camera-granted") {
      // iframe 游戏已成功拿到自己的摄像头 stream
      // 现在可以安全释放父页面持有的 stream 了
      releaseParentStream();
      return;
    }

    if (d.type === "cygame-camera-denied") {
      // 摄像头被拒绝，也释放父页面的 stream
      releaseParentStream();
      return;
    }
  });

  if (!game) {
    if (titleIntroEl) titleIntroEl.textContent = "未找到游戏";
    if (descEl) {
      descEl.textContent = "链接可能不完整，请从游戏库重新进入。";
    }
    if (badgeEl) badgeEl.textContent = "";
    if (tipsEl) tipsEl.innerHTML = "";
    if (previewHint) previewHint.hidden = false;
    if (fsBtn) fsBtn.disabled = true;
    return;
  }

  if (game.comingSoon) {
    if (titleIntroEl) titleIntroEl.textContent = game.title;
    if (descEl) descEl.textContent = game.desc || "";
    if (badgeEl) badgeEl.textContent = "敬请期待";
    if (tipsEl) {
      tipsEl.innerHTML =
        "<li>该作品仍在开发中，稍后回来看看吧。</li>";
    }
    if (previewHint) {
      previewHint.textContent = "该游戏尚未开放，敬请期待。";
      previewHint.hidden = false;
    }
    if (fsBtn) fsBtn.disabled = true;
    return;
  }

  document.title = game.title + " · CYou Games";
  if (titleIntroEl) titleIntroEl.textContent = game.title;
  if (descEl) descEl.textContent = game.desc || "";

  var badge = game.introBadge;
  if (badgeEl) badgeEl.textContent = badge || "H5 互动";

  if (frame && game.entry) {
    frame.src = game.entry;
  }
  if (previewHint) previewHint.hidden = true;

  // 移动端默认收起简介抽屉，让游戏画面优先占满
  setSheetOpen(false);

  // 微信内置浏览器：提前提醒用户使用系统浏览器（摄像头/手势体验更稳定）
  if (isWeChat()) {
    showWeChatTip();
  }

  var tags = game.tags || [];
  if (tagsEl && tags.length) {
    tagsEl.hidden = false;
    tagsEl.innerHTML = tags
      .map(function (t) {
        return (
          "<li><span class=\"play-intro-tag\">" +
          String(t)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;") +
          "</span></li>"
        );
      })
      .join("");
  } else if (tagsEl) {
    tagsEl.hidden = true;
    tagsEl.innerHTML = "";
  }

  var tips = game.introTips || [];
  if (tipsEl) {
    tipsEl.innerHTML = tips
      .map(function (line) {
        return (
          "<li>" +
          String(line)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;") +
          "</li>"
        );
      })
      .join("");
  }

  if (actionsEl && game.entry) {
    actionsEl.hidden = false;
  }
})();
