// Import stylesheets
import './style.css';
import random from 'random';
import { monad } from './model';
import { ansArray } from './answers';
//helper function

function between(min: number, max: number) {
  return random.int(min, max);
}
interface A {
  [key: string]: {
    Easy?: number[];
    Difficult: number[];
  };
}
let ezProbabilityPyramid: A = {
  1: {
    Easy: new Array<number>(),
    Difficult: new Array<number>()
  },
  2: {
    Easy: new Array<number>(),
    Difficult: new Array<number>()
  },
  3: {
    Easy: new Array<number>(),
    Difficult: new Array<number>()
  },
  4: {
    Easy: new Array<number>(),
    Difficult: new Array<number>()
  },
  5: {
    Easy: new Array<number>(),
    Difficult: new Array<number>()
  },
  6: {
    Easy: new Array<number>(),
    Difficult: new Array<number>()
  },
  7: {
    Easy: new Array<number>(),
    Difficult: new Array<number>()
  },
  8: {
    Easy: new Array<number>(),
    Difficult: new Array<number>()
  },
  9: {
    Difficult: new Array<number>()
  }
};
let ez = new Array<number>();
let hard = new Array<number>();
function generateQuestion(count: number, ruls: string[], state: string[]) {
  let generateQuestions: monad[];
  let generate: monad;
  for (let i = 0; i < count; ) {
    for (let j = 0; j < ruls.length && i < count; j++) {
      for (let k = 0; k < state.length && i < count; k++) {
        let rule = ruls[j];
        let stat = state[k];
        if (rule == 'monad') {
          generate = generateMonad(ez, hard, stat);
        }
        i++;
        generateQuestions.push(generate);
      }
    }
  }
}
/* TODO gnenrat monad question  */
function generateMonad(ez: number[], hard: number[], stat: string) {
  if (stat == 'Easy') {
    return ezgeneratemonad(ezProbabilityPyramid, ez);
  } else [];
}

/* in this function we generat singel guestion for eazy monad */
function ezgeneratemonad(ezProbabilityPyramid: A, ez: number[]) {
  let firstNum = between(1, 8);
  if (ez.length == 0) {
    ez.push(firstNum);
    return ezCheckProbability(ezProbabilityPyramid, firstNum, ez);
  } else if (ez.indexOf(firstNum) == -1) {
    ez.push(firstNum);
    return ezCheckProbability(ezProbabilityPyramid, firstNum, ez);
  } else {
    return ezCheckProbability(ezProbabilityPyramid, firstNum, ez);
  }
}
/* in this function we generate the second number of guestion */
function ezCheckProbability(
  ezProbabilityPyramid: A,
  firstNum: number,
  ez: number[]
) {
  let monad: monad;
  let copyofmonad = {
    answers: [5, 5, 5, 5],
    firstNumber: 5,
    secondNumber: 5
  };

  let secondNum = between(1, 9 - firstNum);
  if (ez.indexOf(firstNum) == -1) {
    ez.push(firstNum);
  }
  if (ezProbabilityPyramid[firstNum].Easy.length == 0) {
    //generat first second number
    ezProbabilityPyramid[firstNum].Easy.push(secondNum);
    copyofmonad.firstNumber = firstNum;
    copyofmonad.secondNumber = secondNum;
    copyofmonad.answers = ansArray(firstNum, secondNum);
  } else if (ezCheckProbability[firstNum].length == 9 - firstNum) {
    ezCheckProbability[firstNum] = [];
    ez.filter(num => num != firstNum);
    ezCheckProbability(ezProbabilityPyramid, firstNum, ez);
  } else if (ezProbabilityPyramid[firstNum].Easy.indexOf(secondNum) == -1) {
    ezProbabilityPyramid[firstNum].Easy.push(secondNum);
    copyofmonad.firstNumber = firstNum;
    copyofmonad.secondNumber = secondNum;
    copyofmonad.answers = ansArray(firstNum, secondNum);
  } else {
    for (let i = 0; i < 9 - firstNum; i++) {
      if (ezProbabilityPyramid[firstNum].Easy.indexOf(i) == -1) {
        ezProbabilityPyramid[firstNum].Easy.push(i);
        copyofmonad.firstNumber = firstNum;
        copyofmonad.secondNumber = i;
        copyofmonad.answers = ansArray(firstNum, i);
      }
    }
  }
  monad = copyofmonad;
  return monad;
}
//console.log(ezProbabilityPyramid);
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
