let firstCard = 8;
let secondCard = 5;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1] + " ";
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
    let nextCard = 4;
    sum += nextCard
    cards.push(nextCard);

    console.log(cards)

    renderGame();
    cardsEl.textContent += (nextCard + " ")
}
