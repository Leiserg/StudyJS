'use strict';


let start = document.getElementById('start'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    checkbox = document.querySelector('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    // let additionalIncome2 = document.querySelectorAll('.additional_income-item')[1];
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesAmount = document.querySelector('.expenses-amount'),
    additionalExpenses = document.querySelector('.additional_expenses'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmout = document.querySelector('.target-amount'),
    incomeItems = document.querySelectorAll('.income-items');
    // periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount');



let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    expensesMonth: 0,
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    period: 0,
    start: function() {
   
        
        appData.budget = +salaryAmount.value;
        console.log('salaryAmount: ', salaryAmount.value);

        // if (salaryAmount.value === '') {
        //     alert('Ошибка, в поле "Месячный доход" должно быть заполнено!');
        //     return;
        // }

        appData.getExpenses();  
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();  
        appData.getBudget();
        // appData.eventFunc();

        appData.showResult();

        // appData.getTargetMonth();
        // appData.getStatusIncome();
        // appData.calcSavedMoney();
        // appData.getInfoDeposi();

    },
    getBlock: function(){
        document.getElementById('start').disabled = true; 
    },
    showResult: function(){
        
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil (appData.getTargetMonth());
        incomePeriodValue.value = appData.calcSavedMoney();
        document.querySelector('.period-select').addEventListener('change', appData.showResult);

    },
    addExpensesBlock: function(){
        let cloneExpensesItems = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    },
    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = cashExpenses; 
            }
        });
    },
    addIncomeBlock: function(){
        let cloneIncomeItems = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3) {
            incomePlus.style.display = 'none';
        }  
    },
    getIncome: function(){
        incomeItems.forEach(function(item){
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome !== '' && cashIncome !== ''){
                appData.income[itemIncome] = cashIncome; 
            }
        });
        for(let key in appData.income){
            appData.incomeMonth += +appData.income[key];
        }
    },
    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item !== ''){
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function (){
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if (itemValue !== ''){
                appData.addIncome.push(itemValue);
            }
        });
    },
    eventFunc: function(event){
        periodAmount.innerHTML = periodSelect.value; 
    },
 
    getExpensesMonth: function() {
        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        }
    },

    getBudget: function() {
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.ceil(appData.budgetMonth / 30);
    },

    
    getTargetMonth: function() {
        return targetAmout.value / appData.budgetMonth;

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
        return appData.budgetMonth * periodSelect.value;
    },
};
// appData.getBlock();
start.addEventListener('click', appData.start);
incomePlus.addEventListener('click', appData.addIncomeBlock);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
document.querySelector('.period-select').addEventListener('input', appData.eventFunc);

// for (let ourProgram in appData) {
//     console.log('Наша программа включает в себя данные: ' + ourProgram + ' - ' + 'Значение ' + appData[ourProgram]);
// }







