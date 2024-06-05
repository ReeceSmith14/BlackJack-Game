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
- [Bugs & Improvements](#bugs-&-improvements)
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

### Future Features

## Technologies Used

- [Online-Convert.com](https://image.online-convert.com/convert-to-ico) to convert a .png to a .ico. This .ico file was used as a favicon to appear next to the title in the browser tab.
- [HTML](https://en.wikipedia.org/wiki/HTML) for the website content.
- [Bootstrap](https://getbootstrap.com/) framework for the initial styling and responsiveness.
- [CSS](https://en.wikipedia.org/wiki/CSS) to further style and customise the webpage.
- [Google Fonts](https://fonts.google.com/) to style the website fonts.
- [Font Awesome](https://fontawesome.com/) for the icons used on the webpage.
- [Git](https://git-scm.com/) was used as the version control system.
- [GitHub](https://github.com/) for the git repository hosting.
- [ImgBB](https://imgbb.com/) to host the wireframe screenshots.
- [Placeit](https://placeit.net/) used to produce website mockup used in this README.md

## Testing

| Test Description | Expected Outcome | Outcome | Action | Re-test |
| --- | --- | --- | --- | --- |
| Social Media Links | Links open to my social media pages on a new tab | Passed | N/A | N/A |
| Navigation Links | Links smoothly scroll page to corresponding section | Failed. Contact link didn't work | href attribute of anchor tag updated to the correct element id. "contact-section" | Passed |
| Contact Me Button | Link smoothly scrolls page to corresponding section | Failed. Contact link didn't work | href attribute of anchor tag updated to the correct element id. "contact-section" | Passed |
| Project Title & Thumbnail Links | Links open to respective GitHub repositories in a new tab | Passed | N/A | N/A |
| Navigation Bar Responsiveness | On smaller screens the navigation links should become a drop down menu | Passed | N/A | N/A |
| Hover States | All clickable links (minus project thumbnails) should change appearance on hover | Passed | N/A | N/A |
| Responsiveness On Larger Screens | At 1399px elements should stop expanding | Passed | N/A | N/A |
| Responsiveness On Smaller Screens | Certain elements should form columns rather than rows | Passed | N/A | N/A |
| Contact Form Validation | Name, Email & Message inputs should be required. Name input should only accept text, Email should only only accept valid emails, Number should only accept numbers & Message can accept anything. Information should be submitted to https://formdump.codeinstitute.net | Passed | N/A | N/A |
| Browser Compatibility | Tested site using browsers Firefox, Safari, Chrome and Edge. All above tests should pass. | Failed. Images failed to load on Safari on my MacBook Air. webp format  isn't supported by Safari 3.1 - 13.1. webp started be supported from Safari 14 - 15.6, so on newer IOS devices images will load fine. This was confirmed using [caniuse.com](https://caniuse.com/?search=webp)| N/A | N/A |

### Testing User Stories

>- Quickly understand the purpose of the portfolio  website.

Name, role and tagline are displayed as soon as the page loads. This hints towards what the page is about and just underneath is an about section with more information.

>- Navigate easily with a user-friendly layout.

Navigation bar is on display at the top of the page and is fixed so it's always in view. This allows the user to navigate to any section quickly no matter where they are on the page.

>- Assess the developer's skills and experiences.

About section clearly lays out skills and experiences. The user is also prompted to view the projects just below this section. Again the navigation bar is on display should the user want to move trough the page without scrolling

> - Learn about the developer through an engaging "About Me" section.

I would like to think that my about section is engaging and I tried my best to make it more personal by including a portrait.

>- Access external profiles like LinkedIn or GitHub for more information.

Links to my LinkedIn and GitHub are included in both the fixed navigation bar and also in the contact section at the bottom.

>- Find easily accessible contact information.

There is a contact section which includes various ways to contact me, including: LinkedIn, GitHub, phone, email and contact form.

### Code Validation

#### CSS

CSS was validated using [The W3C CSS Validation Services](https://jigsaw.w3.org/css-validator/)

![valid-css](https://github.com/ReeceSmith14/Personal-Portfolio-Website/assets/61851890/a91c8f78-50a3-484f-8acb-41d4044ce4de)

#### HTML

HTML was validated using [Markup Validation Service](https://validator.w3.org)

![valid-html](https://github.com/ReeceSmith14/Personal-Portfolio-Website/assets/61851890/3d3868a3-087d-4a8f-886f-f1deb6cf5b2b)

## Deployment

This project was developed  using a mixture of IDEs, committed to git initially using the PCs built-in terminal and then eventually [GitHub Desktop](https://desktop.github.com/).

The IDEs used were:

- [Atom](https://atom-editor.cc/) Used primarily to edit the README.md becuase of it built-in markdown preview
- [Sublime Text](https://www.sublimetext.com/index2) Used to edit HTML and CSS.

### Deploying from GitHub

1. Log into GitHub account.
2. Go to your repositories and select Personal-Portfolio-Website.
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

- Image hosting of the wireframe screenshots was done through [ImgBB](https://imgbb.com/)
- For icons on the webpage I used the [Font Awesome](https://fontawesome.com/) library
- [Online-Convert.com](https://image.online-convert.com/convert-to-ico) to convert a .png to a .ico for the favicon.
- To make the website mockup used in this README.md I used [Placeit](https://placeit.net/)

### Code

- [W3Schools](https://www.w3schools.com/bootstrap/bootstrap_navbar.asp) tutorial on a bootstrap collapsing navigation bar was used as a guide when constructing my own.

### Acknowledgements

- [Code Institute](https://codeinstitute.net/): For their tutorials, guidance, templates, examples, and mentorship.
- [GitHub](https://github.com/): For their [Git cheat sheet](https://education.github.com/git-cheat-sheet-education.pdf).
- [W3Schools](https://www.w3schools.com/): For their tutorials, examples and reference sheets.
- [Markdown Guide](https://www.markdownguide.org/cheat-sheet/): For their cheatsheet on markdown.













## Credits

### Media

- Card images found in [ImKennyYip - black-jack repository](https://github.com/ImKennyYip/black-jack)

### Code

- [The Fisher Yates Method](https://www.w3schools.com/js/js_array_sort.asp) was used to randomise the deck array in my javascript.
- Solution for Jest not recognising Jquery object($) provided by user [jjee](https://stackoverflow.com/users/5830656/jjee) on [stackoverflow](https://stackoverflow.com/questions/72200196/jest-not-recognising-jquery-object)
- Guide on writing JSDoc comments provided by [Brian Macharia](https://bald-swan-bb5.notion.site/JavaScript-60f5c6be428b4bd4874ef888b94597fd)

### Acknowledgements

- General revision on array methods provided by [w3schools.com](https://www.w3schools.com/js/js_array_methods.asp)

- Refresher on testing wih the Jest framework provided by [freeCodeCamp.org](https://www.freecodecamp.org/) in this [YouTube video](https://www.youtube.com/watch?v=IPiUDhwnZxA)

- Reminder of matchers provided by [Jest.io](https://jestjs.io/docs/using-matchers)

- Reminder of mock functions by [Jest.io](https://jestjs.io/docs/mock-functions)
