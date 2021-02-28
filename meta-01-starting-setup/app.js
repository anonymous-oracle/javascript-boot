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

// // ITERATOR AND GENERATORS
// let company = {
//     curEmployee: 0,
//     employees: ['Max', 'Manu', 'Anna'],
//     // next() { 
//     //     if (this.curEmployee >= this.employees.length) {
//     //         return { value: this.curEmployee, done: true };
//     //     }
//     //     const returnValue = {
//     //         value: this.employees[this.curEmployee],
//     //         done: false
//     //     };
//     //     this.curEmployee++;
//     //     return returnValue;
//     // },
//     [Symbol.iterator]: function* employeeGenerator() { // GENERATOR FUNCTION LOGIC TO ACT AS AN ITERATOR
//         // let employee = company.next();
//         // while (!employee.done) {
//         //     yield employee.value;
//         //     employee = company.next();
//         // }
//         let currentEmployee = 0;
//         while (currentEmployee < this.employees.length) {
//             yield this.employees[currentEmployee];
//             currentEmployee++;
//         }
//     }
// };
// // let employee = company.next();
// // while (!employee.done) {
// //     console.log(employee.value);
// //     employee = company.next();
// // }

// // for (const employee of company) {
// //     console.log(employee);
// // }

// // console.log(company.getEmployee().next()); // the custom next() function defined in the object is not called, instead the generator function takes care of the next() logic implementation
// // console.log(company.getEmployee().next());
// // console.log(company.getEmployee().next());
// // console.log(company.getEmployee().next());
// // console.log(company.getEmployee().next());

// // // IN THE ABOVE USAGE, EACH TIME company.getEmployee().next() IS CALLED A NEW ITERATOR IS GENERATED
// // // SO INSTEAD WE USE THE FOLLOWING METHOD OF ITERATOR

// // const it = company.getEmployee();

// // console.log(it.next());
// // console.log(it.next());
// // console.log(it.next());
// // console.log(it.next());
// // console.log(it.next());

// for (const employee of company) {
//     console.log(employee);
// }

// console.log(...company);

// // REFLECT API
// let course = {
//     title: 'Javascript'
// };

// Reflect.setPrototypeOf(course, {
//     toString() {
//         return this.title;
//     }
// });

// // Reflect.defineProperty(course, 'price', { value: true, writable: true, configurable: true, enumerable: true });




// console.log(course);
// console.log();
// console.log(course.toString());

// PROXY API
const course = {
    title: 'Javascript'
};

const courseHandler = {
    get(obj, propertyName) {
        // console.log(propertyName); // commenting out this line will only print the property value
        return obj[propertyName] || 'NOT FOUND';
    }
};

// wrapping an extra object around course object
const pCourse = new Proxy(course, courseHandler);
console.log(pCourse.title);
console.log(course);
console.log(pCourse);