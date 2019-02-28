'use strict';

// variable money
let myMoney = +prompt('Ваш бюджет на месяц?');

// variable time
let myTime = prompt('Введите дату в формате YYYY-MM-DD');

// user questions 
let a = prompt('Введите обязательную статью расходов в этом месяце', '');
let b = +prompt('Во сколько обойдется?', '');

// object appData
let appData = {
   moneyData: myMoney,
   timeData: myTime,
   expenses: {'a' : 'b'},
   optionalExpenses: {},
   income: [],
   savings: false
};

appData.moneyPerDay = appData.moneyData / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);