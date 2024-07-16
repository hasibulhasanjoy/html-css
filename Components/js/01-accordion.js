"use strict";
const btn = document.querySelectorAll(".icon");

btn.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    button.closest(".items").classList.toggle("open");
  });
});
