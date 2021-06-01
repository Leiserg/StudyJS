let money = Number(prompt('Ваш месячный доход?'));
let income = 'Подработка';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'); 
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 300000; 
let period = 6;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);
console.log('Период равен', (period), 'месяцев');
console.log('Цель заработать', (mission), 'рублей');
console.log(addExpenses.toLowerCase());

let arr = addExpenses.split(', ');
console.log(arr);

let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = prompt('Во сколько это обойдется?');

let budgetMonth = Number(money) - (Number(amount1) + Number(amount2));
console.log('Бюджет на месяц:', budgetMonth);

let budgetDay = budgetMonth / 30;
console.log('Бюджет на день', Math.floor(budgetDay));

let time = mission / budgetMonth;
console.log('Цель будет достигнута за', Math.ceil(time), 'месяцев(-a)');

if(budgetDay > 1200) {
    console.log('У вас высокий уровень дохода');
} else if(budgetDay >= 600 && budgetDay <= 1200) {
    console.log('У вас средний уровень дохода');
} else if(budgetDay > 0 && budgetDay > 600) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
}else {
    console.log('Что-то пошло не так');
}