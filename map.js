const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const double = [];
// for(num of numbers){
//     const doub = num * 2;
//     double.push(doub);
// }
// console.log(double);

function dbl(num){
    let mul = num * 2;
    double.push(mul);
}

let dbl2 = n => n * 2;
let result = numbers.map(dbl);
let result2 = numbers.map(dbl2);
let result3 = numbers.map(n => n * 2);


console.log(result3);

// found friends length
let friends = ['sujon', 'salim', 'sohan', 'rohan', 'rumi'];
let nameLength = friends.map(frd => frd.length);
console.log(nameLength);

// first Letter