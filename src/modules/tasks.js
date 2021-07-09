const tasks = () => {
    const body = document.querySelector('body');
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
        target.value = target.value.replace(/[^\d\(\)\-]/i, '');
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
};

export default tasks;