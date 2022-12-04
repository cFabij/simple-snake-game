import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";
import { update as scoreUpdate } from "./score.js";

let food = getRandomFoodPosition();
const EXPANSION_RATE = 3;
export let updatingScore = false;

export function update() {
  updatingScore = false;
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
    updatingScore = true;
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }

  return newFoodPosition;
}
