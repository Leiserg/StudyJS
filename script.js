'use strict';

let money = +prompt('Ваш месячный доход?', '50000');
let income = 'Подработка';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, кредит'); 
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 300000; 
let period = 6;

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

let expenses1 = prompt('Введите обязательную статью расходов?', 'Квартплата');
let amount1 = +prompt('Во сколько это обойдется?', '5000');
let expenses2 = prompt('Введите обязательную статью расходов?', 'Кредит');
let amount2 = +prompt('Во сколько это обойдется?', '10000');


let getExpensesMonth = function() {
    return amount1 + amount2;
};
console.log('Расходы за месяц: ', getExpensesMonth());


function getAccumulatedMonth() {
    return money - getExpensesMonth();
}
let accumulatedMonth = getAccumulatedMonth();


function getTargetMonth() {
    return mission / accumulatedMonth;
}
console.log('Цель будет достигнута за', Math.ceil(getTargetMonth()), 'месяцев(-a)');


let budgetDay = accumulatedMonth / 30;
console.log('Бюджет на день', Math.floor(budgetDay));


let getStatusIncome = function() {
    if(budgetDay > 1200) {
        console.log('У вас высокий уровень дохода');
    } else if(budgetDay >= 600 && budgetDay <= 1200) {
        console.log('У вас средний уровень дохода');
    } else if(budgetDay > 0 && budgetDay > 600) {
        console.log('К сожалению у вас уровень дохода ниже среднего');
    }else {
        console.log('Что-то пошло не так');
    }
};

getStatusIncome();

