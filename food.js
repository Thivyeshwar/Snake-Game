import { randomGridPosition } from "./grid.js";
import { onSnake,expandSnake } from "./snake.js";


let food=getRandomFoodPosition()
const Expansion_Rate = 1;

export function update(){
    
    if(onSnake(food)){
        expandSnake(Expansion_Rate);
        food=getRandomFoodPosition()
    }
}
export function draw(gameBoard){
    
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart= food.y
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);

}

function getRandomFoodPosition(){
    let newFoodPosition
    while(newFoodPosition==null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition;

}