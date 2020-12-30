const defaultResult = 0;
let currentResult = defaultResult;

// function addTwoNumbers(num1, num2) {
//     let sum = num1 + num1;
//     // alert('add function called; result is '+sum);
//     // return num1 + num2;
//     return sum;
// }

let logEntries = [];
function getParsedNumberInput() {
    return Number(userInput.value);
}

function logOutput(enteredNumber) {
    logEntries.push(enteredNumber);
    console.log(logEntries);
}

function writeLogObject(operator, prevResult, enteredNumber, newResult){
    const entry = {
        operation: operator,
        prevResult: prevResult,
        number: enteredNumber,
        result: currentResult
    };
    logEntries.push(entry);
    console.log(logEntries);
}

function addTwoNumbers() {
    const enteredNumber = getParsedNumberInput();
    const initialResult = currentResult;
    const calculationDescription = `${currentResult} + ${enteredNumber}`
    currentResult = currentResult + enteredNumber;
    // event listener listens to clicks always, but the outputResult function does not execute again
    // so if outputResult function is included within the eventlistener call function, then it will be executed every time
    outputResult(currentResult, calculationDescription);
    // logOutput(enteredNumber);
    writeLogObject('+', initialResult, enteredNumber, currentResult);
}

function subtractTwoNumbers() {
    const enteredNumber = getParsedNumberInput();
    const initialResult = currentResult;
    const calculationDescription = `${currentResult} - ${enteredNumber}`
    currentResult = currentResult - enteredNumber;
    outputResult(currentResult, calculationDescription);
    // logOutput(enteredNumber);
    writeLogObject('-', initialResult, enteredNumber, currentResult);
}

function multiplyTwoNumbers() {
    const enteredNumber = getParsedNumberInput();
    const initialResult = currentResult;
    const calculationDescription = `${currentResult} * ${enteredNumber}`
    currentResult = currentResult * enteredNumber;
    outputResult(currentResult, calculationDescription);
    // logOutput(enteredNumber);
    writeLogObject('*', initialResult, enteredNumber, currentResult);
}

function divideTwoNumbers() {
    const enteredNumber = getParsedNumberInput();
    const initialResult = currentResult;
    const calculationDescription = `${currentResult} / ${enteredNumber}`
    currentResult = currentResult / enteredNumber;
    outputResult(currentResult, calculationDescription);
    // logOutput(enteredNumber);
    writeLogObject('/', initialResult, enteredNumber, currentResult);
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


