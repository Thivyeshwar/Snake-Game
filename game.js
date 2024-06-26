import {update as updateSnake, draw as drawSanke, SNAKE_SPEED, getSnakeHead, snakeInterSection} from './snake.js'
import {update as  updateFood ,draw as drawFood} from './food.js'
import { outSideGrid } from './grid.js';


let lastRenderTime=0
let gameOver=false;

const gameBoard=document.getElementById('game-board');
function main(currentTime){
    
    if(gameOver){
       if(confirm('you lost. press to restart.')){
        window.location='/'
       }
       return 
    }
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime-lastRenderTime)/1000
    // window.requestAnimationFrame(main);
    // console.log(secondsSinceLastRender);
    
    if(secondsSinceLastRender<1/SNAKE_SPEED){
        return;
    }
    
    // console.log('Render');
    lastRenderTime=currentTime;
    
    update()
    draw()
    
}


window.requestAnimationFrame(main);

function update(){
    
    updateSnake()
    updateFood()
    checkDeath()
}

function draw(){
    gameBoard.innerHTML='';
    drawSanke(gameBoard)
    drawFood(gameBoard)


}

function checkDeath(){
    gameOver= outSideGrid(getSnakeHead()) || snakeInterSection()
}
