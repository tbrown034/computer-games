// main.js

// imports
import { handlePlayConnect } from "./js/connect.js";
import { handlePlayRock } from "./js/rock.js";
import { handlePlayTic } from "./js/tic.js";

//selectors

const nameInput = document.getElementById("name-input");
const nameButton = document.getElementById("name-button");
const chooseSection = document.getElementById("choose-section");
const playRock = document.getElementById("play-rock");
const playTic = document.getElementById("play-tic");
const goBack = document.getElementById("go-back");
const playConnect = document.getElementById("play-connect");
const welcomeMessage = document.getElementById("welcome-message");
const gameSection = document.getElementById("game-section");
const introSection = document.getElementById("intro-section");

// helpers

const enterName = () => {
  let userName = nameInput.value.trim();
  if (userName) {
    welcomeMessage.innerHTML = `Welcome ${userName}! Please select a game to continue`;
    chooseSection.style.display = "flex";
    nameInput.value = "";
  } else {
    alert("Please enter your name."); // Simple validation
  }
};

const clickGoBack = () => {
  // Reset input fields and messages
  nameInput.value = "";
  welcomeMessage.innerHTML = "";

  // Clear dynamically added content
  gameSection.innerHTML = "";

  // Restore the initial display state of sections
  introSection.style.display = "flex";
  chooseSection.style.display = "none";
  gameSection.style.display = "none";
};

// event listeners

nameButton.addEventListener("click", enterName);

goBack.addEventListener("click", clickGoBack);

playConnect.addEventListener("click", handlePlayConnect);
playRock.addEventListener("click", handlePlayRock);
playTic.addEventListener("click", handlePlayTic);
