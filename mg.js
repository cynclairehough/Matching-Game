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

/*need timer*/


