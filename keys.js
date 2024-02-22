const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
}

delete glass.price

const allKeys = Object.keys(glass); // get all keys for object
const allValue = Object.values(glass); // get all values form objects
const allEntries = Object.values(glass); // get all Entriens from objects



console.log(allKeys);
console.log(allValue);
console.log(allEntries);