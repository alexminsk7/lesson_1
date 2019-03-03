'use strict';

// variable money
let myMoney = +prompt('Ваш бюджет на месяц?');

// variable time
let myTime = prompt('Введите дату в формате YYYY-MM-DD');

// object appData
let appData = {
   moneyData: myMoney,
   timeData: myTime,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: false
};

// user questions 
let userQuery1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
   userQuery2 = +prompt('Во сколько обойдется?', ''),
   userAnswer1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
   userAnswer2 = +prompt('Во сколько обойдется?', '');

appData.expenses[userQuery1] = userQuery2;
appData.expenses[userAnswer1] = userAnswer2;
console.log(userQuery1);
console.log(userAnswer2);


alert(appData.moneyData / 30);