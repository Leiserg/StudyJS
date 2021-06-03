'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


let money;
let income = 'Подработка';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, кредит'); 
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 300000; 
let period = 6;


let start = function() {
   
    do{
        money = prompt('Ваш месячный доход?');
    }
    while (!isNumber(money));
};

start();

let showTypeOf = function(data) {
    console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


// console.log(addExpenses.length);
// console.log('Период равен', (period), 'месяцев');
// console.log('Цель заработать', (mission), 'рублей');
// console.log(addExpenses.toLowerCase());

let arr = addExpenses.split(', ');
console.log(arr);

let expenses1, expenses2;


let getExpensesMonth = function() {
    let sum = 0;
    
    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            expenses1 = prompt('Введите обязательную статью расходов?', 'Квартплата');
        }else if (i === 1) {
            expenses2 = prompt('Введите обязательную статью расходов?', 'Кредит');
        }

        sum += +prompt('Во сколько это обойдется?');
        while (!isNumber(sum)) {
            sum = prompt('Во сколько это обойдется?');
        }
    }
    console.log(sum);
    return sum;
};

let expensesAmont = getExpensesMonth();
console.log('Расходы за месяц: ', expensesAmont);


function getAccumulatedMonth() {
    return money - expensesAmont;
}
let accumulatedMonth = getAccumulatedMonth();


let getTargetMonth = function() {
    let division = mission / accumulatedMonth;
        if (division < 0) {
            console.log('Цель не будет достигнута');
        } else if (division > 0) {
            console.log('Цель будет достигнута за', Math.ceil(division), 'месяцев(-a)');
        }
    
    return division;
};

getTargetMonth();

let budgetDay = accumulatedMonth / 30;
console.log('Бюджет на день', Math.floor(budgetDay));


let getStatusIncome = function() {
    if(budgetDay > 1200) {
        console.log('У вас высокий уровень дохода');
    } else if(budgetDay >= 600 && budgetDay <= 1200) {
        console.log('У вас средний уровень дохода');
    } else if(budgetDay > 0 && budgetDay < 600) {
        console.log('К сожалению Ваш уровень дохода ниже среднего');
    }else {
        console.log('Что-то пошло не так');
    }
};

getStatusIncome();
