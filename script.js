//GENERATE a random number from 0-2.
//ASSIGN the number a value of "rock", "paper", or "scissors" depending on the number
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
// STORE the input to be used later on
function getUserChoice() {
    let option = prompt("Rock, paper, scissors?").toLowerCase();
    return option;
}

// DETERMINE if the outcome of the matchup is won, lost or drawn
// OUTPUT a message letting the user know the outcome of the round
// ESTABLISH the result of the round
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

//REPEAT the game to go on for 5 rounds
//TRACK the number of times won, lost, drawn, and disqualified
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

    if (wins > (loses + disqualifications)) {
        console.log("You've won the game!")
    }
    else {
        console.log("You've lost the game.")
    }
}

game();