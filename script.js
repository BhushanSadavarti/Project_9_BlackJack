let player = {
    name : "Bhushan",
    price : 120
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let playerEl = document.getElementById("player-el");



playerEl.textContent = player.name + " :  ₹" + player.price;

function getRandomCard(){
    let randomCard= Math.floor(Math.random()*13) + 1;
    if(randomCard > 10){
        return 10;
    }
    else if(randomCard === 1){
        return 11;
    }
    else{
        return randomCard;
    }
}


function startgame(){
    let isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    rendergame();
}


function rendergame(){
    
    cardsEl.textContent = "Cards : ";

    for(let i=0;i<cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum : " + sum;

    if(sum <= 20){
        message = "Do you want to draw a new card ?";
    }
    else if(sum === 21){
        message = "You got a Blackjack !!!";
        hasBlackJack = true;
    }
    else{
        message = "you are out of the game";
        isAlive = false;
    }
    
    messageEl.textContent = message;
}

function newCard(){
     
    if((isAlive === true)  &&  (hasBlackJack === false)){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        rendergame(); 
    }
}

