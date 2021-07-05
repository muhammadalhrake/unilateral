// Import stylesheets
import './style.css';
import random from 'random';
import { monad } from './model';
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
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < ruls.length; j++) {
      for (let k = 0; k < state.length; k++) {
        let rule = ruls[j];
        let stat = state[k];
        if (rule == 'monad') {
        }
      }
    }
  }
}
function generateMonad(ez: [], hard: [], stat: string) {}
function ezgeneratemonad(ezProbabilityPyramid: A, ez: number[]) {
  let firstNum = between(1, 8);
  if (ez.length == 0) {
    ez.push(firstNum);
  } else if (ez.indexOf(firstNum) == -1) {
    ez.push(firstNum);
  }
}
// in this function we generate the second number of guestion
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
  } else if (ezCheckProbability[firstNum].length == 9 - firstNum) {
    ezCheckProbability[firstNum] = [];
    ez.filter(num => num != firstNum);
    ezCheckProbability(ezProbabilityPyramid, firstNum, ez);
  } else if (ezProbabilityPyramid[firstNum].Easy.indexOf(secondNum) == -1) {
    ezProbabilityPyramid[firstNum].Easy.push(secondNum);
  } else {
    for (let i = 0; i < 9 - firstNum; i++) {
      if (ezProbabilityPyramid[firstNum].Easy.indexOf(i) == -1) {
        ezProbabilityPyramid[firstNum].Easy.push(i);
      }
    }
  }
}
//console.log(ezProbabilityPyramid);
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
