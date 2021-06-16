'use strict';


let startBtn = document.getElementById('start'),
    canselBtn = document.getElementById('cancel'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    checkbox = document.querySelector('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
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
        let allInput = document.querySelectorAll('.input[type = text]');
        allInput.forEach(function(item){
            item.setAttribute('disabled', 'disabled');
        });
        incomePlus.setAttribute('disabled', 'disabled');
        expensesPlus.setAttribute('disabled', 'disabled');
        startBtn.style.display = 'none';
        canselBtn.style.display = 'block';
        
        console.log(this);
        this.budget = +salaryAmount.value;
        console.log('salaryAmount: ', salaryAmount.value);


        this.getExpenses();  
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();  
        this.getBudget();
        this.getInfoDeposit();
        this.getStatusIncome();
        this.showResult();

    },
    newStart: function(){
        appData.start.call(appData);
    },
    getBlock: function(){
        
            if (salaryAmount.value === '' || isNaN(salaryAmount.value) || salaryAmount.value == 0){
                startBtn.disabled = true;
            } else {
                 startBtn.disabled = false;
            }
    },
    showResult: function(){
        
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil (this.getTargetMonth());
        incomePeriodValue.value = this.calcSavedMoney();
        periodSelect.addEventListener('change', function(){
            incomePeriodValue.value = appData.calcSavedMoney();
        });

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
        for(let key in this.income){
            this.incomeMonth += +this.income[key];
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
        for (let key in this.expenses) {
            this.expensesMonth += +this.expenses[key];
        }
    },

    getBudget: function() {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.ceil(this.budgetMonth / 30);
    },

    
    getTargetMonth: function() {
        return targetAmout.value / this.budgetMonth;

    },
    calcSavedMoney: function(){
        return this.budgetMonth * periodSelect.value;
    },

    getStatusIncome: function() {
        if(this.budgetDay > 1200) {
            console.log('У вас высокий уровень дохода');
        } else if(this.budgetDay >= 600 && this.budgetDay <= 1200) {
            console.log('У вас средний уровень дохода');
        } else if(this.budgetDay > 0 && this.budgetDay < 600) {
            console.log('К сожалению Ваш уровень дохода ниже среднего');
        }else {
            console.log('Что-то пошло не так');
        }
    },

    getInfoDeposit: function() {
        if (this.deposit) {
            this.percentDeposit = prompt('Какой годовой процент?', 10);
            while (!isNumber(this.percentDeposit)) {
                this.percentDeposit = prompt('Во сколько это обойдется?');
            }
            this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            while (!isNumber(this.moneyDeposit)) {
                this.moneyDeposit = prompt('Во сколько это обойдется?');
            }
        }
    },

    reset: function(){

        let inputTextData = document.querySelectorAll('.data input[type = text]');
        let resultInputAll = document.querySelectorAll('.data input[type = text]');

        inputTextData.forEach(function(element){
            element.value = '';
            element.removeAttribute('disabled');
            periodSelect.value = '0';
            periodAmount.innerHTML = periodSelect.value;
        });
        resultInputAll.forEach(function(element){
            element.value = '';
        });
        for (let i = 1; i < incomeItems.length; i++){
            incomeItems[i].parentNode.removeChild(incomeItems[i]);
            incomePlus.style.display = 'block';
        }
    }

};

startBtn.disabled = true;
startBtn.addEventListener('click', appData.newStart);

salaryAmount.addEventListener('input', appData.getBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
periodSelect.addEventListener('input', appData.eventFunc);
canselBtn.addEventListener('click', appData.reset.bind(appData));







