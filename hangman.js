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

   
}