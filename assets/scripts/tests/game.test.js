
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
  determineWinner
} = require("../game"); 

describe("Global variables should be initialised correctly", () => {
  test("playerHand should be an empty array", () => {
    expect(playerHand).toEqual([]);
});
test("dealerHand should be an empty array", () =>{
  expect(dealerHand).toEqual([]);
});
test("playerTotal should be 0", () =>{ 
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
test("blankCard should have no value, null suit and use the blank image", () => {
  expect(blankCard).toEqual({
    value: 0,
    suit: null,
    image: 'assets/images/cards/BACK.png'
  });
});
});
