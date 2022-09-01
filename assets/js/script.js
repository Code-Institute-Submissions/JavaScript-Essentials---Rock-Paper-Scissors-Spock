// get the HTML content of the main menu for reset function
const mainMenu = document.body.innerHTML

// create empty arrays for the player choices
let playerOneMoves = []
let playerTwoMoves = []

function setPOneName() {
  let playerOneName = document.getElementById("p-one-name").innerText
  document.getElementsByClassName("player-header")[0].innerText = playerOneName

}

function setPTwoName() {
  let playerTwoName = document.getElementById("p-two-name").innerText
  document.getElementsByClassName("player-header")[1].innerText = playerTwoName
}

function startPVP() {
  // get the body of the page
  let startBody = document.body;

  // Set the body's innerHTML to player vs player choice selection
  startBody.innerHTML = `
    <!-- title division -->
    <div id="landing-title">
    <h2>
        Rock, Paper, Scissors,
    </h2>
    <h1>
        Nucleur Bomb!
    </h1>

    <div id="gradient1"></div>
</div>

<br>

<section>
<div id="score-chart">
  <div id="player-one-score">
    <p id="p-one-name" contenteditable="true">P1:<i class="fa-solid fa-lock-open" onclick="setPOneName();"></i></p>
    <div class="red-line-breaker"></div>
    <h1 id="score-one"> 0 </h1>
  </div>
  <div class="red-line-breaker"></div>
  <div id="player-two-score">
    <p id="p-two-name" contenteditable="true">P2:<i class="fa-solid fa-lock-open" onclick="setPTwoName();"></i></p>
    <div class="red-line-breaker"></div>
    <h1 id="score-two"> 0 </h1>
  </div>
</div>


<!--  the code below builds the box where player one can click to select from various move types and lock in their choices -->
<div id="move-selection">
    <div id="player-one-moves">
        <h3 class="player-header">Player One</h3>
        <div id=player-one-move-one>
            <h2 class="choice-header">First Choice:</h2>

            <i class="fa-solid fa-paper-plane" onclick="pickPlayerOneChoiceOne('paper')"></i>
            <i class="fa-solid fa-scissors" onclick="pickPlayerOneChoiceOne('scissors')"></i>
            <i class="fa-regular fa-hand-back-fist" onclick="pickPlayerOneChoiceOne('rock')"></i>                       
        </div>

        <div class="red-line-breaker"></div>

        <div id="player-one-move-two">
            <h2 class="choice-header">Second Choice:</h2>

            <i class="fa-solid fa-paper-plane" onclick="pickPlayerOneChoiceTwo('paper')"></i>
            <i class="fa-solid fa-scissors" onclick="pickPlayerOneChoiceTwo('scissors')"></i>
            <i class="fa-regular fa-hand-back-fist" onclick="pickPlayerOneChoiceTwo('rock')"></i>                       
        </div>

        <div class="red-line-breaker"></div>

        <div id="player-one-move-three">
            <h2 class="choice-header">Third Choice:</h2>

            <i class="fa-solid fa-paper-plane" onclick="pickPlayerOneChoiceThree('paper')"></i>
            <i class="fa-solid fa-scissors" onclick="pickPlayerOneChoiceThree('scissors')"></i>
            <i class="fa-regular fa-hand-back-fist" onclick="pickPlayerOneChoiceThree('rock')"></i>                       
        </div>

        <div class="red-line-breaker"></div>

        <!-- the code below will lock the input for player one and update the HTML to display player two -->
        <div class="lock-answer" onclick="lockAnswers();">Lock in your choices! <i class="fa-solid fa-lock-open"></i></div>

        <!-- this division creats a small colored bar at the bottom -->
        <div id="grad-player-one"></div>

    </div>

    <!-- the code below builds the same division as above but for player 2 instead -->
    <div id="player-two-moves">
        <h3 class="player-header">Player Two</h3>
        <div id="player-two-move-one">
            <h2 class="choice-header">First Choice:</h2>

            <i class="fa-solid fa-paper-plane" onclick="pickPlayerTwoChoiceOne('paper')"></i>
            <i class="fa-solid fa-scissors" onclick="pickPlayerTwoChoiceOne('scissors')"></i>
            <i class="fa-regular fa-hand-back-fist" onclick="pickPlayerTwoChoiceOne('rock')"></i>                       
        </div>

        <div class="orange-line-breaker"></div>

        <div id="player-two-move-two">
            <h2 class="choice-header">Second Choice:</h2>

            <i class="fa-solid fa-paper-plane" onclick="pickPlayerTwoChoiceTwo('paper')"></i>
            <i class="fa-solid fa-scissors" onclick="pickPlayerTwoChoiceTwo('scissors')"></i>
            <i class="fa-regular fa-hand-back-fist" onclick="pickPlayerTwoChoiceTwo('rock')"></i>                       
        </div>

        <div class="orange-line-breaker"></div>

        <div id="player-two-move-three">
            <h2 class="choice-header">Third Choice:</h2>

            <i class="fa-solid fa-paper-plane" onclick="pickPlayerTwoChoiceThree('paper')"></i>
            <i class="fa-solid fa-scissors" onclick="pickPlayerTwoChoiceThree('scissors')"></i>
            <i class="fa-regular fa-hand-back-fist" onclick="pickPlayerTwoChoiceThree('rock')"></i>                       
        </div>

        <div class="orange-line-breaker"></div>

        <!-- the code below will start a new game of PVP -->
        <div class="lock-answer" onclick="startPVPNewRound();">Play again!</div>

        <div id="grad-player-two"></div>

    </div>
</div>
</section>

<!-- this code will reset the HTML content of the page to that of the original Main Menu content -->
<div id="reset-button" onclick="resetGame();">Main Menu</div>



<!-- Linking to javascript game logic -->
<script src="assets/js/script.js"></script>
    `;

  console.log('Starting Player VS Player.')
}

function startPVPNewRound() {
  // get the body of the page
  let startBody = document.body;

  playerOneMoves.length = 0
  playerTwoMoves.length = 0

  console.log(playerOneMoves)
  console.log(playerOneMoves)

  let playerOneOldName = document.getElementById("p-one-name").innerText
  let playerTwoOldName = document.getElementById("p-two-name").innerText

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
    <h1>
        Nucleur Bomb!
    </h1>

    <div id="gradient1"></div>
</div>

<br>

<section>
    <div id="score-chart">
        <div id="player-one-score">
            <p id="p-one-name" contenteditable="true">P1:<i class="fa-solid fa-lock-open" onclick="setPOneName();"></i>
            </p>
            <div class="red-line-breaker"></div>
            <h1 id="score-one"> 0 </h1>
        </div>
        <div class="red-line-breaker"></div>
        <div id="player-two-score">
            <p id="p-two-name" contenteditable="true">P2:<i class="fa-solid fa-lock-open" onclick="setPTwoName();"></i>
            </p>
            <div class="red-line-breaker"></div>
            <h1 id="score-two"> 0 </h1>
        </div>
    </div>


    <!--  the code below builds the box where player one can click to select from various move types and lock in their choices -->
    <div id="move-selection">
        <div id="player-one-moves">
            <h3 class="player-header">Player One</h3>
            <div id=player-one-move-one>
                <h2 class="choice-header">First Choice:</h2>

                <i class="fa-solid fa-paper-plane" onclick="pickPlayerOneChoiceOne('paper')"></i>
                <i class="fa-solid fa-scissors" onclick="pickPlayerOneChoiceOne('scissors')"></i>
                <i class="fa-regular fa-hand-back-fist" onclick="pickPlayerOneChoiceOne('rock')"></i>
            </div>

            <div class="red-line-breaker"></div>

            <div id="player-one-move-two">
                <h2 class="choice-header">Second Choice:</h2>

                <i class="fa-solid fa-paper-plane" onclick="pickPlayerOneChoiceTwo('paper')"></i>
                <i class="fa-solid fa-scissors" onclick="pickPlayerOneChoiceTwo('scissors')"></i>
                <i class="fa-regular fa-hand-back-fist" onclick="pickPlayerOneChoiceTwo('rock')"></i>
            </div>

            <div class="red-line-breaker"></div>

            <div id="player-one-move-three">
                <h2 class="choice-header">Third Choice:</h2>

                <i class="fa-solid fa-paper-plane" onclick="pickPlayerOneChoiceThree('paper')"></i>
                <i class="fa-solid fa-scissors" onclick="pickPlayerOneChoiceThree('scissors')"></i>
                <i class="fa-regular fa-hand-back-fist" onclick="pickPlayerOneChoiceThree('rock')"></i>
            </div>

            <div class="red-line-breaker"></div>

            <!-- the code below will lock the input for player one and update the HTML to display player two -->
            <div class="lock-answer" onclick="lockAnswers();">Lock in your choices! <i
                    class="fa-solid fa-lock-open"></i></div>

            <!-- this division creats a small colored bar at the bottom -->
            <div id="grad-player-one"></div>

        </div>

        <!-- the code below builds the same division as above but for player 2 instead -->
        <div id="player-two-moves">
            <h3 class="player-header">Player Two</h3>
            <div id="player-two-move-one">
                <h2 class="choice-header">First Choice:</h2>

                <i class="fa-solid fa-paper-plane" onclick="pickPlayerTwoChoiceOne('paper')"></i>
                <i class="fa-solid fa-scissors" onclick="pickPlayerTwoChoiceOne('scissors')"></i>
                <i class="fa-regular fa-hand-back-fist" onclick="pickPlayerTwoChoiceOne('rock')"></i>
            </div>

            <div class="orange-line-breaker"></div>

            <div id="player-two-move-two">
                <h2 class="choice-header">Second Choice:</h2>

                <i class="fa-solid fa-paper-plane" onclick="pickPlayerTwoChoiceTwo('paper')"></i>
                <i class="fa-solid fa-scissors" onclick="pickPlayerTwoChoiceTwo('scissors')"></i>
                <i class="fa-regular fa-hand-back-fist" onclick="pickPlayerTwoChoiceTwo('rock')"></i>
            </div>

            <div class="orange-line-breaker"></div>

            <div id="player-two-move-three">
                <h2 class="choice-header">Third Choice:</h2>

                <i class="fa-solid fa-paper-plane" onclick="pickPlayerTwoChoiceThree('paper')"></i>
                <i class="fa-solid fa-scissors" onclick="pickPlayerTwoChoiceThree('scissors')"></i>
                <i class="fa-regular fa-hand-back-fist" onclick="pickPlayerTwoChoiceThree('rock')"></i>
            </div>

            <div class="orange-line-breaker"></div>

            <!-- the code below will start a new game of PVP -->
            <div class="lock-answer" onclick="startPVPNewRound();">Play again!</div>

            <div id="grad-player-two"></div>

        </div>
    </div>
</section>

<!-- this code will reset the HTML content of the page to that of the original Main Menu content -->
<div id="reset-button" onclick="resetGame();">Main Menu</div>



<!-- Linking to javascript game logic -->
<script src="assets/js/script.js"></script>`;

  console.log('Starting next round...');

  nameHeaders[0].innerText = playerOneOldName
  nameHeaders[1].innerText = playerTwoOldName
  document.getElementById("p-one-name").innerText = playerOneOldName
  document.getElementById("p-two-name").innerText = playerTwoOldName

  document.getElementById('score-one').innerText = playerOneOldScore;
  document.getElementById('score-two').innerText = playerTwoOldScore;
}

function startPVC() {
  // get the body of the page
  let startBody = document.body;

  // Set the body's innerHTML to player vs computer choice selection
  startBody.innerHTML = `<!-- title division -->
  <div id="landing-title">
      <h2>
          Rock, Paper, Scissors,
      </h2>
      <h1>
          Nucleur Bomb!
      </h1>
  
      <div id="gradient1"></div>
  </div>
  
  <br>
  
  <section>
      <div id="score-chart">
          <div id="player-one-score">
              <p id="p-one-name">P1:</p>
              <div class="red-line-breaker"></div>
              <h1 id="score-one"> 0 </h1>
          </div>
          <div class="red-line-breaker"></div>
          <div id="player-two-score">
              <p id="p-two-name">P2</p>
              <div class="red-line-breaker"></div>
              <h1 id="score-two"> 0 </h1>
          </div>
      </div>
  
  
      <!--  the code below builds the box where player one can click to select from various move types and lock in their choices -->
      <div id="move-selection">
          <div id="player-one-moves">
              <h3 class="player-header">Player One</h3>
              <div id=player-one-move-one>
                  <h2 class="choice-header">First Choice:</h2>
  
                  <i class="fa-solid fa-paper-plane" onclick="pickPlayerOneChoiceOne('paper')"></i>
                  <i class="fa-solid fa-scissors" onclick="pickPlayerOneChoiceOne('scissors')"></i>
                  <i class="fa-regular fa-hand-back-fist" onclick="pickPlayerOneChoiceOne('rock')"></i>
              </div>
  
              <div class="red-line-breaker"></div>
  
              <div id="player-one-move-two">
                  <h2 class="choice-header">Second Choice:</h2>
  
                  <i class="fa-solid fa-paper-plane" onclick="pickPlayerOneChoiceTwo('paper')"></i>
                  <i class="fa-solid fa-scissors" onclick="pickPlayerOneChoiceTwo('scissors')"></i>
                  <i class="fa-regular fa-hand-back-fist" onclick="pickPlayerOneChoiceTwo('rock')"></i>
              </div>
  
              <div class="red-line-breaker"></div>
  
              <div id="player-one-move-three">
                  <h2 class="choice-header">Third Choice:</h2>
  
                  <i class="fa-solid fa-paper-plane" onclick="pickPlayerOneChoiceThree('paper')"></i>
                  <i class="fa-solid fa-scissors" onclick="pickPlayerOneChoiceThree('scissors')"></i>
                  <i class="fa-regular fa-hand-back-fist" onclick="pickPlayerOneChoiceThree('rock')"></i>
              </div>
  
              <div class="red-line-breaker"></div>

              <!-- the code below will lock the input for player one and update the HTML to display player two -->
              <div class="lock-answer" onclick="pickComputerChoiceOne();">Lock in your choices! <i
                  class="fa-solid fa-lock-open"></i>
              </div>

              <!-- this division creats a small colored bar at the bottom -->
              <div id="grad-player-one"></div>
      </div>
  </section>
  
  <!-- this code will reset the HTML content of the page to that of the original Main Menu content -->
  <div id="reset-button" onclick="resetGame();">Main Menu</div>
  
  
  
  <!-- Linking to javascript game logic -->
  <script src="assets/js/script.js"></script>`;

  console.log('Starting Player VS Computer.');
}

function openPVPManual() {
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
          Set the name for Player One and Player Two via the scoreboard, the text 'P1:/P2:' can be edited. Once you
          have chosen your names,
          click on the small padlock icon shown in the image to lock them in. Your Player Names can only be chosen in
          the first game, so choose wisely!
      </p>
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
  </div>
  <br>
  <div class="pvp-step">
      <h3>
          Step 4:
      </h3>
      <p>
          Player Two must repeat the process of chosing their hand for each of the three rounds. once the final hand
          is chosen the game shall compare Player One and PLayer Two's decisions and the results shall be displayed in
          pop up message boxes. The scoreboard shall update to reflect the scores from the game.
      </p>
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
  </div>
  <br>
  <div id="start-pvp-button" onclick="startPVP()">Start a game!</div>
</div>

<br>

<div id="reset-button" onclick="resetGame();">Main Menu</div>



<!-- Linking to javascript game logic -->
<script src="assets/js/script.js"></script>`
}

pickPlayerOneChoiceOne = (handOne) => {
  let hideChoiceOne = document.getElementById("player-one-move-one")
  hideChoiceOne.style.display = "none";

  playerOneMoves.push(handOne)
  console.log(playerOneMoves);

  pickPlayerOneChoiceTwo = (handTwo) => {
    let hideChoiceTwo = document.getElementById("player-one-move-two")
    hideChoiceTwo.style.display = "none";

    playerOneMoves.push(handTwo)
    console.log(playerOneMoves);
  }

  pickPlayerOneChoiceThree = (handThree) => {
    let hideChoiceTwo = document.getElementById("player-one-move-three")
    hideChoiceTwo.style.display = "none";

    playerOneMoves.push(handThree)
    console.log(playerOneMoves);
  }
}

pickPlayerTwoChoiceOne = (handOne) => {
  let hideChoiceOne = document.getElementById("player-two-move-one")
  hideChoiceOne.style.display = "none";

  playerTwoMoves.push(handOne)
  console.log(playerTwoMoves);

  pickPlayerTwoChoiceTwo = (handTwo) => {
    let hideChoiceTwo = document.getElementById("player-two-move-two")
    hideChoiceTwo.style.display = "none";

    playerTwoMoves.push(handTwo)
    console.log(playerTwoMoves);
  }

  pickPlayerTwoChoiceThree = (handThree) => {
    let hideChoiceThree = document.getElementById("player-two-move-three")
    hideChoiceThree.style.display = "none";

    playerTwoMoves.push(handThree)
    console.log(playerTwoMoves);

    // call the function to compare the arrays and log the winner 
    compareResultsPVP(playerOneMoves, playerTwoMoves);
  }
}

function pickComputerChoiceOne() {
  let options = ["rock", "paper", "scissors"];
  let computerHandOne = options[Math.floor(Math.random() * options.length)];

  computerMoves.push(computerHandOne)
  console.log(computerMoves);

  pickComputerChoiceTwo = () => {
    let options = ["rock", "paper", "scissors"];
    let computerHandTwo = options[Math.floor(Math.random() * options.length)];
  
    computerMoves.push(computerHandTwo)
    console.log(computerMoves);
  };

  pickComputerChoiceThree = () => {
    let options = ["rock", "paper", "scissors"];
    let computerMoves = options[Math.floor(Math.random() * options.length)];
  
    computerMoves.push(computerHandThree)
    console.log(computerMoves);

    // call the function to compare the arrays and log the winner 
    compareResultsPVC(playerOneMoves, computerMoves);
  };
};

// compare the playerOneMoves and playerTwoMoves arrays once they are full and adjust scoring
const compareResultsPVP = (playerOneMoves, playerTwoMoves) => {

  // Draw cases round 1 (array index [0])
  if (playerOneMoves[0] == "paper" && playerTwoMoves[0] == "paper") {
    console.log("Round 1 is... A draw!")
    alert("Round 1 is... A draw!")
  }
  if (playerOneMoves[0] == "rock" && playerTwoMoves[0] == "rock") {
    console.log("Round 1 is... A draw!")
    alert("Round 1 is... A draw!")
  }
  if (playerOneMoves[0] == "scissors" && playerTwoMoves[0] == "scissors") {
    console.log("Round 1 is... A draw!")
    alert("Round 1 is... A draw!")
  }

  // Player One winning cases round 1 (array index [0])
  if (playerOneMoves[0] == "paper" && playerTwoMoves[0] == "rock") {
    console.log("Player One wins Round 1!")
    alert("Player One wins Round 1!")
    incrementPlayerOneScore();
  }
  if (playerOneMoves[0] == "rock" && playerTwoMoves[0] == "scissors") {
    console.log("Player One wins Round 1!")
    alert("Player One wins Round 1!")
    incrementPlayerOneScore();
  }
  if (playerOneMoves[0] == "scissors" && playerTwoMoves[0] == "paper") {
    console.log("Player One wins Round 1!")
    alert("Player One wins Round 1!")
    incrementPlayerOneScore();
  }

  // Player Two winning cases round 1 (array index [0])
  if (playerOneMoves[0] == "paper" && playerTwoMoves[0] == "scissors") {
    console.log("Player Two wins Round 1!")
    alert("Player Two wins Round 1!")
    incrementPlayerTwoScore();
  }
  if (playerOneMoves[0] == "rock" && playerTwoMoves[0] == "paper") {
    console.log("Player Two wins Round 1!")
    alert("Player Two wins Round 1!")
    incrementPlayerTwoScore();
  }
  if (playerOneMoves[0] == "scissors" && playerTwoMoves[0] == "rock") {
    console.log("Player Two wins Round 1!")
    alert("Player Two wins Round 1!")
    incrementPlayerTwoScore();
  }

  // draw cases, check round two (array index [1])
  if (playerOneMoves[1] == "paper" && playerTwoMoves[1] == "paper") {
    console.log("Round 2 is... A draw!")
    alert("Round 2 is... A draw!")
  }
  if (playerOneMoves[1] == "rock" && playerTwoMoves[1] == "rock") {
    console.log("Round 2 is... A draw!")
    alert("Round 2 is... A draw!")
  }
  if (playerOneMoves[1] == "scissors" && playerTwoMoves[1] == "scissors") {
    console.log("Round 2 is... A draw!")
    alert("Round 2 is... A draw!")
  }

  // player one wins, check round two (array index [1])
  if (playerOneMoves[1] == "paper" && playerTwoMoves[1] == "rock") {
    console.log("Player One wins Round 2!")
    alert("Player One wins Round 2!")
    incrementPlayerOneScore();
  }
  if (playerOneMoves[1] == "rock" && playerTwoMoves[1] == "scissors") {
    console.log("Player One wins Round 2!")
    alert("Player One wins Round 2!")
    incrementPlayerOneScore();
  }
  if (playerOneMoves[1] == "scissors" && playerTwoMoves[1] == "paper") {
    console.log("Player One wins Round 2!")
    alert("Player One wins Round 2!")
    incrementPlayerOneScore();
  }

  //player two wins, check round two (array index [1])
  if (playerOneMoves[1] == "paper" && playerTwoMoves[1] == "scissors") {
    console.log("Player Two wins Round 2!")
    alert("Player Two wins Round 2!")
    incrementPlayerTwoScore();
  }
  if (playerOneMoves[1] == "rock" && playerTwoMoves[1] == "paper") {
    console.log("Player Two wins Round 2!")
    alert("Player Two wins Round 2!")
    incrementPlayerTwoScore();
  }
  if (playerOneMoves[1] == "scissors" && playerTwoMoves[1] == "rock") {
    console.log("Player Two wins Round 2!")
    alert("Player Two wins Round 2!")
    incrementPlayerTwoScore();
  }

  //draw cases, check round three (array index [2])
  if (playerOneMoves[2] == "paper" && playerTwoMoves[2] == "paper") {
    console.log("Round 3 is... A draw!")
    alert("Round 3 is... A draw!")
  }
  if (playerOneMoves[2] == "rock" && playerTwoMoves[2] == "rock") {
    console.log("Round 3 is... A draw!")
    alert("Round 3 is... A draw!")
  }
  if (playerOneMoves[2] == "scissors" && playerTwoMoves[2] == "scissors") {
    console.log("Round 3 is... A draw!")
    alert("Round 3 is... A draw!")
  }

  //player one wins, check round three (array index [2])
  if (playerOneMoves[2] == "paper" && playerTwoMoves[2] == "rock") {
    console.log("Player One wins Round 3!")
    alert("Player One wins Round 3!")
    incrementPlayerOneScore();
  }
  if (playerOneMoves[2] == "rock" && playerTwoMoves[2] == "scissors") {
    console.log("Player One wins Round 3!")
    alert("Player One wins Round 3!")
    incrementPlayerOneScore();
  }
  if (playerOneMoves[2] == "scissors" && playerTwoMoves[2] == "paper") {
    console.log("Player One wins Round 3!")
    alert("Player One wins Round 3!")
    incrementPlayerOneScore();
  }

  //player two wins, check round three (array index [2])
  if (playerOneMoves[2] == "paper" && playerTwoMoves[2] == "scissors") {
    console.log("Player Two wins Round 3!")
    alert("Player Two wins Round 3!")
    incrementPlayerTwoScore();
  }
  if (playerOneMoves[2] == "rock" && playerTwoMoves[2] == "paper") {
    console.log("Player Two wins Round 3!")
    alert("Player Two wins Round 3!")
    incrementPlayerTwoScore();
  }
  if (playerOneMoves[2] == "scissors" && playerTwoMoves[2] == "rock") {
    console.log("Player Two wins Round 3!")
    alert("Player Two wins Round 3!")
    incrementPlayerTwoScore();
  }
};

// compare the playerOneMoves and computerMovex arrays once they are full and adjust scoring
const compareResultsPVC = (playerOneMoves, computerMoves) => {

  // Draw cases round 1 (array index [0])
  if (playerOneMoves[0] == "paper" && computerMoves[0] == "paper") {
    console.log("Round 1 is... A draw!")
    alert("Round 1 is... A draw!")
  }
  if (playerOneMoves[0] == "rock" && computerMoves[0] == "rock") {
    console.log("Round 1 is... A draw!")
    alert("Round 1 is... A draw!")
  }
  if (playerOneMoves[0] == "scissors" && computerMoves[0] == "scissors") {
    console.log("Round 1 is... A draw!")
    alert("Round 1 is... A draw!")
  }

  // Player One winning cases round 1 (array index [0])
  if (playerOneMoves[0] == "paper" && computerMoves[0] == "rock") {
    console.log("Player One wins Round 1!")
    alert("Player One wins Round 1!")
    incrementPlayerOneScore();
  }
  if (playerOneMoves[0] == "rock" && computerMoves[0] == "scissors") {
    console.log("Player One wins Round 1!")
    alert("Player One wins Round 1!")
    incrementPlayerOneScore();
  }
  if (playerOneMoves[0] == "scissors" && computerMoves[0] == "paper") {
    console.log("Player One wins Round 1!")
    alert("Player One wins Round 1!")
    incrementPlayerOneScore();
  }

  // Player Two winning cases round 1 (array index [0])
  if (playerOneMoves[0] == "paper" && computerMoves[0] == "scissors") {
    console.log("The Computer wins Round 1!")
    alert("The Computer wins Round 1!")
    incrementPlayerTwoScore();
  }
  if (playerOneMoves[0] == "rock" && computerMoves[0] == "paper") {
    console.log("The Computer wins Round 1!")
    alert("The Computer wins Round 1!")
    incrementPlayerTwoScore();
  }
  if (playerOneMoves[0] == "scissors" && computerMoves[0] == "rock") {
    console.log("The Computer wins Round 1!")
    alert("The Computer wins Round 1!")
    incrementPlayerTwoScore();
  }

  // draw cases, check round two (array index [1])
  if (playerOneMoves[1] == "paper" && computerMoves[1] == "paper") {
    console.log("Round 2 is... A draw!")
    alert("Round 2 is... A draw!")
  }
  if (playerOneMoves[1] == "rock" && computerMoves[1] == "rock") {
    console.log("Round 2 is... A draw!")
    alert("Round 2 is... A draw!")
  }
  if (playerOneMoves[1] == "scissors" && computerMoves[1] == "scissors") {
    console.log("Round 2 is... A draw!")
    alert("Round 2 is... A draw!")
  }

  // player one wins, check round two (array index [1])
  if (playerOneMoves[1] == "paper" && computerMoves[1] == "rock") {
    console.log("Player One wins Round 2!")
    alert("Player One wins Round 2!")
    incrementPlayerOneScore();
  }
  if (playerOneMoves[1] == "rock" && computerMoves[1] == "scissors") {
    console.log("Player One wins Round 2!")
    alert("Player One wins Round 2!")
    incrementPlayerOneScore();
  }
  if (playerOneMoves[1] == "scissors" && computerMoves[1] == "paper") {
    console.log("Player One wins Round 2!")
    alert("Player One wins Round 2!")
    incrementPlayerOneScore();
  }

  //player two wins, check round two (array index [1])
  if (playerOneMoves[1] == "paper" && computerMoves[1] == "scissors") {
    console.log("The Computer wins Round 2!")
    alert("The Computer wins Round 2!")
    incrementPlayerTwoScore();
  }
  if (playerOneMoves[1] == "rock" && computerMoves[1] == "paper") {
    console.log("The Computer wins Round 2!")
    alert("The Computer wins Round 2!")
    incrementPlayerTwoScore();
  }
  if (playerOneMoves[1] == "scissors" && computerMoves[1] == "rock") {
    console.log("The Computer wins Round 2!")
    alert("The Computer wins Round 2!")
    incrementPlayerTwoScore();
  }

  //draw cases, check round three (array index [2])
  if (playerOneMoves[2] == "paper" && computerMoves[2] == "paper") {
    console.log("Round 3 is... A draw!")
    alert("Round 3 is... A draw!")
  }
  if (playerOneMoves[2] == "rock" && computerMoves[2] == "rock") {
    console.log("Round 3 is... A draw!")
    alert("Round 3 is... A draw!")
  }
  if (playerOneMoves[2] == "scissors" && computerMoves[2] == "scissors") {
    console.log("Round 3 is... A draw!")
    alert("Round 3 is... A draw!")
  }

  //player one wins, check round three (array index [2])
  if (playerOneMoves[2] == "paper" && computerMoves[2] == "rock") {
    console.log("Player One wins Round 3!")
    alert("Player One wins Round 3!")
    incrementPlayerOneScore();
  }
  if (playerOneMoves[2] == "rock" && computerMoves[2] == "scissors") {
    console.log("Player One wins Round 3!")
    alert("Player One wins Round 3!")
    incrementPlayerOneScore();
  }
  if (playerOneMoves[2] == "scissors" && computerMoves[2] == "paper") {
    console.log("Player One wins Round 3!")
    alert("Player One wins Round 3!")
    incrementPlayerOneScore();
  }

  //player two wins, check round three (array index [2])
  if (playerOneMoves[2] == "paper" && computerMoves[2] == "scissors") {
    console.log("The Computer wins Round 3!")
    alert("The Computer wins Round 3!")
    incrementPlayerTwoScore();
  }
  if (playerOneMoves[2] == "rock" && computerMoves[2] == "paper") {
    console.log("The Computer wins Round 3!")
    alert("The Computer wins Round 3!")
    incrementPlayerTwoScore();
  }
  if (playerOneMoves[2] == "scissors" && computerMoves[2] == "rock") {
    console.log("The Computer wins Round 3!")
    alert("The Computer wins Round 3!")
    incrementPlayerTwoScore();
  }
};


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

function resetGame() {
  let startBody = document.body;
  startBody.innerHTML = mainMenu;
  console.log('Returning to the Main Menu...');
}

function lockAnswers() {
  const hiddenAnswers = document.getElementById("player-one-moves");
  const showAnswers = document.getElementById("player-two-moves");

  if (hiddenAnswers.style.display !== "none") {
    hiddenAnswers.style.display = "none";
    showAnswers.id = "player-two-moves-show"
    console.log("Player One choices locked")
    alert("Click OK to hide your choices, then hand the controls to Player Two!")
  } else {
    hiddenAnswers.style.display = "block";
  }

};