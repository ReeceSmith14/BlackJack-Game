
//Global varibles
let playerHand = [];
let dealerHand = [];
let playerTotal = 0;
let dealerTotal = 0;
const targetTotal = 21;
let deck = [];
let dealerFacedown = [];
const blankCard = {
    value : 0,
    suit : null,
    image: `assets/images/cards/BACK.png`
};

//Function to create the cards and call the shuffle deck function

createDeck = () => {
    const suits = ["C", "H", "S", "D"];
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    for (let suit of suits) {
        for (let value of values) {
            let card = {
                value: value,
                suit: suit,
                image: `assets/images/cards/${value}-${suit}.png`
            };
            deck.push(card);
            };
        };
        shuffleDeck(deck); 
        return deck;
    };


// Shuffle deck fucntion which was made using the Fisher Yates Method

shuffleDeck = deck => { 
        for (let i = deck.length - 1; i >= 0; i--) {
            let randomNumber = Math.floor(Math.random() * (i + 1));
            let temp = deck[i];
            deck[i] = deck[randomNumber];
            deck[randomNumber] = temp;
        };
    };

// Function to start the game
// Cards are delt and if the play has 21 the stand function is called

startGame = () => {
    createDeck();
    playerHand.push(deck.shift());
    dealerHand.push(deck.shift());
    playerHand.push(deck.shift());
    dealerFacedown.push(deck.shift());
    dealerHand.push(blankCard);

    // Check if player is dealt 21
    playerTotal = calculateHandTotal(playerHand);
    if (playerTotal === targetTotal) {
        stand();
    }
};

// Function to give the player another card
// If the player's hand is > than 21 the determineWinner function is called

hit = () => {
    playerHand.push(deck.shift());

    // Check if player is dealt > than 21
    playerTotal = calculateHandTotal(playerHand);
    if (playerTotal > targetTotal) {
        determineWinner();
    }
};

// Function to handle player standing
stand = () => {

    // Reveal dealer's hidden card
    dealerHand.pop();
    dealerHand.push(dealerFacedown);

    // Calculate dealer's total
    dealerTotal = calculateHandTotal(dealerHand);

    // Dealer hits until they reach a total of 17 or higher
    while (dealerTotal < 17) {
        dealerHand.push(deck.shift());
        dealerTotal = calculateHandTotal(dealerHand);
    }

    // Determine winner and end game
    determineWinner();
};


// Function to calculate hand total
calculateHandTotal = hand => {
    let total = 0;
    let aces = 0;

    // For loop to add up the values of face and number cards
    
    for (let card of hand) {
        if (card.value === 'A') {
            aces++;
        } else if (card.value === "J" || card.value === "Q" || card.value === "K") {
            total += 10;
        } else {
            total += card.value;
        };
    };

    // For loop to add up the ace cards
    // Aces are either = to 1 or 11 depending on what benefits the player more

    for (let i = 0; i < aces; i++) {
        if (total + 11 <= targetTotal) {
            total += 11;
        } else {
            total += 1;
        };
    };

    return total;
};

// Function to determine the winner and end the game
determineWinner = () => {
    // Calculate player's total
    playerTotal = calculateHandTotal(playerHand);

    // Determine winner based on totals
    if (playerTotal > targetTotal) {
        // Player busts, dealer wins
        console.log("Player busts! Dealer wins!");
    } else if (dealerTotal > targetTotal || playerTotal > dealerTotal) {
        // Dealer busts or player has higher total, player wins
        console.log("Player wins!");
    } else if (playerTotal < dealerTotal) {
        // Dealer has higher total, dealer wins
        console.log("Dealer wins!");
    } else {
        // It's a tie
        console.log("It's a tie!");
    }
};



s