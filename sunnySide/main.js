const nav = document.querySelector("header nav");
const burger = document.querySelector("#burger");

burger.addEventListener("click", function() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});