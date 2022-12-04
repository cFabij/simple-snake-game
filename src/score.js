import { updatingScore } from "./food.js";
import { highscoreField } from "./game.js";
let score = 0;
let checkHighscore = true;
let currentHighscore = 0;

export function update() {
  if (updatingScore) {
    score += 1;
  }
}

export function draw(scoreField) {
  scoreField.innerHTML = score;

  if (checkHighscore) {
    if (localStorage.getItem("highscore")) {
      currentHighscore = localStorage.getItem("highscore");
    }
    highscoreField.innerHTML = currentHighscore;
    checkHighscore = false;
  }
}

export function saveScore(highscoreField) {
  if (score > currentHighscore) {
    localStorage.setItem("highscore", score);
  }
}
