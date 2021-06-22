'use strict';


// let selector = '.start';
// if (selector[0] === '.'){
//         const div = document.createElement('div');
//         let style = getComputedStyle(div);
//         let heigh = style.height;
//         div.className = selector.slice(1);
//         div.style.cssText = 'height: height; width: 300px; background: blue; font-size: 50px;';
//         div.innerHTML = "Some text with bold text";
//         document.body.appendChild(div);
//         console.log(div);
//         // console.log(style);
//         console.log(heigh.height);
//     } else if(selector[0] === '#'){
//         const p = document.createElement('p');
//         p.id = selector.slice(1);
//         p.innerHTML = "Some text with <b>bold text</b>";
//         document.body.appendChild(p);
//         console.log(p);
//     }


function DomElement(selector, height, width, bg, fontSize) {
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
}
DomElement.prototype.method1 = function(){
        if (this.selector[0] === '.'){
            const div = document.createElement('div');
            div.className = this.selector.slice(1);
            div.innerHTML = "Some text with <b>bold text</b>";
            div.style.cssText = `height: ${this.height + 'px'}; width: ${this.width + 'px'}; background: ${this.bg}; font-size: ${this.fontSize + 'px'}`;
            document.body.appendChild(div);
            console.log(div);
        } else if(this.selector[0] === '#'){
            const p = document.createElement('p');
            p.id = this.selector.slice(1);
            p.innerHTML = "Some text with <b>bold text</b>";
            document.body.appendChild(p);
            console.log(p);
        }        
};


let test1 = new DomElement('.start', 300, 300, 'red', 50);
test1.method1();
console.log(test1);