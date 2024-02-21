// ... three dots is spread oporator. spread oporetors use for array items convert to number.
const myNum = Math.max(11, 22, 33, 44, 55, 6, 77, 88, 9);
console.log(myNum);

// create an array
let myArray = [22, 33, 465, 213, 54, 875, 345, 7, 74, 96];
let myArrayRes = Math.min(...myArray);
console.log(myArrayRes);
