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
    let choice = prompt("Rock, paper, scissors?");
    console.log(choice.toLowerCase());
    return choice.toLowerCase();
}

getPlayerChoice();