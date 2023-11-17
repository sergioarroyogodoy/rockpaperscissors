// COMPUTE a choice for the computer
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

// OBTAIN choice from user
function getPlayerChoice() {
    let choice = prompt("Rock, paper, scissors?");
    return choice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    function winner (playerSelection, computerSelection) {
        return `You win! ${playerSelection.charAt(0).toUpperCase().concat(playerSelection.slice(1))} beats ${computerSelection}.`
    }
    function loser (playerSelection, computerSelection) {
        return `You lose! ${computerSelection.charAt(0).toUpperCase().concat(computerSelection.slice(1))} beats ${playerSelection}.`
    }
    
    let outcome;
    if (playerSelection == computerSelection) {
        outcome = draw;
        return draw;
    }
    switch (playerSelection) {
        case "rock":
            if (computerSelection == "scissors") {
                winner();
                outcome = win;
                return outcome;
            }
    }
  }