'use strict';

let periodSelect = document.querySelector('.period-select');
let periodAmount = document.querySelector('.period-amount');

let eventFunc = function(event){
    // periodAmount.replaceWith(periodSelect.value);
    periodAmount.innerHTML = periodSelect.value;
    console.log(periodSelect.value);  
};

document.querySelector('.period-select').addEventListener('input', eventFunc);

