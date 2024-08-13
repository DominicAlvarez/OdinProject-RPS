/*
Function for computer to make return its choice
*/
function getComputerChoice() {
  let choices = { 1: "rock", 2: "paper", 3: "scissors" };
  return choices[Math.floor(Math.random() * 3) + 1];
}
// add event listeners to our buttons in html
//rock
const rockBtn = document.querySelector("#rock");
rockBtn.classList.add("playButtons");
//paper
const paperBtn = document.querySelector("#paper");
paperBtn.classList.add("playButtons");
//scissors
const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.classList.add("playButtons");
//new game
const newGameBtn = document.querySelector("#new-game");
newGameBtn.classList.add("newGameBtn");

//initial values to keep track of game scores
let playerScore = 0;
let computerScore = 0;
let winsNeeded = 5;
let isGameOver = false;

//lines that will have values changed or added based on game results
let player = document.querySelector("#player");
let computer = document.querySelector("#computer");
let finalScore = document.querySelector("#final-score");
let roundScore = document.querySelector("#round-result");
let playerName = document.querySelector("#player-score");
let computerName = document.querySelector("#computer-score");
//add button listener events so that a round is played and
//a result is return as soon as a button is clicked by user
rockBtn.addEventListener("click", function () {
  if (!isGameOver) {
    playRound("rock", getComputerChoice());
    endGame();
  }
});

paperBtn.addEventListener("click", function () {
  if (!isGameOver) {
    playRound("paper", getComputerChoice());
    endGame();
  }
});

scissorsBtn.addEventListener("click", function () {
  if (!isGameOver) {
    playRound("scissors", getComputerChoice());
    endGame();
  }
});
newGameBtn.addEventListener("click", function () {
  isGameOver = false;
  playerScore = 0;
  computerScore = 0;
  roundScore.innerText = "";
  player.innerText = "0";
  computer.innerText = "0";
  finalScore.innerText = "";
  player.classList.remove("winner", "loser");
  computer.classList.remove("winner", "loser");
  playerName.classList.remove("winner", "loser");
  computerName.classList.remove("winner", "loser");
});
//Playing game function
function playRound(humanChoice, computerChoice) {
  const newLine = document.createElement("li");
  newLine.classList.add("newLine");
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice == "rock")
  ) {
    newLine.innerText = `You chose ${humanChoice} and the computer chose ${computerChoice}. You win!`;
    roundScore.appendChild(newLine);
    playerScore++;
    player.innerText = playerScore;
  } else if (
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "rock" && computerChoice === "paper")
  ) {
    newLine.innerText = `You chose ${humanChoice} and the computer chose ${computerChoice}. You lost.`;
    roundScore.appendChild(newLine);
    computerScore++;
    computer.innerText = computerScore;
  } else if (humanChoice === computerChoice) {
    newLine.innerText = `You chose ${humanChoice} and the computer chose ${computerChoice}. That's a tie!`;
    roundScore.appendChild(newLine);
  }
}

function endGame() {
  if (playerScore === winsNeeded || computerScore === winsNeeded) {
    isGameOver = true;
    if (playerScore === winsNeeded) {
      finalScore.innerText = "You have defeated the Computer!";
      player.classList.add("winner");
      playerName.classList.add("winner");
      computer.classList.add("loser");
      computerName.classList.add("loser");
    } else if (computerScore === winsNeeded) {
      finalScore.innerText =
        "You have been defeated by the computer :( Try Aagain";
      player.classList.add("loser");
      playerName.classList.add("loser");
      computerName.classList.add("winner");
      computer.classList.add("winner");
    }
  }
}
