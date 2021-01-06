// const numbers = [1, 2, 3];
// console.log(numbers)

// // =============================================================
// console.log('\n');

// // // the following syntax creates an array of length 5 having empty elements
// // const moreNumbers = new Array(5);

// const moreNumbers = new Array('hi', 'hello', 1);
// console.log(moreNumbers);

// // =============================================================
// console.log('\n');

// const oneMoreArray = Array.of(1, 2, 3, 4);
// console.log(moreNumbers);

// // =============================================================
// console.log('\n');

// const oneMoreArray2 = Array.from('hello!');
// console.log(oneMoreArray2);

// // =============================================================
// console.log('\n');

// const personalData = [30, 'Anonymous', { moreDetails: [] }];

// const analytics = [[1, 1.6], [-5.4, 2.1]]

// for (const data of analytics) {
//     for (const datapoint of data) {
//         console.log(datapoint);
//     }

// }

// console.log(personalData[1]);

// // =============================================================
// console.log('\n');

// const hobbies = ['Sports', 'Cooking'];
// console.log(hobbies)
// hobbies.push('Reading');
// console.log(hobbies);
// hobbies.unshift('Coding');
// console.log(hobbies);
// const poppedValue = hobbies.pop();
// console.log(`popped value: ${poppedValue}`);
// console.log(hobbies);
// hobbies.shift();
// console.log(hobbies);
// hobbies[5] = 'unknown';
// console.log(hobbies);

// // =============================================================
// console.log('\n');

// hobbies.splice(1, 0, 'something');
// console.log(hobbies)
// let removed = hobbies.splice(2, 3, 'something else');
// console.log(hobbies)
// console.log(removed)
// hobbies.splice(2, 0, 'something else again', 'something else again and again', 'more of something')
// console.log(hobbies)


// // =============================================================
// console.log('\n');

// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// // calling slice simply returns a copy of the array
// let newSlice = testResults.slice();
// newSlice.push(7.99);
// console.log(testResults);
// console.log(newSlice);
// console.log(testResults.slice(0,3));
// console.log(testResults.slice(2));

// newSlice = testResults.concat(newSlice);
// testResults.push(5);
// console.log(newSlice);
// console.log(testResults);

// // if an element can't be found then the indexOf() function will return -1
// console.log(testResults.indexOf(5))
// console.log(testResults.indexOf(-5))
// console.log(newSlice.lastIndexOf(5))
// console.log(newSlice.lastIndexOf(-5))

// console.log(testResults.includes(-5));
// // =============================================================
// console.log('\n');

// const personData = [{ name: 'anonymous' }, { name: 'anonymous2' }];
// console.log(personData.indexOf({ name: 'anonymous' }))
// console.log(personData.indexOf({ name: 'anonymous' }))

// let found = personData.find((person, idx, persons) => {
//     return person.name === 'anonymous';
// });
// console.log(personData);
// found.name = 'newName';
// console.log(personData);

// found = personData.findIndex((person, idx, persons) => {
//     return person.name === 'anonymous2';
// });
// console.log(personData);
// personData[found].name = 'newName';
// console.log(personData);

// =============================================================
console.log('\n');

let prices = [10.99, 5.99, 3.99, 6.59];
let tax = 0.19;
let taxAdjustedPrices = [];

// for (const price of prices) {
//     taxAdjustedPrices.push(price * (1 + tax));
// }

prices.forEach((price, idx, prices) => {
    taxAdjustedPrices.push(price * (1 + tax));
});

console.log(taxAdjustedPrices);