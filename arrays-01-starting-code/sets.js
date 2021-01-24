// const ids = new Set([1, 2, 3]);
// console.log(ids);

// for (const entry of ids.entries()) {
//     console.log(entry);
// }

// for (const entry of ids.entries()) {
//     console.log(entry[0]);
// }

// ids.add(2);
// console.log(ids);
// ids.add(4);
// console.log(ids);
// ids.delete(3);
// console.log(ids);

////////////////////////////////////////////////////////////////////

// WEAK SET
let person = { name: 'Max' };
let persons = new WeakSet();
persons.add(person);
console.log(persons);

// now suppose after some operations, the 'person' object will be removed by setting it to null, then the garbage collector will free
// up that memory; however if it were an ordinary set, then the garbage collector won't clear the memory

// ...some operations
person = null;

console.log(persons);