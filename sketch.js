var gameState = "start";

function preload(){

}

function setup(){
    createCanvas(displayWidth, displayHeight);

    game = new Game();
}

function draw(){
    if(gameState === "start"){
        game.displayStart();
    }
    else if(gameState === "help"){
        game.displayHelp();
    }
    else if(gameState === "play"){
        game.displayPlay();
    }
}