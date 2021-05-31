let money = 30000;
let income = 'Подработка';
let addExpenses = 'Комуналка, Еда, Развлечения'; 
let deposit = true;
let mission = 300000; 
let period = 6;


// alert('Я рад тебя видеть');

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log('Период равен', (period), 'месяцев');

console.log('Цель заработать', (mission), 'рублей');

console.log(addExpenses.toLowerCase());

let arr = addExpenses.split(', ');
console.log(arr);

let budgetDay = money / 30;
console.log(budgetDay);
