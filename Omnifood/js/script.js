"use strict";

const makeMobileNavWork = function () {
  const header = document.querySelector(".header");

  const btnMobileNav = header.querySelector(".btn-mobile-nav");

  btnMobileNav.addEventListener("click", () => {
    header.classList.toggle("nav-open");
  });
};

makeMobileNavWork();
