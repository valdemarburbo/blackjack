let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

let message = "";

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Congratulations, you have a blackjack!"
        hasBlackJack = true;
    } else {
        message = "You lose!"
        isAlive = false;
    }
    
    alert(message)
}

console.log(message)