const getAge = (person) => person.age;
// const student = {name: 'ananta', age: 45}
// const age = getAge (student);
// console.log(age);
// function declaration
function add (a, b){
    const result = a + b;
    return result;
}
const sum = add(5, 90);
console.log(sum);

// function expression
const add2 = function(a, b){
    return a + b;
}
let result = add2(2, 2);
console.log(result);

//arrow function
const add3 = (a, b) => a + b;
const result3 = add3(3, 4);
console.log(result3);

// 


//person data
let myObj = {name: "Nayeem", age: 25, profation: 'Web Dev', salary: 10000};

let myArrow = (obj) => obj.salary;

let resutl = myArrow(myObj);

console.log(resutl);

// () => 