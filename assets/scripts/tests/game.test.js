const game = required("./game");

test("Global variables are initialised correctly", () =>{
	expect("playerHand").toContain("");
});