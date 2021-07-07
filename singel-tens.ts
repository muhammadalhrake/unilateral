import random from 'random';
import { ansArray } from './answers';

//helper function
function between(min: number, max: number) {
  return random.int(min, max);
}

export function generateSingelTens(ez: string[], hard: string[], stat: string) {
  let copyOfMonad = {
    answers: [5, 5, 5, 5],
    firstNumber: 5,
    secondNumber: 5
  };
  if (ez.length == 0 || hard.length == 0) {
    generateProbabilitySpace(ez, hard, stat);
  }
  if (stat == 'Easy') {
    let random = between(0, ez.length - 1);
    let mumber = ez[random];
    let question = mumber.split('*');
    copyOfMonad.firstNumber = +question[0];
    copyOfMonad.secondNumber = +question[1];
    copyOfMonad.answers = ansArray(+question[0], +question[1]);
    ez.filter(index => {
      index != mumber;
    });
    return copyOfMonad;
  } else if (stat == 'Difficult') {
    let random = between(0, hard.length - 1);
    let mumber = hard[random];
    let question = mumber.split('*');
    copyOfMonad.firstNumber = +question[0];
    copyOfMonad.secondNumber = +question[1];
    copyOfMonad.answers = ansArray(+question[0], +question[1]);
    hard.filter(index => {
      index != mumber;
    });
    return copyOfMonad;
  }
}

function generateProbabilitySpace(ez: string[], hard: string[], stat: string) {
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j < 9; j++) {
      if ((i + j).toString().length > 1 || (i * j).toString().length > 1) {
        let first = '1' + i;
        let second = '1' + j;
        let question = first + '*' + second;
        hard.push(question);
      } else {
        //ez way
        let first = '1' + i;
        let second = '1' + j;
        let question = first + '*' + second;
        hard.push(question);
      }
    }
  }
}
