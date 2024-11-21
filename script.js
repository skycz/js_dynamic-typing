"use strict";

// To String

// 1) 
console.log(typeof(String(null)));

console.log(typeof(String(4)));
// Число в строку

// 2) 

console.log(typeof(5 + ''));
// '' - пустая строка + 5
// выводится строка

const num = 5;
console.log("https://vk.com/catalog/" + num);
// переход на 5 место в каталоге 
// ссылка должна выводится как строка

const fontSize = 26 + 'px';
// еще один вариант использования динамической типизации
// число + значение в виде строки px

// To Number 

// 1)

console.log(typeof(Number('4')));
// число в кавычках выводится как строка (number)

// 2) 
console.log(typeof(+'5'));
// унарный плюс перед числом, используется как метод для перевода числа в строку

// 3)
console.log(typeof(parseInt("15px", 10)));
// parseInt — это встроенная функция в JavaScript, которая используется для преобразования строки в целое число

// доп пример с унарным плюсом для преобразование вопросов prompt в числовой тип данных

let answ = +prompt("Hello", "");

// To boolean true / false
// 1) нативный способ преобразования

// 0, '', null, undefined, NaN;
// эти типы данных в булиновом значении равны false

let switcher = null; // null = false

if (switcher) {
    console.log('Working...'); // условия не будет выполнятся
}

switcher = 1; // меняем значение null на единицу
if (switcher) {
    console.log('Working...'); // условия будет выполнятся
    // тк единица в булевом значении равна true
}

// 2) нативный способ преобразования
console.log(typeof(Boolean('4')));
// получаем тип данных boolean

// 3) нативный способ преобразования
console.log(typeof(!!"44444"));
// получаем тип данных boolean
// два знака восклицания преобразуют строку в булиновый тип данных