// 1) Написать ответ - почему массивы в JS являются "неправильными"
//и совмещают в себе несколько структур данных? Какие ?

// Ответ:

// "Неправильными" потому,
//  что они могут совмещать в себе несколько структур данных.
// Это происходит из-за того,
// что в JS массивы реализованы как объекты,
// у которых ключами являются индексы элементов.
// Это позволяет им иметь свойства и методы, 
// которые не характерны для обычных массивов в других языках программирования.

// Массивы могут совмещать в себе:

// - Числовые индексы и элементы
// - Строковые ключи и значения
// - Объекты и другие массивы
// - Функции

// Это способность делает массивы в JavaScript очень гибкими
// и позволяют использовать их для хранения различных типов данных и структур.

// 2) Привязать контекст объекта к функции logger,
// чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)


function logger() {
    console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

// Ответ:

logger.call(obj)
logger.apply(obj)

logger.bind(obj)()

// 3.1 Массивы:

// - Создайте массив чисел и найдите его сумму.
// - Создайте массив строк и объедините их в одну строку.
// - Найдите максимальный и минимальный элементы в массиве чисел.

// Ответ:

const numbers = [1, 2, 3, 4, 5];
const sumNumbers = numbers.reduce((acc, current) => acc + current, 0);
console.log(sumNumbers);

const strings = ['Hello', 'world', '!'];
const combinedString = strings.join(' ');
console.log(combinedString);

const numbersTwo = [5, 6, 7, 8, 9];
const maxNum = Math.max(...numbersTwo);
const minNum = Math.min(...numbersTwo);
console.log(maxNum);
console.log(minNum);

// 3.2 Stack (стек):

// - Реализуйте стек с использованием массива.

// Ответ:

class Stack {
    constructor() {
      this.stackFunc = [];
    }
  
    addFunctionToTopStack(element) {
      this.stackFunc.push(element);
    }
  
    removeFunctionFromStack() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.stackFunc.pop();
    }
  
    peek() {
        return this.items.at(-1);
    }
  
    isEmpty() {
      return this.stackFunc.length === 0;
    }
  
    size() {
      return this.stackFunc.length;
    }
  }

// 3.3 Queue (очередь):

// - Реализуйте очередь с использованием массива.
// - Имитируйте работу очереди на примере ожидания на кассе. 

// Ответ:

class Queue {
    constructor() {
      this.items = [];
    }
  
    insertElementAtEnd(element) {
      this.items.push(element);
    }
  
    removeFirstElement() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    getFirstElement() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  }

// Бонус задание: 
// Реализовать полифил(собственную функцию реализующую встроенную в js) метода bind().

// Ответ:

const myBind = function(func, context) {
    let bindArguments = [].slice.call(arguments, 2);
    return function() {
      let funcArguments = [].slice.call(arguments);

      return func.apply(context, bindArguments.concat(funcArguments));
    };
};

