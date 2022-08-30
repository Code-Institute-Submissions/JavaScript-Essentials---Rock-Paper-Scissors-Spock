const mainMenu = document.body.innerHTML

let playerChoices = []

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

<div id="move-selection">
    <div id="player-one-moves">
        <h3 class="player-header">Player One</h3>
        <div id=move-one>
            <h2 class="choice-header">First Choice:</h2>
            <div class="hand-paper">
              <i class="fa-solid fa-paper-plane" onclick="pickPlayerOneChoiceOne('paper')"></i>
            </div>
            <div class="hand-scissors">
              <i class="fa-solid fa-scissors" onclick="pickPlayerOneChoiceOne('scissors')"></i>
            </div>
            <div class="hand-rock">
              <i class="fa-regular fa-hand-back-fist" onclick="pickPlayerOneChoiceOne('rock')"></i>                       
            </div>
        </div>

        <br>

        <div id=move-two>
            <h2 class="choice-header">Second Choice:</h2>
            <div class="hand-paper">
              <i class="fa-solid fa-paper-plane" onclick="pickPlayerOneChoiceTwo('paper')"></i>
            </div>
            <div class="hand-scissors">
              <i class="fa-solid fa-scissors" onclick="pickPlayerOneChoiceTwo('scissors')"></i>
            </div>
            <div class="hand-rock">
              <i class="fa-regular fa-hand-back-fist" onclick="pickPlayerOneChoiceTwo('rock')"></i>                       
            </div>
        </div>

        <br>

        <div id=move-three>
            <h2 class="choice-header">Third Choice:</h2>
            <div class="hand-paper">
              <i class="fa-solid fa-paper-plane" onclick="pickPlayerOneChoiceThree('paper')"></i>
            </div>
            <div class="hand-scissors">
              <i class="fa-solid fa-scissors" onclick="pickPlayerOneChoiceThree('scissors')"></i>
            </div>
            <div class="hand-rock">
              <i class="fa-regular fa-hand-back-fist" onclick="pickPlayerOneChoiceThree('rock')"></i>                       
            </div>
        </div>

        <div class="lock-answer" onclick="lockAnswers();">Lock in your choices! <i class="fa-solid fa-lock-open"></i></div>
        <div id="grad-player-one"></div>

    </div>

    <div id="player-two-moves">
        <h3 class="player-header">Player Two</h3>
        <div id=move-one>
            <h2 class="choice-header">First Choice:</h2>
            <div class="hand-paper">
              <i class="fa-solid fa-paper-plane" onclick="pickPlayerTwoChoiceOne('paper')"></i>
            </div>
            <div class="hand-scissors">
              <i class="fa-solid fa-scissors" onclick="pickPlayerTwoChoiceOne('scissors')"></i>
            </div>
            <div class="hand-rock">
              <i class="fa-regular fa-hand-back-fist" onclick="pickPlayerTwoChoiceOne('rock')"></i>                       
            </div>
        </div>

        <br>

        <div id=move-two>
            <h2 class="choice-header">Second Choice:</h2>
            <div class="hand-paper">
              <i class="fa-solid fa-paper-plane" onclick="pickPlayerTwoChoiceTwo('paper')"></i>
            </div>
            <div class="hand-scissors">
              <i class="fa-solid fa-scissors" onclick="pickPlayerTwoChoiceTwo('scissors')"></i>
            </div>
            <div class="hand-rock">
              <i class="fa-regular fa-hand-back-fist" onclick="pickPlayerTwoChoiceTwo('rock')"></i>                       
            </div>
        </div>

        <br>

        <div id=move-three>
            <h2 class="choice-header">Third Choice:</h2>
            <div class="hand-paper">
              <i class="fa-solid fa-paper-plane" onclick="pickPlayerOneChoiceThree('paper')"></i>
            </div>
            <div class="hand-scissors">
              <i class="fa-solid fa-scissors" onclick="pickPlayerOneChoiceThree('scissors')"></i>
            </div>
            <div class="hand-rock">
              <i class="fa-regular fa-hand-back-fist" onclick="pickPlayerOneChoiceThree('rock')"></i>                       
            </div>
        </div>
        <div class="lock-answer">Lock in your choices! <i class="fa-solid fa-lock-open"></i></div>
        <div id="grad-player-two"></div>

    </div>
</div>

<div id="reset-button" onclick="resetGame();">Main Menu</div>



<!-- Linking to javascript game logic -->
<script src="assets/js/script.js"></script>
    `;

    console.log('Starting Player VS Player.')
}

function startPVC() {
    // get the body of the page
    let startBody = document.body;

    // Set the body's innerHTML to player vs computer choice selection
    startBody.innerHTML = `
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

        <div id="player-moves">
        
          <div id=move-one>
            <h2>First Choice:</h2>
          </div>

          <div id=move-two>
            <h2>Second Choice:</h2>
          </div>

          <div id=move-three>
            <h2>Third Choice:</h2>
          </div>

        </div>

        <div id="reset-button" onclick="resetGame();">Main Menu</div>

        

        <!-- Linking to javascript game logic -->
        <script src="assets/js/script.js"></script>
    `;

    console.log('Starting Player VS Computer.');
}

pickPlayerOneChoiceOne = (handOne) => {
    playerChoices.push(handOne)
    console.log(playerChoices);

}

pickPlayerOneChoiceTwo = (handTwo) => {
    playerChoices.push(handTwo)
    console.log(playerChoices);
}

pickPlayerOneChoiceThree = (handThree) => {
    playerChoices.push(handThree)
    console.log(playerChoices);
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