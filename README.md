# Word Guessing Game
A simple and interactive Word Guessing Game built using **HTML, CSS, and JavaScript**.  
The player must guess the hidden word within a limited number of attempts using letter inputs.


## Features
- Random word selection
- Word hint display
- Letter-by-letter guessing
- Tracks wrong letters
- Remaining guesses counter
- Reset game functionality
- Fully responsive design
- Clean and smooth UI


## Technologies Used
- **HTML5** – Structure
- **CSS3** – Styling & Responsive Design
- **JavaScript (Vanilla JS)** – Game Logic & DOM Manipulation


## How to Play
1. A random word is selected.
2. A hint is displayed to help you guess.
3. Type a letter to guess the word.
4. If the letter is correct → it appears in the correct position.
5. If incorrect → it reduces your remaining guesses.
6. The game ends when:
   - You guess the full word  
   - You run out of guesses  

Click **Reset Game** to start again.


## Game Logic Overview
- Random word is selected from `wordList`
- Input validation allows only alphabets
- Correct letters are stored in an array
- Incorrect letters reduce remaining guesses
- Game resets automatically after win/lose


## Screenshots
<img src="Photos/Website Screenshot.png" alt="Word Guessing Game Screenshot" width="600"/>

## Responsive Design
The game is fully responsive and works on:
- Desktop
- Tablet
- Mobile devices


## Author
**Karan Roshan**