// main.js

//selectors

const nameInput = document.getElementById("name-input");
const nameButton = document.getElementById("name-button");
const chooseSection = document.getElementById("choose-section");
const playRock = document.getElementById("play-rock");
const playTic = document.getElementById("play-tic");
const playConnect = document.getElementById("play-connect");
const welcomeMessage = document.getElementById("welcome-message");

// helpers

const enterName = () => {
  let userName = nameInput.value;
  welcomeMessage.innerHTML = `Welcome ${userName}! Please select a game to continue`;
  chooseSection.style.display = "flex";
  nameInput.value = "";
};

// event listeners

nameButton.addEventListener("click", enterName);
