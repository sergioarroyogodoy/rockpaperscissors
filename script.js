//GENERATE a random choice of "rock", "paper", or "scissors" to be used as the computer's play
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

// PROMPT the user to provide us with their play
function getUserChoice() {
    let option = prompt("Rock, paper, scissors?").toLowerCase();
    return option;
}

// DETERMINE if the outcome of the matchup is won, lost or drawn
// OUTPUT a message letting the user know the outcome
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
        default:
            return "You did not enter a valid option."
    }
}

//REPEAT the game 5 times
//INCREMENT a number depending on the number of wins, loses and draws
//DETERMINE a winner at the end of the game
function game () {
    for (let i = 0; i < 5; i++) {
        const playerSelection = getUserChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();