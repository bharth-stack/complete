'use strict';
// document.querySelector('.message');
// document.querySelector('.message').textContent = '✨ Correct Number!';
// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 13;
// document.querySelector('.guess').value = 23;
let score = 20;
let highScore = 0;
let check = false;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '❌ no number';
  } else if (guess == secretNumber) {
    check = true;
    document.querySelector('.message').textContent = '✨ correct number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent = '📈 Number is too high';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 you lost the game! ';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent = '📉 Number is too low';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 you lost the game! ';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  if (check === true) {
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    } else {
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  check = false;
});
