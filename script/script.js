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

    let popupDownInterval;
    let popupDown = function (){
        popupDownInterval = requestAnimationFrame(popupDown);
        count++;
        if(count < 200) {
            popupContent.style.top = count + 'px';  
        } 
        else {
            cancelAnimationFrame(popupDownInterval);
        }
        // popupDown();
        // popupContent.style.top = count + 'px';
    };
    // document.addEventListener('click', function(){
    // popupDownInterval = requestAnimationFrame(popupDown);});

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
                popup.style.position = 'relative';         
                // popupDownInterval = requestAnimationFrame(popupDown);
            });      
        });

        popupDown();
        popUpclose.addEventListener('click', () => {
            popup.style.display = 'none';
            popup.style.position = 'fixed'; 
            // cancelAnimationFrame(popupDownInterval);
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
            tab =tabHeader.querySelectorAll('.service-header-tab'),
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
            /*tabHeader.addEventListener('click', (event) => {
                let target = event.target;

                while(target !== tabHeader){
                 
                    console.log(target);
                 
                    if (target.classList.contains('service-header-tab')){
                 
                        tab.forEach((item, i) => {
                 
                            if (item === target){
                                toggleTabContent(i);
                            }
                            
                        });
                        return;
                    }
                    target = target.parentNode;
                }
            });*/

    tabs();

    // Слайдер

    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            dot = document.querySelectorAll('.dot'),
            slider= document.querySelectorAll('.portfolio-content');

        let currentSlide = 0;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {

            prevSlide(slide, currentSlide, 'portfolio-tem-active');
            prevSlide(dot, currentSlide, 'dot-active');
            // slide[currentSlide].classList.remove('portfolio-item-active');
            currentSlide++;
            if (currentSlide >= slide.length){
                currentSlide = 0;
            }
            // slide[currentSlide].classList.add('portfolio-item-active');
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        };

        const startSlide = (time) => {
            setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {

        };

        // slider.addEventListener('click', (event) => {
        //     event.preventDefault();

        //     let target = event.target;

        //     prevSlide(slide, currentSlide, 'portfolio-tem-active');
        //     prevSlide(dot, currentSlide, 'dot-active');

        //     if (target.matches('#arrow-right')){
        //         currentSlide++;
        //     }else if(target.matches('#arrow-left')){
        //         currentSlide++;
        //     }else if (target.matches('.dot')){
        //         dot.forEach((elem, index) => {
        //             if (elem === target){
        //                 currentSlide = index;
        //             }
        //         });
        //     }

        //     nextSlide(slide, currentSlide, 'portfolio-item-active');
        //     nextSlide(dot, currentSlide, 'dot-active');
        // });

        startSlide(10000); 
    };

    slider();


    // Калькулятор


    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');
        
        const countSum = () => {
            let total = 0,
            countValue = 1,
            dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value; 

            if (calcCount.value > 1){
                countValue += (calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5){
                dayValue *= 2;
            }else if (calcDay.value && calcDay.value < 10){
                dayValue *= 1.5;
            }
            
            if (typeValue && squareValue){
                total = price * typeValue * squareValue * countValue * dayValue;
            }

            totalValue.textContent = total;
        }


        calcBlock.addEventListener('change', (event) => {
            const target = event.target;
            // if(target.matches('.calc-type') || target.matches('.calc-square') ||
            // target.matches('.calc-day') || target.matches('.calc-count')){
            //     console.log(1);
            // }

            // if (target === calcType || target === calcSquare || 
            //     target === calcDay || target === calcCount){
            //         console.log(1);
            // }

            if(target.matches('select') || target.matches('input')){
                countSum();
            }
        });
    };

    calc(100); 










});

