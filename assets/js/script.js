// get the HTML content of the main menu for reset function
const mainMenu = document.body.innerHTML;

// create empty arrays for the player choices
let playerOneMoves = [];
let playerTwoMoves = [];
let computerMoves = [];

// below is the code for a toggle which is used in the nukeGame functionality to determine which party has nuked the game
let playerTwoToggle = "False";

let gameToggle = "";

// below are the counters for player one and player two that iuncrement by 1 each time a nuke is fired, players can fire a maximum of 3 nukes
let nukeCounterOne = 0;
let nukeCounterTwo = 0;

// the code below is a function that will replace the 'Player One' text with the text input recorded from the game scoreboard 
function setPOneName() {
  var audioSelect = new Audio('assets/audio/select.mp3');
  audioSelect.play();
  let playerOneName = document.getElementById("p-one-name").innerText;
  document.getElementsByClassName("player-header")[0].innerText = playerOneName;

}

// the code below is a function that will replace the 'Player Two' text with the text input recorded from the game scoreboard 
function setPTwoName() {
  var audioSelect = new Audio('assets/audio/select.mp3');
  audioSelect.play();
  let playerTwoName = document.getElementById("p-two-name").innerText;
  document.getElementsByClassName("player-header")[1].innerText = playerTwoName;
}

// the code below is the logic to begin a Player vs player game
function startPVP() {

  // play audio courtesy of https://freesound.org/ when starting a game
  var audioStart = new Audio('assets/audio/start.wav');
  audioStart.play();
  // get the body of the page
  let startBody = document.body;

  playerTwoToggle = "False";

  gameToggle = "PVP";

  // Set the body's innerHTML to player vs player choice selection
  startBody.innerHTML = `
    <!-- title division -->
    <div id="landing-title">
    <h2>
        Rock, Paper, Scissors,
    </h2>
    <h1 id="hidden-code" onclick="nukeGame();">
        
    </h1>

    <div id="gradient1"></div>
</div>

<br>

<section>

<div id="score-board">

  <div class="score-chart">
  <h3>SCOREBOARD</h3>
      <p id="p-one-name" contenteditable="true">PLAYERONE</p> 
      <i id="p-one-name-lock" class="fa-solid fa-lock-open" onclick="setPOneName();"></i>
      <h2 id="score-one"> 0 </h2>
  </div>



  <div class="score-chart">
    <p id="p-two-name" contenteditable="true">PLAYERTWO</p>
    <i id="p-two-name-lock" class="fa-solid fa-lock-open" onclick="setPTwoName();"></i>
    <h2 id="score-two"> 0 </h2>
  </div>
</div>


<!--  the code below builds the box where player one can click to select from various move types and lock in their choices -->
<div id="move-selection">
    <div id="player-one-moves">
        <h3 class="player-header">Player One</h3>
        <div id=player-one-move-one>
            <h2 class="choice-header">First Choice:</h2>

            <i class="fa-solid fa-hill-rockslide" onclick="pickPlayerOneChoiceOne('rock')"></i>
            <i class="fa-regular fa-note-sticky" onclick="pickPlayerOneChoiceOne('paper')"></i>
            <i class="fa-solid fa-scissors" onclick="pickPlayerOneChoiceOne('scissors')"></i>
                                   
        </div>

        <p class="selections">  ROCK | PAPER | SCISSORS</p>

        <div class="red-line-breaker"></div>

        <div id="player-one-move-two">
            <h2 class="choice-header">Second Choice:</h2>

            <i class="fa-solid fa-hill-rockslide" onclick="pickPlayerOneChoiceTwo('rock')"></i> 
            <i class="fa-regular fa-note-sticky" onclick="pickPlayerOneChoiceTwo('paper')"></i>
            <i class="fa-solid fa-scissors" onclick="pickPlayerOneChoiceTwo('scissors')"></i>
                                  
        </div>

        <p class="selections">  ROCK | PAPER | SCISSORS</p>

        <div class="red-line-breaker"></div>

        <div id="player-one-move-three">
            <h2 class="choice-header">Third Choice:</h2>

            <i class="fa-solid fa-hill-rockslide" onclick="pickPlayerOneChoiceThree('rock')"></i> 
            <i class="fa-regular fa-note-sticky" onclick="pickPlayerOneChoiceThree('paper')"></i>
            <i class="fa-solid fa-scissors" onclick="pickPlayerOneChoiceThree('scissors')"></i>
                                  
        </div>

        <p class="selections">  ROCK | PAPER | SCISSORS</p>

        <div class="red-line-breaker"></div>

        <!-- the code below will lock the input for player one and update the HTML to display player two -->
        <div id="lock-answer" onclick="lockAnswers();">Change Players!</div>

        <!-- this division creats a small colored bar at the bottom -->
        <div id="grad-player-one"></div>

    </div>

    <!-- the code below builds the same division as above but for player 2 instead -->
    <div id="player-two-moves">
        <h3 class="player-header">Player Two</h3>
        <div id="player-two-move-one">
            <h2 class="choice-header">First Choice:</h2>

            <i class="fa-solid fa-hill-rockslide" onclick="pickPlayerTwoChoiceOne('rock')"></i>
            <i class="fa-regular fa-note-sticky" onclick="pickPlayerTwoChoiceOne('paper')"></i>
            <i class="fa-solid fa-scissors" onclick="pickPlayerTwoChoiceOne('scissors')"></i>
                                   
        </div>

        <p class="selections">  ROCK | PAPER | SCISSORS</p>

        <div class="orange-line-breaker"></div>

        <div id="player-two-move-two">
            <h2 class="choice-header">Second Choice:</h2>

            <i class="fa-solid fa-hill-rockslide" onclick="pickPlayerTwoChoiceTwo('rock')"></i>
            <i class="fa-regular fa-note-sticky" onclick="pickPlayerTwoChoiceTwo('paper')"></i>
            <i class="fa-solid fa-scissors" onclick="pickPlayerTwoChoiceTwo('scissors')"></i>
                                   
        </div>

        <p class="selections">  ROCK | PAPER | SCISSORS</p>

        <div class="orange-line-breaker"></div>

        <div id="player-two-move-three">
            <h2 class="choice-header">Third Choice:</h2>

            <i class="fa-solid fa-hill-rockslide" onclick="pickPlayerTwoChoiceThree('rock')"></i> 
            <i class="fa-regular fa-note-sticky" onclick="pickPlayerTwoChoiceThree('paper')"></i>
            <i class="fa-solid fa-scissors" onclick="pickPlayerTwoChoiceThree('scissors')"></i>
                                  
        </div>

        <p class="selections">  ROCK | PAPER | SCISSORS</p>

        <div class="orange-line-breaker"></div>

        <!-- the code below will start a new game of PVP -->
        <div id="lock-answer-two" onclick="startPVPNewRound();">Play again!</div>

        <div id="grad-player-two"></div>

    </div>
</div>
</section>

<div id="patern-window-pvp">
<div id="results">
  <h3>Results</h3>
  </div>

<div id="paterns-two">
                <div id="firstplayers-chosen-moves">
                  <h3>P1:</h3>
                  <br>
                  <div id="first-players-move"></div>
                  <div id="second-players-move"></div>
                  <div id="third-players-move"></div>
                </div>
    </div>

    <div id="paterns-three">
                <div id="secondplayers-chosen-moves">
                  <h3>P2:</h3>
                  <br>
                  <div id="first-second-move"></div>
                  <div id="second-second-move"></div>
                  <div id="third-second-move"></div>
                </div>
    </div>
</div>

<!-- this code will reset the HTML content of the page to that of the original Main Menu content -->
<div id="reset-button" onclick="resetGame();">Main Menu</div>



<!-- Linking to javascript game logic -->
<script src="assets/js/script.js"></script>
    `;

  console.log('Starting Player VS Player.');
}

// the code below shall begin a new round of the player vs player gametype whilst carrying the scores of the previous game and the chosen player names forward
function startPVPNewRound() {
  var audioStart = new Audio('assets/audio/start.wav');
  audioStart.play();
  // get the body of the page
  let startBody = document.body;

  // ensuring the arrays are emptied for the new round 
  playerOneMoves.length = 0;
  playerTwoMoves.length = 0;

  playerTwoToggle = "False";

  gameToggle = "PVP";

  console.log(playerOneMoves);
  console.log(playerOneMoves);

  // gather the chosen player names to be carried into new games
  let playerOneOldName = document.getElementById("p-one-name").innerText;
  let playerTwoOldName = document.getElementById("p-two-name").innerText;

  let nameHeaders = document.getElementsByClassName("player-header");

  let playerOneOldScore = parseInt(document.getElementById('score-one').innerText);
  let playerTwoOldScore = parseInt(document.getElementById('score-two').innerText);

  // Set the body's innerHTML to player vs player choice selection
  startBody.innerHTML = `
  <!-- title division -->
<div id="landing-title">
    <h2>
        Rock, Paper, Scissors,
    </h2>
    <h1 id="hidden-code" onclick="nukeGame();">
        
    </h1>

    <div id="gradient1"></div>
</div>

<br>

<section>
  <div id="score-board">

    <div class="score-chart">
      <h3>SCOREBOARD</h3>
      <p id="p-one-name">Player One</p>
      <i id="p-one-name-lock" class="fa-solid fa-lock"></i>
      <h2 id="score-one"> 0 </h2>
    </div>

    <div class="score-chart">
      <p id="p-two-name">Player Two</p>
      <i id="p-two-name-lock" class="fa-solid fa-lock"></i>
      <h2 id="score-two"> 0 </h2>
    </div>
  </div>


    <!--  the code below builds the box where player one can click to select from various move types and lock in their choices -->
    <div id="move-selection">
        <div id="player-one-moves">
            <h3 class="player-header">Player One</h3>
            <div id=player-one-move-one>
                <h2 class="choice-header">First Choice:</h2>
                
                <i class="fa-solid fa-hill-rockslide" onclick="pickPlayerOneChoiceOne('rock')"></i>
                <i class="fa-regular fa-note-sticky" onclick="pickPlayerOneChoiceOne('paper')"></i>
                <i class="fa-solid fa-scissors" onclick="pickPlayerOneChoiceOne('scissors')"></i>
                
            </div>

            <p class="selections">  ROCK | PAPER | SCISSORS</p>

            <div class="red-line-breaker"></div>

            <div id="player-one-move-two">
                <h2 class="choice-header">Second Choice:</h2>
                
                <i class="fa-solid fa-hill-rockslide" onclick="pickPlayerOneChoiceTwo('rock')"></i>
                <i class="fa-regular fa-note-sticky" onclick="pickPlayerOneChoiceTwo('paper')"></i>
                <i class="fa-solid fa-scissors" onclick="pickPlayerOneChoiceTwo('scissors')"></i>
                
            </div>

            <p class="selections">  ROCK | PAPER | SCISSORS</p>

            <div class="red-line-breaker"></div>

            <div id="player-one-move-three">
                <h2 class="choice-header">Third Choice:</h2>

                <i class="fa-solid fa-hill-rockslide" onclick="pickPlayerOneChoiceThree('rock')"></i>
                <i class="fa-regular fa-note-sticky" onclick="pickPlayerOneChoiceThree('paper')"></i>
                <i class="fa-solid fa-scissors" onclick="pickPlayerOneChoiceThree('scissors')"></i>
                
            </div>

            <p class="selections">  ROCK | PAPER | SCISSORS</p>

            <div class="red-line-breaker"></div>

            <!-- the code below will lock the input for player one and update the HTML to display player two -->
            <div id="lock-answer" onclick="lockAnswers();">Change Players!</div>

            <!-- this division creats a small colored bar at the bottom -->
            <div id="grad-player-one"></div>

        </div>

        <!-- the code below builds the same division as above but for player 2 instead -->
        <div id="player-two-moves">
            <h3 class="player-header">Player Two</h3>
            <div id="player-two-move-one">
                <h2 class="choice-header">First Choice:</h2>

                <i class="fa-solid fa-hill-rockslide" onclick="pickPlayerTwoChoiceOne('rock')"></i>
                <i class="fa-regular fa-note-sticky" onclick="pickPlayerTwoChoiceOne('paper')"></i>
                <i class="fa-solid fa-scissors" onclick="pickPlayerTwoChoiceOne('scissors')"></i>
                
            </div>

            <p class="selections">  ROCK | PAPER | SCISSORS</p>

            <div class="orange-line-breaker"></div>

            <div id="player-two-move-two">
                <h2 class="choice-header">Second Choice:</h2>

                <i class="fa-solid fa-hill-rockslide" onclick="pickPlayerTwoChoiceTwo('rock')"></i>
                <i class="fa-regular fa-note-sticky" onclick="pickPlayerTwoChoiceTwo('paper')"></i>
                <i class="fa-solid fa-scissors" onclick="pickPlayerTwoChoiceTwo('scissors')"></i>
                
            </div>

            <p class="selections">  ROCK | PAPER | SCISSORS</p>

            <div class="orange-line-breaker"></div>

            <div id="player-two-move-three">
                <h2 class="choice-header">Third Choice:</h2>

                <i class="fa-solid fa-hill-rockslide" onclick="pickPlayerTwoChoiceThree('rock')"></i>
                <i class="fa-regular fa-note-sticky" onclick="pickPlayerTwoChoiceThree('paper')"></i>
                <i class="fa-solid fa-scissors" onclick="pickPlayerTwoChoiceThree('scissors')"></i>
                
            </div>

            <p class="selections">  ROCK | PAPER | SCISSORS</p>

            <div class="orange-line-breaker"></div>

            <!-- the code below will start a new game of PVP -->
            <div id="lock-answer-two" onclick="startPVPNewRound();">Play again!</div>

            <div id="grad-player-two"></div>

        </div>
    </div>
</section>

<div id="patern-window-pvp">
<div id="results">
  <h3>Results</h3>
  </div>

<div id="paterns-two">
                <div id="firstplayers-chosen-moves">
                  <h3>P1:</h3>
                  <br>
                  <div id="first-players-move"></div>
                  <div id="second-players-move"></div>
                  <div id="third-players-move"></div>
                </div>
    </div>

    <div id="paterns-three">
                <div id="secondplayers-chosen-moves">
                  <h3>P2:</h3>
                  <br>
                  <div id="first-second-move"></div>
                  <div id="second-second-move"></div>
                  <div id="third-second-move"></div>
                </div>
    </div>
</div>

<!-- this code will reset the HTML content of the page to that of the original Main Menu content -->
<div id="reset-button" onclick="resetGame();">Main Menu</div>



<!-- Linking to javascript game logic -->
<script src="assets/js/script.js"></script>`;

  console.log('Starting next round...');

  // update the player names once the html content has been replaced
  nameHeaders[0].innerText = playerOneOldName;
  nameHeaders[1].innerText = playerTwoOldName;
  document.getElementById("p-one-name").innerText = playerOneOldName;
  document.getElementById("p-two-name").innerText = playerTwoOldName;

  document.getElementById('score-one').innerText = playerOneOldScore;
  document.getElementById('score-two').innerText = playerTwoOldScore;
}

// the code below is the logic to begin a Player vs computer game
function startPVC() {
  var audioStart = new Audio('assets/audio/start.wav');
  audioStart.play();
  // get the body of the page
  let startBody = document.body;

  playerTwoToggle = "Computer";

  gameToggle = "PVPC";

  // Set the body's innerHTML to player vs computer choice selection
  startBody.innerHTML = `<!-- title division -->
  <div id="landing-title">
      <h2>
          Rock, Paper, Scissors,
      </h2>
      <h1 id="hidden-code" onclick="nukeGame();">
          
      </h1>
  
      <div id="gradient1"></div>
  </div>
  
  <br>
  
  <section>
      
    <div id="score-board">

      <div class="score-chart">
        <h3>SCOREBOARD</h3>
        <p id="p-one-name" contenteditable="true">Player One</p>
        <i class="fa-solid fa-lock-open" onclick="setPOneName();"></i>
        <h2 id="score-one"> 0 </h2>
      </div>



      <div class="score-chart">
        <p id="p-two-name">Computer</p>
        <i class="fa-solid fa-robot"></i>
        <h2 id="score-two"> 0 </h2>
      </div>
    </div>
  
  
      <!--  the code below builds the box where player one can click to select from various move types and lock in their choices -->
      <div id="move-selection">
          <div id="player-one-moves">
              <h3 class="player-header">Player One</h3>
              <div id=player-one-move-one>
                  <h2 class="choice-header">First Choice:</h2>
  
                  <i class="fa-solid fa-hill-rockslide" onclick="pickPlayerOneChoiceOne('rock')"></i>
                  <i class="fa-regular fa-note-sticky" onclick="pickPlayerOneChoiceOne('paper')"></i>
                  <i class="fa-solid fa-scissors" onclick="pickPlayerOneChoiceOne('scissors')"></i>
                  
              </div>

              <p class="selections">  ROCK | PAPER | SCISSORS</p>
  
              <div class="red-line-breaker"></div>
  
              <div id="player-one-move-two">
                  <h2 class="choice-header">Second Choice:</h2>
  
                  <i class="fa-solid fa-hill-rockslide" onclick="pickPlayerOneChoiceTwo('rock')"></i>
                  <i class="fa-regular fa-note-sticky" onclick="pickPlayerOneChoiceTwo('paper')"></i>
                  <i class="fa-solid fa-scissors" onclick="pickPlayerOneChoiceTwo('scissors')"></i>
                  
              </div>

              <p class="selections">  ROCK | PAPER | SCISSORS</p>
  
              <div class="red-line-breaker"></div>
  
              <div id="player-one-move-three">
                  <h2 class="choice-header">Third Choice:</h2>
  
                  <i class="fa-solid fa-hill-rockslide" onclick="pickPlayerOneChoiceThree('rock')"></i>
                  <i class="fa-regular fa-note-sticky" onclick="pickPlayerOneChoiceThree('paper')"></i>
                  <i class="fa-solid fa-scissors" onclick="pickPlayerOneChoiceThree('scissors')"></i>
                  
              </div>

              <p class="selections">  ROCK | PAPER | SCISSORS</p>
  
              <div class="red-line-breaker"></div>

              <!-- the code below will lock the input for player one and update the HTML to display player two -->
              <div id="lock-pc-choices" onclick="pickComputerChoiceOne();">Check the results!
              </div>
              <div id="play-pvc-new-round" onclick="startPVCNewRound();">Play again!
              </div>

              <!-- this division creats a small colored bar at the bottom -->
              <div id="grad-player-one"></div>
          </div>
      </div>

      
  </section>

    <div id="patern-window-pvc">
    <div id="results">
      <h3>Results</h3>
      </div>
    
    <div id="paterns-two">
                    <div id="firstplayers-chosen-moves">
                      <h3>P1:</h3>
                      <br>
                      <div id="first-players-move"></div>
                      <div id="second-players-move"></div>
                      <div id="third-players-move"></div>
                    </div>
        </div>
    
        <div id="paterns-three">
                    <div id="computers-chosen-moves">
                      <h3>PC:</h3>
                      <div id="first-computers-move"></div>
                      <div id="second-computers-move"></div>
                      <div id="third-computers-move"></div>
                    </div>
        </div>
    </div>
  
  <!-- this code will reset the HTML content of the page to that of the original Main Menu content -->
  <div id="reset-button" onclick="resetGame();">Main Menu</div>
  
  
  
  <!-- Linking to javascript game logic -->
  <script src="assets/js/script.js"></script>`;

  console.log('Starting Player VS Computer.');
}

// the code below shall begin a new round of the player vs computer gametype whilst carrying the scores of the previous game and the chosen player names forward
function startPVCNewRound() {
  var audioStart = new Audio('assets/audio/start.wav');
  audioStart.play();

  playerOneMoves.length = 0;
  computerMoves.length = 0;

  console.log(playerOneMoves);
  console.log(computerMoves);

  playerTwoToggle = "Computer";

  gameToggle = "PVPC";

  let playerOnePCOldName = document.getElementById("p-one-name").innerText;

  let nameHeaders = document.getElementsByClassName("player-header");

  let playerOnePCOldScore = parseInt(document.getElementById('score-one').innerText);
  let computerOldScore = parseInt(document.getElementById('score-two').innerText);
  // get the body of the page
  let startBody = document.body;

  // Set the body's innerHTML to player vs computer choice selection
  startBody.innerHTML = `<!-- title division -->
  <div id="landing-title">
      <h2>
          Rock, Paper, Scissors,
      </h2>
      <h1 id="hidden-code" onclick="nukeGame();">
          
      </h1>
  
      <div id="gradient1"></div>
  </div>
  
  <br>
  
  <section>
      
    <div id="score-board">

      <div class="score-chart">
        <h3>SCOREBOARD</h3>
        <p id="p-one-name">Player One</p>
        <i id="p-one-name-lock" class="fa-solid fa-lock"></i>
        <h2 id="score-one"> 0 </h2>
      </div>



      <div class="score-chart">
        <p id="p-two-name">Computer</p>
        <i class="fa-solid fa-robot"></i>
        <h2 id="score-two"> 0 </h2>
      </div>
    </div>
  
  
      <!--  the code below builds the box where player one can click to select from various move types and lock in their choices -->
      <div id="move-selection">
          <div id="player-one-moves">
              <h3 class="player-header">Player One</h3>
              <div id=player-one-move-one>
                  <h2 class="choice-header">First Choice:</h2>
  
                  <i class="fa-solid fa-hill-rockslide" onclick="pickPlayerOneChoiceOne('rock')"></i>
                  <i class="fa-regular fa-note-sticky" onclick="pickPlayerOneChoiceOne('paper')"></i>
                  <i class="fa-solid fa-scissors" onclick="pickPlayerOneChoiceOne('scissors')"></i>
              </div>

              <p class="selections">  ROCK | PAPER | SCISSORS</p>
  
              <div class="red-line-breaker"></div>
  
              <div id="player-one-move-two">
                  <h2 class="choice-header">Second Choice:</h2>
  
                  <i class="fa-solid fa-hill-rockslide" onclick="pickPlayerOneChoiceTwo('rock')"></i>
                  <i class="fa-regular fa-note-sticky" onclick="pickPlayerOneChoiceTwo('paper')"></i>
                  <i class="fa-solid fa-scissors" onclick="pickPlayerOneChoiceTwo('scissors')"></i>
              </div>

              <p class="selections">  ROCK | PAPER | SCISSORS</p>
  
              <div class="red-line-breaker"></div>
  
              <div id="player-one-move-three">
                  <h2 class="choice-header">Third Choice:</h2>
  
                  <i class="fa-solid fa-hill-rockslide" onclick="pickPlayerOneChoiceThree('rock')"></i>
                  <i class="fa-regular fa-note-sticky" onclick="pickPlayerOneChoiceThree('paper')"></i>
                  <i class="fa-solid fa-scissors" onclick="pickPlayerOneChoiceThree('scissors')"></i>
                  
              </div>

              <p class="selections">  ROCK | PAPER | SCISSORS</p>
  
              <div class="red-line-breaker"></div>

              <!-- the code below will lock the input for player one and update the HTML to display player two -->
              <div id="lock-pc-choices" onclick="pickComputerChoiceOne();">Check the results!
              </div>
              <div id="play-pvc-new-round" onclick="startPVCNewRound();">Play again!
              </div>

              <!-- this division creats a small colored bar at the bottom -->
              <div id="grad-player-one"></div>
          </div>
      </div>
  </section>

  <div id="patern-window-pvc">
    <div id="results">
      <h3>Results</h3>
      </div>
    
    <div id="paterns-two">
                    <div id="firstplayers-chosen-moves">
                      <h3>P1:</h3>
                      <br>
                      <div id="first-players-move"></div>
                      <div id="second-players-move"></div>
                      <div id="third-players-move"></div>
                    </div>
        </div>
    
        <div id="paterns-three">
                    <div id="computers-chosen-moves">
                      <h3>PC:</h3>
                      <div id="first-computers-move"></div>
                      <div id="second-computers-move"></div>
                      <div id="third-computers-move"></div>
                    </div>
        </div>
    </div>
  
  <!-- this code will reset the HTML content of the page to that of the original Main Menu content -->
  <div id="reset-button" onclick="resetGame();">Main Menu</div>
  
  
  
  <!-- Linking to javascript game logic -->
  <script src="assets/js/script.js"></script>`;
  nameHeaders[0].innerText = playerOnePCOldName;
  document.getElementById("p-one-name").innerText = playerOnePCOldName;

  document.getElementById('score-one').innerText = playerOnePCOldScore;
  document.getElementById('score-two').innerText = computerOldScore;

  console.log('Starting Player VS Computer.');
}

// the code below shall open a game manual with intructions on how to operate the Player vs Player Game Mode
function openPVPManual() {
  var audioBook = new Audio('assets/audio/book.wav');
  audioBook.play();
  // get the body of the page
  let startBody = document.body;

  // Set the body's innerHTML to player vs player iunstruction manual
  startBody.innerHTML = `<div id="landing-title">
  <h2>
      Rock, Paper, Scissors,
  </h2>
  <h1>
      Nucleur Bomb!
  </h1>

  <div id="gradient1"></div>
</div>

<br>

<div id="pvp-instructions">
  <div class="pvp-step">
      <h3>
          Step 1.
      </h3>
      <p>
          Set the name for Player One and Player Two via the scoreboard, the text 'PLAYERONE / PLAYERTWO' can be edited. Once you
          have chosen your names,
          click on the small padlock icon shown in the image to lock them in. Your Player Names can only be chosen in
          the first game, so choose wisely!
      </p>
      <img src="assets/images/step-one-name.png" alt="an image of the scoreboard for the game">
  </div>
  <br>
  <div class="pvp-step">
      <h3>
          Step 2:
      </h3>
      <p>
          Player One begins by selecting their hands for Rounds One, Two and Three. Their are three icons to choose
          from. An icon representing a fist relates to the 'Rock' option, an icon representing a paper plane will
          choose the 'Paper' option, the pair of scissors is self explanatory.
      </p>
      <img src="assets/images/step-two-choices.png" alt="an image of the move selection box in the game">
  </div>
  <br>
  <div class="pvp-step">
      <h3>
          Step 3:
      </h3>
      <p>
          Once an option is chosen the round shall dissapear so pay attention to the options you choose. After all of
          Player One's hands are locked in, click the padlock icon within the hand selection window as shown in the
          image. This will begin the turn for Player Two.
      </p>
      <img src="assets/images/step-three-lockin.png" alt="an image showing the 'lock in' function in the game">
  </div>
  <br>
  <div class="pvp-step">
      <h3>
          Step 4:
      </h3>
      <p>
          Player Two must repeat the process of chosing their hand for each of the three rounds. once the final hand
          is chosen the game shall compare Player One and Player Two's decisions and the results shall be displayed in
          pop up message boxes. The scoreboard shall update to reflect the scores from the game.
      </p>
      <img src="assets/images/step-four-nextplayer.png" alt="an image showing the functions for player two">
  </div>
  <br>
  <div class="pvp-step">
      <h3>
          Step 5:
      </h3>
      <p>
          Once the results have been calculated and the points awarded on the scoreboard, you can select the text
          'Play again' to continue a new game with your previous scores and chosen player names carried forward.
          the game can be played as many times as you desire. 
      </p>
      <img src="assets/images/step-five-newround.png" alt="an image showing the button to start a new round">
  </div>
  <br>
  <div id="start-pvp-button" onclick="startPVP()">Start a game!</div>
</div>

<br>

<div id="reset-button" onclick="resetGame();">Main Menu</div>



<!-- Linking to javascript game logic -->
<script src="assets/js/script.js"></script>`;

  window.scrollTo(0, 0);
}

// the code below shall open a game manual with intructions on how to operate the Player vs Player Game Mode
function openPVCManual() {
  var audioBook = new Audio('assets/audio/book.wav');
  audioBook.play();
  // get the body of the page
  let startBody = document.body;

  // Set the body's innerHTML to player vs player iunstruction manual
  startBody.innerHTML = `<div id="landing-title">
  <h2>
      Rock, Paper, Scissors,
  </h2>
  <h1>
      Nucleur Bomb!
  </h1>

  <div id="gradient1"></div>
</div>

<br>

<div id="pvp-instructions">
  <div class="pvp-step">
      <h3>
          Step 1.
      </h3>
      <p>
          Set the name for Player One via the scoreboard, the text 'PLAYERONE' can be edited. Once you
          have chosen your name,
          click on the small padlock icon shown in the image to lock them in. Your Player Name can only be chosen in
          the first game, so choose wisely!
      </p>
      <img src="assets/images/step-one-name.png" alt="an image of the scoreboard for the game">
  </div>
  <br>
  <div class="pvp-step">
      <h3>
          Step 2:
      </h3>
      <p>
          Player One begins by selecting their hands for Rounds One, Two and Three. Their are three icons to choose
          from. An icon representing a fist relates to the 'Rock' option, an icon representing a paper plane will
          choose the 'Paper' option, the pair of scissors is self explanatory.
      </p>
      <img src="assets/images/step-two-choices.png" alt="an image of the move selection box in the game">
  </div>
  <br>
  <div class="pvp-step">
      <h3>
          Step 3:
      </h3>
      <p>
          Once an option is chosen it shall dissapear so pay attention to the options you choose. After all of
          your choices are locked in, click the padlock icon inside the window as shown in the
          image. This will then compare your pattern against the computers and determine the winner.
      </p>
      <img src="assets/images/step-three-lockin.png" alt="an image showing the 'lock in' function in the game">
  </div>
  <br>
  <div class="pvp-step">
      <h3>
          Step 4:
      </h3>
      <p>
          The winner of each round shall appear in handy message boxes and the hand you picked shall appear alongside the computers choices, the points are awarded to the winner of each round.
      </p>
      <img src="assets/images/step-pc-compare.png" alt="an image showing the functions for player two">
  </div>
  <br>
  <div class="pvp-step">
      <h3>
          Step 5:
      </h3>
      <p>
          Once the results have been calculated and the points awarded on the scoreboard, you can select the text
          'Play again' to continue a new game with your previous scores and chosen player name carried forward.
          the game can be played as many times as you desire. 
      </p>
      <img src="assets/images/step-pc-newround.png" alt="an image showing the button to start a new round">
  </div>
  <br>
  <div id="start-pvp-button" onclick="startPVC()">Start a game!</div>
</div>

<br>

<div id="reset-button" onclick="resetGame();">Main Menu</div>



<!-- Linking to javascript game logic -->
<script src="assets/js/script.js"></script>`;

  window.scrollTo(0, 0);
}

// the code below is a function that is called when a player selects the bright yellow 'nucleur' text in the title of the Game, it shall increment the relevant players score by 1 and force a new game to begin
function nukeGame() {
  console.log("You blew it up! Damn you all to hell");
  alert("NUKE INCOMING!");

  var audioNuke = new Audio('assets/audio/nuke.mp3');
  var audioEmpty = new Audio('assets/audio/empty.wav');

  if (playerTwoToggle === "False" && nukeCounterOne < 3) {
    audioNuke.play();
    incrementPlayerOneScore();
    alert("Player One nuked the game!\nYou have been awarded 1 Point.");
    incrementNukeCounterOne();
    console.log(nukeCounterOne);
    startPVPNewRound();
  } else if (playerTwoToggle === "True" && nukeCounterTwo < 3) {
    audioNuke.play();
    incrementPlayerTwoScore();
    alert("Player Two nuked the game!\nYou have been awarded 1 Point.");
    incrementNukeCounterTwo();
    console.log(nukeCounterTwo);
    startPVPNewRound();
  } else if (playerTwoToggle === "False" && nukeCounterOne === 3) {
    alert("You're all out of Nukes!");
    audioEmpty.play();
  } else if (playerTwoToggle === "True" && nukeCounterTwo === 3) {
    alert("You're all out of Nukes!");
    audioEmpty.play();
  } else if (playerTwoToggle === "Computer" && nukeCounterOne < 3) {
    audioNuke.play();
    incrementPlayerOneScore();
    alert("You nuked the game!\nYou have been awarded 1 Point.");
    incrementNukeCounterOne();
    console.log(nukeCounterOne);
    startPVCNewRound();
  } else if (playerTwoToggle === "Computer" && nukeCounterOne === 3) {
    alert("You're all out of Nukes!");
    audioEmpty.play();
  }

  function incrementNukeCounterOne() {
    nukeCounterOne++;
  }

  function incrementNukeCounterTwo() {
    nukeCounterTwo++;
  }
}

// the code block below is the logic for building an array from player one's chosen move type ie rock, paper, or scissors 
pickPlayerOneChoiceOne = (handOne) => {

  var audioSelect = new Audio('assets/audio/select.mp3');
  audioSelect.play();

  let hideChoiceOne = document.getElementById("player-one-move-one");
  hideChoiceOne.style.display = "none";

  let hideInputOne = document.getElementsByClassName("selections");
  hideInputOne[0].style.display = "none"

  playerOneMoves.push(handOne);
  console.log(playerOneMoves);

  let fillOne = document.getElementById("first-players-move");
  fillOne.innerHTML = `<h3>${handOne.toUpperCase()}, </h3>`;


  pickPlayerOneChoiceTwo = (handTwo) => {

    var audioSelect = new Audio('assets/audio/select.mp3');
    audioSelect.play();

    let hideChoiceTwo = document.getElementById("player-one-move-two");
    hideChoiceTwo.style.display = "none";

    let hideInputTwo = document.getElementsByClassName("selections");
    hideInputTwo[1].style.display = "none"

    playerOneMoves.push(handTwo);
    console.log(playerOneMoves);

    let fillTwo = document.getElementById("second-players-move");
    fillTwo.innerHTML = `<h3> ${handTwo.toUpperCase()}, </h3>`;
  };

  pickPlayerOneChoiceThree = (handThree) => {

    var audioSelect = new Audio('assets/audio/select.mp3');
    audioSelect.play();

    let hideChoiceTwo = document.getElementById("player-one-move-three");
    hideChoiceTwo.style.display = "none";

    let hideInputThree = document.getElementsByClassName("selections");
    hideInputThree[2].style.display = "none"

    playerOneMoves.push(handThree);
    console.log(playerOneMoves);

    let fillThree = document.getElementById("third-players-move");
    fillThree.innerHTML = `<h3>${handThree.toUpperCase()}. </h3>`;


    if (gameToggle === "PVP") {
      let showLockAnswers = document.getElementById("lock-answer");
      console.log(showLockAnswers);

      showLockAnswers.style.display = "block";
    } else if (gameToggle === "PVPC") {
      let showLockAnswers = document.getElementById("lock-pc-choices");
      console.log(showLockAnswers);

      showLockAnswers.style.display = "block";
    }
  };
};

// the code block below is the logic for building an array from player two's chosen move type ie rock, paper, or scissors
pickPlayerTwoChoiceOne = (handOne) => {
  var audioSelect = new Audio('assets/audio/select.mp3');
  audioSelect.play();

  let hideChoiceOne = document.getElementById("player-two-move-one");
  hideChoiceOne.style.display = "none";

  let hideInputOne = document.getElementsByClassName("selections");
  hideInputOne[3].style.display = "none"

  playerTwoMoves.push(handOne);
  console.log(playerTwoMoves);

  let fillOne = document.getElementById("first-second-move");
  fillOne.innerHTML = `<h3>${handOne.toUpperCase()}, </h3>`;

  pickPlayerTwoChoiceTwo = (handTwo) => {
    var audioSelect = new Audio('assets/audio/select.mp3');
    audioSelect.play();

    let hideChoiceTwo = document.getElementById("player-two-move-two");
    hideChoiceTwo.style.display = "none";

    let hideInputTwo = document.getElementsByClassName("selections");
    hideInputTwo[4].style.display = "none"

    playerTwoMoves.push(handTwo);
    console.log(playerTwoMoves);

    let fillTwo = document.getElementById("second-second-move");
    fillTwo.innerHTML = `<h3>${handTwo.toUpperCase()}, </h3>`;
  };

  pickPlayerTwoChoiceThree = (handThree) => {
    var audioSelect = new Audio('assets/audio/select.mp3');
    audioSelect.play();

    let hideChoiceThree = document.getElementById("player-two-move-three");
    hideChoiceThree.style.display = "none";

    let hideInputThree = document.getElementsByClassName("selections");
    hideInputThree[5].style.display = "none"

    playerTwoMoves.push(handThree);
    console.log(playerTwoMoves);

    let fillThree = document.getElementById("third-second-move");
    fillThree.innerHTML = `<h3>${handThree.toUpperCase()}, </h3>`;

    // call the function to compare the arrays and log the winner 
    compareResultsPVP(playerOneMoves, playerTwoMoves);

    var audioWin = new Audio('assets/audio/win.wav');
    audioWin.play();

    showLockAnswers = document.getElementById("lock-answer-two");
    console.log(showLockAnswers);
    showLockAnswers.style.display = "block";
  };
};

// the code block below is the logic for building an array of 3 randomly generated moves from either rock, paper, or scissors for the computer
function pickComputerChoiceOne() {
  let options = ["rock", "paper", "scissors"];
  let computerHandOne = options[Math.floor(Math.random() * options.length)];
  let computerHandTwo = options[Math.floor(Math.random() * options.length)];
  let computerHandThree = options[Math.floor(Math.random() * options.length)];

  document.getElementById("lock-pc-choices").style.display = "none";

  computerMoves.push(computerHandOne, computerHandTwo, computerHandThree);
  console.log(computerMoves);

  let fillComputerOne = document.getElementById("first-computers-move");
  fillComputerOne.innerHTML = `<h3>${computerHandOne.toUpperCase()}.</h3>`;

  let fillComputerTwo = document.getElementById("second-computers-move");
  fillComputerTwo.innerHTML = `<h3>${computerHandTwo.toUpperCase()}.</h3>`;

  let fillComputerThree = document.getElementById("third-computers-move");
  fillComputerThree.innerHTML = `<h3>${computerHandThree.toUpperCase()}.</h3>`;

  // this line of code fires the function to compare the arrays and log the winner of the game
  compareResultsPVC(playerOneMoves, computerMoves);
  var audioSelect = new Audio('assets/audio/win.wav');
  audioSelect.play();

  document.getElementById("play-pvc-new-round").style.display = "block";

  let showItOne = document.getElementById("paterns-two");
  showItOne.style.display = "flex";
  
  let showItTwo = document.getElementById("paterns-three");
  showItTwo.style.display = "flex";

  let showResults = document.getElementById("results");
  showResults.style.display = "flex";



}

// compare the playerOneMoves and playerTwoMoves arrays once they are full and adjust scoring
const compareResultsPVP = (playerOneMoves, playerTwoMoves) => {

  // play audio on button press
  var audioSelect = new Audio('assets/audio/win.wav');
  audioSelect.play();

  let showItOne = document.getElementById("paterns-two");
  showItOne.style.display = "flex";
  
  let showItTwo = document.getElementById("paterns-three");
  showItTwo.style.display = "flex";

  let showResults = document.getElementById("results");
  showResults.style.display = "flex";

  // Draw cases round 1 (array index [0])
  if (playerOneMoves[0] == "paper" && playerTwoMoves[0] == "paper") {
    console.log("Round 1 is... A draw!");
    alert("Round 1 is...\nA draw!");
  }
  if (playerOneMoves[0] == "rock" && playerTwoMoves[0] == "rock") {
    console.log("Round 1 is... A draw!");
    alert("Round 1 is...\nA draw!");
  }
  if (playerOneMoves[0] == "scissors" && playerTwoMoves[0] == "scissors") {
    console.log("Round 1 is... A draw!");
    alert("Round 1 is...\nA draw!");
  }

  // Player One winning cases round 1 (array index [0])
  if (playerOneMoves[0] == "paper" && playerTwoMoves[0] == "rock") {
    console.log("Player One wins Round 1!");
    alert("Player One wins Round 1!");
    incrementPlayerOneScore();
  }
  if (playerOneMoves[0] == "rock" && playerTwoMoves[0] == "scissors") {
    console.log("Player One wins Round 1!");
    alert("Player One wins Round 1!");
    incrementPlayerOneScore();
  }
  if (playerOneMoves[0] == "scissors" && playerTwoMoves[0] == "paper") {
    console.log("Player One wins Round 1!");
    alert("Player One wins Round 1!");
    incrementPlayerOneScore();
  }

  // Player Two winning cases round 1 (array index [0])
  if (playerOneMoves[0] == "paper" && playerTwoMoves[0] == "scissors") {
    console.log("Player Two wins Round 1!");
    alert("Player Two wins Round 1!");
    incrementPlayerTwoScore();
  }
  if (playerOneMoves[0] == "rock" && playerTwoMoves[0] == "paper") {
    console.log("Player Two wins Round 1!");
    alert("Player Two wins Round 1!");
    incrementPlayerTwoScore();
  }
  if (playerOneMoves[0] == "scissors" && playerTwoMoves[0] == "rock") {
    console.log("Player Two wins Round 1!");
    alert("Player Two wins Round 1!");
    incrementPlayerTwoScore();
  }

  // draw cases, check round two (array index [1])
  if (playerOneMoves[1] == "paper" && playerTwoMoves[1] == "paper") {
    console.log("Round 2 is... A draw!");
    alert("Round 2 is...\nA draw!");
  }
  if (playerOneMoves[1] == "rock" && playerTwoMoves[1] == "rock") {
    console.log("Round 2 is... A draw!");
    alert("Round 2 is...\nA draw!");
  }
  if (playerOneMoves[1] == "scissors" && playerTwoMoves[1] == "scissors") {
    console.log("Round 2 is... A draw!");
    alert("Round 2 is...\nA draw!");
  }

  // player one wins, check round two (array index [1])
  if (playerOneMoves[1] == "paper" && playerTwoMoves[1] == "rock") {
    console.log("Player One wins Round 2!");
    alert("Player One wins Round 2!");
    incrementPlayerOneScore();
  }
  if (playerOneMoves[1] == "rock" && playerTwoMoves[1] == "scissors") {
    console.log("Player One wins Round 2!");
    alert("Player One wins Round 2!");
    incrementPlayerOneScore();
  }
  if (playerOneMoves[1] == "scissors" && playerTwoMoves[1] == "paper") {
    console.log("Player One wins Round 2!");
    alert("Player One wins Round 2!");
    incrementPlayerOneScore();
  }

  //player two wins, check round two (array index [1])
  if (playerOneMoves[1] == "paper" && playerTwoMoves[1] == "scissors") {
    console.log("Player Two wins Round 2!");
    alert("Player Two wins Round 2!");
    incrementPlayerTwoScore();
  }
  if (playerOneMoves[1] == "rock" && playerTwoMoves[1] == "paper") {
    console.log("Player Two wins Round 2!");
    alert("Player Two wins Round 2!");
    incrementPlayerTwoScore();
  }
  if (playerOneMoves[1] == "scissors" && playerTwoMoves[1] == "rock") {
    console.log("Player Two wins Round 2!");
    alert("Player Two wins Round 2!");
    incrementPlayerTwoScore();
  }

  //draw cases, check round three (array index [2])
  if (playerOneMoves[2] == "paper" && playerTwoMoves[2] == "paper") {
    console.log("Round 3 is... A draw!");
    alert("Round 3 is...\nA draw!");
  }
  if (playerOneMoves[2] == "rock" && playerTwoMoves[2] == "rock") {
    console.log("Round 3 is... A draw!");
    alert("Round 3 is...\nA draw!");
  }
  if (playerOneMoves[2] == "scissors" && playerTwoMoves[2] == "scissors") {
    console.log("Round 3 is... A draw!");
    alert("Round 3 is...\nA draw!");
  }

  //player one wins, check round three (array index [2])
  if (playerOneMoves[2] == "paper" && playerTwoMoves[2] == "rock") {
    console.log("Player One wins Round 3!");
    alert("Player One wins Round 3!");
    incrementPlayerOneScore();
  }
  if (playerOneMoves[2] == "rock" && playerTwoMoves[2] == "scissors") {
    console.log("Player One wins Round 3!");
    alert("Player One wins Round 3!");
    incrementPlayerOneScore();
  }
  if (playerOneMoves[2] == "scissors" && playerTwoMoves[2] == "paper") {
    console.log("Player One wins Round 3!");
    alert("Player One wins Round 3!");
    incrementPlayerOneScore();
  }

  //player two wins, check round three (array index [2])
  if (playerOneMoves[2] == "paper" && playerTwoMoves[2] == "scissors") {
    console.log("Player Two wins Round 3!");
    alert("Player Two wins Round 3!");
    incrementPlayerTwoScore();
  }
  if (playerOneMoves[2] == "rock" && playerTwoMoves[2] == "paper") {
    console.log("Player Two wins Round 3!");
    alert("Player Two wins Round 3!");
    incrementPlayerTwoScore();
  }
  if (playerOneMoves[2] == "scissors" && playerTwoMoves[2] == "rock") {
    console.log("Player Two wins Round 3!");
    alert("Player Two wins Round 3!");
    incrementPlayerTwoScore();
  }
};

// compare the playerOneMoves and computerMovex arrays once they are full and adjust scoring
const compareResultsPVC = (playerOneMoves, computerMoves) => {

  // Draw cases round 1 (array index [0])
  if (playerOneMoves[0] == "paper" && computerMoves[0] == "paper") {
    console.log("Round 1 is... A draw!");
    alert("Round 1 is... A draw!");
  }
  if (playerOneMoves[0] == "rock" && computerMoves[0] == "rock") {
    console.log("Round 1 is... A draw!");
    alert("Round 1 is...\nA draw!");
  }
  if (playerOneMoves[0] == "scissors" && computerMoves[0] == "scissors") {
    console.log("Round 1 is... A draw!");
    alert("Round 1 is...\nA draw!");
  }

  // Player One winning cases round 1 (array index [0])
  if (playerOneMoves[0] == "paper" && computerMoves[0] == "rock") {
    console.log("Player One wins Round 1!");
    alert("Player One wins Round 1!");
    incrementPlayerOneScore();
  }
  if (playerOneMoves[0] == "rock" && computerMoves[0] == "scissors") {
    console.log("Player One wins Round 1!");
    alert("Player One wins Round 1!");
    incrementPlayerOneScore();
  }
  if (playerOneMoves[0] == "scissors" && computerMoves[0] == "paper") {
    console.log("Player One wins Round 1!");
    alert("Player One wins Round 1!");
    incrementPlayerOneScore();
  }

  // Player Two winning cases round 1 (array index [0])
  if (playerOneMoves[0] == "paper" && computerMoves[0] == "scissors") {
    console.log("The Computer wins Round 1!");
    alert("The Computer wins Round 1!");
    incrementPlayerTwoScore();
  }
  if (playerOneMoves[0] == "rock" && computerMoves[0] == "paper") {
    console.log("The Computer wins Round 1!");
    alert("The Computer wins Round 1!");
    incrementPlayerTwoScore();
  }
  if (playerOneMoves[0] == "scissors" && computerMoves[0] == "rock") {
    console.log("The Computer wins Round 1!");
    alert("The Computer wins Round 1!");
    incrementPlayerTwoScore();
  }

  // draw cases, check round two (array index [1])
  if (playerOneMoves[1] == "paper" && computerMoves[1] == "paper") {
    console.log("Round 2 is... A draw!");
    alert("Round 2 is...\nA draw!");
  }
  if (playerOneMoves[1] == "rock" && computerMoves[1] == "rock") {
    console.log("Round 2 is... A draw!");
    alert("Round 2 is...\nA draw!");
  }
  if (playerOneMoves[1] == "scissors" && computerMoves[1] == "scissors") {
    console.log("Round 2 is.. A draw!");
    alert("Round 2 is...\nA draw!");
  }

  // player one wins, check round two (array index [1])
  if (playerOneMoves[1] == "paper" && computerMoves[1] == "rock") {
    console.log("Player One wins Round 2!");
    alert("Player One wins Round 2!");
    incrementPlayerOneScore();
  }
  if (playerOneMoves[1] == "rock" && computerMoves[1] == "scissors") {
    console.log("Player One wins Round 2!");
    alert("Player One wins Round 2!");
    incrementPlayerOneScore();
  }
  if (playerOneMoves[1] == "scissors" && computerMoves[1] == "paper") {
    console.log("Player One wins Round 2!");
    alert("Player One wins Round 2!");
    incrementPlayerOneScore();
  }

  //player two wins, check round two (array index [1])
  if (playerOneMoves[1] == "paper" && computerMoves[1] == "scissors") {
    console.log("The Computer wins Round 2!");
    alert("The Computer wins Round 2!");
    incrementPlayerTwoScore();
  }
  if (playerOneMoves[1] == "rock" && computerMoves[1] == "paper") {
    console.log("The Computer wins Round 2!");
    alert("The Computer wins Round 2!");
    incrementPlayerTwoScore();
  }
  if (playerOneMoves[1] == "scissors" && computerMoves[1] == "rock") {
    console.log("The Computer wins Round 2!");
    alert("The Computer wins Round 2!");
    incrementPlayerTwoScore();
  }

  //draw cases, check round three (array index [2])
  if (playerOneMoves[2] == "paper" && computerMoves[2] == "paper") {
    console.log("Round 3 is... A draw!");
    alert("Round 3 is...\nA draw!");
  }
  if (playerOneMoves[2] == "rock" && computerMoves[2] == "rock") {
    console.log("Round 3 is... A draw!");
    alert("Round 3 is...\nA draw!");
  }
  if (playerOneMoves[2] == "scissors" && computerMoves[2] == "scissors") {
    console.log("Round 3 is... A draw!");
    alert("Round 3 is...\nA draw!");
  }

  //player one wins, check round three (array index [2])
  if (playerOneMoves[2] == "paper" && computerMoves[2] == "rock") {
    console.log("Player One wins Round 3!");
    alert("Player One wins Round 3!");
    incrementPlayerOneScore();
  }
  if (playerOneMoves[2] == "rock" && computerMoves[2] == "scissors") {
    console.log("Player One wins Round 3!");
    alert("Player One wins Round 3!");
    incrementPlayerOneScore();
  }
  if (playerOneMoves[2] == "scissors" && computerMoves[2] == "paper") {
    console.log("Player One wins Round 3!");
    alert("Player One wins Round 3!");
    incrementPlayerOneScore();
  }

  //player two wins, check round three (array index [2])
  if (playerOneMoves[2] == "paper" && computerMoves[2] == "scissors") {
    console.log("The Computer wins Round 3!");
    alert("The Computer wins Round 3!");
    incrementPlayerTwoScore();
  }
  if (playerOneMoves[2] == "rock" && computerMoves[2] == "paper") {
    console.log("The Computer wins Round 3!");
    alert("The Computer wins Round 3!");
    incrementPlayerTwoScore();
  }
  if (playerOneMoves[2] == "scissors" && computerMoves[2] == "rock") {
    console.log("The Computer wins Round 3!");
    alert("The Computer wins Round 3!");
    incrementPlayerTwoScore();
  }
};

// the code blocks below will increment the score counters for player one, player two or the computer depending on which is fired 
function incrementPlayerOneScore() {

  let oldScoreOne = parseInt(document.getElementById('score-one').innerText);
  document.getElementById('score-one').innerText = ++oldScoreOne;

}

function incrementPlayerTwoScore() {

  let oldScoreTwo = parseInt(document.getElementById('score-two').innerText);
  document.getElementById('score-two').innerText = ++oldScoreTwo;

}

function incrementComputerScore() {

  let oldScorePC = parseInt(document.getElementById('score-pc').innerText);
  document.getElementById('score-pc').innerText = ++oldScorePC;

}

// the code block below will reset the game entirely, returning to the main menu and clearing any arrays, scores or player names
function resetGame() {
  var audioSelect = new Audio('assets/audio/return.wav');
  audioSelect.play();

  playerOneMoves = [];
  playerTwoMoves = [];
  computerMoves = [];

  nukeCounterOne = 0;
  nukeCounterTwo = 0;

  playerTwoToggle = "False";

  gameToggle = "";

  let startBody = document.body;
  startBody.innerHTML = mainMenu;
  console.log('Returning to the Main Menu...');
}

// the code below will switch from the player one game area to player two, logging alerts to the player. for the PVP game mode
function lockAnswers() {
  const hiddenAnswers = document.getElementById("player-one-moves");
  const showAnswers = document.getElementById("player-two-moves");

  if (hiddenAnswers.style.display !== "none") {
    hiddenAnswers.style.display = "none";
    showAnswers.id = "player-two-moves-show";
    console.log("Player One choices locked");
    alert("Click OK to hide your choices,\nthen hand the controls to Player Two!");
    playerTwoToggle = "True";
    console.log(playerTwoToggle);
  } else {
    hiddenAnswers.style.display = "block";
  }

}

// ignore this - to be removed
function viewSource() {

  var source = "<html>";
  source += document.getElementsByTagName('html')[0].innerHTML;
  source += "</html>";
  source = source.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  source = "<pre>" + source + "</pre>";
  sourceWindow = window.open('', 'Source of page', 'height=800,width=800,scrollbars=1,resizable=1');
  sourceWindow.document.write(source);
  sourceWindow.document.close();
  if (window.focus) sourceWindow.focus();
}