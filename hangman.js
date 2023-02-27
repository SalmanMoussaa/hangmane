window.onload= function(){
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
            } else {
                gameState.lettersGuessed.push(letter);
                if (gameState.word.indexOf(letter) !== -1) {
                    alert("You guessed a letter in the word!");
                } else {
                    gameState.guessesRemaining--;
                    alert("Sorry, that letter is not in the word.");
                }
                updateDisplay();
            }
        } else {
            alert("Please enter a single lowercase letter.");
        }
    }
    document.getElementById("btng").addEventListener("click",guessLetter);

  
    if (gameState.guessesRemaining === 0) {
        alert("Game over! The word was: " + gameState.word);
        resetGame();
    } else if (gameState.word.split("").every(letter => gameState.lettersGuessed.indexOf(letter) !== -1)) {
        alert("Congratulations, you guessed the word!");
    
}
document.getElementById("btnA").addEventListener("click",resetGame);
}