
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

function CreateBoard()
{
    for(var i = 0; i < cards.length; i++)
    {
        var newImage = document.createElement('img');
        cardElement.setAttribute('src', cards[i].image);
    }
}

function CheckForMatch()
{
    if (cardsInPlay.length === 2)
    {
        if (cardsInPlay[0] === cardsInPlay[1])
        {
            alert("You found a match!");
            console.log("You flipped the same card!" + cardOne + " " + cardTwo);
        }
        else
        {
            alert("Try again!");
            console.log("You flipped different cards!" + cardOne + " " + cardTwo);
        }
    }
}

function FlipCard(cardId)
{
    
    CheckForMatch();
}


