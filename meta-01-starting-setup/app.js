// // SYMBOLS

// // library
// const uid = Symbol('uid');
// console.log(uid);

// let person = {
//     [uid]: 'p1', // makes sure that this dynamic property syntax is unique to each object 
//     // id: 'p1',
//     name: 'Max',
//     age: 30,
//     // [Symbol.toStringTag]: function() {return `Person - Name: ${this.name}, Age: ${this.age}`}
//     [Symbol.toStringTag]: 'Person'
// };

// // app
// console.log(person);
// person[uid] = 'p2'; // this can alter the object but when this code is in a library, it won't be available to the end user
// person[Symbol('uid')] = 'p2';
// console.log(person);
// console.log(person.toString());

// ITERATOR
let company = {
    curEmployee: 0,
    employees: ['Max', 'Manu', 'Anna'],
    next() {
        if (this.curEmployee >= this.employees.length) {
            return { done: true };
        }
        const returnValue = {
            value: this.employees[this.curEmployee],
            done: false
        };
        this.curEmployee++;
        return returnValue;
    }
};
let employee = company.next();
while (!employee.done) {
    console.log(employee.value);
    employee = company.next();
}