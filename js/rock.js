// 1. create heading. 2. initilize game board. 3. create options/buttons 4.

//selectors

const gameSection = document.getElementById("game-section");
const chooseSection = document.getElementById("choose-section");

// helpers

const computerSelection = () => {
  let choice = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * 3);
  return choice[randomNum];
};

// Initializing Game
export const handlePlayRock = () => {
  gameSection.style.display = "flex";
  chooseSection.style.display = "none";

  console.log("playing rock");
  const gameTitle = document.createElement("div");
  gameTitle.innerText = "Rock Paper Scissors";
  gameSection.append(gameTitle);
  const gameBoard = document.createElement("div");
  gameBoard.setAttribute("id", "rock-board");
  gameSection.append(gameBoard);
  const instructions = document.createElement("div");
  instructions.innerText =
    "Select your choice below and see if you can beat the computer!";
  gameBoard.append(instructions);
  const rockButton = document.createElement("button");
  const paperButton = document.createElement("button");
  const scissorsButton = document.createElement("button");
  rockButton.innerText = "Rock";
  paperButton.innerText = "Paper";
  scissorsButton.innerText = "Scissors";
  rockButton.addEventListener("click", selectRock);
  paperButton.addEventListener("click", selectPaper);
  scissorsButton.addEventListener("click", selectScissors);
  const buttonContainer = document.createElement("div");
  buttonContainer.setAttribute("class", "button-container");
  gameBoard.append(buttonContainer);
  buttonContainer.append(rockButton, paperButton, scissorsButton);
};

const determineWinner = () => {};

const selectPaper = () => {
  let humanChoice = "Paper";
  let computerChoice = computerSelection();
  const yourChoice = document.createElement("div");
  yourChoice.innerHTML = `You have selected ${humanChoice}`;
  const theirChoice = document.createElement("div");
  theirChoice.innerHTML = `Your opponent has selected ${computerChoice}`;
  yourChoice.setAttribute("id", "your-choice");
  theirChoice.setAttribute("id", "their-choice");
  gameSection.append(yourChoice, theirChoice);
};

const selectRock = () => {
  let humanChoice = "Rock";
  let computerChoice = computerSelection();
  const yourChoice = document.createElement("div");
  yourChoice.innerHTML = `You have selected ${humanChoice}`;
  const theirChoice = document.createElement("div");
  theirChoice.innerHTML = `Your opponent has selected ${computerChoice}`;
  yourChoice.setAttribute("id", "your-choice");
  theirChoice.setAttribute("id", "their-choice");
  gameSection.append(yourChoice, theirChoice);
};

const selectScissors = () => {
  let humanChoice = "Scissors";
  let computerChoice = computerSelection();
  const yourChoice = document.createElement("div");
  yourChoice.innerHTML = `You have selected ${humanChoice}`;
  const theirChoice = document.createElement("div");
  theirChoice.innerHTML = `Your opponent has selected ${computerChoice}`;
  yourChoice.setAttribute("id", "your-choice");
  theirChoice.setAttribute("id", "their-choice");
  gameSection.append(yourChoice, theirChoice);
};
