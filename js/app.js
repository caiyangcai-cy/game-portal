(function () {
  var games = window.PORTFOLIO_GAMES || [];
  var grid = document.getElementById("games-grid");
  if (!grid) return;

  function esc(s) {
    return s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function escAttr(s) {
    return esc(s).replace(/'/g, "&#39;");
  }

  function mediaStyle(game) {
    var base = game.coverStyle || "#111";
    if (game.coverImage) {
      var u = String(game.coverImage).replace(/'/g, "%27");
      var pos = game.coverPosition || "center";
      return (
        "background-color:" +
        base +
        ";background-image:url('" +
        u +
        "');background-size:cover;background-position:" +
        pos +
        ";background-repeat:no-repeat;"
      );
    }
    return "background:" + base;
  }

  games.forEach(function (game) {
    var card = document.createElement("article");

    if (game.comingSoon) {
      card.className = "game-card game-card--coming";
      card.innerHTML =
        '<div class="game-card__cover game-card__cover--coming">' +
        '<span class="coming-icon" aria-hidden="true">🎮</span>' +
        "</div>" +
        '<div class="game-card__info">' +
        '<h3 class="game-card__title game-card__title--muted">' +
        esc(game.title) +
        "</h3>" +
        '<p class="game-card__desc">' +
        esc(game.desc) +
        "</p>" +
        "</div>";
      grid.appendChild(card);
      return;
    }

    var playHref = "play.html?game=" + encodeURIComponent(game.id);
    card.className = "game-card";
    card.innerHTML =
      '<div class="game-card__cover" aria-hidden="true">' +
      '<div class="game-card__media" style="' +
      mediaStyle(game) +
      '"></div>' +
      '<span class="game-card__badge">H5</span>' +
      "</div>" +
      '<div class="game-card__info">' +
      '<h3 class="game-card__title">' +
      esc(game.title) +
      "</h3>" +
      '<p class="game-card__desc">' +
      esc(game.desc) +
      "</p>" +
      '<div class="game-card__action">' +
      '<a class="btn--play" href="' +
      escAttr(playHref) +
      '" target="_blank" rel="noopener noreferrer">' +
      esc(game.btnText) +
      "</a>" +
      "</div>" +
      "</div>";

    grid.appendChild(card);
  });
})();
