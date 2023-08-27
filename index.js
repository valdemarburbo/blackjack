let firstCard = 10;
let secondCard = 10;

let sum = firstCard + secondCard;

if (sum <= 21) {
    console.log("Do you want to draw a new card?")
} else if (sum === 21) {
    console.log("Congratulations, a blackjack!")
} else {
    console.log("You lose!")
}