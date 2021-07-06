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
            menuItems = menu.querySelectorAll('ul>li'),
            body = document.querySelectorAll('body');
            console.log(body);
            const handlerMenu = () => {
                menu.classList.toggle('active-menu');
            };



            document.addEventListener('click', (event) => {
                let target = event.target;
                    target = target.closest('.close-btn');
                console.log(target);
                if(target === closeBtn || target === menuItems){
                    handlerMenu();
                }
            });
                
            btnMenu.addEventListener('click', handlerMenu);
            // closeBtn.addEventListener('click', handlerMenu);
            // menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
    };

    toggleMenu();


    // PopUp

    const togglePopup = () => {
        let popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popUpclose = document.querySelector('.popup-close'),
        popupContent = document.querySelector('.popup-content');
        // let count = 0;

    // let popupDownInterval;
    // let popupDown = function (){
    //     popupDownInterval = requestAnimationFrame(popupDown);
    //     count++;
    //     if(count < 200) {
    //         popupContent.style.top = count + 'px';  
    //     } 
    //     else {
    //         cancelAnimationFrame(popupDownInterval);
    //     }
    //     // popupDown();
    //     // popupContent.style.top = count + 'px';
    // };
    // document.addEventListener('click', function(){
    // popupDownInterval = requestAnimationFrame(popupDown);});

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
                // popup.style.position = 'relative';         
                // popupDownInterval = requestAnimationFrame(popupDown);
            });      
        });

        // popupDown();
        popUpclose.addEventListener('click', () => {
            popup.style.display = 'none';
            // popup.style.position = 'fixed'; 
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

    // Слайдер
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
  
            slider = document.querySelector('.portfolio-content'),
            portfolioDots = document.querySelector('.portfolio-dots');
            let dot = document.querySelectorAll('.dot');
            console.log(slide.length);

        let currentSlide = 0,
            interval;

        const addDots = () => {
            for (let i = 0; i < slide.length; i++) {
                let li = document.createElement('li');
                li.classList.add('dot');
                if (i === 0) {
                    li.classList.add('dot-active');
                }
                portfolioDots.append(li);

            }

            dot = document.querySelectorAll('.dot');
        };

        addDots();

        const prevSlide = (elem, index, strClass) => {
                elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
        
            currentSlide++;
            if (currentSlide >= slide.length){
                currentSlide = 0;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;
            
            if (!target.matches('.portfolio-btn, .dot')){
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')){
                currentSlide++; 
            }else if(target.matches('#arrow-left')){
                currentSlide--;
            }else if (target.matches('.dot')){
                dot.forEach((elem, index) => {
                    if (elem === target){
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length){
                currentSlide = 0;
            }

            if (currentSlide < 0){
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') || 
            event.target.matches('.dot')){
                stopSlide();
            }
        });
        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') || 
            event.target.matches('.dot')){
                startSlide();
            }
        });

        startSlide(10000); 
    };

    slider();
















});

