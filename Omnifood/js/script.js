"use strict";

const sectionHeader = document.querySelector("header");
const sectionHero = document.querySelector(".section-hero");
const sectionHow = document.querySelector("#how");
const sectionMeals = document.querySelector("#meals");
const sectionTestimonial = document.querySelector("#testimonial");
const sectionPricing = document.querySelector("#price");
const sectionCTA = document.querySelector("#cta");
const btnCTA = document.querySelector(".btn--full");
const btnLearnMore = document.querySelector(".btn--outline");
const links = document.querySelectorAll("a:link");

// smooth scrolling //
links.forEach((link) => {
  if (
    link.classList.contains("main-nav-link") ||
    link.classList.contains("btn--full") ||
    link.classList.contains("btn--outline") ||
    link.classList.contains("footer-logo")
  ) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetSection = link.getAttribute("href");
      let targetSectionElement = "";
      if (targetSection != "#") {
        targetSectionElement = document.querySelector(targetSection);
      } else {
        targetSectionElement = sectionHeader;
      }
      targetSectionElement.scrollIntoView({ behavior: "smooth" });
      sectionHeader.classList.remove("nav-open");
    });
  }
});

const makeMobileNavWork = function () {
  const header = document.querySelector(".header");

  const btnMobileNav = header.querySelector(".btn-mobile-nav");

  btnMobileNav.addEventListener("click", () => {
    header.classList.toggle("nav-open");
  });
};

makeMobileNavWork();
