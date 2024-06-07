<h1 align="center" style="font-size:40px; font-family:serif;">Reece Smith - Blackjack Game</h1>

[Game Here!](https://reecesmith14.github.io/BlackJack-Game/)

This is my take on the classic game of [BlackJack](https://en.wikipedia.org/wiki/Blackjack). It was crafted with a user-centric approach, utilising the framework [Bootstrap](https://getbootstrap.com/), languages such as [HTML5](https://en.wikipedia.org/wiki/HTML), [CSS3](https://en.wikipedia.org/wiki/CSS) & [JavaScript](https://en.wikipedia.org/wiki/JavaScript), and libraries & programs including [Google Fonts](https://fonts.google.com/), [jQuery](https://jquery.com/), [Git](https://git-scm.com/) and [GitHub](https://github.com/)

![Mockup image of my game](https://github.com/ReeceSmith14/BlackJack-Game/assets/61851890/e1038a51-c600-4c0e-abd4-b4cadb1190fe)

## About

### Overview

Blackjack, also known as 21, is a popular card game played in casinos around the world. The objective of the game is simple: beat the dealer by having a hand value closest to 21 without going over.

### How to Play

Card Values: In Blackjack, cards 2 through 10 are worth their face value, face cards (King, Queen, and Jack) are each worth 10 points, and Aces can be worth either 1 or 11 points, depending on which value is more advantageous for the hand.

### Gameplay:

1. The game begins with you and the dealer being dealt two cards.
2. Your cards are dealt face up, while the dealer has one card face up and one card face down (the hole card).
3. Players then decide to either "hit" (take another card) or "stand" (keep their current hand).
4. Players can continue to hit until they either stand or their hand value exceeds 21 (bust).
5. The dealer reveals the hole card and must hit until their hand value is 17 or higher.
6. To win your your hand value must be closest to 21 without exceeding it. If the dealer busts, you automatically win.

### Specific Game Rules For My Version

- No Money/Chips: This version of Blackjack is designed purely for entertainment and does not involve any form of betting or use of chips.
- No Splitting: In traditional Blackjack, if a player is dealt two cards of the same value, they have the option to split them into two separate hands. However, in this version, splitting is not allowed.

## Table of Contents

- [UX (User Experience) Design](#ux-user-experience-design)
  - [Strategy](#strategy)
  - [Scope](#scope)
  - [Structure](#structure)
  - [Skeleton](#skeleton)
  - [Surface](#surface)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)
  - [Media](#media)
  - [Code](#code)
  - [Acknowledgements](#acknowledgements)

## UX (User Experience) Design

### Strategy

#### My Objectives

The goal of the project is to create an engaging Blackjack game that not only provides an enjoyable user experience but also showcases my web development skills.

#### User Stories

As a player of the Blackjack game, I want to:

- Navigate easily with a user-friendly layout.
- Have a smooth and enjoyable gameplay experience.
- See real-time updates of my hand value and the dealer's hand.

Strategy: The game focuses on delivering a simple yet engaging Blackjack experience. The interface is designed to be intuitive, with clear displays of hand values for both the player and the dealer.

### Scope

#### Functions, Features & Content

- Game Interface: A clean and intuitive layout that displays the player’s hand, the dealer’s hand, and the current scores.
- Game Controls: Simple buttons for actions such as "Hit" and "Stand" to manage gameplay.
- Real-Time Updates: Immediate feedback on the player's and dealer's hand values after each action.
- End-of-Game Display: Clear messages indicating win, loss, or draw outcomes.
- No Betting: The game does not include any betting or use of chips to simplify gameplay.
- No Splitting: Splitting hands is not available to keep the game straightforward.

At every stage of the design, the main focus is on creating a seamless and enjoyable Blackjack experience while showcasing my web development skills. The interface and gameplay elements are designed to be user-friendly and visually appealing, ensuring players can easily understand and enjoy the game.

### Structure

### Game Title

- Upon landing on the page, users are greeted with a prominent and visually appealing game title, "Blackjack," displayed at the top of the page.
- The title is styled to capture attention and set the tone for the game.

### Dealer's Hand Section

- The dealer's hand section is located on the left side of the game interface.
- It includes the heading "Dealer's Hand" and displays the dealer's cards as images.
- The current score of the dealer's hand is shown below the cards.

### Player's Hand Section

- The player's hand section is located on the right side of the game interface.
- It includes the heading "Your Hand" and displays the player's cards as images.
- The current score of the player's hand is shown below the cards.

### Game Results Section

- The game results section is centrally located, displaying messages indicating whether the player has won, lost, or if the game is a draw.
- The result messages are styled to stand out, ensuring players can easily see the outcome of each round.

### Game Controls

- Hit and Stand Buttons: Located below the dealer's and player's hands, these buttons allow players to either take another card (Hit) or keep their current hand (Stand).
- Deal Button: Positioned below the game controls, this button starts a new game round, dealing cards to both the dealer and the player.

### Navigation and Layout

- The overall layout is designed to be intuitive and user-friendly, with a clear division between the dealer's and player's sections.
- Navigation is straightforward, focusing on gameplay without any unnecessary elements, ensuring a smooth and enjoyable experience.

### Skeleton

#### Initial Game State

##### Game Initial State Wireframe

![Game Initial State Wireframe](https://github.com/ReeceSmith14/BlackJack-Game/assets/61851890/c30c041f-9847-4d71-a376-1c114de78d28)

##### Game Initial State Wireframe - Smaller Screens

![Game Initial State Wireframe - Smaller Screen](https://github.com/ReeceSmith14/BlackJack-Game/assets/61851890/c9ae90f4-1152-4f41-b71e-5daf86784c30)

##### Key Points

- Card images at the start are blank/the back of the card.
- The scores are empty at this stage.
- The game results are hidden.
- Hit and Stand game buttons are hidden.
- Clicking the Deal button starts/restarts the game.

#### After Deal State

##### After Deal State Wireframe

![After deal state](https://github.com/ReeceSmith14/BlackJack-Game/assets/61851890/9606acbc-06e0-4090-98ca-735d3437aeec)

##### After Deal State Wireframe - Smaller Screen

![After deal state - mobile](https://github.com/ReeceSmith14/BlackJack-Game/assets/61851890/92c6897b-b7f8-4844-b976-bef0f967e14d)

##### Key Points

- Dealer has one card on show while their second card remains blank/the back of the card.
- Player has both cards on show.
- The players score is on show.
- Dealers second card and score generates after the player ends their go.
- Both the Hit and Stand buttons are on show.

#### End Game State

##### End Game State Wireframe

![Game end state](https://github.com/ReeceSmith14/BlackJack-Game/assets/61851890/49052961-5646-4a41-ac50-76d0d2bdbd54)

##### End Game State Wireframe - Smaller Screen

![Game end state - mobile](https://github.com/ReeceSmith14/BlackJack-Game/assets/61851890/0473a1b1-19b1-4d2f-aaa2-1a7c01eda9a7)

##### Key Points

- Hit and Stand buttons become hidden.
- Results are now on show.
- Clicking deal restarts the game.

### Surface

#### Colours

- The primary colour for the game is a black background. This choice is inspired by the elegant and timeless look of casinos, providing a sleek and immersive gaming experience.

- The font colour used is gold, which complements the black background perfectly and adds a touch of luxury and sophistication reminiscent of high-stakes casino environments.

- Buttons in the game feature a dynamic colour scheme to enhance user interaction. Initially, they have a black background with gold font. Upon hovering, the buttons invert to display a gold background with black font. This contrast not only aligns with the overall aesthetic but also ensures clear visibility and an engaging user interface.

- The chosen colour palette of black and gold not only evokes the classic casino feel but also provides excellent contrast, making the text and interactive elements stand out sharply against the background.

This colour scheme aims to create a visually appealing and intuitive interface, enhancing the overall user experience by drawing inspiration from traditional casino aesthetics.

#### Typography

- The title/h1 tag use the serif [Google font](https://fonts.google.com/specimen/Playfair+Display) "Playfair Display". This choice ensures that the title stands out prominently, adding a touch of elegance and making it the focal point of the interface.

- For all other text elements, the sans-serif [Google font](https://fonts.google.com/specimen/Roboto?query=Roboto) "Roboto" is used. This font is selected for its clean and modern appearance, providing excellent readability and a smooth user experience.

- The combination of "Playfair Display" and "Roboto" creates a harmonious balance, with the distinct and stylish title font drawing attention while the simple and readable body font ensures that the game's buttons, and other textual elements are easily understandable.

This typography scheme is designed to enhance the overall aesthetic and usability of the game, making important elements stand out while maintaining clarity and readability throughout.

#### Images

- The game features card images to represent both the player's and the dealer's hands. These images provide a visual representation of the cards in play, enhancing the gaming experience.

- Initially, a blank or back-of-card image is used to indicate that no cards have been dealt. This image also serves as the dealer's "hole card" when the game begins, maintaining the element of suspense typical of a real Blackjack game.

The use of these images ensures clarity and helps players easily understand the state of the game, while also adding an authentic touch to the gameplay environment.

#### Initial Game State

##### Game Initial State

![Initial game state - mockup](https://github.com/ReeceSmith14/BlackJack-Game/assets/61851890/88c0afe9-a3bd-4a94-89cc-1f6b1b2af788)

##### Game Initial State - Smaller Screens

![Initial game state - mockup - mobile](https://github.com/ReeceSmith14/BlackJack-Game/assets/61851890/289a5e88-8691-495d-ad67-b76010ef9315)

#### After Deal State

##### After Deal State

![After deal state - mockup](https://github.com/ReeceSmith14/BlackJack-Game/assets/61851890/ae13de19-04de-41ac-a6b0-eab5bfc619f8)

##### After Deal State - Smaller Screen

![After deal state - mockup - mobile](https://github.com/ReeceSmith14/BlackJack-Game/assets/61851890/37f18094-a1c8-4874-a52a-0e54555a612d)

#### End Game State

##### End Game State

![Game end state - mockup](https://github.com/ReeceSmith14/BlackJack-Game/assets/61851890/3e184dd0-100b-4da7-96a5-597a2769f79e)

##### End Game State - Smaller Screen

![Game end state - mockup - mobile](https://github.com/ReeceSmith14/BlackJack-Game/assets/61851890/d12a3584-5fae-4469-858a-3a63d40a5e29)

## Features

### Features Across the Game

#### Game Interface

- Dealer's Hand and Player's Hand: Both the dealer's and player's hands are displayed prominently on the game screen. Each hand shows the respective cards dealt.

- Score Tracker: A score tracker is displayed under each hand, updating dynamically as cards are dealt.

- Hit Button: Allows the player to draw an additional card to their hand.

- Stand Button: Ends the player's turn, allowing the dealer to play. The dealer will keep picking up until they have a score of 17 or higher.

- Deal Button: Used to start a new game, resetting the hands and scores.

#### Game Outcomes

- The game calculates and displays the result once the player's and dealer's turns are complete. The result indicates whether the player wins, loses, or ties.

#### Responsiveness

- The game interface is fully responsive, adapting seamlessly to different screen resolutions. This ensures an optimal user experience whether playing on a desktop, tablet, or mobile device.

- Media queries and [Bootstrap](https://getbootstrap.com/) have been used to maintain the interface's usability and aesthetic appeal across various devices.

#### Accessibility

- Font sizes are set in rem units to respect user preferences for text scaling, ensuring readability for users with visual impairments.

- High contrast between the text and background improves readability and makes the game accessible to users with visual stress or colour blindness.

### Features Specific to Gameplay

#### Core Gameplay

- Card Dealing: The game simulates the dealing of cards, visually displaying them in the player’s and dealer’s hands.

- Score Calculation: The score for each hand is calculated and displayed in real-time, allowing players to make informed decisions.

- Game Logic: Implements standard Blackjack rules, including automatic dealer play, to determine game outcomes accurately.

### Future Features

- Betting System: Add the ability for players to place bets on their hands, adding a strategic element to the game.

- Splitting: Enable the player to split their hand into two separate hands if they receive two cards of the same value, adding depth to the gameplay.

- Doubling Down: Allow the player to double their bet in exchange for committing to stand after receiving one additional card, increasing the strategic options available.

## Technologies Used

- [HTML](https://en.wikipedia.org/wiki/HTML) for the game content.
- [Bootstrap](https://getbootstrap.com/) framework for the initial styling and responsiveness.
- [CSS](https://en.wikipedia.org/wiki/CSS) to further style and customise the game.
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript) for core game mechanics, user interactions, real-time updates, and dynamic interface. game.
- [jQuery](https://jquery.com/) for event handling, DOM selection, and manipulation
- [Google Fonts](https://fonts.google.com/) to style the game fonts.
- [Git](https://git-scm.com/) was used as the version control system.
- [GitHub](https://github.com/) for the git repository hosting.
- [Placeit](https://placeit.net/) used to produce game mockup used in this README.md
- [Sublime Text](https://www.sublimetext.com/) for writing my code.
- [Atom](https://atom-editor.cc/) used for writing my README.md
- [Beautifier.io](https://beautifier.io) to keep code tidy and to industry standard
- [Coolors](https://coolors.co/contrast-checker/000000-ffd700) to check colour contrast
- [HTML Validator](https://validator.w3.org) to validate HTML
- [CSS Validator](https://validator.w3.org) to validate CSS
- [JSHint](https://jshint.com) to validate JS
- [Google DevTools](https://developer.chrome.com/docs/devtools) to test my games responsiveness.
- [PageSpeed Insights](https://pagespeed.web.dev/) to test games performance
- [Pixelied - PNG to WEBP Converter](https://pixelied.com/convert/png-converter/png-to-webp) to convert my .png card images to .webp

## Testing

| Test Description | Expected Outcome | Outcome | Action | Re-test |
| --- | --- | --- | --- | --- |
| Responsiveness on smaller screens | Dealer & Player hands, scores and game buttons should stack in one column | Passed | N/A | N/A |
| Responsiveness on medium screens | Dealer & Player hands and scores should appear next to each other rather than stacked. Each hand will consist of rows of two cards. | Passed | N/A | N/A |
| Responsiveness on large screens | Dealer & Player hands and scores should appear next to each other rather than stacked. Each hand will consist of rows of three cards. | Failed. Hands defaulted to rows of two cards| media queries adjusted so that the width of the cards was small enough to allow for three cards | Passed |
| Responsiveness on extra large screens | Font and card image size should adjust to be big enough on larger screens | Passed | N/A | N/A |
| Deal button | Two cards are dealt to each the player and dealer. Dealer should have one card face down. Player's score should be shown. Hit and Stand button should appear. Re-pressing the Deal button re-starts the game. The cards dealt shouldn't be duplicated| Failed. Duplicate cards have been spotted | The deck didn't clear at the end of the game meaning each new game deck added to the last. Added JS to clear the deck array at the end of the results function. | Passed |
| Stand button | Hides the Hit button. Dealer's facedown / hole card is shown. Dealer hits until they have 17 or more. | Passed | N/A | N/A |
| Hit button | Player receives another card | Passed | N/A | N/A |
| Scores | The total value of the hands should be shown in score section. This should update dynamically with every new card that is added to the game. Dealers hand should only show a score when the hole card is turned over. If the player is dealt 21/Blackjack the Hit button should be hidden. If the player's score goes over 21 the hit and stand buttons should be hidden | Failed. Score wouldn't show 21 if a player was dealt a Blackjack. | The deal function was adjusted so that the score was calculated before the value was added to the DOM | Passed |
| Results | Results should appear after the game has finished | Passed | N/A | N/A |
| Browser Compatibility | Tested game using browsers Firefox, Safari, Chrome and Edge. All above tests should pass. | Failed. Images failed to load on Safari on my MacBook Air. webp format isn't supported by Safari 3.1 - 13.1. webp started be supported from Safari 14 - 15.6, so on newer IOS devices images will load fine. This was confirmed using [caniuse.com](https://caniuse.com/?search=webp)| N/A | N/A |
|Colours| The colour contrast should score at least 14 according to [Coolors](https://coolors.co/contrast-checker/000000-ffd700) | Passed | N/A | N/A |
|Performance| The games performance score should be at least 80 according to [PageSpeed Insights](https://pagespeed.web.dev/) on both mobile and desktop| Failed. Performance score of 65 achieved on mobile. 97 on desktop| Image format changed from png to webp | Passed |

### Testing User Stories

>- Navigate easily with a user-friendly layout.

The Blackjack game interface is designed with simplicity and usability in mind. The navigation is intuitive, with clear buttons. The main controls (deal, hit, stand, are only visible when they are needed, ensuring that players can easily understand and interact with the game.

>- Have a smooth and enjoyable gameplay experience.

Gameplay runs smoothly without any noticeable lag or interruptions. Animations for dealing cards and updating the game state are fluid and responsive. The design is visually appealing, contributing to an overall enjoyable gaming experience. Extensive testing across different browsers and devices (desktop, tablet, and mobile) ensures consistent performance and user experience.

>- See real-time updates of my hand value and the dealer's hand.

The game interface dynamically updates to show the player's hand value and the dealer's hand value in real-time. When cards are dealt or actions are taken, the values are recalculated and displayed immediately. This provides players with accurate and up-to-date information, which is crucial for making informed decisions during the game.

### Code Validation

#### HTML

HTML was validated using [Markup Validation Service](https://validator.w3.org)

![Valid HTML](https://github.com/ReeceSmith14/BlackJack-Game/assets/61851890/9d46c5c9-3433-481a-8ada-fcf1cf22c151)

#### CSS

CSS was validated using [The W3C CSS Validation Services](https://jigsaw.w3.org/css-validator/)

![Valid CSS](https://github.com/ReeceSmith14/BlackJack-Game/assets/61851890/b4d80dea-c9da-4c82-b8b2-b0ebd8189c74)

#### JavaScript

JavaScript was validated using [JSHint](https://jshint.com)

![Valid JS](https://github.com/ReeceSmith14/BlackJack-Game/assets/61851890/d29c2216-bc9a-4d8f-961b-89e483e59746)

## Deployment

This project was developed  using a mixture of IDEs, committed to git initially using the PCs built-in terminal and then eventually [GitHub Desktop](https://desktop.github.com/).

The IDEs used were:

- [Atom](https://atom-editor.cc/) Used primarily to edit the README.md becuase of it built-in markdown preview
- [Sublime Text](https://www.sublimetext.com/index2) Used to edit HTML, CSS and JS.

### Deploying from GitHub

1. Log into GitHub account.
2. Go to your repositories and select BlackJack-Game.
3. At the top of the screen you'll find "Settings" in the same navigation bar as "Code", "Issues" etc.
4. Open "Pages".
5. Under "Build and deployment", change source to "Deploy from a branch".
6. Under branch select "Main" / whichever branch is the most up to date and working, select the "root" folder and click the save button.
7. Refresh the page and eventually at the top a URL will be generate.
8. Click "Visit site" to view website.

### Running The Project Locally

1. At the top of this repository click "<> Code",then "local", then "clone", "HTTPS" and copy the URL.
2. In your IDE of choice, change to your preferred  working directory, open the Git Bash and type:

```
git clone <repository-url>
```
3. Hit enter to clone.

### Forking the Repository

You can create a copy of the repository and make changes without affecting the original repository by forking.

Click the "fork" button at the top of the GitHub repository and a copy of the repository will be saved in your account.

If the original repository is updated you'll receive a notification.

### Making Updates

After making changes to the code using your preferred IDE, you can commit them using Git.

type the following into your git bash in order to do so:

```
git add .
git commit -m "commit message"
git push origin main
```
## Credits

### Media

- Card images found in [ImKennyYip - black-jack repository](https://github.com/ImKennyYip/black-jack)

### Code

- [The Fisher Yates Method](https://www.w3schools.com/js/js_array_sort.asp) was used to randomise the deck array in my javascript.
- Solution for Jest not recognising Jquery object($) provided by user [jjee](https://stackoverflow.com/users/5830656/jjee) on [stackoverflow](https://stackoverflow.com/questions/72200196/jest-not-recognising-jquery-object)
- Guide on writing JSDoc comments provided by [Brian Macharia](https://bald-swan-bb5.notion.site/JavaScript-60f5c6be428b4bd4874ef888b94597fd)

### Acknowledgements

- General revision on array methods provided by [w3schools.com](https://www.w3schools.com/js/js_array_methods.asp)
