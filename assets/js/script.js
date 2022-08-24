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
        </div>

        <br>

        <div id=move-two>
            <h2 class="choice-header">Second Choice:</h2>
        </div>

        <br>

        <div id=move-three>
            <h2 class="choice-header">Third Choice:</h2>
        </div>
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
        <div id="grad-player-two"></div>

    </div>
</div>

<div id="reset-button" onclick="resetGame();">
    <h2>Main Menu</h2>
</div>



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

        <div id="reset-button" onclick="resetGame();">
            <h2>Main Menu</h2>
        </div>

        

        <!-- Linking to javascript game logic -->
        <script src="assets/js/script.js"></script>
    `;

    console.log('Starting Player VS Computer.');
}

function resetGame() {
    let startBody = document.body;
    startBody.innerHTML = mainMenu;
    console.log('Returning to the Main Menu...');
}