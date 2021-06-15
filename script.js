'use strict';

const seriesBooks = document.querySelectorAll('.books'),
    books = document.querySelectorAll('.book'),
    book3 = document.querySelectorAll('a'),
    advertisement = document.querySelector('.adv'),
    elementsBooks = document.querySelectorAll('ul'),
    elems = document.querySelectorAll('li');

    advertisement.remove();

seriesBooks[0].prepend(books[1]);
books[1].after(books[0]);
books[0].after(books[4]);
books[3].after(books[5]);
seriesBooks[0].append(books[2]);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

elems[3].after(elems[6]);
elems[6].after(elems[8]);
elems[9].after(elems[2]);
elems[50].after(elems[48]);
elems[47].after(elems[55]);
elems[53].after(elems[51]);


book3[4].textContent = 'Книга 3. this и Прототипы Объектов';