const mainMenu = document.body.innerHTML

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
            <div id="p-one-move-choice">
              <p class="left-button" onclick="changeLeft();"><i class="arrow left"></i></p>
              <p><i class="fa-regular fa-hand-back-fist"></i></p>
              <p class="right-button" onclick="changeRight();"><i class="arrow right"></i></p>
            </div>
        </div>

        <br>

        <div id=move-two>
            <h2 class="choice-header">Second Choice:</h2>
        </div>

        <br>

        <div id=move-three>
            <h2 class="choice-header">Third Choice:</h2>
        </div>
        <div class="lock-answer" onclick="lockAnswers();">Lock in your choices! <i class="fa-solid fa-lock-open"></i></div>
        <div id="grad-player-one"></div>

    </div>

    <div id="player-two-moves">
        <h3 class="player-header">Player Two</h3>
        <div id=move-one>
            <h2 class="choice-header">First Choice:</h2>
        </div>

        <br>

        <div id=move-two>
            <h2 class="choice-header">Second Choice:</h2>
        </div>

        <br>

        <div id=move-three>
            <h2 class="choice-header">Third Choice:</h2>
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

function changeLeft() {
    let leftButton = document.getElementById("p-one-move-choice");

    leftButton.innerHTML = `<p class="left-button" onclick="changeLeft();"><i class="arrow left"></i></p>
    <p><i class="fa-solid fa-scissors"></i></p>
    <p class="right-button" onclick="changeRight();"><i class="arrow right"></i></p>`
}

function changeRight() {
    let rightButton = document.getElementById("p-one-move-choice");

    rightButton.innerHTML = `<p class="left-button" onclick="changeLeft();"><i class="arrow left"></i></p>
    <p><i class="fa-solid fa-paper-plane"></i></i></p>
    <p class="right-button" onclick="changeRight();"><i class="arrow right"></i></p>`
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