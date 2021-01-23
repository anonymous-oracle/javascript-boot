// const numbers = [1, 2, 3];
// console.log(numbers);

/////////////////////////////////////////////////////////////////////////

// let moreNums = new Array();
// console.log(moreNums)

// moreNums = new Array(1);
// console.log(moreNums)

// console.log(new Array(5));
// console.log(new Array(1, 5));
// console.log(new Array(1, 3, 5));


// /////////////////////////////////////////////////////////////////////////

// let yetMoreNums = Array.of(1, 2);
// console.log(yetMoreNums);

// let moreNums = Array.from(yetMoreNums);
// console.log(moreNums);

// moreNums = Array.from('hello');
// console.log(moreNums);

// // // view the below snippet on the browser console
// // let elements = document.querySelectorAll('li')
// // let listItems = Array.from(elements);
// // console.log(listItems)

// console.log('\n');

// let hobbies = ['cooking', 'sports'];
// const personalData = [30, 'Anonymous', { moreDetails: [] }];

// const analytics = [[1, 1.6], [-5.4, 2.1]]

// // for-of loop used for arrays
// for (const data of analytics) {
//     for (const point of data) {
//         console.log(point);
//     }
// }
// console.log(personalData[1]);
// // ///////////////////////////////////////////////////////////////////
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


// console.log('\n');
// hobbies.splice(1, 0, 'something');
// console.log(hobbies)
// let removed = hobbies.splice(2, 3, 'something else');
// console.log(hobbies)
// console.log(removed)
// hobbies.splice(2, 0, 'something else again', 'something else again and again', 'more of something')
// console.log(hobbies)

// // // ///////////////////////////////////////////////////////////////////

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

// // // ///////////////////////////////////////////////////////////////////


// console.log('\n');

// let prices = [10.99, 5.99, 3.99, 6.59];
// let tax = 0.19;
// let taxAdjustedPrices = [];

// // for (const price of prices) {
// //     taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//     taxAdjustedPrices.push({ index: idx, taxAdjPrice: price * (1 + tax) });
// });

// console.log(taxAdjustedPrices);

// // // ///////////////////////////////////////////////////////////////////
// console.log('\n');

// let prices = [10.99, 5.99, 3.99, 6.59];
// let tax = 0.19;

// // the returned object in the map function will be a new object created in memory
// const newPrices = prices.map((price, idx, prices) => {
//     return { index: idx, taxAdjPrice: price * (1 + tax) };
// });

// console.log(prices);
// console.log(newPrices);
// console.log(`sorted prices: ${prices.sort((a, b) => { return a > b })}`)
// console.log(`reversed prices: ${prices.reverse()}`)
// let filterVal = 6
// console.log(`prices greater than ${filterVal}: ${prices.filter((price, idx, prices) => { return price > filterVal })}`);
// console.log(`prices greater than ${filterVal}: ${prices.filter(price => price > filterVal)}`);

// // the zero argument in the end, id the initial value set for the prevVal
// let sum = prices.reduce((prevVal, curVal, curIdx, prices) => { return prevVal + curVal; }, 0);
// console.log(sum);
// sum = prices.reduce((prevVal, curVal) => prevVal + curVal, 0);
// console.log(sum);

// // // // ///////////////////////////////////////////////////////////////////
// console.log('\n');
// const data = 'new york;10.99;2000';
// console.log(data);
// console.log('\n');
// let newData = data.split(';')
// newData[1] = +newData[1]
// console.log(newData);
// let fullName = ['Max', 'Schwarz'];
// let fullNameJoined = fullName.join(' ');
// console.log(fullNameJoined);
// let copiedNames = [...fullName];
// console.log(copiedNames);

///////////////////////////////////////////////////////////////////
// console.log('\n');
// let prices = [10.99, 5.99, 3.99, 6.59];
// // // the below statement will give an error, so use the statement after that
// // console.log(Math.min(prices));
// console.log(Math.min(...prices));

///////////////////////////////////////////////////////////////////
// console.log('\n');
// let nameData = ['Max', 'Schwarz'];

// // let [firstName, lastName] = nameData;
// // console.log(firstName, lastName);

// nameData = ['Max', 'Schwarz', 'Mr', 30];

// let [firstName, lastName, ...otherInfo] = nameData;
// console.log(firstName, lastName, otherInfo);

///////////////////////////////////////////////////////////////////
