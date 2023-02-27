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
 
}