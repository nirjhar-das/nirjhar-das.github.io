const toggle = document.querySelector(".dark-mode-toggle");
const body = document.querySelector("body");

toggle.addEventListener("click", function() {
  body.classList.toggle("dark-mode-on");
});
