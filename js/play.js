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
   * 全屏 + 摄像头策略（v2 — 统一路径，不再按浏览器分流）
   *
   * 新策略：所有浏览器走同一条路径——
   *   点全屏 → 先在父页面 getUserMedia 请求摄像头权限（非全屏弹窗无痛）
   *   → 用户同意 → 关掉临时 stream → 进入全屏
   *   → iframe 内再次 getUserMedia 时，浏览器已记住该域名授权，不再弹窗 ✓
   *
   * 如果用户拒绝摄像头，也直接进全屏（游戏内自会处理拒绝提示）。
   * 如果摄像头权限已获取过，直接进全屏。
   */
  var wantsFullscreen = false;
  var cameraPreGranted = false;
  var restoreOverlay = null;

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

  /** 创建醒目的全屏恢复覆盖层（仅做后备，正常流程不再需要） */
  function showRestoreOverlay() {
    if (restoreOverlay) {
      restoreOverlay.style.display = "flex";
      return;
    }
    restoreOverlay = document.createElement("div");
    restoreOverlay.id = "fullscreen-restore-overlay";
    restoreOverlay.innerHTML =
      '<div style="text-align:center;max-width:320px;padding:0 20px;">' +
        '<div style="font-size:48px;margin-bottom:16px;">📷</div>' +
        '<div style="font-size:18px;font-weight:700;color:#fff;margin-bottom:8px;">摄像头已就绪</div>' +
        '<div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:24px;line-height:1.5;">权限已获取，点击下方按钮恢复全屏继续游戏</div>' +
        '<button type="button" id="btn-restore-fs" style="' +
          "padding:14px 36px;border-radius:999px;border:none;" +
          "background:linear-gradient(135deg,#ff6fa7,#ff8a50);color:#fff;" +
          "font-size:16px;font-weight:700;letter-spacing:1px;cursor:pointer;" +
          "box-shadow:0 4px 20px rgba(255,111,167,0.4);" +
        '">进入全屏</button>' +
      '</div>';
    restoreOverlay.style.cssText =
      "position:fixed;inset:0;z-index:99999;display:flex;align-items:center;" +
      "justify-content:center;background:rgba(0,0,0,0.75);" +
      "backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);";
    document.body.appendChild(restoreOverlay);

    restoreOverlay.querySelector("#btn-restore-fs").addEventListener("click", function () {
      restoreOverlay.style.display = "none";
      requestFs();
    });
  }

  function hideRestoreOverlay() {
    if (restoreOverlay) restoreOverlay.style.display = "none";
  }

  /**
   * 统一路径：先请求摄像头权限 → 再进全屏
   * 所有浏览器（Chrome / Firefox / Safari）走同一条路
   */
  function requestCameraThenFullscreen() {
    // 检查游戏是否需要摄像头
    var needsCamera = !!(game && !game.comingSoon && game.entry);
    if (!needsCamera || cameraPreGranted) {
      requestFs();
      return;
    }

    // 先尝试 permissions.query 检查是否已授权（Safari 不支持会 catch）
    var checkPermission;
    if (navigator.permissions && navigator.permissions.query) {
      checkPermission = navigator.permissions
        .query({ name: "camera" })
        .then(function (status) { return status.state; })
        .catch(function () { return "unknown"; });
    } else {
      checkPermission = Promise.resolve("unknown");
    }

    checkPermission.then(function (state) {
      if (state === "granted") {
        // 已授权，直接全屏
        cameraPreGranted = true;
        requestFs();
        return;
      }

      // 未授权或无法查询 → 在非全屏状态下弹出摄像头权限请求
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then(function (stream) {
          // 拿到权限后立即关掉临时流
          stream.getTracks().forEach(function (t) { t.stop(); });
          cameraPreGranted = true;
          // 权限已获取，尝试进全屏
          requestFs();
          // Safari 可能在异步 .then 中丢失用户手势上下文，导致 requestFullscreen 静默失败
          // 400ms 后检查：如果没成功进全屏，就弹恢复覆盖层让用户一键全屏
          setTimeout(function () {
            var isFs = !!(
              document.fullscreenElement ||
              document.webkitFullscreenElement ||
              document.msFullscreenElement
            );
            if (!isFs && wantsFullscreen) {
              showRestoreOverlay();
            }
          }, 400);
        })
        .catch(function () {
          // 用户拒绝摄像头或出错，也进全屏（游戏内自行处理拒绝）
          requestFs();
        });
    });
  }

  function enterFullscreen() {
    wantsFullscreen = true;
    requestCameraThenFullscreen();
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

  window.addEventListener("message", function (ev) {
    var d = ev && ev.data;
    if (!d || typeof d !== "object") return;

    if (d.type === "cygame-camera-denied") {
      // 摄像头被拒绝，不处理全屏恢复
      return;
    }

    if (d.type === "cygame-camera-granted") {
      cameraPreGranted = true;

      if (!wantsFullscreen) return;

      // 检查当前是否还在全屏中
      var isFs = !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement
      );

      if (isFs) {
        // 还在全屏（Chrome 路径，或 Safari 没退出），不需要恢复
        return;
      }

      // 不在全屏（Safari 被弹窗打断了）→ 显示恢复覆盖层
      showRestoreOverlay();
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
