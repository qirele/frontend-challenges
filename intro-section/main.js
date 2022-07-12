const burgerBtn = document.querySelector(".menu-btn");
const list = document.querySelector(".navigation");
const darkenActive = document.querySelector(".darkenPage");
let firstTwo = document.querySelectorAll(".navigation > li:nth-child(-n + 2)");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("open");
  list.classList.toggle("active");
  darkenActive.classList.toggle("active");
});


firstTwo.forEach(el => {
  const label = el.querySelector("label");
  const checkbox = el.querySelector("input");
  label.addEventListener('click', () => {
    if (checkbox.checked) {
      el.querySelector('img').src = "./images/icon-arrow-down.svg";
    } else {
      el.querySelector('img').src = "./images/icon-arrow-up.svg";
    }
  });
});