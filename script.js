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
                return winner();
            }
    }
}

function winner(playerSelection, computerSelection) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
}

function loser(playerSelection, computerSelection) {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
}

function draw() {
    return "It's a draw."
}