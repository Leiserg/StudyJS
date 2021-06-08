'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
let start = function() {
   
    do{
        money = +prompt('Ваш месячный доход?', 51000);
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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 300000,
    period: 6,
    asking: function(){

        if(confirm('Есть ли у Вас дополнительный источник заработка?')){
            let itemIncome = prompt('Какой у вас дополнительный заработок?', 'Програмирую');
            while (isNumber(itemIncome)) {
                itemIncome = prompt('Какой у вас дополнительный заработок?', 'Програмирую');
                }
            let cashIncome = prompt('Сколько в месяц на этом зарабатываете?', 10000);
            while (!isNumber(cashIncome)) {
                cashIncome = prompt('Сколько в месяц на этом зарабатываете?', 10000);
                }
            appData.income[itemIncome] = cashIncome; 
        }

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'квартплата, кредит');
        appData.addExpenses =  addExpenses.split(', ');         
        let newDays = appData.addExpenses.map(day => day.charAt(0).toUpperCase() + day.substr(1).toLowerCase());
        console.log(newDays.join(', '));

            appData.deposit = confirm('Есть ли у вас депозит в банке?');
        
        for (let i = 0; i < 2; i++) {
            let outlay = prompt('Введите обязательную статью расходов?');
            while (isNumber(outlay)) {
                outlay = prompt('Введите обязательную статью расходов?');
                }
            let cost = +prompt('Во сколько это обойдется?', 10000);
            while (!isNumber(cost)) {
                cost = prompt('Во сколько это обойдется?', 10000);
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

    getInfoDeposi: function() {
        if (appData.deposit) {
            appData.percentDeposit = prompt('Какой годовой процент?', 10);
            while (!isNumber(appData.percentDeposit)) {
                appData.percentDeposit = prompt('Во сколько это обойдется?');
            }
            appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            while (!isNumber(appData.moneyDeposit)) {
                appData.moneyDeposit = prompt('Во сколько это обойдется?');
            }
        }
    },
    calcSavedMoney: function(){
        return appData.budgetMonth * appData.period;
    },
};


for (let ourProgram in appData) {
    console.log('Наша программа включает в себя данные: ' + ourProgram + ' - ' + 'Значение ' + appData[ourProgram]);
}


appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
appData.calcSavedMoney();
appData.getInfoDeposi();


console.log(appData.expenses);
console.log('Сумма расходов', appData.expensesMonth);
console.log('Бюджет на день', Math.ceil(appData.budgetDay));
console.log('Бюджет на месяц', appData.budgetMonth);
console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());
console.log(appData.addExpenses);
