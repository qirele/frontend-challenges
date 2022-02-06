// inputs
const bill = document.querySelector("#bill");
const tipInputs = document.querySelectorAll(".percent-wrapper > *");
const people = document.querySelector("#ppl-amount");
const custom = document.querySelector("#custom")

const errorPpl = document.querySelector(".error.ppl");
const errorBill = document.querySelector(".error.bill");

// results
const tip = document.querySelector("#tip");
const total = document.querySelector("#total");

const reset = document.querySelector("#reset");

let chosenTipInput = null;

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

function calcTip() {
  if (!bill.validity.valid || !people.validity.valid) 
    return;
  if (chosenTipInput === null || (chosenTipInput.nodeName === "INPUT" && !chosenTipInput.validity.valid)) 
    return;
  
  let tipPercent;
  if (chosenTipInput.nodeName === "BUTTON") {
    custom.value = "";
    tipPercent = parseInt(chosenTipInput.textContent.slice(0,-1));
  } else {
    if (chosenTipInput.value === "") return; // if user erases custom tip value

    tipPercent = parseInt(chosenTipInput.value);
  }


  let billCharge = parseFloat(bill.value);
  let pplAmount = parseInt(people.value);
  tipPercent /= 100;
  

  let totalDollars = Number((billCharge / pplAmount));
  let tipDollars = Number((totalDollars * tipPercent));

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

  if (tipInputs[i].nodeName !== "INPUT")
    tipInputs[i].addEventListener("click", calcTip);
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
    bill.style.outline = "none";
    people.style.outline = "none";
    reset.style.opacity = "0.2"
    reset.disabled = true;
    reset.style.cursor = "default";
    errorBill.textContent = "";
    errorPpl.textContent = "";
  }
  
});

