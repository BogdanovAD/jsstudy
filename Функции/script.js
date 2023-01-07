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

// function getMathResult(num, set) {
//     if (set <= 0 || typeof set !== 'number') {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= set; i++) {
//         if (i === set) {
//             str += `${num * i}`;
//         } else {
//             str += `${num * i}---`;
//         }
//     }
//     console.log(str);
//     return str;
// }

// getMathResult(10, 5);

function getMathResult(a, b) {
    let result = a;
    if (b <= 0 || typeof b !== 'number') {
        result;
    } else {
        for (let i = 2; i <= b; i++) {
            result += `---${a * i}`;
        }
    }
    console.log(result);
    return result;
}
getMathResult(10, 5);
