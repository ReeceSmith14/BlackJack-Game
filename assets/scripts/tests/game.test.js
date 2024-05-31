const {
  playerHand,
  dealerHand,
  playerTotal,
  dealerTotal,
  targetTotal,
  deck,
  blankCard,
  createDeck,
  shuffleDeck,
  calculateHandTotal,
  determineWinner,
  deal,
  hit,
  stand
} = require("../game");

describe("Global variables should be initialised correctly", () => {
  test("playerHand should be an empty array", () => {
    expect(playerHand).toEqual([]);
  });

  test("dealerHand should be an empty array", () => {
    expect(dealerHand).toEqual([]);
  });

  test("playerTotal should be 0", () => {
    expect(playerTotal).toBe(0);
  });

  test("dealerTotal should be 0", () => {
    expect(dealerTotal).toBe(0);
  });

  test("targetTotal should be 21", () => {
    expect(targetTotal).toBe(21);
  });

  test("deck should be an empty array", () => {
    expect(deck).toEqual([]);
  });

  test("blankCard should have no value, null suit, and use the blank image", () => {
    expect(blankCard).toEqual({
      value: 0,
      suit: null,
      image: 'assets/images/cards/BACK.png'
    });
  });
});

describe("createDeck function works as intended", () => {
  beforeAll(() => {
    createDeck();
  });

  test("createDeck creates an array of 52 cards", () => {
    expect(deck.length).toBe(52);
  });

  test("deck contains 13 cards of each suit", () => {
    let C = 0;
    let S = 0;
    let D = 0;
    let H = 0;
    
    for (let card of deck) {
      if (card.suit === "C") {
        C++;
      } else if (card.suit === "S") {
        S++;
      } else if (card.suit === "D") {
        D++;
      } else if (card.suit === "H") {
        H++;
      }
    }
    
    expect(C).toBe(13);
    expect(S).toBe(13);
    expect(D).toBe(13);
    expect(H).toBe(13);
  });
  test("deck contains 4 cards of each value", () =>{
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    const valueCounts = {};

    for (let value of values) {
      valueCounts[value] = 0;
    }

    for (let card of deck) {
      valueCounts[card.value]++;
    }

    for (let value of values) {
      expect(valueCounts[value]).toBe(4);
    }
  });
  test("each card has the correct structure", () => {
    for (let card of deck) {
      expect(card).toHaveProperty('value');
      expect(card).toHaveProperty('suit');
      expect(card).toHaveProperty('image');
      expect(card.image).toBe(`assets/images/cards/${card.value}-${card.suit}.png`);
    }
  });
  test("shuffleDeck function changes the order of the deck", () => {
    const originalDeck = [...deck];
    createDeck();
    expect(deck).not.toEqual(originalDeck);
  });
});

describe("shuffleDeck function works as intended", () => {
 beforeAll(() => {
    createDeck();
  });
  test("shuffleDeck does not change the number of cards in the deck", () => {
    let originalDeck = [...deck];
    shuffleDeck(deck);
    expect(deck.length).toEqual(originalDeck.length);
  });
  
  test("shuffleDeck retains all original cards", () => {
    
    for (let i = 0; i < deck.length; i++) {
        deck[i].orderNumber = i + 1; 
    }

    let originalDeck = [...deck];

    shuffleDeck(deck);
    
    const compareByOrderNumber = (a, b) => a.orderNumber - b.orderNumber;

    originalDeck.sort(compareByOrderNumber);
    deck.sort(compareByOrderNumber);
    
    expect(deck).toEqual(originalDeck);
});
});

describe("The deal button works as intended", () => {
  beforeEach(() => {
      document.body.innerHTML = `<section class="row">

      <!--Dealer's hand-->
      <section class="col-sm-6" id="dealer">
        <h2>Dealer's Hand</h2>
        <div class="row" id="dealer-hand">
          <img class="col-md-3" src="assets/images/cards/BACK.png">
          <img class="col-md-3" src="assets/images/cards/BACK.png">
        </div>
        <div class="row">
          <p id="dealer-score">Score: </p>
        </div>
      </section>

      <!--Player's hand-->
      <section class="col-sm-6" id="player">
        <h2>Your Hand</h2>
        <div class="row" id="player-hand">
          <img class="col-md-3" src="assets/images/cards/BACK.png">
          <img class="col-md-3" src="assets/images/cards/BACK.png">
        </div>
        <div class="row">
          <p id="player-score">Score: </p>
        </div>
      </section>
    </section>

    <!--Results will be shown here-->
    <section id="results">
      <h3 class="display-6 " id="win-or-lose-heading"></h3>
    </section>

    <!--Game buttons-->
      <section id="game-buttons">
        <button class="btn btn-outline-warning" id="hit-button">Hit</button>
        <button class="btn btn-outline-warning" id="stand-button">Stand</button>
      </section>`;
  });

  test("Hit and stand buttons are shown after clicking the deal button", () => {
      $("#hit-button").css("display","none");
      $("#stand-button").css("display", "none");
      deal();
      expect($("#hit-button").css("display")).not.toBe("none");
      expect($("#stand-button").css("display")).not.toBe("none");
  });

  test("Dealer score and win/lose message are removed", () => {
      $("#dealer-score").text("Score: 20");
      $("#win-or-lose-heading").text("You win!");
      
      deal();

      expect($("#dealer-score").text()).toBe("Score: ");
      expect($("#win-or-lose-heading").text()).toBe("");
  });

  test("Player and dealer's hands should be emptied and refilled with new cards", () =>{
    dealerHand.push({value: 0,
      suit: null,
      image: 'assets/images/cards/BACK.png'},{value: 0,
        suit: null,
        image: 'assets/images/cards/BACK.png'});
    playerHand.push({value: 0,
      suit: null,
      image: 'assets/images/cards/BACK.png'},{value: 0,
        suit: null,
        image: 'assets/images/cards/BACK.png'})

    deal();

    expect(dealerHand.length).toBe(2);
    expect(playerHand.length).toBe(2);
    expect(dealerHand[0].image).not.toBe('`assets/images/cards/BACK.png`');
    expect(playerHand[0].image).not.toBe('`assets/images/cards/BACK.png`');
    expect(dealerHand[1].image).not.toBe('`assets/images/cards/BACK.png`');
    expect(playerHand[1].image).not.toBe('`assets/images/cards/BACK.png`');
    expect($("#player-hand").children.length).toBe(2);
    expect($("#dealer-hand").children.length).toBe(2);
    expect($("#player-hand").innerHTML).not.toBe(`<img class="col-md-3" src="assets/images/cards/BACK.png">
    <img class="col-md-3" src="assets/images/cards/BACK.png">`);
    expect($("#dealer-hand").innerHTML).not.toBe(`<img class="col-md-3" src="assets/images/cards/BACK.png">
    <img class="col-md-3" src="assets/images/cards/BACK.png">`);
  });
  test("If the player is dealt 21 does the hit button disappear", () => {
     jest.spyOn(global, 'calculateHandTotal').mockReturnValue(21);
     deal();
     expect($("#hit-button").css("display")).toBe("none");
});
  test("Player score should be added to the DOM", () => {
     jest.spyOn(global, 'calculateHandTotal').mockReturnValue(21);
     deal();
     expect($("#player-score").text()).toBe(`Score: 21`);
  });
    

});
