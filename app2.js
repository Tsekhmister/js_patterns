'use strict';

// const secretNum = Math.ceil(Math.random() * 10);
// let tries = 0; // 5

// function guessNum(number) {
//   console.log(secretNum);
//   if (number === secretNum) {
//     alert('You are win');
//     return;
//   }

//   while(tries < 4) {
//     if (tries === 3) {
//       alert('Последний шанс, салага')
//     };

//     if (tries < 3) {
//       alert('Вы не угадали, повторите попытку')
//     };

//     tries++;
//   }
  
//   return alert('Game over');
// }

const riddle = {
  question: 'Висит груша нельзя скушать',
  correctAnswer: 'лампочка',
  hints: ['это съедобное', 'это не овощ'],
  tries: 3,
  checkAnswer(answer) {
    if (this.tries === 0) {
      return alert('Are you stupid? Do not answer. I understand')
    }

    if (!answer.toLowerCase().includes(this.correctAnswer.toLowerCase())) {
      --this.tries;
  
     return alert(this.hints[this.tries - 1] || 'Подсказки закончились' );
    } else {
      return alert('You are smart')
    }
  
  }
}

window.onload = function () {
  document.getElementById('riddle').innerText = riddle.question;
}

function check() {
  const input = document.getElementById('domTextElement');

  let guessedAnswer = input.value;

  if (guessedAnswer) {
    riddle.checkAnswer(guessedAnswer);
  }
}