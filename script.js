'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


function game() {
    const hiddenNumber = Math.floor(Math.random() * 100) + 1;
    // let start = confirm('Загадывание случайного числа от 1 до 100');
    // if (start === false) {
    //     alert('Игра окончена');
    // }

    function action() {
        
        let guessNumber = +prompt('Угадай число от 1 до 100');

        if (!isNumber(guessNumber) || guessNumber.trim === '') {
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
        console.log(guessNumber);
        console.log(hiddenNumber);
    }
    action();
}

game();

console.dir(game);

