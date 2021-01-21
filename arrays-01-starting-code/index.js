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


/////////////////////////////////////////////////////////////////////////

let yetMoreNums = Array.of(1, 2);
console.log(yetMoreNums);

let moreNums = Array.from(yetMoreNums);
console.log(moreNums);

moreNums = Array.from('hello');
console.log(moreNums);

///////////////////////////////////////////////////////////////////