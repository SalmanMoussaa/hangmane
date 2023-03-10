window.onload= function(){
    var wrongGuesses=0;
    var words = [
        "javascript",
        "python",
        "ruby",
        "go",
        "java",
        "kotlin",
        "swift"
    ];

    // Choosing a random word from the list
    var word = words[Math.floor(Math.random() * words.length)];

    // Creating a dictionary to store the state of the game
    var gameState = {
        word: word,
        guessesRemaining: 6,
        lettersGuessed: []
    };
     // Initializing the display of the game state
     updateDisplay();

    
     function updateDisplay() {
         var wordDisplay = "";
         for (var i = 0; i < gameState.word.length; i++) {
             if (gameState.lettersGuessed.indexOf(gameState.word[i]) !== -1) {
                 wordDisplay += gameState.word[i];
             } else {
                 wordDisplay += "_";
             }
             wordDisplay += " ";
         }
         document.getElementById("word").textContent = wordDisplay;
         document.getElementById("guesses").textContent = gameState.guessesRemaining;
         document.getElementById("letters").textContent = gameState.lettersGuessed.join(", ");
     }
     function guessLetter() {
        var letter = document.getElementById("guess").value;
        document.getElementById("guess").value = "";
        if (/^[a-z]$/.test(letter)) {
            if (gameState.lettersGuessed.indexOf(letter) !== -1) {
                alert("You already guessed that letter!");
                wrongGuesses+=1;
            } else {
                gameState.lettersGuessed.push(letter);
                if (gameState.word.indexOf(letter) !== -1) {
                    alert("You guessed a letter in the word!");
                } else {
                    gameState.guessesRemaining--;
                    alert("Sorry, that letter is not in the word.");
                    wrongGuesses+=1;
                }
                updateDisplay();
            }
        } else {
            alert("Please enter a single lowercase letter.");
            
            wrongGuesses+=1;
        }
    }
    document.getElementById("btng").addEventListener("click",guessLetter);
    function updateHangmanImage() {
        const hangmanImage = document.querySelector("#hangman img");
        hangmanImage.src = `Assets/hangman${wrongGuesses}.jpg`;
    }
    updateHangmanImage();
    document.getElementById("btnA").addEventListener("click",alert("refresh to play again"));
}