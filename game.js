class Game{
    constructor(){
        this.story = createElement("h5");
        this.playButton = createButton("PLAY");
        this.helpButton = createButton("HELP");
        this.menuButton = createButton("MENU");
        this.backButton = createButton("BACK");
    }

    displayStart(){
        background("lightblue");  

        this.story.position(displayWidth/12, displayHeight/8);
        this.story.style("font-size", "35px");
        this.story.style("font-family", "cursive");
        this.story.style("color", "blue");
        this.story.html("You have traveled away from the warmth of your home into the realm of spirits, into the Dragon King’s land, in search of Dragon King, so you can slay him once and for all! But why do you embark on this journey? The human kingdom and the spirit realm have been at war for centuries, and your king has chosen you to go slay down the Dragon King so that you can kill him and free humankind from the burden of protecting their land from the spirit realm. Do you accept this challenge? If so, press “Play” now!! Your journey awaits you!!")
        
        this.playButton.position(displayWidth/2, displayHeight/2);
        this.playButton.style("font-size", "25px");
        this.playButton.style("background-color", "blue");
        this.playButton.style("color", "white");
        this.playButton.style("width", "100px");
        this.playButton.style("height", "60px");
        this.playButton.style("font-family", "cursive");
        this.playButton.mousePressed(()=>{
            this.playButton.hide();
            this.helpButton.hide();
            this.menuButton.hide();
            this.backButton.hide();
            this.story.hide();
            gameState = "play";
        })

        this.helpButton.position(displayWidth/2, displayHeight/1.6);
        this.helpButton.style("font-size", "25px");
        this.helpButton.style("background-color", "blue");
        this.helpButton.style("color", "white");
        this.helpButton.style("width", "100px");
        this.helpButton.style("height", "60px");
        this.helpButton.style("font-family", "cursive");
        this.helpButton.mousePressed(()=>{
            gameState = "help";
        })

        this.menuButton.position(displayWidth/2, displayHeight/1.3);
        this.menuButton.style("font-size", "25px");
        this.menuButton.style("background-color", "blue");
        this.menuButton.style("color", "white");
        this.menuButton.style("width", "100px");
        this.menuButton.style("height", "60px");
        this.menuButton.style("font-family", "cursive");
    }

    displayHelp(){
        this.playButton.hide();
        this.helpButton.hide();
        this.menuButton.hide();
        this.backButton.show();
        background("pink");
        this.story.html("You have 3 lives. You get to choose armor and one weapon before starting the game. Once you start the game, use the spacebar to jump over the obstacles (elves, dwarves, other spirits, etc.) and to collect any power ups you may find. If you land on an obstacle then you will have to battle it before moving on with the game. Once you reach the Dragon King, you will have to battle it, and if you win, then you will unlock the next level, but if you lose, then you will have to redo the level.")
        this.backButton.position(displayWidth/9, displayHeight/1.4);
        this.backButton.style("font-size", "25px");
        this.backButton.style("background-color", "blue");
        this.backButton.style("color", "white");
        this.backButton.style("width", "100px");
        this.backButton.style("height", "60px");
        this.backButton.style("font-family", "cursive");
        this.backButton.mousePressed(()=>{
            this.backButton.hide();
            this.playButton.show();
            this.helpButton.show();
            this.menuButton.show();
            gameState = "start";
        })
    }

    displayPlay(){
        
    }
}