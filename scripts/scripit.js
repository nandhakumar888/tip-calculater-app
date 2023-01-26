'use strict'

//elements
const billInputEl = document.getElementById('bill');
const personInputEl = document.getElementById('people');
const tipsInputEl = document.querySelectorAll('.tip-percent');
const customTipEl = document.getElementById('custom-tip');
const btnReset = document.getElementById('btn-reset');
const amountEl = document.getElementById('amount');
const totalEl = document.getElementById('total');


//global variables
let persons = 0;
let bill = 0;
let tipPercent = 0;

//functions

function init() {
  persons = 0;
  bill = 0;
  tipPercent =0;

  amountEl.innerText = '$0.00';
  totalEl.innerText = "$0.00";

  personInputEl.value = null;
  billInputEl.value = null;
  customTipEl.value = null;
}

function calcBill(tipPercent) {
  persons = number(personInputEl.value);
  bill = number(billInputEl.value);

  const totalTip = bill * tipPercent;
  const totalBill = bill + totalTip;
  const totalTipPerson = totalTip / persons;
  const totalPerPerson = totalBill / persons;

  amountEl.innerText = '$' + tipPerPerson.toFixed(2);
  totalEl.innerText = '$' + billPerPerson.toFixed(2);

  personInputEl.value = null;
  billInputEl.value = null;
}



//event listeners
for (let i = 0; i < tipsInputEl.length; i++) {
  tipsInputEl[i].addEventListener('click', function () {
    tipPercent = Number(this.value) / 100;
    calcBill(tipPercent);
  });
}

customTipEl.addEventListener('change', function () {
  tipPercent = Number(this.value) / 100;
  calcBill(tipPercent);
  this.value = null;
});

btnReset.addEventListener('click', function () {
  init();
});

//initial settings
init();