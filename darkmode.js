const toggle = document.querySelector(".dark-mode-toggle");
//const body = document.querySelector("body");

toggle.addEventListener("click", function() {
  body.classList.toggle("dark-mode-on");
});

var getBtn = document.getElementById('darkBtn');
var getIcon = document.getElementById('moonIcon');
const body = document.querySelector("body");

getBtn.addEventListener('click', function () {
    body.classList.toggle("dark-mode-on");
    if (getIcon.classList.contains('fa-moon')) {
        getIcon.classList.remove('fa-moon');
        getIcon.classList.add('fa-sun');
    } else {
        getIcon.classList.remove('fa-sun');
        getIcon.classList.add('fa-moon');
    }
});