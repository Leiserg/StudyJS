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

export default countTimer;