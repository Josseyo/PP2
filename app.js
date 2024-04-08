// The elements
const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 5)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a tie...";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "Scissors" || computerChoice === "Lizard") ? "You win!" : "You lose:(";
                break;
            case "paper":
                result = (computerChoice === "Rock" || computerChoice === "Spock") ? "You win!" : "You lose:(";
                break;
            case "scissors":
                result = (computerChoice === "Paper" || computerChoice === "Lizard") ? "You win!" : "You lose:(";
                break;
            case "lizard":
                result = (computerChoice === "Spock" || computerChoice === "Paper") ? "You win!" : "You lose:(";
                break;
            case "spock":
                result = (computerChoice === "Rock" || computerChoice === "Scissors") ? "You win!" : "You lose:(";
                break;
            default:
                result = "Invalid choice!";
        }
    }

    playerDisplay.textContent = ` ${playerChoice}`;
    computerDisplay.textContent = ` ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");


    switch (result) {
        case "You win!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            playerScoreDisplay.classList.add("greenText");

            break;
        case "You lose:(":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            computerScoreDisplay.classList.add("redText");

            break;
    }
}