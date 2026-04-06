(function () {
  function syncNavActive() {
    var hash = (location.hash || "").replace(/^#/, "");
    var games = document.querySelector(".nav-games");
    var about = document.querySelector(".nav-about");
    if (!games || !about) return;
    games.classList.remove("nav-link--active");
    about.classList.remove("nav-link--active");
    if (hash === "about") {
      about.classList.add("nav-link--active");
    } else {
      games.classList.add("nav-link--active");
    }
  }

  window.addEventListener("hashchange", syncNavActive);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", syncNavActive);
  } else {
    syncNavActive();
  }
})();
