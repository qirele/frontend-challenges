const burgerBtn = document.querySelector('.menu-btn');
const list = document.querySelector('.navigation');
const darkenActive = document.querySelector('.darkenPage');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('open');
  list.classList.toggle('active');
  darkenActive.classList.toggle('active');
});