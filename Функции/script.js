//Function Declaration
function humanSayHello(user) {
    console.log('Hello, ' + user + '!');
}

humanSayHello('Sasha');
//Function Expression
let calc = function (a, b) {
    return a + b;
};

console.log(calc(4, 5));
calc(4, 6);
calc(4, 7);

let count = 5;

function humanSayHello(user) {
    let count = 10;
    count++;
    console.log(count);
    console.log('Hello, ' + user + '!');
}

humanSayHello('Sasha');
console.log(count);
