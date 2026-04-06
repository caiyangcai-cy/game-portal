(function () {
  var params = new URLSearchParams(window.location.search);
  var id = params.get("game");
  var games = window.PORTFOLIO_GAMES || [];
  var game = games.find(function (g) {
    return g.id === id;
  });

  var frame = document.getElementById("game-frame");
  var frameWrap = document.getElementById("play-frame-wrap");
  var startGate = document.getElementById("play-start-gate");
  var startGateKicker = document.getElementById("play-start-gate-kicker");
  var startGateTitle = document.getElementById("play-start-gate-title");
  var startGameBtn = document.getElementById("play-start-game");
  var previewHint = document.getElementById("play-preview-hint");
  var badgeEl = document.getElementById("play-intro-badge");
  var titleIntroEl = document.getElementById("play-intro-title");
  var descEl = document.getElementById("play-intro-desc");
  var tagsEl = document.getElementById("play-intro-tags");
  var tipsEl = document.getElementById("play-intro-tips");
  var actionsEl = document.getElementById("play-intro-actions");
  var fsBtn = document.getElementById("play-fullscreen");
  var startFullBtn = document.getElementById("play-start-full");

  var gameStarted = false;

  function setPlayControlsEnabled(on) {
    if (fsBtn) fsBtn.disabled = !on;
    if (startFullBtn) startFullBtn.disabled = !on;
  }

  function requestFs() {
    if (!gameStarted) return;
    var root = frameWrap || document.querySelector(".play-frame-wrap");
    if (!root) return;
    var fn =
      root.requestFullscreen ||
      root.webkitRequestFullscreen ||
      root.msRequestFullscreen;
    if (fn) {
      fn.call(root).catch(function () {});
    }
  }

  function beginGame() {
    if (!game || !game.entry || !frame || gameStarted) return;
    gameStarted = true;
    frame.src = game.entry;
    if (startGate) startGate.hidden = true;
    setPlayControlsEnabled(true);
  }

  if (fsBtn) {
    fsBtn.addEventListener("click", requestFs);
  }
  if (startFullBtn) {
    startFullBtn.addEventListener("click", requestFs);
  }
  if (startGameBtn) {
    startGameBtn.addEventListener("click", beginGame);
  }

  if (!game) {
    if (titleIntroEl) titleIntroEl.textContent = "未找到游戏";
    if (descEl) {
      descEl.textContent = "链接可能不完整，请从游戏库重新进入。";
    }
    if (badgeEl) badgeEl.textContent = "";
    if (tipsEl) tipsEl.innerHTML = "";
    if (previewHint) previewHint.hidden = false;
    setPlayControlsEnabled(false);
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
    if (startGate) startGate.hidden = true;
    setPlayControlsEnabled(false);
    return;
  }

  document.title = game.title + " · CYou Games";
  if (titleIntroEl) titleIntroEl.textContent = game.title;
  if (descEl) descEl.textContent = game.desc || "";

  var badge = game.introBadge;
  if (badgeEl) badgeEl.textContent = badge || "H5 互动";

  if (startGateKicker) startGateKicker.textContent = badge || "H5 互动";
  if (startGateTitle) startGateTitle.textContent = game.title;

  if (startGate && game.coverImage) {
    var u = String(game.coverImage).replace(/'/g, "%27");
    var base = game.coverStyle || "#111";
    var pos = game.coverPosition || "center";
    startGate.style.backgroundColor = base;
    startGate.style.backgroundImage = "url('" + u + "')";
    startGate.style.backgroundSize = "cover";
    startGate.style.backgroundPosition = pos;
    startGate.style.backgroundRepeat = "no-repeat";
  }

  if (startGate && game.entry) {
    startGate.hidden = false;
  }
  if (previewHint) previewHint.hidden = true;

  setPlayControlsEnabled(false);

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
