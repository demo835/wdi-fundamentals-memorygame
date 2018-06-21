console.log("Up and running!");

class Card
{
    constructor(face)
    {
        this.face = face;
    }
}

const cardOne = new Card("queen");
const cardTwo = new Card("queen");
const cardThree = new Card("king");
const cardFour = new Card("king");

console.log(cardOne);