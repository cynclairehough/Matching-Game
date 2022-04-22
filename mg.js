class Player {
    constructor(name) {
        this.score = 0;
        this.name = name;
    }
    /*method to add points to each player*/
}

const player1 = new Player('player1')
const player2 = new Player('player2')

let cardarray = []

let id_cardarray = document.getElementById("id_cardarray")



class Card {
    constructor(name, match) {
        this.name = name;
        this.match = match


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

function start() {
    
}

var game = document.getElementById("cardboxes"){

}


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
    run: function(){
        //run game code here
    }
});

timer.start();
timer.stop();