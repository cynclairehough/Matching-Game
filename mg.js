class Player {
    constructor(name) {
        this.score = 0;
        this.name = name;
    }
    /*method to add points to each player*/
}

const player1 = new Player('player1')
const player2 = new Player('player2')

/*
let cardarray = [
    { name: "function that accepts functions as parameters and/or returns a function", img: "card1.png", }
{ name: "function that accepts functions as parameters and/or returns a function", img: "card1.png", }
{ name: "higher-order function", img: "card2.png", }
{ name: "math.random()", img: "card3.png", }
{ name: "returns a random number between 0 and 1", img: "card4.png", }
{ name: "math.floor(1 + 0.5)", img: "card5.png", }
{ name: "1", img: "card6.png", }
{ name: "'Cynclaire Hough'.length", img: "card7.png", }
{ name: "15", img: "card8.png", }
{ name: "returns true || false", img: "card9.png", }
{ name: "boolean", img: "card10.png", }
{ name: "while (condition) {// statement}", img: "card11.png", }
{ name: "while loop", img: "card12.png", }
{ name: "const myArray = []; let i = 10", img: "card13.png", }
{ name: "Output: 10", img: "card14.png", }
{ name: "const arr = ['Ashley', 'Michael', 'Cody']; for (let i of arr) {console.log(i)", img: "card15.png", }
{ name: "Output: Ashley, Michael, Cody", img: "card16.png", }
{ name: "Initialization", img: "card17.png", }
{ name: "This expression runs before the execution of the first loop, and is usually used to create a counter.", img: "card18.png", }
{ name: "let i = 0; while (i < 10) { console.log(i);}", img: "card19.png", }
{ name: "infinite loop", img: "card20.png", }

]
*/


let cardarray = document.getElementById("cardarray")



class Card {
    constructor(name, match, png) {
        this.name = name;
        this.match = match;
        this.png = png;


        /* 
        this.card1 = "function that accepts functions as parameters and/or returns a function";
         this.card2 = "higher-order function";
         this.card3 = "math.random()";
         this.card4 = "returns a random number between 0 and 1";
         this.card5 = "math.floor(1 + 0.5)";
         this.card6 = "1";
         this.card7 = "'Cynclaire Hough'.length";
         this.card8 = "15";
         this.card9 = "returns true || false";
         this.card10 = "boolean";
         */
    }
}

/*push new cards in after class of card*/

cardarray.push(new Card("function that accepts functions as parameters and/or returns a function", "higher-order function"))
cardarray.push(new Card("higher-order function", "function that accepts functions as parameters and/or returns a function"))
cardarray.push(new Card("math.random()", "returns a random number between 0 and 1"))
cardarray.push(new Card("returns a random number between 0 and 1", "math.random()"))
cardarray.push(new Card("math.floor(1 + 0.5)", "1"))
cardarray.push(new Card("1", "math.floor(1 + 0.5)"))
cardarray.push(new Card("'Cynclaire Hough'.length", "15"))
cardarray.push(new Card("15", "'Cynclaire Hough'.length"))
cardarray.push(new Card("returns true || false", "boolean"))
cardarray.push(new Card("boolean", "returns true || false"))
cardarray.push(new Card("while (condition) {// statement}", "while loop"))
cardarray.push(new Card("const myArray = []; let i = 10", "Output: 10"))
cardarray.push(new Card("const arr = ['Ashley', 'Michael', 'Cody']; for (let i of arr) {console.log(i)", "Output: Ashley, Michael, Cody"))
cardarray.push(new Card("Initialization", "This expression runs before the execution of the first loop, and is usually used to create a counter."))
cardarray.push(new Card("let i = 0; while (i < 10) { console.log(i);}", "infinite loop"))

/*  add png to push card array and add missing element*/

var game = document.getElementById("cardboxes"); {

}

const box = document.createElement("div");
box.textContent = ("function that accepts functions as parameters and/or returns a function");
box.appendChild(textbox);
document.getElementById("cardboxes").appendChild(box);

document.addEventListener("Start", function () {
    let pngs = document.querySelectorAll("png");
    pngs.forEach(png =>
        png.addEventListener("click", flipCard)
}))


/*need timer*/

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

