console.log("Up and running!");

class Card
{
    constructor(rank, suit, image)
    {
        this.rank = rank;
        this.suit = suit;
        this.image = image;
    }

    flipCard(cardId)
    {

    }
}

const cardOne = new Card("queen", "hearts", "images/queen-of-hearts.png");
const cardTwo = new Card("queen", "diamonds", "images/queen-of-diamonds.png");
const cardThree = new Card("king", "hearts", "images/king-of-hearts.png");
const cardFour = new Card("king", "diamonds", "images/king-of-diamonds.png");

var cards = [cardOne, cardTwo, cardThree, cardFour];

console.log(cards[0].image);

function CreateBoard()
{
    for(var i = 0; i < cards.length; i++)
    {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/back.png");
        document.getElementById('game-board').appendChild(cardElement);
        //cardElement.addEventListener("click", FlipCard());
        //cardElement.setAttribute('src', cards[i].image);
        //img.src = cards[i].image;
        //console.log("in for loop");
    }
}

function PlayGame()
{
    while(1 === 1)
    {
        cardElement.addEventListener("click", CheckForMatch());
    }
}

function CheckForMatch
CreateBoard();