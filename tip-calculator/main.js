const bill = document.querySelector("#bill");
const tipInputs = document.querySelectorAll(".percent-wrapper > *");
const people = document.querySelector("#ppl-amount");
const errorPpl = document.querySelector(".error.ppl");
const errorBill = document.querySelector(".error.bill");

people.addEventListener("input", () => validateInputs(people, errorPpl, "Can't be zero"));

bill.addEventListener("input", () => validateInputs(bill, errorBill, "input a positive number"));

function validateInputs(el, error, text){
  if (!el.validity.valid) {
    error.textContent = text;
    el.style.outline = "2px solid orangered";
  } else {
    error.textContent = "";
    el.style.outline = "2px solid green";
  }
}

