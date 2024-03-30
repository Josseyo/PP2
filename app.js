const computerChoiceDisplay = document.getElementById('computer-choice')
const myChoiceDisplay = document.getElementById('my-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let mychoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    mychoice = e.target.id

    myChoiceDisplay.innerHTML = mychoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 5) + 1
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }


    if (randomNumber === 4) {
        computerChoice = 'spock'
    }

    if (randomNumber === 5) {
        computerChoice = 'lizard'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === mychoice) {
        result = 'its a draw!'
    }

    if (computerChoice === 'rock' && mychoice === 'paper') {
        result = 'you win!'
    }

    if (computerChoice === 'rock' && mychoice === 'scissors') {
        result = 'you lost!'
    }

    if (computerChoice === 'rock' && mychoice === 'lizzard') {
        result = 'you lost!'
    }

    if (computerChoice === 'rock' && mychoice === 'spock') {
        result = 'you win!'
    }



    if (computerChoice === 'paper' && mychoice === 'scissors') {
        result = 'you win!'
    }

    if (computerChoice === 'paper' && mychoice === 'rock') {
        result = 'you lost!'
    }

    if (computerChoice === 'paper' && mychoice === 'lizzard') {
        result = 'you win!'
    }

    if (computerChoice === 'paper' && mychoice === 'spock') {
        result = 'you lost!'
    }




    if (computerChoice === 'scissors' && mychoice === 'rock') {
        result = 'you win!'
    }

    if (computerChoice === 'scissors' && mychoice === 'rock') {
        result = 'you win!'
    }

    if (computerChoice === 'scissors' && mychoice === 'lizzard') {
        result = 'you lost!'
    }

    if (computerChoice === 'scissors' && mychoice === 'spock') {
        result = 'you win!'
    }
    resultDisplay.innerHTML = result
}