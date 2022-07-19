const submit = document.querySelector('.submit');
const ratingWrapper = document.querySelector('.rating');
const thanks = document.querySelector('.thanks');
const ratingBtns = document.querySelectorAll('.ratings button');
const ratingSpan = document.querySelector('.ratingNum');

function thank() {
  if (rating === 0) {
    alert('Select a rating before submitting');
    return;
  }
  ratingWrapper.classList.toggle('active'); // hide rating component 
  thanks.classList.toggle('active'); // show rating component
  ratingSpan.textContent = rating; // set the selected rating in DOM
}

function saveRating() {
  rating = parseInt(this.textContent);
}

let rating = 0;

submit.addEventListener('click', thank);
ratingBtns.forEach(btn => btn.addEventListener('click', saveRating));