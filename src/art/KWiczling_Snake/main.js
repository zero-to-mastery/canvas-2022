class DomManipulation{

    constructor(canvasHeight, canvasWidth){

        this.canvas = document.getElementById("play");
        this.canvas.height = canvasHeight;
        this.canvas.width = canvasWidth;
        
        this.ctx = this.canvas.getContext("2d");
        
        this.score = document.getElementById("score");
        this.elon = document.getElementById("elon");
        this.endscore = document.getElementById("endscore");
    }
    clearCanvas() {
        this.ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    }
    drawSquare(x,y,s){
        this.ctx.fillRect(x, y, s, s);
    }
    showEndScreen(){
        this.elon.style.display = "flex";
    }
    hideEndScreen(){
        this.elon.style.display = "none";
    }
    scoreUp(points){
        this.score.innerHTML = "Points: " + points;
    }
    hideScore(){
        this.score.style.visibility = "hidden";
    }
    showScore(){
        this.score.style.visibility = "visible";
    }
    endScore(points){
        this.endscore.innerHTML = "You're score: " + points;
    }
}
//Snake
class Snake{
    constructor(){
        this.direction = 0;
        
        this.body = [];
        this.resetSnake();
        
    }
    resetSnake(){
        this.direction = 0;
        this.body = [
            [50, 50],
            [60, 50],
            [70, 50],
            [80, 50],
        ];
    }
    growSnake(points){
        this.body.push([]);
        if(points%5 === 0)
            return true;
    }
    changeSnake(){
        let sTemp = this.body[0];

        switch (this.direction) {
            case 0: sTemp[0] = sTemp[0] + 10; break;
            case 1: sTemp[0] = sTemp[0] - 10; break;
            case 2: sTemp[1] = sTemp[1] - 10; break;
            case 3: sTemp[1] = sTemp[1] + 10; break;
        }
        for (let i = this.body.length - 1; i > 0; --i) {
            this.body[i][0] = this.body[i - 1][0];
            this.body[i][1] = this.body[i - 1][1];
        }
        this.body[0] = sTemp;
        
    }
    hitTail(){
        for (let i = 3; i < this.body.length; ++i) {
            if (this.body[i][0] === this.body[0][0] && this.body[i][1] === this.body[0][1]) {
                return true;
            }
        }
    }
}
//Food
class Food{
    constructor(){
        this.x = 100;
        this.y = 100;
    }
    generateFood() {
        this.x = Math.floor((Math.random() * canvasWidth));
        this.x -=  (this.x % gridSize);
        this.y = Math.floor((Math.random() * canvasHeight));
        this.y -= (this.y % gridSize);
    }
}
//Game
class Game{
    constructor(height, width , grid){
        this.fps = 8;
        this.count = 0;
        this.gridSize = grid;
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.isGamePlay = false;

        this.snake = new Snake();
        this.food = new Food();
        this.dom = new DomManipulation(height, width);
        
        this.refresh;
    }
    
    startGame(){
        game.setup();
        game.gameLoop();
    }
    setup(){
        clearTimeout(game.refresh);
        
        game.fps = 8;
        game.count = 0;
        game.isGamePlay = true;
        game.snake.resetSnake();
        game.dom.hideEndScreen();
        game.dom.showScore();
        game.dom.scoreUp(game.count);
        game.food.generateFood();
    }
    drawUpdate(){
        game.dom.clearCanvas();
        game.dom.drawSquare(game.food.x, game.food.y,  game.gridSize);
        game.snake.body.forEach((snake_element) =>{
            game.dom.drawSquare(snake_element[0], snake_element[1], game.gridSize);
        });  
    }
    endGame(){
        clearTimeout(game.refresh);
        game.dom.clearCanvas();
        game.isGamePlay = false;
        game.dom.endScore(game.count);
        game.dom.hideScore();
        game.dom.showEndScreen();
    }
    gameLoop() {
        if (game.isGamePlay) {
            
            game.drawUpdate()
            if (game.snake.body[0][0] == game.food.x && game.snake.body[0][1] == game.food.y) {
                
                game.count += (game.fps - 6)/2;
                if(game.snake.growSnake(game.count))
                    game.fps += 2;
                game.dom.scoreUp(game.count);
                game.food.generateFood();
            }
            if (game.snake.body[0][0] > game.canvasWidth - 10 ) 
                game.endGame();
            if (game.snake.body[0][0] < 0 ) 
                game.endGame();
            if (game.snake.body[0][1] > game.canvasHeight - 10 ) 
                game.endGame();
            if (game.snake.body[0][1] < 0) 
                game.endGame();
            game.snake.changeSnake();
            if(game.snake.hitTail())
                game.endGame()
            game.refresh = setTimeout(game.gameLoop, 1000/game.fps);
        }
        
    }
}
//Main
let canvasHeight = 300;
let canvasWidth = 600;
let gridSize = 10;
let game = new Game(canvasHeight, canvasWidth, gridSize);

document.addEventListener("keydown", keyPress);

function keyPress(e) {
    switch (e.code) {
        case "Enter":
            if(!game.isGamePlay)
             game.startGame(); break;
        case "ArrowRight":
            if (game.snake.direction != 1)
                game.snake.direction = 0; break;
        case "ArrowLeft":
            if (game.snake.direction != 0)
                game.snake.direction = 1; break;
        case "ArrowUp":
            if (game.snake.direction != 3)
                game.snake.direction = 2; break;
        case "ArrowDown":
            if (game.snake.direction != 2)
                game.snake.direction = 3; break;
    }
}

