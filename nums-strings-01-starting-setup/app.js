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

// BIGINT
// WHEN THERE IS A HUGE INTEGER, JUST ADD n TO THE END OF THE NUMBER LITERAL
// without bigint
const maxNum = Number.MAX_SAFE_INTEGER
const bigInt = 999999999999999999999999999999999999999999999999999999999n;
console.log(maxNum);
console.log(bigInt);