'use strict';


let startBtn = document.getElementById('start'),
    cancelBtn = document.getElementById('cancel'),
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

 
class AppData {
    constructor() {
        this.budget = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.income = {};
        this.incomeMonth = 0;
        this.addIncome = [];
        this.expenses = {};
        this.expensesMonth = 0;
        this.addExpenses = [];
        this.deposit = false;
        this.percentDeposit = 0;
        this.moneyDeposit = 0;
        this.period = 0;
        console.log(this);
    }
    
    isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
 
    start() {
        const allInput = document.querySelectorAll('.data input[type = text]');
        allInput.forEach(item => {
            item.setAttribute('disabled', 'true');
        });
        incomePlus.setAttribute('disabled', 'true');
        expensesPlus.setAttribute('disabled', 'true');
        startBtn.style.display = 'none';
        cancelBtn.style.display = 'block';

        this.budget = +salaryAmount.value;
        this.getExpenses();  
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();  
        this.getBudget();
        this.getInfoDeposit();
        this.getStatusIncome();
        this.showResult();

    }

    newStart(){
        const _this = this;
        AppData.prototype.start.call(AppData);
    }

    getBlock(){
        
            if (salaryAmount.value === '' || isNaN(salaryAmount.value) || salaryAmount.value == 0){
                startBtn.disabled = true;
            } else {
                startBtn.disabled = false;
            }
    }

    showResult(){
        const _this = this;
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil (this.getTargetMonth());
        incomePeriodValue.value = this.calcSavedMoney();
        periodSelect.addEventListener('change', function(){
            incomePeriodValue.value = _this.calcSavedMoney();
        });
    }

    addExpensesBlock(){
        const cloneExpensesItems = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    }

    getExpenses(){
        const _this = this;
        expensesItems.forEach(item => {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
                _this.expenses[itemExpenses] = cashExpenses; 
            }
        });
    }

    addIncomeBlock(){
        const cloneIncomeItems = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3) {
            incomePlus.style.display = 'none';
        }  
    }

    getIncome(){
        const _this = this;
        incomeItems.forEach(item => {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome !== '' && cashIncome !== ''){
                _this.income[itemIncome] = cashIncome; 
            }
        });
        for(let key in this.income){
            this.incomeMonth += +this.income[key];
        }
    }

    getAddExpenses(){
        const _this = this;
        const addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(item => {
            item = item.trim();
            if(item !== ''){
                _this.addExpenses.push(item);
            }
        });
    }

    getAddIncome(){
        const _this = this;
        additionalIncomeItem.forEach(item => {
            let itemValue = item.value.trim();
            if (itemValue !== ''){
                _this.addIncome.push(itemValue);
            }
        });
    }

    eventFunc(event){
        periodAmount.innerHTML = periodSelect.value; 
    }

    getExpensesMonth() {
        for (let key in this.expenses) {
            this.expensesMonth += +this.expenses[key];
        }
    }

    getBudget(){
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.ceil(this.budgetMonth / 30);
    }

    getTargetMonth(){
        return targetAmout.value / this.budgetMonth;
    }

    calcSavedMoney(){
        return this.budgetMonth * periodSelect.value;
    }

    getStatusIncome() {
        if(this.budgetDay > 1200) {
            console.log('У вас высокий уровень дохода');
        } else if(this.budgetDay >= 600 && this.budgetDay <= 1200) {
            console.log('У вас средний уровень дохода');
        } else if(this.budgetDay > 0 && this.budgetDay < 600) {
            console.log('К сожалению Ваш уровень дохода ниже среднего');
        }else {
            console.log('Что-то пошло не так');
        }
    }

    getInfoDeposit() {
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
    }

    reset(){

        const inputTextData = document.querySelectorAll('.data input[type = text]');
        const resultInputAll = document.querySelectorAll('.data input[type = text]');
        const resultInputAllRight = document.querySelectorAll('.result input[type = text]');
        
        inputTextData.forEach(element => {
            element.value = '';
            element.removeAttribute('disabled');
            periodSelect.value = '0';
            periodAmount.innerHTML = periodSelect.value;
        });
        resultInputAll.forEach(element =>{
            element.value = '';
        });
        resultInputAllRight.forEach(element =>{
            element.value = '';
        });
        for (let i = 1; i < incomeItems.length; i++){
            incomeItems[i].parentNode.removeChild(incomeItems[i]);
            incomePlus.style.display = 'block';
        }

        this.budget = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.income = {};
        this.incomeMonth = 0;
        this.addIncome = [];
        this.expenses = {};
        this.expensesMonth = 0;
        this.addExpenses = [];
        this.deposit = false;
        this.percentDeposit = 0;
        this.moneyDeposit = 0;
        this.period = 0;
        
        cancelBtn.style.display = 'none';
        startBtn.style.display = 'block';
        incomePlus.removeAttribute('disabled');
        expensesPlus.removeAttribute('disabled');
        checkbox.checked = false;
    }

    eventListeners(){
        const appData = new AppData();

        startBtn.disabled = true;
        startBtn.addEventListener('click', appData.start.bind(appData));
        
        salaryAmount.addEventListener('input', appData.getBlock);
        incomePlus.addEventListener('click', appData.addIncomeBlock);
        expensesPlus.addEventListener('click', appData.addExpensesBlock);
        periodSelect.addEventListener('input', appData.eventFunc);
        cancelBtn.addEventListener('click', appData.reset.bind(appData));
    }
}

const test1 = new AppData();
test1.eventListeners();
console.log(test1);

// const appData = new AppData();
// startBtn.disabled = true;
// startBtn.addEventListener('click', appData.start.bind(appData));
// salaryAmount.addEventListener('input', appData.getBlock);
// incomePlus.addEventListener('click', appData.addIncomeBlock);
// expensesPlus.addEventListener('click', appData.addExpensesBlock);
// periodSelect.addEventListener('input', appData.eventFunc);
// canselBtn.addEventListener('click', appData.reset.bind(appData));
// console.log(appData);




