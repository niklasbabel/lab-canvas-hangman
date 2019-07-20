let hangman;

class Hangman {
  constructor(words) {
    this.words = ["test", "test2", "test3"];
    this.secretWord = "";
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 0;
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(string) {
    console.log(this);
    if (this.letters.includes(string)) {
      return false;
    } else {
      return true;
    }
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  addCorrectLetter(string) {
    this.guessedLetter = this.guessedLetter + string;
    return this.guessedLetter;
  }
}

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
};

document.onkeydown = function(e) {};

class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById("hangman").getContext("2d");
  }
  createBoard() {}
  drawLines() {}
  writeCorrectLetter(index) {}
  writeWrongLetter(letter, errorsLeft) {}
  drawHangman(shape) {}
  gameOver() {}
  winner() {}
}
