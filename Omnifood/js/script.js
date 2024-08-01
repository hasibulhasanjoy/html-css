"use strict";

const sectionHero = document.querySelector(".section-hero");
const sectionHow = document.querySelector(".how-it-works");
const sectionMeals = document.querySelector(".section-meals");
const sectionTestimonial = document.querySelector(".section-testimonial");
const sectionPricing = document.querySelector(".section-price");
const sectionCTA = document.querySelector(".section-cta");
const btnHero = document.querySelector(".btn--full");

const makeMobileNavWork = function () {
  const header = document.querySelector(".header");

  const btnMobileNav = header.querySelector(".btn-mobile-nav");

  btnMobileNav.addEventListener("click", () => {
    header.classList.toggle("nav-open");
  });
};

makeMobileNavWork();
