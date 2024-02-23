// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition
let num = [12, 3, 45, 66, 89, 10,];
// let passed = [];
// const passed = num.filter(p => 33 <= p);
const odd = num.filter (x => x % 2 === 1);
const even = num.filter (x => x % 2 === 0);
console.log(even);

let friends = ['sujon', 'salim', 'sohan', 'rohan', 'rumi'];

const oddFriends = friends.filter(i => i.length % 2 === 1);

console.log(oddFriends);