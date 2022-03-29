let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = " ";

let startBtn = document.querySelector('.start-btn');
let messageEl = document.getElementById('message-el');
let cardsPlay = document.querySelector('.cards');
let sumCards = document.querySelector('.sum');
let newBtn = document.querySelector('.new-btn');

// getRandomNuber

function getRandomCard(){
  let randomNumber = Math.floor(Math.random()*13)+1;
  if (randomNumber === 1){
    return 11;
  }else if(randomNumber > 10){
    return 10;
  }
  return randomNumber;
}

// if else statements
function condition() {
  cardsPlay.textContent = ("Cards:" + " ");
  for(let i = 0; i<cards.length; i++){
    cardsPlay.textContent += cards[i]+" ";
  }
  sumCards.textContent = ("Sum:" + " " + sum);

  if (sum <= 20) {
    message = "Do you want to draw another card! 😊"
  } else if (sum === 21) {
    message = "Woohoo!! You've got Blackjack!!🤩"
  } else {
    message = "Sorry, You're out of the game..😒"
    isAlive = false;
  }
  messageEl.textContent = message;

}

// start button
startBtn.addEventListener('click', function() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  condition();
});

// new button
newBtn.addEventListener('click', function() {
  if(hasBlackjack === false && isAlive === true){
  let thirdCard = getRandomCard();
  sum += thirdCard;
  cards.push(thirdCard);
  condition();
}
});
