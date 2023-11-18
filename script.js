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
    let choice = prompt("Rock, paper, scissors?").toLowerCase();
    return choice;
}

function playRound(playerSelection, computerSelection) {
    
    // DEFINE win, lose, or draw message
    function winner(playerSelection, computerSelection) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }

    function loser(playerSelection, computerSelection) {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }

    function draw() {
        return "Nobody wins!";
    }
    
    let outcome;
    // IF the user and computer have the same choice, it is a draw
    if (playerSelection == computerSelection) {
        draw();
        outcome = "draw";
        return outcome;
    }

    // DETERMINE matchup winner 
    switch (playerSelection) {
        case "rock":
            if (computerSelection == "scissors") {
                winner();
                outcome = "win";
                return outcome;
            }
            else if (computerSelection == "paper") {
                loser();
                outcome = "lose";
                return outcome;
            }
        case "paper":
            if (computerSelection == "rock") {
                winner();
                outcome = "win";
                return outcome;
            }
            else if (computerSelection == "scissors") {
                loser();
                outcome = "lose";
                return outcome;
            } 
        case "scissors":
            if (computerSelection == "paper") {
                winner();
                outcome = "win";
                return outcome;
            }
            else if (computerSelection == "rock") {
                loser();
                outcome = "lose";
                return outcome;
            } 
    }
  }

function game() {
    playRound(playerSelection, computerSelection);
}

playRound(getPlayerChoice(),getComputerChoice());