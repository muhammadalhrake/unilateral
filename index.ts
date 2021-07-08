// Import stylesheets
import './style.css';
import { monad, Probability, stateOfSingelTens } from './model';
import { generateMonad } from './generate-monad';
import { generateSingelTens } from './singel-tens';
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
let ezSingelOnes = new Array<number>();
let hardSingelOnes = new Array<number>();
/*  Probability of singel tens option*/
var singelTensProbabilityPyramid: stateOfSingelTens = {
  EZ: [],
  Hard: []
};
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
            ezSingelOnes,
            singelOnesProbabilityPyramid,
            hardSingelOnes,
            stat
          );
        } else if (rule == 'sengelTens') {
          let generated = generateSingelTens(
            singelTensProbabilityPyramid,
            stat
          );
          singelTensProbabilityPyramid = generated.levelArray;
          generate = generated.generate;
        }
        i++;
        generateQuestions.push(generate);
      }
    }
  }
  return generateQuestions;
}
//console.log((+(4+2).toString().length==1&&+(4*2).toString().length==1));
//console.log(generateQuestion(40, ['sengelTens'], ['Easy']));
//console.log(singelTensProbabilityPyramid)
//console.log(singelTensProbabilityPyramid.Hard);
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

enum MonadTypes {
  SingelOnes = 'singelOnes',
  SingelTens = 'singelTens',
  Mixed = 'mixed'
}
