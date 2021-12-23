let sumOf = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let mess = document.getElementById("message-el");
let newCardP = document.getElementById("new-card");

let playerEl = document.getElementById("player-el");
let playerName = "Atham";
let playerChips = 145;
playerEl.textContent = playerName + ": $" + playerChips;

let firstCard = Math.floor(Math.random() * 11) + 1;
let secondCard = Math.floor(Math.random() * 11) + 1;
let newCardEl = Math.floor(Math.random() * 11) + 1;

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

function startGame() {
  if (0 <= sum && sum <= 20) {
    message = "Do you want to draw a new card ?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = " You're out of the game!";
    isAlive = false;
  }

  sumOf.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: " + firstCard + ", " + secondCard;
  mess.textContent = message;
}

function newCard() {
  if (0 <= sum && sum <= 20) {
    message = "Do you want to draw a new card ?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = " You're out of the game!";
    isAlive = false;
  }

  sum += newCardEl;
  sumOf.textContent = "Sum: " + sum;
  cardsEl.textContent =
    "Cards: " + firstCard + ", " + secondCard + ", " + newCardEl;
  mess.textContent = message;
}
// ! START POSITION
// function refresh() {
//   sumOf.textContent = "Sum:";
//   cardsEl.textContent = "Cards: ";
//   mess.textContent = "Want to play a round ?";
// }

// ! REFRESH web-site
function refresh() {
  location.reload();
}

// ? CASH OUT
// console.log("Has BlackJack ?");
// console.log(hasBlackJack);

// ? IS ALIVE
// console.log("Is alive ?");
// console.log(isAlive);

// ? MESSAGE
// console.log(message);
// expected output: 0;
// console.log(getRandomInt(3));
// console.log(Marh.floor(Math.random(10)));
// let b = Math.random(3);
// let b = 5;
// console.log(Math.floor(b));
// console.log(Math);

// console.log("Helo workd");
