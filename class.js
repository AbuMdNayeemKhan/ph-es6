const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 40000},
    {id: 4, name: 'mack', price: 15000},
]

const obj = {
    name : {
        name : 'Khan',
    },
}

// has some properties, method
// class Product{
//     speak(talk){
//         console.log(`talking about ${talk}`);
//     }
// }

const person = {
    name: 'Nayeem Khan',
    job: 'Web Dev',
    3: 'third'
}
const prop = 'job'
console.log(person.job);
console.log(person['job']);
console.log(person[prop]);
console.log(person['3']);