let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
    const humanDifference = Math.abs(targetNumber - userGuess);
    const computerDifference = Math.abs(targetNumber - computerGuess);
  
  // Compare the differences and determine the winner
    if (humanDifference <= computerDifference) {
    // Human guess is closer (or tied), so human wins
        return true;
    } else {
    // Computer guess is closer, so computer wins
        return false;
  }
};

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
};

const advanceRound = () => {
    currentRoundNumber++;
};

// Simulate a game of Number Guesser
// First, generate the target number for the current round
const targetNumber = generateTarget();

// Next, prompt the human player to make a guess
const humanGuess = prompt('Enter your guess (between 0 and 9): ');


// Generate a computer guess for the current round
const computerGuess = generateTarget();

// Compare the human and computer guesses to the target number and determine the winner
const humanWins = compareGuesses(humanGuess, computerGuess, targetNumber);

// Update the score for the winner
updateScore(humanWins ? 'human' : 'computer');

// Advance to the next round
advanceRound();

// Output the results to the console
console.log(`Target number: ${targetNumber}`);
console.log(`Human guess: ${humanGuess}`);
console.log(`Computer guess: ${computerGuess}`);
console.log(`Human score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);
console.log(`Current round: ${currentRoundNumber}`);
