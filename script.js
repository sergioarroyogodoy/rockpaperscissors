// COMPUTE a random computer choice of either "rock", "paper", or "scissors"
// OBTAIN "rock", "paper", or "scissors" input from user
// DETERMINE the winner by analyzing who wins
    // If the matchup is "rock" vs "paper", THEN "paper" wins
    // IF the matchup is "rock" vs "scissors", THEN "rock" wins
    // If the matchup is "paper" vs "scissors", THEN "scissors" wins

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if ( playerSelection == computerSelection) {
        return "It's a draw";
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
    
}