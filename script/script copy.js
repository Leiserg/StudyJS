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

            if (timer.timeRemaining <= 0){
                clearInterval(countTimer); 
                timerHours.innerHTML = '00';
                timerMinutes.innerHTML = '00';
                timerSecond.innerHTML = '00';
            }

        }

        let time = getTimeRemaining();
        if (time.timeRemaining > 0){
            setInterval (updateClock, 1000);
        }

        updateClock();
    }

    countTimer('06 july 2021');

    //Меню
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');

            const handlerMenu = () => {
                menu.classList.toggle('active-menu');
            };

            document.addEventListener('click', (event) => {
                let target = event.target;
                    target = target.closest('.close-btn');
                    if(target === btnMenu){
                        handlerMenu();
                    }else 
                    if(target === closeBtn){
                        handlerMenu();
                    }
            });

            menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
    };

    toggleMenu();


    // PopUp

    const togglePopup = () => {
        let popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popUpclose = document.querySelector('.popup-close'),
        popupContent = document.querySelector('.popup-content');
    
        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
            });      
        });


        popUpclose.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        popup.addEventListener('click', (event) => {
            let target = event.target;

            if(target.classList.contains('.popup-close')){
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');

                if (!target){
                    popup.style.display = 'none';
                }
            }
        });
    };
    togglePopup(); 
    
    // Табы
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for(let i = 0; i < tabContent.length; i++){
                if (index === i){
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab');
                
            if (target){
                tab.forEach((item, i) => {
                    if (item === target){
                        toggleTabContent(i);
                    }
                });
            }
        });
    };
    tabs();







});

