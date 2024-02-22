// data access 
const data = [{id: 1, name: 'abul', address: 'Kochu khet'}];
// console.log(data[0].address);

//print the second product price by using this object
const products = {
    count: 5000,
    data: [
        {id: 1, name: 'lenovo laptop', price: 65000},
        {id: 2, name: 'macbook', price: 165000},
    ]
}

let print = products.data[1].price;
console.log(print);