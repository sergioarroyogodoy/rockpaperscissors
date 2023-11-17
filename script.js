// COMPUTE a random computer choice of either "rock", "paper", or "scissors"
// OBTAIN "rock", "paper", or "scissors" input from user
// DETERMINE the winner by analyzing who wins
    // If the matchup is "rock" vs "paper", THEN "paper" wins
    // IF the matchup is "rock" vs "scissors", THEN "rock" wins
    // If the matchup is "paper" vs "scissors", THEN "scissors" wins

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock":
            if (computerSelection == "scissors") {
                return winner(playerSelection, computerSelection);
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

console.log(playRound("paper", "scissors"))