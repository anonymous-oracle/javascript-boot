const defaultResult = 0;
let currentResult = defaultResult;

// function addTwoNumbers(num1, num2) {
//     let sum = num1 + num1;
//     // alert('add function called; result is '+sum);
//     // return num1 + num2;
//     return sum;
// }


function getParsedNumberInput() {
    return parseInt(userInput.value);
}

function addTwoNumbers() {
    const enteredNumber = getParsedNumberInput();
    const calculationDescription = `${currentResult} + ${enteredNumber}`
    currentResult = currentResult + enteredNumber;
    // event listener listens to clicks always, but the outputResult function does not execute again
    // so if outputResult function is included within the eventlistener call function, then it will be executed every time
    outputResult(currentResult, calculationDescription);
}

function subtractTwoNumbers() {
    const enteredNumber = getParsedNumberInput();
    const calculationDescription = `${currentResult} - ${enteredNumber}`
    currentResult = currentResult - enteredNumber;
    outputResult(currentResult, calculationDescription);
}

function multiplyTwoNumbers() {
    const enteredNumber = getParsedNumberInput();
    const calculationDescription = `${currentResult} * ${enteredNumber}`
    currentResult = currentResult * enteredNumber;
    outputResult(currentResult, calculationDescription);
}

function divideTwoNumbers() {
    const enteredNumber = getParsedNumberInput();
    const calculationDescription = `${currentResult} / ${enteredNumber}`
    currentResult = currentResult / enteredNumber;
    outputResult(currentResult, calculationDescription);
}


// function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
//     const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
//     outputResult(currentResult, calcDescription);
// }


// function addTwoNumbers() {
//     const enteredNumber = getParsedNumberInput();
//     const initialResult = currentResult;
//     currentResult = currentResult + enteredNumber;
//     createAndWriteOutput('+', initialResult, enteredNumber);
// }

// function subtractTwoNumbers() {
//     const enteredNumber = getParsedNumberInput();
//     const initialResult = currentResult;
//     currentResult = currentResult - enteredNumber;
//     createAndWriteOutput('-', initialResult, enteredNumber);

// function multiplyTwoNumbers() {
//     const enteredNumber = getParsedNumberInput();
//     const initialResult = currentResult;
//     currentResult = currentResult * enteredNumber;
//     createAndWriteOutput('*', initialResult, enteredNumber);
// }

// function divideTwoNumbers() {
//     const enteredNumber = getParsedNumberInput();
//     const initialResult = currentResult;
//     currentResult = currentResult / enteredNumber;
//     createAndWriteOutput('/', initialResult, enteredNumber);
// }


addBtn.addEventListener('click', addTwoNumbers);
subtractBtn.addEventListener('click', subtractTwoNumbers);
multiplyBtn.addEventListener('click', multiplyTwoNumbers);
divideBtn.addEventListener('click', divideTwoNumbers);











// addTwoNumbers(1, 2);
// addTwoNumbers(3, 4);
// currentResult = addTwoNumbers(5, 5);

// currentResult = (currentResult + 10) * 3 / 2 - 1;
// let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

addBtn.addEventListener('click', addTwoNumbers);

