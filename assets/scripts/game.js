let playerHand = [];
let dealerHand = [];
let playerTotal = 0;
let dealerTotal = 0;
const targetTotal = 21;
let deck = [];
const blankCard = {
    value : 0,
    suit : null,
    image: `assets/images/cards/BACK.png`
};
let dealerFacedown = [];

// The Fisher Yates Method used to suffle deck

shuffleDeck = (deck) => { 
        for (let i = deck.length - 1; i >= 0; i--) {
            let randomNumber = Math.floor(Math.random() * (i + 1));
            let temp = deck[i];
            deck[i] = deck[randomNumber];
            deck[randomNumber] = temp;
        };
    };


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


hit = () => {
    playerHand.push(deck.shift());

    playerTotal = calculateHandTotal(playerHand);
    if (playerTotal > targetTotal) {
        determineWinner();
    }
};

stand = () => {
    
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
    playerStood = true;
};

// Variable to track whether the player has stood
let playerStood = false;

// Function to handle player hitting
hit = () => {
    // If player has already stood, do nothing
    if (playerStood) return;

    playerHand.push(deck.shift());
};

// Function to calculate hand total
calculateHandTotal = (hand) => {
    let total = 0;
    let numAces = 0;

    for (let card of hand) {
        if (card.value === 'A') {
            numAces++;
        } else if (['J', 'Q', 'K'].includes(card.value)) {
            total += 10;
        } else {
            total += parseInt(card.value);
        }
    }

    for (let i = 0; i < numAces; i++) {
        if (total + 11 <= targetTotal - numAces + i + 1) {
            total += 11;
        } else {
            total += 1;
        }
    }

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

// Call startGame function to begin the game
startGame();


