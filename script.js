'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


function game() {
    const hiddenNumber = Math.floor(Math.random() * 100) + 1;
    function action() {
        let guessNumber = +prompt('Угадай число от 1 до 100');
        console.log(guessNumber);
        if (!isNumber(guessNumber)) {
            alert('Введите число!');
            action();
        }else if (Boolean(guessNumber) === false) {
            return alert('Игра окончена');
        }else if (guessNumber === hiddenNumber) {
            alert('Вы угадали');
        }else if (guessNumber > hiddenNumber) {
            alert('Загаданное число меньше');
            action();
        }else if (guessNumber < hiddenNumber) {
            alert('Загаданное число больше');
            action();
        }
    }
    action();
}

game();


