function getComputerChoice() {
    // CALCULATE random number from 0 - 2
    let choice = Math.floor(Math.random() * 3);

    // IF the number is 0, then the choice will be "paper"
    // ELSE IF the number is 0, then the choice will be "paper"
    // ELSE the choice will be "scissors"
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}

// ASSIGN 
const computerSelection = getComputerChoice();

console.log(computerSelection)