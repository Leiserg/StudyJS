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

    countTimer('09 july 2021');

    //Меню
    const body = document.querySelector('body');

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
                if(target === closeBtn || target === menuItems){
                    handlerMenu();
                }
            });
                
            btnMenu.addEventListener('click', handlerMenu);
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

    // Слайдер
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
  
            slider = document.querySelector('.portfolio-content'),
            portfolioDots = document.querySelector('.portfolio-dots');
            let dot = document.querySelectorAll('.dot');

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
        };


        calcBlock.addEventListener('change', (event) => {
            const target = event.target;

            if(target.matches('select') || target.matches('input')){
                countSum();
            }
        });
    };

    calc(100); 

    
    // Команда
    const command = document.getElementById('command'),
        calcBlock = document.querySelector('.calc-block');

    command.addEventListener('mouseover', (element) => {
    let target = element.target;

    if (target.matches('.command__photo')) {
        target.dataset.first = target.src;
        target.src = target.dataset.img;
    }
    });

    command.addEventListener('mouseout', (element) => {
    let target = element.target;

    if (target.matches('.command__photo')) {
        target.src = target.dataset.first;
        target.removeAttribute('data-first');
    }
    });

    calcBlock.addEventListener('input', (element) => {
    let target = element.target;

    if (target.matches('INPUT')) {
        target.value = target.value.replace(/\D/,'');
    }
    });

    //Задания 
    const form2 = document.getElementById('form2');



    body.addEventListener('input', (e) => {
    let target = e.target;

    // console.log(e.inputType);
    if (e.inputType === 'insertFromPaste') {
        target.value = '';
        return;
    }
    
    if (target.matches('#form3-name,#form2-name,#form2-message,#form1-name')) {
        target.value = target.value.replace(/[^а-я\s\-]/i,'');
    } else if (target.matches('#form3-email,#form2-email,#form1-email')) {
        target.value = target.value.replace(/[^a-z\@\-\_\.\!\~\*\']/gi, '');
        // console.log(target.value);
    } else if(target.matches('#form3-phone,#form2-phone,#form1-phone')) {
        target.value = target.value.replace(/[+][^\d\(\)\-]/i, '');
    }
    });

    body.addEventListener('focusout', (e) => {
    let target = e.target;

    if (target.value) {
        
        if (target.matches('#form3-name,#form2-name,#form2-message,#form1-name')) {
            target.value = target.value.replace(/^\s+|\s+$/g, '');
            target.value = target.value.replace(/\s{2,}/g, ' ');
        } else if (target.matches('#form3-email,#form2-email,#form1-email')) {
            target.value = target.value.replace(/^\-+|\-+$/g, '');
            target.value = target.value.replace(/\-{2,}/g, '-');
            // console.log(target.value);
        } else if (target.matches('#form3-phone,#form2-phone,#form1-phone')) {
            target.value = target.value.replace(/^\-+|\-+$/g, '');
            target.value = target.value.replace(/\-{2,}/g, '-');
        }
    
        if (target.matches('#form3-name,#form2-name,#form1-name')) {
            let str = target.value;
            str = str.split(' ');
            str.forEach((el, id) => str[id] = el[0].toUpperCase() + el.substring(1).toLowerCase());
            str = str.join(' ');
            target.value = str;
        }
    }
    });


    //send-ajax-form

    const sendForm = () => {
        const errorMessage  =  'Что-то пошло не так...',
            loadMessage = 'Загрузка...',
            succesMessage = 'Спасибо! Мы скоро с Вами свяжемся!';

        const form1 = document.getElementById('form1');
        let statusMessage = document.createElement('div');
        form1.addEventListener('submit', (event) => {
            event.preventDefault(); 
            form1.appendChild(statusMessage);
            getFormData(form1);
        });

        const form2 = document.getElementById('form2');
        const statusDescription = document.createElement('div');
        const buttonForm3 = document.querySelectorAll('.btn')[4];
        form2.addEventListener('submit', (event) => {
            event.preventDefault(); 
            buttonForm3.style.display = 'none';
            statusMessage = statusDescription;
            form2.appendChild(statusDescription);
            getFormData(form2);
        });


        const form3 = document.getElementById('form3');
        form3.addEventListener('submit', (event) => {
            event.preventDefault(); 
            const statusH3 = document.querySelector('h3');
            statusMessage = statusH3;
            getFormData(form3);            
        });

        const getFormData = (elem) => {
            const formData = new FormData(elem);
            statusMessage.textContent = loadMessage;
            postData(formData)
                .then((response) => {
                    if (response.status !== 200){
                        throw new Error ('Состояние сети не 200');
                    }
                    statusMessage.textContent = succesMessage;
                })
                .catch((error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);   
                });
            event.target.reset(); 
        };

        const postData = (formData) => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: formData
            });
         };
    };
    sendForm();
});
