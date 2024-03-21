"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

let displayMsg = function (msg) {
    document.querySelector('.message').textContent = msg;
}

document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        displayMsg("Nothing entered!")
    }
    else if (guess === secretNumber) {

        displayMsg("Correct Number!");
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;

        }
    } else if (guess !== secretNumber) {
        if (score > 0) {
            displayMsg(guess > secretNumber ? "TOO HIGH" : "TOO LOW");
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMsg("you lost the game");
            document.querySelector('.score').textContent = 0;

        }
    }

});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMsg("Start guessing...");
    document.querySelector('.number').textContent = "?";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';


});