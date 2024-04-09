// 1) Создать объект counter всеми возможными способами;

const counterOne = {
    name: "Vova"
};

class ClassCounter {
    constructor() {
        this.name = "Vova";
    }
}

function Counter() {
    this.name = "Vova";
}

const counterTwo = new Counter();
const counterThree = Object.create(counterOne);
const counterFour = Object();
const counterFive = new Object();
const counterSix = new ClassCounter();

// 2) Скопировать объект counter всеми возможными способами;

// Не глубокое копирование:

const counterCopyOne = { ...counterOne};
const counterCopyTwo = Object.assign({}, counterOne);
const counterCopyThree = {};
for (let key in counterOne) {
    counterCopyThree[key] = counterOne[key];
}

// Глубокое копирование:
const counterCopyFour = JSON.parse(JSON.stringify(counterOne));;
const counterCopyFive = structuredClone(counterOne);
// const _ = require('lodash'); - c помощью lodash
const counterCopySix = _.cloneDeep(counterOne);

// 3) Создать функцию makeCounter всеми описанными и возможными способами;

function makeCounterOne(){
    return 'foo'
}

const makeCounterTwo = function (){
    return 'foo'
}

const makeCounterThree = () => 'foo';

// 4) Описать работу глобальной функции structuredClone()

// Это глобальный метод, который создает глубокую копию заданного значения.

// structuredClone(value, options)

    // value - Значение, которое нужно клонировать. Это может быть любой structured-cloneable type.

    // options - Объект со следующими свойствами:

        // transfer - Массив передаваемых объектов,
        // которые будут перемещены, а не клонированы в возвращаемый объект.

// Возвращаемое значение: глубокая копия заданного значения.



// Бонус:

// 1) Написать функцию глубокого сравнения двух объектов:

const obj1 = { 
    here: { 
        is:"on", 
        other: "3" 
    }, 
    object: "Y" };
    
const obj2 = { 
    here: { 
        is: "on", 
        other: "2" 
    }, 
    object: "Y" };


    
const deepEqual = (obj1, obj2) => {

    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return obj1 === obj2;
    }

    const keysFirstObj = Object.keys(obj1);
    const keysSecondObj = Object.keys(obj2);

    if (keysFirstObj.length !== keysSecondObj.length) {
        return false;
    }

    return keysFirstObj.every( key => keysSecondObj.includes(key) && deepEqual(obj1[key], obj2[key] ));

};

// 2) Развернуть строку в обратном направлении при помощи методов массивов:

function reverseStr(str) {
    return str.split('').reverse().join('');
};

