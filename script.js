'use strict';


let calculate = document.getElementById('start');

let sum1 = document.getElementsByTagName('button')[0];
let sum2 = document.getElementsByTagName('button')[1];

let checkbox = document.querySelector('#deposit-check');

let additionalIncome1 = document.querySelectorAll('.additional_income-item')[0];
let additionalIncome2 = document.querySelectorAll('.additional_income-item')[1];

let budgetonth = document.getElementsByClassName('result-total budget_month-value')[0];
let budgetDay = document.getElementsByClassName('result-total budget_day-value')[0];
let expensesMonth = document.getElementsByClassName('result-total expenses_month-value')[0];
let additionalIncome = document.getElementsByClassName('result-total additional_income-value')[0];
let additionalExpensesResult = document.getElementsByClassName('result-total additional_expenses-value')[0];
let incomePeriod = document.getElementsByClassName('result-total income_period-value')[0];
let targetMonth = document.getElementsByClassName('result-total target_month-value')[0];

let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let incomeAmount = document.querySelector('.income-amount');
let expensesTitle = document.querySelector('.expenses-title');
let expensesAmount = document.querySelector('.expenses-amount');
let additionalExpenses = document.querySelector('.additional_expenses');
let depositAmount = document.querySelector('.deposit-amount');
let depositPercent = document.querySelector('.deposit-percent');
let targetAmount = document.querySelector('.target-amount');
let periodSelect = document.querySelector('.period-select');


console.log(calculate);
console.log(sum1); 
console.log(sum2);
console.log(checkbox); 
console.log(additionalIncome1);
console.log(additionalIncome2);
console.log(budgetonth);
console.log(budgetDay);
console.log(expensesMonth);
console.log(additionalIncome);
console.log(additionalExpensesResult);
console.log(incomePeriod);
console.log(targetMonth);

console.log(salaryAmount);
console.log(incomeTitle);
console.log(incomeAmount);
console.log(expensesTitle);
console.log(expensesAmount);
console.log(additionalExpenses);
console.log(depositAmount);
console.log(depositPercent);
console.log(targetAmount);
console.log(periodSelect);
