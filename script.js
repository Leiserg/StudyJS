'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
let start = function() {
   
    do{
        money = +prompt('Ваш месячный доход?');
    }
    while (!isNumber(money));
};
start();

let appData = {
    budget: money,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 300000,
    period: 6,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, кредит');
            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
        
        for (let i = 0; i < 2; i++) {
            let outlay = prompt('Введите обязательную статью расходов?');
            let cost = +prompt('Во сколько это обойдется?');
            while (!isNumber(cost)) {
                cost = prompt('Во сколько это обойдется?');
                }
            appData.expenses[outlay] = cost; 
        }
    },

    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,

    getExpensesMonth: function() {
        let sum = 0;
        for (let key in appData.expenses) {
            sum += appData.expenses[key];
        }
        appData.expensesMonth = sum;
    },

    getBudget: function() {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;
    },

    
    getTargetMonth: function() {
        let division = appData.mission / appData.budgetMonth;
            if (division < 0) {
                console.log('Цель не будет достигнута');
            } else if (division > 0) {
                console.log('Цель будет достигнута за', Math.ceil(division), 'месяцев(-a)');
            }
        return division;
    },


    getStatusIncome: function() {
        if(appData.budgetDay > 1200) {
            console.log('У вас высокий уровень дохода');
        } else if(appData.budgetDay >= 600 && appData.budgetDay <= 1200) {
            console.log('У вас средний уровень дохода');
        } else if(appData.budgetDay > 0 && appData.budgetDay < 600) {
            console.log('К сожалению Ваш уровень дохода ниже среднего');
        }else {
            console.log('Что-то пошло не так');
        }
    },

};


appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

console.log(appData.expenses);
console.log('Сумма расходов', appData.expensesMonth);
console.log('Бюджет на день', Math.ceil(appData.budgetDay));
console.log('Бюджет на месяц', appData.budgetMonth);
