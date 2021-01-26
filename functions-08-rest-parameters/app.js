const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
      ? RESULT_PLAYER_WINS
      : RESULT_COMPUTER_WINS;

// if (cChoice === pChoice) {
//   return RESULT_DRAW;
// } else if (
//   (cChoice === ROCK && pChoice === PAPER) ||
//   (cChoice === PAPER && pChoice === SCISSORS) ||
//   (cChoice === SCISSORS && pChoice === ROCK)
// ) {
//   return RESULT_PLAYER_WINS;
// } else {
//   return RESULT_COMPUTER_WINS;
// }

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }
  let message = `You picked ${playerChoice ||
    DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `;
  if (winner === RESULT_DRAW) {
    message = message + 'had a draw.';
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + 'won.';
  } else {
    message = message + 'lost.';
  }
  alert(message);
  gameIsRunning = false;
});

// not related to game

const sumUp = (resultHandler, ...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  resultHandler(sum);
};

const subtractUp = function (resultHandler) {
  let diff = 0;
  // the arguments keyword is an array like object of all arguments passed to the function
  for (const num of arguments) {
    diff -= num;
  }
  return diff;
}

const showResult = (messageText, result) => { console.log(`${messageText}${result}`) };

// console.log(sumUp(showResult, 1, 5, 10, -3, 6, 10));
// console.log(sumUp(1, 5, 10, -3, 6, 10, 25, 88));

sumUp(showResult.bind(this, 'The result after adding all numbers is: '), 1, 5, 10, -3, 6, 10);
sumUp(showResult.bind(this, 'The result after adding all numbers is: '), 1, 5, 10, -3, 6, 10, 25, 88);
subtractUp(showResult.bind(this, 'The result after adding all numbers is: '), 1, 10, 15, 20);