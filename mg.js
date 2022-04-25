/* Need variables and objects:
Player 1, Player 2
Gameboard
Card array with images
Scoreboard
Winner: (if else statement)

Need functions:
Start Game using Start button
Timer 
flipcard and clickable
Score tracker
Adding Points
Next turn
End Game
Play Again?*/


class Player {
    constructor(name) {
        this.score = 0;
        this.name = name;
    }
    /*method to add points to each player*/
}

const player1 = new Player('player1')
const player2 = new Player('player2')

//card content
let cardarray = [
    { name: "function that accepts functions as parameters and/or returns a function", img: "card1.png", },
    { name: "function that accepts functions as parameters and/or returns a function", img: "card1.png", },
    { name: "higher-order function", img: "card2.png", },
    { name: "math.random()", img: "card3.png", },
    { name: "returns a random number between 0 and 1", img: "card4.png", },
    { name: "math.floor(1 + 0.5)", img: "card5.png", },
    { name: "1", img: "card6.png", },
    { name: "'Cynclaire Hough'.length", img: "card7.png", },
    { name: "15", img: "card8.png", },
    { name: "returns true || false", img: "card9.png", },
    { name: "boolean", img: "card10.png", },
    { name: "while (condition) {// statement}", img: "card11.png", },
    { name: "while loop", img: "card12.png", },
    { name: "const myArray = []; let i = 10", img: "card13.png", },
    { name: "Output: 10", img: "card14.png", },
    { name: "const arr = ['Ashley', 'Michael', 'Cody']; for (let i of arr) {console.log(i)", img: "card15.png", },
    { name: "Output: Ashley, Michael, Cody", img: "card16.png", },
    { name: "Initialization", img: "card17.png", },
    { name: "This expression runs before the execution of the first loop, and is usually used to create a counter.", img: "card18.png", },
    { name: "let i = 0; while (i < 10) { console.log(i);}", img: "card19.png", },
    { name: "infinite loop", img: "card20.png", },

]

//card images
let pngArray = [
    { name: "png1", },
    { name: "png2", },
    { name: "png3", },
    { name: "png4", },
    { name: "png5", },
    { name: "png6", },
    { name: "png7", },
    { name: "png8", },
    { name: "png9", },
    { name: "png10", },
    { name: "png11", },
    { name: "png12", },
    { name: "png13", },
    { name: "png14", },
    { name: "png15", },
    { name: "png16", },
    { name: "png17", },
    { name: "png18", },
    { name: "png19", },
    { name: "png20", },
];

//variables and DOM
let gameboard = document.querySelector(".grid");
let scoreBoard = document.querySelector(".scoreBoard");
let popup = document.querySelector(".popup");
let playAgain = document.querySelector(".playAgain");
let clickBoard = document.querySelector(".clickBoard");
let pngs = document.querySelector(".pngs");
let cardsId = [];
let cardsSelected = [];
let cardsWon = 0;
let clicks = 0;



/*idk why i wrote this
let cards = document.getElementById("cards")*/



class Card {
    constructor(name, match, png) {
        this.name = name;
        this.match = match;
        this.png = png;

        //push new cards in after class of card

        cardarray.push(new Card("function that accepts functions as parameters and/or returns a function", "higher-order function", "png1"))
        cardarray.push(new Card("higher-order function", "function that accepts functions as parameters and/or returns a function", "png2"))
        cardarray.push(new Card("math.random()", "returns a random number between 0 and 1", "png3"))
        cardarray.push(new Card("returns a random number between 0 and 1", "math.random()", "png4"))
        cardarray.push(new Card("math.floor(1 + 0.5)", "1", "png5"))
        cardarray.push(new Card("1", "math.floor(1 + 0.5)", "png6"))
        cardarray.push(new Card("'Cynclaire Hough'.length", "15", "png7"))
        cardarray.push(new Card("15", "'Cynclaire Hough'.length", "png8"))
        cardarray.push(new Card("returns true || false", "boolean", "png9"))
        cardarray.push(new Card("boolean", "returns true || false", "png10"))
        cardarray.push(new Card("while (condition) {// statement}", "while loop", "png11"))
        cardarray.push(new Card("while loop", "while (condition) {// statement}", "png12"))
        cardarray.push(new Card("const myArray = []; let i = 10", "Output: 10", "png13"))
        cardarray.push(new Card("Output: 10", "const myArray = []; let i = 10", "png14"))
        cardarray.push(new Card("const arr = ['Ashley', 'Michael', 'Cody']; for (let i of arr) {console.log(i)", "Output: Ashley, Michael, Cody", "png15"))
        cardarray.push(new Card("Output: Ashley, Michael, Cody", "const arr = ['Ashley', 'Michael', 'Cody']; for (let i of arr) {console.log(i)", "png16"))
        cardarray.push(new Card("Initialization", "This expression runs before the execution of the first loop, and is usually used to create a counter.", "png17"))
        cardarray.push(new Card("This expression runs before the execution of the first loop, and is usually used to create a counter.", "Initialization", "png18"))
        cardarray.push(new Card("let i = 0; while (i < 10) { console.log(i);}", "infinite loop", "png19"))
        cardarray.push(new Card("infinite loop", "let i = 0; while (i < 10) { console.log(i);}", "png20"))





        //start game
        btn.addEventListener("Start", function () {
            let pngs = document.querySelectorAll("png");
            let cardarrays = document.querySelectorAll("cardarray");
            pngs.forEach(png =>
                png.addEventListener); cardarray.addEventListener("click", flipCard),

                    console.log([cardarray], [pngArray])
        }

        )

        //score tracker
        let winner = 0
        let player1 = 0
        let player2 = 0
        if (player1 == 100)
            console.log('Player1 Wins!');
        else if (player2 == 100);
        console.log('Player2 Wins!')







        /* idk wtf this is
                let i = cardarray
                for (let i = 0; i < cards.length; i++) {
                    text += cars[i] + "<br>";
                }
        
                let div = [1, 2, 3, 4, 5];
                for (let i = 0; i < arr.length; i++) {
                    console.log(arr[i]);
                }*/




        const box = document.createElement("div");
        box.textContent = ("function that accepts functions as parameters and/or returns a function");
        box.appendChild(textbox);
        document.getElementById("cardboxes").appendChild(box);


        //timer needs to countdown from one minute or 60 seconds

        function Timer(settings) {
            this.settings = settings;
            this.timer = null;

            this.fps = settings.fps || 30;
            this.interval = Math.floor(1000 / 30);
            this.timeInit = null;

            return this;
        }

        Timer.prototype =
        {
            run: function () {
                var $this = this;

                this.settings.run();
                this.timeInit += this.interval;

                this.timer = setTimeout(
                    function () { $this.run() },
                    this.timeInit - (new Date).getTime()
                );
            },

            start: function () {
                if (this.timer == null) {
                    this.timeInit = (new Date).getTime();
                    this.run();
                }
            },

            stop: function () {
                clearTimeout(this.timer);
                this.timer = null;
            }
        }

        var timer = new Timer({
            fps: 30,
            run: function () {
                //run game code here
            }
        });

        timer.start();
        timer.stop();
    }
}