let rock = 0.22;
let paper = 0.55;
let scissors = 0.77;

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.random();

    if (choice <= rock) {
        return 'rock';
    } else if (choice <= paper) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Write Rock, Paper, or Scissors").toLowerCase();  // Make the input case-insensitive
    console.log("Human:", humanChoice);
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie! Both chose " + humanChoice);
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        console.log("You win! " + capitalizeFirstLetter(humanChoice) + " beats " + computerChoice);
        humanScore++;  
    } else {
        console.log("You lose! " + capitalizeFirstLetter(computerChoice) + " beats " + humanChoice);
        computerScore++; 
    }

    console.log("Scores: You - " + humanScore + " | Computer - " + computerScore);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function playGame() {
    for (let round = 1; round <= 5; round++) {
        console.log(`\nRound ${round}:`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("\nGame Over! Final Scores:");
    console.log("You - " + humanScore + " | Computer - " + computerScore);

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie game!");
    }
}

playGame();
