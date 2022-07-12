const burgerBtn = document.querySelector(".menu-btn");
const list = document.querySelector(".navigation");
const darkenActive = document.querySelector(".darkenPage");
let firstTwo = document.querySelectorAll(".hasDropdown");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("open");
  list.classList.toggle("active");
  darkenActive.classList.toggle("active");
});


firstTwo.forEach(el => {
  el.addEventListener('click', () => {
    console.log("click");
    let img = el.querySelector("img");
    if (img.src.includes("down")) {
      img.src = "./images/icon-arrow-up.svg";
    } else {
      img.src = "./images/icon-arrow-down.svg";
    }
  });
});