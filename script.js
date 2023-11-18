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

    if (playerSelection == computerSelection) {
        return draw();
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, "rock"));