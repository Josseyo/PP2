const holder = ["rock", "paper", "scissors", "lizard", "spock"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

const options = document.querySelectorAll(".button");
options.forEach((option) => {
    option.addEventListener("click", function () {
        const playerChoice = option.getAttribute("aria-label");
        playGame(playerChoice);
    });
});

function playGame(playerChoice) {
    const computerChoice = holder[Math.floor(Math.random() * 5)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a tie...";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors" || computerChoice === "lizard") ? "You win!" : "You lose:(";
                break;
            case "paper":
                result = (computerChoice === "rock" || computerChoice === "spock") ? "You win!" : "You lose:(";
                break;
            case "scissors":
                result = (computerChoice === "paper" || computerChoice === "lizard") ? "You win!" : "You lose:(";
                break;
            case "lizard":
                result = (computerChoice === "spock" || computerChoice === "paper") ? "You win!" : "You lose:(";
                break;
            case "spock":
                result = (computerChoice === "rock" || computerChoice === "scissors") ? "You win!" : "You lose:(";
                break;
            default:
                result = "Invalid choice!";
        }
    }

    display(playerChoice, computerChoice, result);
}

function display(player, computer, decision) {
    playerDisplay.textContent = player;
    computerDisplay.textContent = computer;
    resultDisplay.textContent = decision;

    resultDisplay.classList.remove("greenText", "redText");

    switch (decision) {
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