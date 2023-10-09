//JS примеры
https://learn.javascript.ru/object-methods#tasks
 
//2 задание:
let calculator = {
  read(){let vvod = prompt('Введите 11', 11);
    this.vvel = Number(vvod);
    vvod2 = prompt('Введите 2', 2)
    this.vvel2 = Number(vvod2);
},
    sum() {
alert(this.vvel + this.vvel2)
    },

  mul() {
    alert(this.vvel * this.vvel2)  
  }  
};


//3 задание:let ladder = {
  step: 0,
  up() {
    this.step++;
      return this
  },
  down() {
    this.step--;
      return this
  },
  showStep: function() { // показывает текущую ступеньку
      alert(this.step);    
      return this;
  }
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


https://learn.javascript.ru/constructor-new#tasks

//2 задание:
let calculator = new Calculator();


function Calculator(){
  this.read = function(){ 
    this.vvod = prompt('numb', 1);
    this.vvod2 = prompt('numb2', 2); 
     return this 
 };
 this.sum = function() {
    return this.vvod + this.vvod2
 };

  this.mul = function() {
    return this.vvod * this.vvod2
  }
    
};

//3 задание:


let accumulator = new Accumulator(1);

function Accumulator(number) {
    this.value = number
     
    this.read = function() {
    return Number(prompt('Введите значение', 0)) + this.value; 
    }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://learn.javascript.ru/string#stroki-neizmenyaemy


//1 задание:

function ucFirst(foo){

let first = foo.substring(0,1).toUpperCase();
let main = foo.substr(cn-(cn-1));
    
return first + main;  
};



//2 задание:

function checkSpam(str) {
    let foo;
if(str.includes('viagra') || str.includes('XXX')){
    foo = true } else {
        foo = false
    };  
console.log(foo);
};



//3 задание:

function truncate(str, maxlength){

(str.length > maxlength) ? alert(str.slice(0, maxlength) + '...') : alert(str);

};


//4 задание:

function extraCurrencyValue(str){
    let foo = str
return parseInt(foo)
};


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//https://learn.javascript.ru/array


//2 задание:

let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
let cn = styles.length;
let need = cn/2;
let total = need.toFixed()-1;
styles[total] = 'классика';






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//https://learn.javascript.ru/array-methods#tasks

//1 задание:

//Не совсем верный вариант)

function camelize(word){
    let foo = word.split('');
foo = foo.map((item, ind, arr) =>
    (arr[ind-1] == '-') ? item.toUpperCase() : item
).join('');
    return foo }



//(Правильный вариант)
function camelize(word) {
    let foo = word.split('');
    foo.map(function (el, ind, arr) {

        if (arr[ind] == '-') {
            arr[ind + 1] = arr[ind + 1].toUpperCase();
            arr.splice(ind, 1)

        };
        
    });
    return foo.join('');
};


//2 задание:

function filterRange(arr, numb1, numb2) {

let arr_2 = [];
    
arr.map(function(el, ind, ar){
    
let foo = (ar[ind] >= numb1 && ar[ind] <= numb2) ? arr_2.push(ar[ind]) : false; });
    return arr_2

};



//3 задание:

//(Мое решение лучше)


function filterRangeInPlace(arr, numb1, numb2) {
    arr.filter(
       (el, i, ar) => (numb1 <= ar[i] && ar[i] <= numb2) ? true : arr.splice([i], 1) 
       );
 }



//4 задание:

(Мое решение лучше)

let arr = [5, 2, 1, -10, 8];

arr.sort().reverse();


//5 задание:

function copySorted(arr) {
let arr2 = arr.slice().sort();
    return arr2
    
};




//6 задание:


//1 часть ( 2 варианта)
//Вариант 1 - Вариант не верный, но очень схож с правильным ответом. Здесь что бы получить правильный ответ (что бы ф-ция сработала) нам придется добавлять аргумент (выражение) в функцию-конструктор Calculator, а задание было сделать метод для функции-конструктора Calculator. Т.е нам нужно передать аргумент именно в метод calculate находящийся в функции-конструктора Calculator .

//Т.е мы рассматриваем Calculator как объект, а не как функцию куда и добавляем метод calculate с аргументом
function Calculator(expr) {
    let str = expr;
    let strz = str.split('');
    let result = function () {
        let res
        strz.find((el) => (el == '+') ? res = '+' : false);
        strz.find((el) => (el == '-') ? res = '-' : false);
        return res
    };

    let strz2 = strz.slice();

    strz2.forEach(function (el, ind, ar) {
        if (ar[ind] == '+' || ar[ind] == '-' || ar[ind] == ' ') { ar[ind] = 0 }
        else { ar[ind] = Number(ar[ind]) }
    })

    let fin = (result() == '+') ? strz2[0] + strz2[4] :
        (result() == '-') ? strz2[0] - strz2[4] : false;
    this.calculate = fin;
};


let calc = new Calculator('7 + 9');

calc.calculate
////////////////////////////////////////////////////////////////////////

//Вариант 2 - Верный (здесь calculate метод обьекта (функции-конструктора) Calculator)


function Calculator() {

    this.calculate = function (expr) {
        let str = expr;
        let strz = str.split('');

        let result = function () {
            let res
            strz.find((el) => (el == '+') ? res = '+' : false);
            strz.find((el) => (el == '-') ? res = '-' : false);
            return res
        };

        let strz2 = strz.slice();

        strz2.forEach(function (el, ind, ar) {
            if (ar[ind] == '+' || ar[ind] == '-' || ar[ind] == ' ') { ar[ind] = 0 }
            else { ar[ind] = Number(ar[ind]) }
        })

        let fin = (result() == '+') ? strz2[0] + strz2[4] :
            (result() == '-') ? strz2[0] - strz2[4] : false;

        return fin

    };
}

let calc = new Calculator;

calc.calculate("3 + 7");



//Часть 2Решение не совсем верное, но рабочее и строго соответсвует заданию.Тут мы добавили метод, который addMethod, который переписывает метод calculate и добавляет в него опцию вычисления. Но тут добавляется только последняя добавленная опция, а предыдущая не сохраняется (вообщем-то в задании не было разъяснено этого момента)аргумент func фактически муляж, который либо совпадает со стрелочной функцией с аргументами a и b, либо нетОшибка: split через пробел надоfunction Calculator() {

    this.calculate = function (expr) {
        let str = expr;
        let strz = str.split('');

        let result = function () {
            let res
            strz.find((el) => (el == '+') ? res = '+' : false);
            strz.find((el) => (el == '-') ? res = '-' : false);
            return res
        };

        let strz2 = strz.slice();

        strz2.forEach(function (el, ind, ar) {
            if (ar[ind] == '+' || ar[ind] == '-' || ar[ind] == ' ') { ar[ind] = 0 }
            else { ar[ind] = Number(ar[ind]) }
        })

        let fin = (result() == '+') ? strz2[0] + strz2[4] :
            (result() == '-') ? strz2[0] - strz2[4] : false;

        return fin

    };

    this.addMethod = function(name, func){
     return this.calculate = function(expr) {

        let str = expr;
        let strz = str.split('');

        
            let res
            strz.find((el) => (el == '+') ? res = '+' : false);
            strz.find((el) => (el == '-') ? res = '-' : false);
            strz.find((el) => (el == '*') ? res = '*' : false);
            strz.find((el) => (el == '/') ? res = '/' : false);
            strz.find((el) => (el == '**') ? res = '**' : false);
               
            
     
         let strz2 = strz.slice();

        strz2.forEach(function (el, ind, ar) {
            if (ar[ind] == '+' || ar[ind] == '-' || ar[ind] == ' ' || ar[ind] == '*' || ar[ind] == '/') {ar[ind] == '**'} 
            else { ar[ind] = Number(ar[ind]) }
        });
        

          let fin = (res == '+') ? strz2[0] + strz2[4] : 
        (res == '-') ? strz2[0] - strz2[4] :
        (res == '*' && func == '(a, b) => a * b') ? strz2[0] * strz2[4] :
        (res == '/' && func == '(a, b) => a / b') ? strz2[0] / strz2[4] :
        (res == '**' && func == '(a, b) => a ** b') ? strz2[0] ** strz2[4] :
        false;
        return fin
    
}
};}



//7 задание:

//Не совсем верное, так как через map получается вызов переменной без скобок

let names = function(){
    let arm = [];
    users.forEach(function(el, ind, ar){
      arm.push(ar[ind].name)  
        
    });
    return arm
};

////8 задание:
let usersMapped = users.slice();

usersMapped.map((el,id, ar)=>ar[id].fullName = ar[id].name + ' ' + ar[id].surname);

//9 задание:
Просто это так работает.  В аргумент ф-ции sort() можно добавить функцию.Используем, метод sort(),  в который мы вставляем функцию - алгоритм сортировки

function sortByAge(users) {
 function compare(a, b){
    a = a.age;
    b = b.age;
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1
 };
 return users.sort(compare)   
};


//10 задание:

//Аналогично 9 заданию мы в метод sort() добавляем функцию с алгоритмом.Math.random() - возвращает случайное число от 0 до 1, не включая 1.

//Значит если вычесть 0,5 (т.е половину), то получится либо больше 0, либо меньше 0 и, наверное, это и есть рандомная выдача результата. 

function compareRandom(a, b) {
  return Math.random() - 0.5;
}

arr.sort(compareRandom);Проверка рандомности:console.log(arr.sort(compareRandom));
console.log(arr.sort(compareRandom));
console.log(arr.sort(compareRandom));
console.log(arr.sort(compareRandom));
console.log(arr.sort(compareRandom));
console.log(arr.sort(compareRandom));
console.log(arr.sort(compareRandom));
console.log(arr.sort(compareRandom));
console.log(arr.sort(compareRandom));
console.log(arr.sort(compareRandom));
console.log(arr.sort(compareRandom));
console.log(arr.sort(compareRandom));
console.log(arr.sort(compareRandom));
console.log(arr.sort(compareRandom));
console.log(arr.sort(compareRandom));
console.log(arr.sort(compareRandom));
console.log(arr.sort(compareRandom));
console.log(arr.sort(compareRandom));
console.log(arr.sort(compareRandom));
console.log(arr.sort(compareRandom));
//11 задание:


//В ответе делается через reduce()  и конечно же там лучше
let getAverageAge = function (mas){
let foo = 0;
let averd = mas.forEach(function (el, ind, ar) {
  foo += ar[ind].age;                      
});
return foo / arr.length;
};

//12 задание:

//Применяем метод filter(), в котором с помощью indexOf находим индекс элемента, который встречается первый раз в массиве,если индекс элемента, встречаюющийся в массиве равен текущему индексу, значит метод filter() его находит.Т.е если индекс элемента (от метода indexOf) сопадает с текущем индексом
 //заначит элемент встречается 1-ый раз так как метод indexOf находит 1-ый элемент в массиве. А если не сопадает, значит идентификатор текущего элемента больше, чем от indexOf, а indexOf показывает всегда первый, значит повтор

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

function unique(arr) {
  return arr.filter((el, id, ar) => ar.indexOf(el) == id);
};

unique(strings)



//13 задание: reduce()


//Что бы получилось так:
usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}

//из массива с обьектами, т.е сгруппировать по признаку.в reduce() нужно: 
//- создать аккумулятор равный пустому обьекту- в аккумулятор вставлять элементы (ключи) равные елементам редуцируемого обьекта- вернуть аккумуляторПомнить: результат reduce() это обобщенный результат работы всех функций над каждым элементом обьекта



let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];
//Движок:
users.reduce(function(acc, el, ind, arr){
 acc[el.id] = el;
    return acc
}, {});////////////////////////////////////////////////////////////////////////////////////////////https://learn.javascript.ru/map-set

//1 задание:

//
//Здесь очень удобно коллекцией Set мы убираем дублии используем Array.from
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
function unique(arr) {
 let set = new Set(arr);
 return Array.from(set)
};





//2 задание:

//Мой вариант:

//Здесь: разложили все буквы в каждом слове в массивы, 
//отсортировали каждый массив по элементам (буквам), 
//собрали массивы в строки (наборы букв)строки привели к lowerCaseВсе что получилось собрали в коллекцию Set (т.е отфильтровали все дубли)let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];function aclean(ar) {
return Array.from(new Set(ar.map(el => {
    return (Array.from(el).sort()).join('').toLowerCase();
})));
};aclean(arr);//В ответе учебника сделано так же, но еще создали коллекцию Map и воспользовались методом set(key, value)для установки ключа и значения,получилось что в ключ добавили единственное значение, которое не может повторятьсят.е в нашем случае это отсортированные слова по буквам, а в ключи попали первые слова,  которые были для сортировкит.е получилась вот такая коллекция, из которой потом мы взяли ключи и вставили массив{"anp" => "PAN"}{"aceehrst" => "hectares"}{"aer" => "era"}let aclean = function(ar) {
let map = new Map;
 ar.forEach(el => {
    let goo = (Array.from(el).sort()).join('').toLowerCase();
    return map.set(goo, el); 
});

return Array.from(map.values());
};

//3 задание:

let map = new Map();

map.set("name", "John");

let keys = map.keys();

keys = Array.from(keys);





////////////////////////////////////////////////////////////////////////////////////////////
//https://learn.javascript.ru/keys-values-entries1 задание:
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};


function sumSalaries(ob) {
let foo = 0;
for (let one of Object.values(ob)) {
!salaries == 0 ? foo += one : foo
};
return foo;
};2 задание:let user = {
  name: 'John',
  age: 30
};function count(obj) {
return Object.keys(obj).length
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//https://learn.javascript.ru/destructuring-assignment#destrukturizatsiya-obekta1 задание:
let user = {
  name: "John",
  years: 30
};


let { name, years: age, isAdmin = false } = user;


alert( name ); 
alert( age ); 
alert( isAdmin ); ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
https://learn.javascript.ru/json#tasks

1 задание:Если разложить по-простому:let user = {
  name: "Василий Иванович",
  age: 35
};Ответ:let foo = JSON.stringify(user); // конверитиовали в JSON

let user2 = JSON.parse(foo);


//2 задание:

let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup; // тут получается зацикливание, что не допустимо при серриализацииОтвет:
Здесь применяется JSON.stringify(obj, function(){ return Lala})Функция проходит по всем ключам (или значениям) и делает нужное действие.Важно: первый ключ, который получает функция всегда пустой и получается ’’ :  value;Соответсвенно, что бы выполнить задание необходимо исключить цикличное значение meetup нужно учесть, что ключ должен быть НЕПУСТОЙ так как при пустом ключе и значение meetup (‘something’ : value) мы получаем в серилизацию (приведению к json строке) циклическую ссылку, а это делать нельзя

JSON.stringify(meetup, function replacer(key, value) {
return (key != '' && value == meetup ) ? undefined : value
    })



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//https://learn.javascript.ru/recursion#tasks

//С использованием цикла:
//1. Сначала получим массив цифр (начинающийся с 1)
//2. Потом с помощью reduce к текущему значению прибавляем следующее
function sumTo(n){
let yoo = [];    
for (let i = 1; i <= n; i++) {
yoo.push(i)
      
};
let voo = yoo.reduce(function(start, current) {
  return start + current
})
    
return voo};Рекурсия(?)function sumTo(n) {
let res;
    
if(n == 1) {
    return n 
} else { 
    return res = function app(n){
    let foo = [];
    
    for (let i = 1; i <= n; i++){
        foo.push(i);
    };

    let doo = 0;
    foo.forEach(function(item, i, arr) {
    doo = doo + arr[i];
    })
    return doo 
}
}

};

