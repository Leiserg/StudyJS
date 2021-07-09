'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import getCommand from './modules/getCommand';
import tasks from './modules/tasks';
import sendForm from './modules/sendForm';

//Timer
countTimer('09 july 2021');
//Меню
toggleMenu();
// PopUp
togglePopup(); 
// Табы
tabs();
// Слайдер
slider();
// Калькулятор
calc(100); 
// Команда
getCommand();
//Задания 
tasks();
//send-ajax-form
sendForm();