// let person = { name: 'Max' };
// let person2 = { name: 'Manuel' };

// let personData = new Map([[person, [{ date: 'yesterday', price: 10 }]]]);
// console.log(personData);
// console.log('\n');
// console.log(personData.get(person));
// console.log('\n');
// personData.set(person2, { date: 'two weeks ago', price: 100 })
// console.log(personData);
// console.log('\n');
// for (const [key, value] of personData.entries()){
//     console.log(key, value);
// }
// console.log('\n');
// for (const key of personData.keys()){
//     console.log(key);
// }
// console.log('\n');
// for (const value of personData.values()){
//     console.log(value);
// }
// personData.set({name:'Anonymous'},{date:'2 days ago', price:200})
// console.log('\n');
// console.log(personData);

////////////////////////////////////////////////////////////////////

// WEAK MAP
let person = { name: 'Max' };
let persons = new WeakMap();
persons.set(person, 'extra info');
console.log(persons);

// now suppose after some operations, the 'person' object will be removed by setting it to null, then the garbage collector will free
// up that memory; however if it were an ordinary map, then the garbage collector won't clear the memory

// ...some operations
person = null;

console.log(persons);