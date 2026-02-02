const inputs = document.querySelector(".inputs");
const resetBtn = document.querySelector(".reset-btn");
const hintTag = document.querySelector(".hint span");
const typingInput = document.querySelector(".typing-input");
const wrongLetter = document.querySelector(".wrong-letter span");

let word, incorrects = [], corrects = [];

function randomWord() {
    // getting random object from wordList
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranObj.word;        // getting word of random object
    console.log(word);

    hintTag.innerHTML = ranObj.hint;

    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`
    }
    inputs.innerHTML = html;

}

randomWord()

function initGame(e) {
    let key = e.target.value.toLowerCase();
    if (
        key.match(/^[A-Za-z]+$/) && !incorrects.includes(` ${key}`) && !corrects.includes(key)) {
        console.log(key);
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
            incorrects.push(` ${key}`)
        }
    }
    wrongLetter.innerHTML = incorrects;
    typingInput.value = "";

}


resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus())
