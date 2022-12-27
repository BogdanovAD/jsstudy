'use strict';

if (4 === 9) {
    console.log('ok');
} else {
    console.log('Error');
}

const num = 50;

if (num < 50) {
    console.log('error');
} else if (num > 100) {
    console.log('mnogo');
} else {
    console.log('ok');
}

//                   true                 false
num === 50 ? console.log('ok') : console.log('error'); //Тернарный или условный операторыкптукптпк

const numb = 55;

switch (numb) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('Ага, точно!');
        break;

    default:
        console.log('Не сегодня');
        break;
}

const hamburger = 2;
const fries = 1;
const coke = 0;

if (hamburger === 3 && coke && fries) {
    console.log('все сыты по горло!');
} else {
    console.log('Мы уходим');
}

let johnReport,
    alexReport,
    samReport,
    maryReport = 'done';
console.log(johnReport || alexReport || samReport || maryReport);
