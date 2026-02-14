const inputs = document.querySelector(".inputs");
const resetBtn = document.querySelector(".reset-btn");
const hintTag = document.querySelector(".hint span");
const typingInput = document.querySelector(".typing-input");
const wrongLetter = document.querySelector(".wrong-letter span");
const guessLeft = document.querySelector(".guess-left span");

let word, incorrects = [], corrects = [], maxGuesses;

function randomWord() {
    // getting random object from wordList
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranObj.word;        // getting word of random object
    maxGuesses = 10;
    incorrects = [];
    corrects = [];

    hintTag.innerHTML = ranObj.hint;
    guessLeft.innerHTML = maxGuesses;
    wrongLetter.innerHTML = incorrects;

    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`
    }
    inputs.innerHTML = html;
    typingInput.focus();

}

randomWord()

function initGame(e) {
    let key = e.target.value.toLowerCase();
    if (
        key.match(/^[A-Za-z]+$/) && !incorrects.includes(` ${key}`) && !corrects.includes(key)) {
        if (word.includes(key)) {         // if user letter found in the word
            for (let i = 0; i < word.length; i++) {
                // showing matched letter in the input value
                if (word[i] === key) {
                    corrects.push(key);
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        }
        else {
            maxGuesses--;
            incorrects.push(` ${key}`)
        }
        guessLeft.innerHTML = maxGuesses;
        wrongLetter.innerHTML = incorrects;
    }
    typingInput.value = "";

    setTimeout(() => {
        if (corrects.length === word.length) {   // if user found all letters
            alert(`Congrats! You found the word ${word.toLowerCase()}`)
            randomWord();   // calling randomWord function, sothe game reset
        }
        else if (maxGuesses < 1) {        // if user couldn't found all letters
            alert("Game over! You don't have remaining guesses.");

            for (let i = 0; i < word.length; i++) {
                // show all letters in the input
                inputs.querySelectorAll("input")[i].value = word[i];
            }

            randomWord();
        }
    });

}


resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("click", () => typingInput.focus());