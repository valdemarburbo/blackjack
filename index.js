// let firstCard = getRandomCard();
// let secondCard = getRandomCard();
let cards = [];
let sum = 0;

let hasBlackJack = false;
let isAlive = false;

let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
    let randomCard = Math.floor((Math.random() * 13 + 1));
    console.log(randomCard)
    if (randomCard === 1) {
        return 11
    } else if ( randomCard >= 11) {
        return 10
    } else {
        return randomCard;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];

    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";

    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

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
    let nextCard = getRandomCard();
    sum += nextCard;
    cards.push(nextCard);

    renderGame();
}
