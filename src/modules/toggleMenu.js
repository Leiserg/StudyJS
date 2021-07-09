const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn'),
        menuItems = menu.querySelectorAll('ul>li'),
        img = btnMenu.querySelector('img'),
        small = btnMenu.querySelector('small');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        document.addEventListener('click', (event) => {
            let target = event.target;
            console.log(event.target);
                if(target === btnMenu || target === img || target === small){
                    handlerMenu();
                } else if(target === target.closest('.close-btn')){
                    handlerMenu();
                }

            menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
        });
};

export default toggleMenu;