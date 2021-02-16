// if (0.2 + 0.4 === 0.6) {
//     console.log('true');
// } else {
//     console.log('false'); // false will be printed
// }

// // THIS HAPPENS BECAUSE 0.2 = (1/5) AND THE CALCULATIONS HAPPEN IN BINARY SYSTEM AND ARE CONVERTED BACK TO THE DECIMAL SYSTEM
// // SO, IN BINARY SYSTEM, THE NUMBER IS (1/101)= 0.00110011001100...; SO THIS WILL BE PART OF THE CALCULATION AND 
// // THE RESULT OF 0.2+0.4=0.6000000000000000000000000000000000000000000000000001
// let a = (1 / 5).toString(2) // gives the answer of (1/5) in binary base=2;
// console.log(a);
// a = (1 / 5).toString(8) // gives the answer of (1/5) in octal base=8;
// console.log(a);

// // FIXING PRECISION
// console.log(20.2.toString(20));
// console.log(20.2.toFixed(5));
// console.log(20.2.toFixed(20));
// console.log(20.2.toFixed(5)===20.2);

// // BIGINT
// // WHEN THERE IS A HUGE INTEGER, JUST ADD n TO THE END OF THE NUMBER LITERAL
// // without bigint
// const maxNum = Number.MAX_SAFE_INTEGER
// const bigInt = 999999999999999999999999999999999999999999999999999999999n;
// console.log(maxNum);
// console.log(bigInt);

// // RANDOM INTEGER NUMBER RANGE
// function randomIntBetween(min, max) { // min: 5, max: 10
//     // return Math.random() * (max - min) + min; // to include maximum number as well, use (max - min + 1)
//     return Math.floor(Math.random() * (max - min + 1) + min) // in order to get the integer including the max value
// }
// let sum = 0;
// let nSamples = 10000000;
// let min = 0;
// let max = 10;
// for (let i = 0; i < nSamples; i++) {
// sum+=randomIntBetween(min, max);
// }
// console.log(sum/nSamples);

// // TAGGED TEMPLATES
// function productDescription(strings, productName, productPrice){
//     console.log(strings);
//     console.log(productName);
//     console.log(productPrice);
//     let priceCategory = 'cheap';
//     if (productPrice>20){
//         priceCategory = 'fair';
//     }
//     return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
// }
// const prodName = 'Javascript Course';
// const prodPrice = 29.99;

// const productOutput = productDescription`This product (${prodName}) is ${prodPrice}`;
// console.log(productOutput);

// // REGULAR EXPRESSIONS

let regex = /^\S+@\S+\.\S+$/
// console.log(regex.test('test@test.com'));
// console.log(regex.test('test_test.com'));

// regex = new RegExp('hello')

// console.log(regex.test('hello world!'));
// console.log(regex.test('Hello world!'));

// regex = new RegExp('(h|H)ello')

// console.log(regex.test('hello world!'));
// console.log(regex.test('Hello world!'));

// regex = new RegExp('.ello')

// console.log(regex.test('hello world!'));
// console.log(regex.test('Hello world!'));
// console.log(regex.test('jello'));
// console.log(regex.test('      Jello'));

regex = /\.com/;
console.log(regex.test('test@test.com'));
console.log(regex.exec('test@test.com'));