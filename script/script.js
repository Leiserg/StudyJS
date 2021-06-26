'use strict';


let date = new Date();
const hours = date.getHours();

const string1 = document.createElement('div');
const string2 = document.createElement('div');
const string3 = document.createElement('div');
const string4 = document.createElement('div');


let timeOf = 'Добрый де';
if (hours >= 4 && hours < 12){
    timeOf = 'Доброе утро';
} else if (hours >= 12 && hours < 18){
    timeOf = 'Добрый день';
} else if (hours >= 18 && hours < 23){
    timeOf = 'Добрый вечер';
} else if (hours >= 23){
    timeOf = 'Доброй ночи';
}
    
string1.className = 'timeOfDay';
document.body.appendChild(string1);
string1.innerHTML = timeOf;
//////////////////////////////////////////////////////////

let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда','Четверг', 'Пятница', 'Суббота'];

function getWeekDay(date) {
    let days = week;
    return days[date.getDay()];
  }  
  string2.className = 'weekDay';
  document.body.appendChild(string2);
  string2.innerHTML = `Сегодня: ${getWeekDay(date)}`;

///////////////////////////////////////////////////////////

let mid = 'AM';
    if(hours >= 12 && hours <= 24){
        mid = 'PM';
    }
string3.className = 'time';
document.body.appendChild(string3);
string3.innerHTML = `Текущее время: ${hours}:${date.getMinutes()}:${date.getSeconds()} ${mid}`;

/////////////////////////////////////////////////////////////

function countTimer(newYeare){
    let dateStop = new Date(newYeare).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        day = Math.floor(timeRemaining / 60 / 60 / 24);

        string4.className = 'time';
        document.body.appendChild(string4);
        string4.innerHTML = `До нового года осталось ${day} дней!`;
}
countTimer('01 january 2022');
