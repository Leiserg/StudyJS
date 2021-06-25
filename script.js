'use strict';

class First{
    hello() {
        console.log('Привет я метод родителя!');
    }
}

class Second extends First{
    helloSecond(){
        super.hello();
        console.log('А я наследуемый метод!');
    }
}

let second = new Second();
second.helloSecond();