let firstCard = 8;
let secondCard = 11;
let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Congratulations, you have a blackjack!"
        hasBlackJack = true;
    } else {
        message = "You lose!"
        isAlive = false;
    }
    
    messageEl.textContent = message
}

function newCard() {
    console.log("Drawing a new card from the deck!")
}
