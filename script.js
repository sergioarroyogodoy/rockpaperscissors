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
    let outcome;
    
    let draw = () => "It's a draw!";
    let win = (playerSelection, computerSelection) => `You win, ${playerSelection} beats ${computerSelection}.`;
    let lose = (playerSelection, computerSelection) => `You lose, ${computerSelection} beats ${playerSelection}.`

    if (playerSelection == computerSelection) {
        console.log(draw());
        outcome = "draw"
        return outcome;
    }
    switch (playerSelection) {
        case "rock":
            if (computerSelection == "scissors") {
                console.log(win(playerSelection, computerSelection));
                outcome = "win";
                return outcome;
            }
            else {
                console.log(lose(playerSelection, computerSelection));
                outcome = "loss";
                return outcome;
            }
        case "paper":
            if (computerSelection == "rock") {
                console.log(win(playerSelection, computerSelection));
                outcome = "win";
                return outcome;
            }
            else {
                console.log(lose(playerSelection, computerSelection));
                outcome = "loss";
                return outcome;
            }
        case "scissors":
            if (computerSelection == "paper") {
                console.log(win(playerSelection, computerSelection));
                outcome = "win";
                return outcome;
            }
            else {
                console.log(lose(playerSelection, computerSelection));
                outcome = "loss";
                return outcome;
            }
        default:
            console.log("You did not enter a valid option.");
            outcome = null;
            return outcome;
    }
}

//REPEAT the game 5 times
//INCREMENT a number depending on the number of wins, loses and draws
//DETERMINE a winner at the end of the game
function game () {
    let wins = 0;
    let loses = 0;
    let draws = 0;
    let disqualifications = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = getUserChoice();
        const computerSelection = getComputerChoice();
        
        let outcome = playRound(playerSelection, computerSelection);


        if (outcome == "win") {
            wins++
        }
        else if (outcome == "loss") {
            loses++;
        }
        else if (outcome == "draw") {
            draws++;
        }
        else {
            disqualifications++;
        }
    }
    
    console.log(`Wins: ${wins}, Loses: ${loses}, Draws: ${draws}, Disqualifications: ${disqualifications}`)
}

game();