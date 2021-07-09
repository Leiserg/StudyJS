const getCommand = () => {
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
};

export default getCommand;