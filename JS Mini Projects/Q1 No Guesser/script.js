document.addEventListener("DOMContentLoaded", () => {
    const guessInput = document.getElementById("guess");
    const checkButton = document.getElementById("check");
    const againButton = document.getElementById("again");
    const resultParagraph = document.querySelector(".result p:first-of-type");
    const scoreSpan = document.querySelector(".result span:nth-of-type(1)");
    const highscoreSpan = document.querySelector(".result span:nth-of-type(2)");

    let secretNumber = Math.floor(Math.random() * 20) + 1;
    let score = 20;
    let highscore = 0;

    function displayMessage(message) {
        resultParagraph.textContent = message;
    }

    function updateScore() {
        scoreSpan.textContent = score;
    }

    function updateHighscore() {
        highscoreSpan.textContent = highscore;
    }

    function resetGame() {
        score = 20;
        secretNumber = Math.floor(Math.random() * 20) + 1;
        guessInput.value = "";
        displayMessage("Start guessing...");
        updateScore();
    }

    checkButton.addEventListener("click", () => {
        const guess = Number(guessInput.value);

        if (!guess || guess < 1 || guess > 20) {
            displayMessage("Please enter a number between 1 and 20.");
            return;
        }

        if (guess === secretNumber) {
            displayMessage("Correct number! 🎉");
            if (score > highscore) {
                highscore = score;
                updateHighscore();
            }
        } else {
            if (score > 1) {
                displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
                score--;
                updateScore();
            } else {
                displayMessage("You lost the game! 😢");
            }
        }
    });

    againButton.addEventListener("click", resetGame);
});
