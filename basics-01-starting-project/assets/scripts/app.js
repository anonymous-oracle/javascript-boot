const defaultResult = 0;
let currentResult = defaultResult;

function addTwoNumbers(num1, num2) {
    let sum = num1 + num1;
    // alert('add function called; result is '+sum);
    // return num1 + num2;
    return sum;
}

addTwoNumbers(1, 2);
addTwoNumbers(3, 4);
currentResult = addTwoNumbers(5, 5);

currentResult = (currentResult + 10) * 3 / 2 - 1;
let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);