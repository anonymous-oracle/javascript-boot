const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
let GAME_RUNNING = false;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS!';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS!';

// let person = {
//     greet: function greet(){alert('hello there')},
// };

// person.greet();

const getPlayerChoice = function () {
    let selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        selection = getComputerChoice();
        alert(`Invalid choice. We chose ${selection} for you`)
        return selection;
    }
    else {
        return selection;
    }
};


const getComputerChoice = function () {
    const randomChoice = Math.round(Math.random() * 3);
    if (randomChoice === 0) {
        return ROCK;
    } else if (randomChoice === 1) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};



const getWinner = function (cChoice, pChoice) {
    if (cChoice === pChoice) {
        return RESULT_DRAW;
    } else if (cChoice === ROCK && pChoice === PAPER ||
        cChoice === PAPER && pChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === ROCK) {
        return RESULT_PLAYER_WINS;
    } else {
        return RESULT_COMPUTER_WINS;
    }
};


startGameBtn.addEventListener('click', function () {
    if (GAME_RUNNING) {
        return;
    }
    GAME_RUNNING = true;
    console.log('Game is starting...');
    let playerSelection, computerSelection, result;
    while (GAME_RUNNING) {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        console.log(`Player choice: ${playerSelection}`)
        console.log(`Computer choice: ${computerSelection}`);
        console.log(' ');
        result = getWinner(computerSelection, playerSelection);
        if (result !== RESULT_DRAW) {
            GAME_RUNNING = false;
            alert(result);
        }
    }
});


// // SHORT HAND FUNCTIONS
// const add = (a, b) => a + b;
// const greet = (name) => alert(`Hi ${name}!`);
// const sayHi = () => alert('Hi!');

// // NOTE: functions can also be used with default values
// function defaultValueFunction(arg1, arg2=defaultValueForArg2){};



// // create functions taking variable number of arguments
// const sumUp = (...numbers) => {
//     let sum = 0;
//     for (const num of numbers) {
//         sum += num;
//     }
//     return sum;
// };



// let res = sumUp(1, 5, 1, 5, 6, 6, 9, 7, 2, 3, 9, 6, 3);
// console.log(res);