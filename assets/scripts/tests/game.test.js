// Imported modules for testing
const { playerHand, playerTotal, dealerHand, dealerTotal, targetTotal, deck, blankCard } = require('../game');

describe("Global game variables should be correctly initialised", () => {
  test("playerHand should be defined and be an empty array", () => {
	expect(playerHand).toEqual([]);
  });

  test("playerTotal should be defined and be 0", () => {
    expect(playerTotal).toBe(0);
  });

  test("dealerHand should be defined and be an empty array", () => {
    expect(dealerHand).toEqual([]);
  });

  test("dealerTotal should be defined and be 0", () => {
    expect(dealerTotal).toBe(0);
  });

  test("targetTotal defined and be 21", () => {
    expect(targetTotal).toBe(21);
  });

  test("deck should be defined and be an empty array initially", () => {
    expect(deck).toEqual([]);
  });

  test("blankCard defined and have the correct structure", () => {
    expect(blankCard).toEqual({value: 0, suit: null, image: "assets/images/cards/BACK.png"});
  });
});
