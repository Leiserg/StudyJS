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

export default togglePopup;