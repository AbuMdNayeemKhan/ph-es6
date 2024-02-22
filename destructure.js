let myObj = {
    name : "Nayeem Khan",
    age : 25,
    phone : "01619981998",
    salary : 10000
}

let myarr = [11, 22, 44, 33, 66, 55, 77, 88, 99,];
let [a, b] = myarr

let {age: boyosh} = myObj // destructure age for my object

console.log(boyosh);

console.log(b); 