// Based upon Web Dev Simplified (https://youtu.be/QTcIXok9wNY)

import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";

import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";
import {
  draw as drawScore,
  update as updateScore,
  saveScore,
} from "./score.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");
const scoreField = document.getElementById("score");
export const highscoreField = document.getElementById("highscore");

function main(currentTime) {
  if (gameOver) {
    saveScore(highscoreField);
    if (confirm("You lose. Press okay to restart.")) {
      window.location = "./snake.html";
    }
    return;
  }

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

  if (secondsSinceLastRender < 1 / SNAKE_SPEED) {
    return;
  }

  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateScore();
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  gameBoard.innerText = "";
  drawScore(scoreField);
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
