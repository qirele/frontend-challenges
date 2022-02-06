// inputs
const bill = document.querySelector("#bill");
const tipInputs = document.querySelectorAll(".percent-wrapper > *");
const people = document.querySelector("#ppl-amount");
const custom = document.querySelector("#custom");

const errorPpl = document.querySelector(".error.ppl");
const errorBill = document.querySelector(".error.bill");

// results
const tip = document.querySelector("#tip");
const total = document.querySelector("#total");

const reset = document.querySelector("#reset");

let chosenTipInput = null;

people.addEventListener("input", () => validateInputs(people, errorPpl, "Can't be zero"));
bill.addEventListener("input", () => validateInputs(bill, errorBill, "input a positive number"));

function validateInputs(el, error, text) {
  if (!el.validity.valid) {
    error.textContent = text;
  } else {
    error.textContent = "";
  }
}

function calcTip() {
  if (!bill.validity.valid || !people.validity.valid) return;
  if (chosenTipInput === null || (chosenTipInput.nodeName === "INPUT" && !chosenTipInput.validity.valid)) return;

  let tipPercent;
  if (chosenTipInput.nodeName === "BUTTON") {
    custom.value = "";
    tipPercent = parseInt(chosenTipInput.textContent.slice(0, -1));

    removeActiveBtns()
    chosenTipInput.classList.add("active");
    custom.style.outline = "none";
  } else {
    removeActiveBtns()

    if (chosenTipInput.value === "") { // if user erases custom tip value
      chosenTipInput.style.outline = "2px solid red";
      return; 
    }
    chosenTipInput.style.outline = "none";
    
    

    tipPercent = parseInt(chosenTipInput.value);
  }

  let billCharge = parseFloat(bill.value);
  let pplAmount = parseInt(people.value);
  tipPercent /= 100;

  let totalDollars = Number(billCharge / pplAmount);
  let tipDollars = Number(totalDollars * tipPercent);

  tip.textContent = `$${tipDollars.toFixed(2)}`;
  total.textContent = `$${(totalDollars + tipDollars).toFixed(2)}`;

  reset.style.opacity = 1;
  reset.style.cursor = "pointer";
  reset.disabled = false;
}

for (let i = 0; i < tipInputs.length; i++) {
  tipInputs[i].addEventListener("click", () => {
    chosenTipInput = tipInputs[i];
  });

  if (tipInputs[i].nodeName !== "INPUT") {
    tipInputs[i].addEventListener("click", calcTip);
  }    
}

for (let i = 0; i < tipInputs.length - 1; i++) {
  tipInputs[i].addEventListener("click", () => {
    removeActiveBtns();
    tipInputs[i].classList.add("active");
  });
}


people.addEventListener("input", calcTip);
bill.addEventListener("input", calcTip);
custom.addEventListener("input", calcTip);

reset.addEventListener("click", () => {
  if (!reset.disabled) {
    tip.textContent = "$0.00";
    total.textContent = "$0.00";
    bill.value = "";
    people.value = "";
    chosenTipInput = null;
    reset.style.opacity = "0.2";
    reset.disabled = true;
    reset.style.cursor = "default";
    errorBill.textContent = "";
    errorPpl.textContent = "";
    custom.value = "";
    custom.style.outline = "none";
    removeActiveBtns();
  }
});

function removeActiveBtns() {
  for (let i = 0; i < tipInputs.length - 1; i++) {
    tipInputs[i].classList.remove("active");
  }
}
