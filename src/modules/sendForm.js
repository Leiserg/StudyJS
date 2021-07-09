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

export default sendForm;