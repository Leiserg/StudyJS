window.addEventListener('DOMContentLoaded', function(){
    'use strict';


    //Timer
    function countTimer(deadline){
        const timerHours = document.querySelector('#timer-hours'),
              timerMinutes = document.querySelector('#timer-minutes'),
              timerSecond = document.querySelector('#timer-seconds');


        function getTimeRemaining(){
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining /60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
                // if (hours < 10) {
                //     timerHours.innerHTML = '0' + hours;
                // }
                return {timeRemaining, hours, minutes, seconds};
        }



        function updateClock (){
            let timer = getTimeRemaining();
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSecond.textContent = timer.seconds;
            if (timer.hours < 10){
                timerHours.innerHTML = '0' + timer.hours;
            }

            if(timer.minutes < 10) {
                timerMinutes.innerHTML = '0' + timer.minutes;
            }

            if(timer.seconds < 10) {
                timerSecond.innerHTML = '0' + timer.seconds;
            }
        }


        let time = getTimeRemaining();
        if (time.timeRemaining > 0){
            setInterval (updateClock, 1000);
        }else if (time.timeRemaining <= 0){
            clearInterval(countTimer); 
            timerHours.innerHTML = '00';
            timerMinutes.innerHTML = '00';
            timerSecond.innerHTML = '00';
        }
        updateClock();
    }
    countTimer('29 juny 2021');

    //Меню
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');

            const handlerMenu = () => {
                menu.classList.toggle('active-menu');

                // if(!menu.style.transform || menu.style.transform === `translate(-100%)`){
                //     menu.style.transform = `translate(0)`;
                // }else {
                //     menu.style.transform = `translate(-100%)`;
                // }
            };

            btnMenu.addEventListener('click', handlerMenu);
            closeBtn.addEventListener('click', handlerMenu);
            menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
    };

    toggleMenu();


    // PopUp

    const togglePopup = () => {
        let popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popUpclose = document.querySelector('.popup-close'),
        popupContent = document.querySelector('.popup-content');
        let count = 0;

        let popUpDown = function (){
            count++;
            popupContent.style.top = count * 5 + 'px';
            if (count < 40){
                setTimeout(popUpDown, 1);
            }
        };

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
                popup.style.position = 'relative';
                const width = document.documentElement.clientWidth;
                if (width > 768){
                    popUpDown();
                } else {
                    return;
                }
            });      
        });

        popUpclose.addEventListener('click', () => {
            popup.style.display = 'none';
            popup.style.position = 'fixed';
            count = 0;
        });
    };

    togglePopup(); 
    


















});

