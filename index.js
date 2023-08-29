let cards = [];
let sum = 0;
let player = {
    name: "Val",
    chips: 100
}

let hasBlackJack = false;
let isAlive = false;

let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": £" + player.chips 

function getRandomCard() {
    let randomCard = Math.floor((Math.random() * 13 + 1));

    console.log(randomCard);

    if (randomCard === 1 && sum < 11) {
        return 11
    } else if (randomCard === 1 && sum > 10) {
        return 1
    } else if (randomCard >= 11) {
        return 10
    } else {
        return randomCard;
    }
}

function startGame() {
    isAlive = true;
    hasBlackJack = false;
    sum = 0;

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    if (firstCard === 11 && secondCard === 11) {
        firstCard = 1;
    }

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
    if (isAlive === true && hasBlackJack === false) {
        let nextCard = getRandomCard();
        sum += nextCard;
        cards.push(nextCard);

        if (sum > 21) {
            const index = cards.indexOf(11);
            if (index > -1) {
                cards[index] = 1;
                sum -= 10;
            }
        }
    
        renderGame();
    }
}
