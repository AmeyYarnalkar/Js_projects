'use strict';

// Variables
let attempts = 20;
let highscore = 0;
let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

// DOM Elements
const attemptsElement = document.querySelector('.score');
const highscoreElement = document.querySelector('.highscore');
const numberElement = document.querySelector('.number');
const messageElement = document.querySelector('.message');
const bodyElement = document.querySelector('body');
const inputElement = document.querySelector('input');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');

// Function to handle high score
function handleHighscore() {
    if (attempts > highscore) {
        highscore = attempts;
        highscoreElement.textContent = highscore;
    }
    numberElement.textContent = randomNumber;
    numberElement.style.width = '30rem';
    bodyElement.style.backgroundColor = '#60b347';
    inputElement.disabled = true;
    checkButton.disabled = true;
}

// Function to handle attempts
function handleAttempts() {
    attempts--;
    attemptsElement.textContent = attempts;
    if (attempts === 0) {
        messageElement.textContent = 'You lost the game!';
        checkButton.disabled = true;
    }
}

// Function to handle the game logic
function getResultMessage(randomNumber, input) {
    if (randomNumber === input) {
        handleHighscore();
        return 'Congratulations! You guessed the right number!';
    } else if (randomNumber > input) {
        handleAttempts();
        return 'Too low! Try again!';
    } else {
        handleAttempts();
        return 'Too high! Try again!';
    }
}

// Event Listeners
checkButton.addEventListener('click', function () {
    const inputNumber = Number(inputElement.value);
    if (!inputElement.value) {
        messageElement.textContent = 'No number!';
    } else if (isNaN(inputNumber) || inputNumber < 1 || inputNumber > 20) {
        messageElement.textContent = 'Enter a number between 1 and 20!';
    } else {
        messageElement.textContent = getResultMessage(randomNumber, inputNumber);
    }
});

againButton.addEventListener('click', function () {
    attempts = 20;
    attemptsElement.textContent = attempts;
    randomNumber = Math.floor(Math.random() * 20) + 1; // Regenerate random number
    console.log(randomNumber); // Debugging
    messageElement.textContent = 'Start guessing...';
    inputElement.value = '';
    inputElement.disabled = false;
    checkButton.disabled = false;
    bodyElement.style.backgroundColor = '#222';
    numberElement.textContent = '?';
    numberElement.style.width = '15rem';
});
