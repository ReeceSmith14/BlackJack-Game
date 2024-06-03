let playerHand = [];
let dealerHand = [];
let playerTotal = 0;
let dealerTotal = 0;
const targetTotal = 21;
let deck = [];
const blankCard = {
    value: 0,
    suit: null,
    image: `assets/images/cards/BACK.png`
};


/**
 * Creates a deck of cards and shuffles it.
 * @returns {Array} The shuffled deck of cards.
 */
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

/**
 * Shuffles the given deck of cards using the Fisher Yates method.
 * @param {Array} deck - The deck of cards to be shuffled.
 */
shuffleDeck = deck => {
    for (let i = deck.length - 1; i >= 0; i--) {
        let randomNumber = Math.floor(Math.random() * (i + 1));
        let temp = deck[i];
        deck[i] = deck[randomNumber];
        deck[randomNumber] = temp;
    };
    return deck;
};

/**
 * Starts the game when the "Deal" button is clicked.
 */
let deal = () => {

    // Show hit and stand button if it is hidden
    $("#hit-button").show();
    $("#stand-button").show();

    // Remove dealers previous score and results
    $("#dealer-score").text(`Score: `);
    $("#win-or-lose-heading").text("");

    //Empty placeholder cards / cards from the previous game
    $("#dealer-hand").empty();
    $("#player-hand").empty();
    dealerHand = [];
    playerHand = [];

    // Make deck and deal out the cards.
    // Dealer gets one hidden card that will be swapped later
    createDeck();
    playerHand.push(deck.shift());
    dealerHand.push(deck.shift());
    playerHand.push(deck.shift());
    dealerHand.push(deck.shift());


    // Card images are added to the hand divs in the index.html file
    // First dealer card is added
    $("#dealer-hand").append(`<img class="col-md-3" src="${dealerHand[0].image}">`);

    // Blank card image added as a placeholder for the true card

    $("#dealer-hand").append(`<img class="col-md-3 blank-card" src="${blankCard.image}">`);

    // Add both players cards to index.html
    for (let i = 0; i < 2; i++) {
        $("#player-hand").append(`<img class="col-md-3" src="${playerHand[i].image}">`);
    };

    // Check if player is dealt 21
    playerTotal = calculateHandTotal(playerHand);

    if (playerTotal === targetTotal) {
        // Hide the hit button
        $("#hit-button").hide();
    }

    // Add player score to index
    $("#player-score").text(`Score: ${playerTotal}`);

};

$("#deal-button").click(deal);

/**
 * Gives the player another card when the "Hit" button is clicked.
 */
let hit = () => {

    playerHand.push(deck.shift());

    let lastCard = playerHand.length - 1;
    $("#player-hand").append(`<img class="col-md-3" src="${playerHand[lastCard].image}">`);

    // Check if player is dealt > than 21
    playerTotal = calculateHandTotal(playerHand);
    if (playerTotal > targetTotal) {
        determineWinner();
    }

    // Update players score
    $("#player-score").text(`Score: ${playerTotal}`);

};

$("#hit-button").click(hit);

/**
 * Handles the player standing when the "Stand" button is clicked.
 */
let stand = () => {

    // Hide the hit button
    $("#hit-button").hide();

    // Remove blank card placeholder image
    $(".blank-card").remove();

    // Add the second dealer card in place of the blank card placeholder
    $("#dealer-hand").append(`<img class="col-md-3" src="${dealerHand[1].image}">`);

    // Calculate dealer's total
    dealerTotal = calculateHandTotal(dealerHand);

    // Dealer hits until they reach a total of 17 or higher
    while (dealerTotal < 17) {
        dealerHand.push(deck.shift());
        let lastCard = dealerHand.length - 1;
        $("#dealer-hand").append(`<img class="col-md-3" src="${dealerHand[lastCard].image}">`);
        dealerTotal = calculateHandTotal(dealerHand);
    }

    // Add dealer score to index
    $("#dealer-score").text(`Score: ${dealerTotal}`);

    // Determine winner and end game
    determineWinner();
};

$("#stand-button").click(stand);


/**
 * Calculates the total value of the hand.
 * @param {Array} hand - The hand of cards.
 * @returns {number} The total value of the hand.
 */
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

/**
 * Determines the winner and ends the game.
 */
determineWinner = () => {
    // Calculate player's total
    playerTotal = calculateHandTotal(playerHand);

    // Hide hit and stand button
    $("#stand-button").hide();
    $("#hit-button").hide();

    // Determine winner based on totals
    if (playerTotal > targetTotal) {
        // Player busts, dealer wins
        $("#win-or-lose-heading").text("Player busts! Dealer wins!");
    } else if (dealerTotal > targetTotal || playerTotal > dealerTotal) {
        // Dealer busts or player has higher total, player wins
        $("#win-or-lose-heading").text("Player wins!");
    } else if (playerTotal < dealerTotal) {
        // Dealer has higher total, dealer wins
        $("#win-or-lose-heading").text("Dealer wins!");
    } else {
        // It's a tie
        $("#win-or-lose-heading").text("It's a tie!");
    }
};