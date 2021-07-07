// Import stylesheets
import './style.css';
import { monad, Probability } from './model';
import { generateMonad } from './generate-monad';

//Probability space tree for  //
let singelOnesProbabilityPyramid: Probability = {
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
  let generateQuestions = new Array<monad>();
  let generate: monad;
  for (let i = 0; i < count; ) {
    for (let j = 0; j < ruls.length && i < count; j++) {
      for (let k = 0; k < state.length && i < count; k++) {
        let rule = ruls[j];
        let stat = state[k];
        if (rule == 'monad') {
          generate = generateMonad(
            ez,
            singelOnesProbabilityPyramid,
            hard,
            stat
          );
        }
        i++;
        generateQuestions.push(generate);
      }
    }
  }
  return generateQuestions;
}
/* console.log(generateQuestion(30,['monad'],['Easy','Difficult']));
console.log(singelOnesProbabilityPyramid)
console.log(hard) */
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

enum MonadTypes {
  SingelOnes = 'singelOnes',
  SingelTens = 'singelTens',
  Mixed = 'mixed'
}
