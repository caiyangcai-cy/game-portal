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
   * 全屏 + 摄像头策略 v3
   *
   * 核心问题：Safari iframe 有独立权限域，父页面获取的摄像头权限不能传递给 iframe。
   * 所以父页面预请求没用，iframe 内一定会再弹一次权限窗，导致退出全屏。
   *
   * v3 方案：让 iframe 自己先请求摄像头权限（在非全屏状态下），然后再进全屏。
   *   点全屏 → postMessage 通知 iframe「请立即请求摄像头」
   *   → iframe 内 getUserMedia 弹窗（非全屏，不打断任何东西）
   *   → 用户同意 → iframe 回复 cygame-camera-granted → play.js 进全屏
   *   → iframe 后续再 getUserMedia 时已有权限，不再弹窗 ✓
   *
   * 如果 iframe 还没加载完或不支持预请求：8s 超时后直接全屏（降级到旧行为）。
   * 如果摄像头权限已获取过（cygame-camera-granted 已收到）：直接全屏。
   *
   * 不在中间再弹「摄像头已就绪 / 进入全屏」页：Safari 在系统「允许」后同一消息链路里
   * 多次尝试 requestFullscreen，多数可直达全屏；若仍失败用户可再点一次「全屏体验」。
   */
  var wantsFullscreen = false;
  var cameraPreGranted = false;
  var pendingFullscreen = false; // 正在等 iframe 回复中

  function isDocumentFullscreen() {
    return !!(
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement
    );
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

  /** 在 postMessage / 权限回调等紧接时刻多次尝试全屏（避免再插一层手动按钮） */
  function requestFsAggressive() {
    requestFs();
    requestAnimationFrame(function () {
      if (!isDocumentFullscreen() && wantsFullscreen) requestFs();
      requestAnimationFrame(function () {
        if (!isDocumentFullscreen() && wantsFullscreen) requestFs();
        setTimeout(function () {
          if (!isDocumentFullscreen() && wantsFullscreen) requestFs();
        }, 60);
        setTimeout(function () {
          if (!isDocumentFullscreen() && wantsFullscreen) requestFs();
        }, 280);
      });
    });
  }

  function enterFullscreen() {
    wantsFullscreen = true;

    // 如果摄像头已经授权过（iframe 之前已通知），直接全屏
    if (cameraPreGranted) {
      requestFs();
      return;
    }

    // 检查游戏是否需要摄像头
    var needsCamera = !!(game && !game.comingSoon && game.entry);
    if (!needsCamera) {
      requestFs();
      return;
    }

    // 通知 iframe：请立即请求摄像头权限（在非全屏状态下弹窗）
    if (frame && frame.contentWindow) {
      pendingFullscreen = true;
      try {
        frame.contentWindow.postMessage({ type: "cygame-request-camera" }, "*");
      } catch (e) {}

      // 超时保底：如果 8s 内 iframe 没回复，直接全屏（降级）
      setTimeout(function () {
        if (pendingFullscreen) {
          pendingFullscreen = false;
          requestFs();
        }
      }, 8000);
    } else {
      // iframe 还没准备好，直接全屏
      requestFs();
    }
  }

  if (fsBtn) {
    fsBtn.addEventListener("click", function () {
      enterFullscreen();
    });
  }
  if (startFullBtn) {
    startFullBtn.addEventListener("click", function () {
      // 收起简介面板，让游戏画面占满
      setSheetOpen(false);
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
      // 摄像头被拒绝 — 如果正在等预请求结果，直接进全屏（游戏内自行处理）
      if (pendingFullscreen) {
        pendingFullscreen = false;
        requestFsAggressive();
      }
      return;
    }

    if (d.type === "cygame-camera-granted") {
      cameraPreGranted = true;

      // 如果正在等 iframe 预请求结果 → 摄像头搞定了，现在进全屏
      if (pendingFullscreen) {
        pendingFullscreen = false;
        requestFsAggressive();
        return;
      }

      if (!wantsFullscreen) return;

      // 非预请求场景（例如 iframe 晚到的 granted）：尽量帮用户进全屏，不弹中间页
      if (isDocumentFullscreen()) return;
      requestFsAggressive();
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

  // 移动端默认展开简介抽屉，让新用户第一眼看到游戏介绍
  // 桌面端侧栏始终可见，不需要展开
  var isMobile = window.matchMedia("(max-width: 840px)").matches;
  setSheetOpen(isMobile);

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
