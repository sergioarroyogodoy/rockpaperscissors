// COMPUTE a random computer choice of either "rock", "paper", or "scissors"
// OBTAIN "rock", "paper", or "scissors" input from user
// DETERMINE the winner by analyzing who wins
    // IF the user selects "rock", they will defeat "scissors", lose to "paper", and draw against "rock"
    // ELSE IF the user selects "paper", they will defeat "rock", lose to "scissors", and draw against "paper"
    // ELSE IF the user selects "scissors", they will defeat "paper", lose to "rock", and draw against "scissors"
    // ELSE the user inputs a string other than one of the three, they will receive an error message
// 

function playRound(playerSelection, computerSelection,) {
    switch (playerSelection) {
        case "rock":
            if (computerSelection == "scissors") {
                return winner(playerSelection, computerSelection)
            }
            else if (computerSelection == "paper") {
                return loser(playerSelection, computerSelection);
            }
            else {
                return draw();
            }
        case "paper":
            if (computerSelection == "rock") {
                return winner(playerSelection, computerSelection);
            }
            else if (computerSelection == "scissors") {
                return loser(playerSelection, computerSelection);
            }
            else {
                return draw();
            }
        case "scissors":
            if (computerSelection == "paper") {
                return winner(playerSelection, computerSelection);
            }
            else if (computerSelection == "rock") {
                return loser(playerSelection, computerSelection);
            }
            else {
                return draw();
            }
        default:
            return "You did not enter a valid option"
    }
}

function winner(playerSelection, computerSelection) {
    return `You win! ${playerSelection.charAt(0).toUpperCase().concat(playerSelection.substr(1))} beats ${computerSelection}.`;
}

function loser(playerSelection, computerSelection) {
    return `You lose! ${computerSelection.charAt(0).toUpperCase().concat(computerSelection.substr(1))} beats ${playerSelection}.`;
}

function draw() {
    return "It's a draw."
}

function game() {
    for (let i = 0; i < 6; i++) {
        console.log(playRound("rock", "scissors"));
    }
}