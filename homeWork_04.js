// 1) Какие бывают алгоритмы сортировок ? 

// Ответ:

// О(1) - константная сложность
// О(n) - линейная сложность
// О(n^2) - квадратичная сложность
// О(log n) - логарифмическая сложность
// О(n log n) - линейно-логарифмическая сложность

// 2) Прочитать про "Операторы и выражения, циклы в JS"

// Ответ: сделано

// 3) Создать объект Person несколькими способами,
// после создать объект Person2, чтобы в нём были доступны методы объекта Person.
// Добавить метод logInfo чтоб он был доступен всем объектам.

// Ответ: 

// 1 вариант:

const Person = {
    name: 'Vova',
    logInfo() {
        console.log(this.name)
    }
};

const Person2 = Object.create(Person);

// 2 вариант:

function Person() {
    this.name = 'Vova';
};

Person.prototype.logInfo = function () {
    console.log(this.name);
};

const Person2 = new Person();

// 3 вариант:

class Person {
    constructor() {
        this.name = 'Vova';
    }
    logInfo() {
        console.log(this.name)
    }
}  

const Person2 = new Person();

// 4 вариант:

const Person = Object.create(Object.prototype, {name: {value: 'Vova'}});

Person.logInfo = function(){
    console.log(this.name)
}

const Person2 = Object.create(Person);

// 4) Создать класс PersonThree c get и set для поля name и конструктором,
// сделать класс наследник от класса Person.

// Ответ: 

class Person {
    constructor(name) {
      this._name = name;
    }
  }
  
class PersonThree extends Person {
    constructor(name) {
      super(name);
    }
  
    get name() {
      return this._name;
    }
  
    set name(newName) {
      this._name = newName;
    }
  }
  
const personThree = new PersonThree('Vova');

//БОНУС: Написать функцию, которая вернет массив с первой парой чисел,
// сумма которых равна total:

// Ответ: 

