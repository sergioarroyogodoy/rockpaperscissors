//GENERATE a random choice of "rock", "paper", or "scissors" to be used as the computer's play.
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {    
    let draw = () => "It's a draw!";
    let win = (playerSelection, computerSelection) => `You win, ${playerSelection} beats ${computerSelection}.`;
    let lose = (playerSelection, computerSelection) => `You lose, ${computerSelection} beats ${playerSelection}.`

    if (playerSelection == computerSelection) {
        return draw();
    }
    switch (playerSelection) {
        case "rock":
            if (computerSelection == "scissors") {
                return win(playerSelection, computerSelection);
            }
            else {return lose(playerSelection, computerSelection);}
        case "paper":
            if (computerSelection == "rock") {
                return win(playerSelection, computerSelection);
            }
            else {return lose(playerSelection, computerSelection);}
        case "scissors":
            if (computerSelection == "paper") {
                return win(playerSelection, computerSelection);
            }
            else {return lose(playerSelection, computerSelection);}
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, "paper"));