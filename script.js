let p1scoreEl = document.querySelector('.p1score')
let p2scoreEl = document.querySelector('.p2score')

let rockEl = document.querySelector('.rock')
let paperEl = document.querySelector('.paper')
let scissorsEl = document.querySelector('.scissors')

let startTextEl = document.querySelector('.startText')
let resetBtnEl = document.querySelector('.resetBtn')



rockEl.addEventListener("click", () => {
    animateChoice(rockEl)
    playRound("rock")
})

paperEl.addEventListener("click", () => {
    animateChoice(paperEl)
    playRound("paper")
})

scissorsEl.addEventListener("click", () => {
    animateChoice(scissorsEl)
    playRound("scissors")
})


function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let randomIndex = Math.floor(Math.random() * 3)
    return choices[randomIndex]
}


function playRound(playerChoice) {
    let computerChoice = getComputerChoice()

    if (playerChoice === computerChoice) {
        startTextEl.textContent = `It's a draw! You both chose ${playerChoice}`
        return
    }

    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        startTextEl.textContent = `You win! ${playerChoice} beats ${computerChoice}`
        updateScore("player")
    } else {
        startTextEl.textContent = `You lose! ${computerChoice} beats ${playerChoice}`
        updateScore("computer")
    }
}


let p1score = 0
let p2score = 0

function updateScore(winner) {
    if (winner === "player") {
        p1score++
        p1scoreEl.textContent = p1score
    } else if (winner === "computer") {
        p2score++
        p2scoreEl.textContent = p2score
    }
}


resetBtnEl.addEventListener("click", () => {
    p1score = 0
    p2score = 0
    p1scoreEl.textContent = p1score
    p2scoreEl.textContent = p2score
    startTextEl.textContent = "Make a choice to start the game"
})



function animateChoice(element) {
    element.classList.add("clicked")

    setTimeout(() => {
        element.classList.remove("clicked")
    }, 300)
}