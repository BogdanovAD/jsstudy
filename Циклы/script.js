// Вариант №1
let answers = [],
    questions = ['Как ваше имя?', 'Как ваша фамилия?', 'Сколько вам лет'];

for (let i = 0; i < questions.length; i++) {
    answers[i] = prompt(questions[i], '');
}

console.log(answers);

// Вариант №2
// let answers = [],
//     questions = ['Как ваше имя?', 'Как ваша фамилия?', 'Сколько вам лет'],
//     i = 0;
// do {
//     answers[i] = prompt(questions[i], '');
//     i++;
//     console.log(answers);
// } while (i < questions.length);

// Вариант №3
// let answers = [],
//     questions = ['Как ваше имя?', 'Как ваша фамилия?', 'Сколько вам лет'],
//     i = 0;
// while (i < questions.length) {
//     answers[i] = prompt(questions[i], '');
//     i++;
//     console.log(answers);
// }
