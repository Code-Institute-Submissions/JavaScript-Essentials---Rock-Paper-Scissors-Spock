 # R-P-S Nucleur
R-P-S Nucleur is an online web game. The rules of the game are straightforward, the gameplay follows Rock, Paper, Scissors with a secret 'Nucleur' option hidden within. Players can choose to challenge the computer or to challenge a friend. Paterns of three options, either Rock, Paper or Scissors, are compared to determine the winner of each 'Round' of the patern. Points are awarded to the winning party, a draw will not award any points, the highest score one can achieve is three points. In the games current format, players are expected to predetermine the end point, ie First to 10 points or similar as the game 'loop' can run endlessly with points from previous games carried forward. 

The game has good potential for further development, it features a classic flash game kind of design style with a retro appearance. This game given its simplicity would likely see most use in a classroom 'fun lesson' type environment, but would be appropriate for anybody searching for a digital Rock, Paper, Scissors game. 

The fourth option, 'Nucleur' has been intentionally hidden within the banner of the site. This is to give options to play the game in the regular original format, or to withold the strength of the option from new players. Chosing this option shall end the round and award exactly 1 point only to the relevant player.

![Responsive](https://github.com/WHLW27/JavaScript-Essentials---Rock-Paper-Scissors-Spock/blob/main/assets/images/readme/responsive-mockup.png)

## Features 

Below is a detailed explanantion of the various features built into the website, along with some additonal features that could be implemented further down the road. 

### Existing Features

- __Main Menu__

  - When first landing on the website, you'll see a clear and simple Main Menu taking the form of a selection of buttons. 
  
  This iteration of the game features two game types which can be accessed by selecting the relevant button on the screen. These being the PVP (Player vs Player) Game type, P VS Computer (Player vs Computer) Game Type. 
  
  This menu sits beneath the banner featuring the games title. This banner carries across all areas of the game.
  - Beneath the two game type options are Manuals featuring helpful information on how to navigate through either game type. 
  This area gives master access to all areas of the game, those external locations also root back to this menu, allowing for smooth and seamless navigation throughout.  

![Main Menu](https://github.com/WHLW27/JavaScript-Essentials---Rock-Paper-Scissors-Spock/blob/main/assets/images/readme/main-menu.png)

- __PVP Game Type__

  - The Player vs Player game type features a playing window in which the player will select from one of three options, from rock, paper or scissors. This action is completed three times over to build a patern of 3 objects. The player then locks in the chosen options and passes the controls to player two, who will repeat the process. 
  
  These paterns are compared, winners are declared through alerts and points (up to a max of three) are awarded via the scoreboard to the winnning party. Players can then begin a new game, with player names and scores from the previous game carried forward. 
  - Users chosing to face each other in the game will be drawn to this game type, allowing for a 2 player game mode, thus emulating the real world equivalent of Rock, Paper , Scissors. acheiving this function could be seen as the primary directive of the project. 

A                          |  B                        | C
:-------------------------:|:-------------------------:|:-------------------------:
![PVP Game Type](https://github.com/WHLW27/JavaScript-Essentials---Rock-Paper-Scissors-Spock/blob/main/assets/images/readme/pvp-one.png)|![PVP Game Type](https://github.com/WHLW27/JavaScript-Essentials---Rock-Paper-Scissors-Spock/blob/main/assets/images/readme/pvp-two.png)|![PVP Game Type](https://github.com/WHLW27/JavaScript-Essentials---Rock-Paper-Scissors-Spock/blob/main/assets/images/readme/pvp-three.png)

- __PVPC Game Type__

  - The Player vs Computer game type features a playing window in which the player will select from one of three options, from rock, paper or scissors. This action is completed three times over to build a patern of 3 objects. The player then locks in the chosen options, which cues the computer to randomly generate a patern of its own. 
  
  These paterns are compared, winners are declared through alerts and points (up to a max of three) are awarded via the scoreboard to the winnning party. The Player can then begin a new game, with their chosen name and scores from the previous game carried forward. 
  - Users chosing to face the computer in a game of chance will be drawn to this game type, allowing for a single player game mode. Providing game modes to cater for individuals and for pairs and perhaps groups to some extent, expands the reach of the project, and gives the game use in all relevant circumstances. 

A                          |  B                        | C
:-------------------------:|:-------------------------:|:-------------------------:
![PVC Game Type](https://github.com/WHLW27/JavaScript-Essentials---Rock-Paper-Scissors-Spock/blob/main/assets/images/readme/pvc-one.png)|![PVC Game Type](https://github.com/WHLW27/JavaScript-Essentials---Rock-Paper-Scissors-Spock/blob/main/assets/images/readme/pvc-two.png)|![PVC Game Type](https://github.com/WHLW27/JavaScript-Essentials---Rock-Paper-Scissors-Spock/blob/main/assets/images/readme/pvc-three.png)

- __Score Chart__

  - The score chart will appear in both the PVP and P VS Computer game types, in PVP (seen in column A) Player One and Player Two can use this scoreboard to change and set their player name for the game. These names can be carried into new games. The scoreboard also efficiently records and reflects the scores in points for the two players. 
  
  In the P VS Computer (seen in column B) game type, only the name for player one can be altered, the scoreboard will instead reflect the scores for the Computer
  - This is a crucial tool for the gameplay. This records the winners of each of the three rounds in each overall game, then awards points up to a maximum of three to the winning party. Players can predetermine the end goal, such as first to 10 points, this scoreboard allows for these points to be recorded. 
  
A                          |  B                        
:-------------------------:|:-------------------------:
![Scorechart](https://github.com/WHLW27/JavaScript-Essentials---Rock-Paper-Scissors-Spock/blob/main/assets/images/readme/score-chart.png)|![Scorechart](https://github.com/WHLW27/JavaScript-Essentials---Rock-Paper-Scissors-Spock/blob/main/assets/images/readme/score-chart-b.png)

- __Playing Area__ 

  - The playing area could be viewed as the primary feature of the site, its in this section that players will ccreat their paterns, the heart of the game itself is contain within this tool, as without it the game could not operate. This tool is responsive, and interactive and encourages the game play loop. 
  
  The styles of the Player One (seen in column A) and Player Two (seen in column B) windows in the PVP Game Type are different to illustrate the change in control. New games are also activated via this tool.
  - As mentioned above, this tool is the heart of the game itself, no matter which game type you chose, whether player one or player two, you will be acquainted with this tool. Without it the gameplay loop would not exist and players would not be able to operate the games functions outside of the main menu. Therefore this tool could be seen to be the most valuable feature of all. 

A                          |  B                        
:-------------------------:|:-------------------------:
![Paying Area](https://github.com/WHLW27/JavaScript-Essentials---Rock-Paper-Scissors-Spock/blob/main/assets/images/readme/p-area-one.png)|![Paying Area](https://github.com/WHLW27/JavaScript-Essentials---Rock-Paper-Scissors-Spock/blob/main/assets/images/readme/p-area-two.png)

- __Patern Comparison Area__

  - This box will display the input chosen by both player one (P1) and player two (P2) to allow users to check the results themselves, in the P VS Computer game type, players can see their own choices alongside the patern randomly generated by the computer (PC). 
  - This tool allows the players to compare the paterns or to compare against the computer to reinforce the results of the game. 

![Patern Comparison/Results window](https://github.com/WHLW27/JavaScript-Essentials---Rock-Paper-Scissors-Spock/blob/main/assets/images/readme/comparison.png)

- __Message Center__

  - The message center will display messages at different stages of the game, if the hidden cheat option is activated, messages are flagged here, images of these messageds are found further in this document. 
  
  Including the nuke alerts, the winners of rounds 1, 2 and 3 are declared through these messages, the game will use the chosen player names and declared who wins the point or if the round is a draw. 
  - This tool notifys players of certain actions taking place within the gameplay, and of the results of each round, without this players can use the scoreboard or compare the paterns via the tool explained above. Theses messages add an extra Quality of Life layer to the game.  

![Patern Comparison/Results window](https://github.com/WHLW27/JavaScript-Essentials---Rock-Paper-Scissors-Spock/blob/main/assets/images/readme/message.png)

- __Play Again / Main Menu Buttons__

  - At the bottom of the game area are two buttons, one of them sits inside the playing window and bares the text 'Play again' (seen in column A), this option will fire up the next game whilst carrying the previous scores and chosen player names forward. 
  
  The other button 'Main Menu' (seen in column B) shall reset the game and return players to the landing screen, main game menu.
  - The play again button will give players the option to carry on the scoring, perhaps they are playing first to 10 points? A maximum of 3 points can be awarded per round so this option carries forward any chosen player names and current scores into fresh games.
  - The main menu button will allow players to return to the main menu, whilst resetting the player names, current scores and chosen paterns. Effectively resetting the game itself whilst providing straightforward site navigation. 

A                          |  B                        
:-------------------------:|:-------------------------:
![Play again and Main Menu buttons](https://github.com/WHLW27/JavaScript-Essentials---Rock-Paper-Scissors-Spock/blob/main/assets/images/readme/pagain-button.png)|![Play again and Main Menu buttons](https://github.com/WHLW27/JavaScript-Essentials---Rock-Paper-Scissors-Spock/blob/main/assets/images/readme/main-button.png)

- __Hidden Cheat Option__

  - When inside one of the two seperate game types, player vs player or player vs computer, players have access to a hidden cheat. Hovering over the text in the title of the page 'Nucleur Bomb!' (seen in column A) shall update the text to show 'Launch!', by clicking this area of the screen a sequence of events shall occur. Messages appear through alert boxes notifying the players that a Nuke is incomming, (seen in column B - C) an audio file shall play and the active player shall receive exactly 1 point, the round well then end and a new game shall be started. Players can use this option a maximum of 3 times each to provide some balancing. 
  - This feature is what defines the game in its own form, pulling away from the standard format of Rock, Paper, Scissors and adding some additional flare. Given that this feature is hidden it will be rewarding for players who discover it. Overall this provides the game with more depth and character.

A                          |  B                        | C
:-------------------------:|:-------------------------:|:-------------------------:
![Hidden Cheat](https://github.com/WHLW27/JavaScript-Essentials---Rock-Paper-Scissors-Spock/blob/main/assets/images/readme/nuke-one.png)|![Hidden Cheat](https://github.com/WHLW27/JavaScript-Essentials---Rock-Paper-Scissors-Spock/blob/main/assets/images/readme/nuke-two.png)|![Hidden Cheat](https://github.com/WHLW27/JavaScript-Essentials---Rock-Paper-Scissors-Spock/blob/main/assets/images/readme/nuke-three.png)


- __PVP Game Manual__

  - This area of the site features a game manual for the Player vs Player game type, it explains the various functions and concepts within the game, such as the patern comparison, the scoring, how to operate the game, it explains how to carry over scores and set the player names.  
  - This guide covers the PVP game type and its operation in entriety which is invaluable to thos finding difficulty understanding the game at first, this would likely be of most use to an older audience of those less versed in digital technology.

A                          |  B                        
:-------------------------:|:-------------------------:
![PVP Game Manual](https://github.com/WHLW27/JavaScript-Essentials---Rock-Paper-Scissors-Spock/blob/main/assets/images/readme/pvp-manual.png)|![PVP Game Manual](https://github.com/WHLW27/JavaScript-Essentials---Rock-Paper-Scissors-Spock/blob/main/assets/images/readme/pvp-manual-two.png)

- __PVSPC Game Manual__

  - This area of the site features a game manual for the Player vs Computer game type, it explains the various functions and concepts within the game, such as the patern comparison, the scoring, how to operate the game, it explains how to carry over scores and set the player name.  
  - This guide covers the P VS Computer game type and its operation in entriety which is invaluable to thos finding difficulty understanding the game at first, this would likely be of most use to an older audience of those less versed in digital technology.

A                          |  B                        
:-------------------------:|:-------------------------:
![PVSPC Game Manual](https://github.com/WHLW27/JavaScript-Essentials---Rock-Paper-Scissors-Spock/blob/main/assets/images/readme/pvc-manual.png)|![PVSPC Game Manual](https://github.com/WHLW27/JavaScript-Essentials---Rock-Paper-Scissors-Spock/blob/main/assets/images/readme/pvc-manual-two.png)

- __Start A Game Button__

  - This button acts as a call-to-action. featured at the bottom of both game manuals, this button shall start the relevant game type without needing to return to the main menu.  
  - Players who chose first to review the rules of the game and its functions will be pleased to see they do not need to reset the game or make unnecesary clicks and can begin a game with no roadblocks to move around. 

![Start game button](https://github.com/WHLW27/JavaScript-Essentials---Rock-Paper-Scissors-Spock/blob/main/assets/images/readme/start.png)

### Potential features to Implement

- Impliment a game option to chose a finite number of rounds such as 'best of 3' or 'first to 10 points'.
- 'Classic Mode' with only the three original options.
- 'Quick Fire Mode' with no paterns, only one round.
- An interactive main menu, the will allow users to set all game options via toggles rather than seperate buttons. 
- Enhacements through animations on the score counter, better audio, original artworks and imagery added to the styling. 
- The styling has room for improvement especially concerning alternative device reponsiveness. 

## Testing 

Below is a detailed explanation of the testing and deployment process of this project.


### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/), all HTML code from script.js functions have also been validated through this service.
- CSS
  - No errors were found when passing through the official [Jigsaw validator](https://jigsaw.w3.org/css-validator/).
- JavaScript
  - No relevant errors were found when passing through the official [JSHint Linter](https://jshint.com/).

### Unfixed Bugs

If Players are too trigger happy with the mouse, it appears some functions overlap. Selecting the options is fine, but selecting the 'Check Results' button (which then updates to the 'Play again' button) and suddenly clicking the same area of the screen will begin a new game, results are carried over as are player names by the patern comparison divs that should not be visible at the point in the game are still visible. There is likely various methods to address this, use of setTimeout could delay certain features updating for example.

My tutor also highlighted my used of HTML markup in my JavaScript file, I thought that using javascript to manipulate the DOM to navigate through the site was a good idea. That having a single HTML file that was manipulated by the script was creative. My tutor explained this as an 'Anti-patern' and provided the definition of the word in relation to programming, however, I struggled to find documentation online to explain exactly why the technique I adopted is an anti patern and fell short of time remaining to redesign the script. 

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab.
  - From the source section drop-down menu, select the Main Branch.
  - Once the Main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - [R-P-S Nucleur](https://whlw27.github.io/JavaScript-Essentials---Rock-Paper-Scissors-Spock/).

## Credits  

### Revision 

- Additional guidance on Javascript and further explanantion on topics not covered in depth in the course was found on [W3 Schools](https://www.w3schools.com/).
- Additional self-lead projects and study on Javascript was found on [Codecademy](https://www.codecademy.com/learn) via the PRO subscription.

### Content 

- The icons across the website were taken from [Font Awesome](https://fontawesome.com/).
- The website fonts are courtesy of [Google Fonts](https://fonts.google.com/about).

### Media 

- Audio featured in the game was sourced from [Freesound](https://freesound.org/).