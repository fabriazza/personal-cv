"use strict";

function closeMenu() {
  var desktopHeader = document.getElementById("desktop-header");
  var mobileHeader = document.getElementById("mobile-header");
  var main = document.getElementById("main");
  var hamburger = document.getElementById("hamburger");
  var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  if (vw <= 800) {
    desktopHeader.classList.toggle("d-none");
    mobileHeader.classList.toggle("open");
    main.classList.toggle("open");
    hamburger.classList.toggle("is-active");
  }
}