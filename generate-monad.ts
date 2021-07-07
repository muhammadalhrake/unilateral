import random from 'random';
import { ansArray } from './answers';
import { Probability } from './model';

/* helper function */

function between(min: number, max: number) {
  return random.int(min, max);
}

/* TODO gnenrat sengen ones question  */
export function generateMonad(
  ez: number[],
  singelOnesProbabilityPyramid: Probability,
  hard: number[],
  stat: string
) {
  if (stat == 'Easy') {
    return ezgeneratemonad(singelOnesProbabilityPyramid, ez, 'Easy');
  } else if (stat == 'Difficult') {
    return ezgeneratemonad(singelOnesProbabilityPyramid, hard, 'Difficult');
  }
}

/* in this function we generat singel guestion for eazy singel ones */
function ezgeneratemonad(
  singelOnesProbabilityPyramid: Probability,
  state: number[],
  level: string
) {
  let firstNum, range;
  if (level == 'Easy') {
    range = 8;
    firstNum = between(1, range);
  } else if (level == 'Difficult') {
    range = 9;
    firstNum = between(1, range);
  }
  if (state.length == 0 || state.indexOf(firstNum) == -1) {
    state.push(firstNum);
    if (level == 'Easy') {
      return ezCheckProbability(singelOnesProbabilityPyramid, firstNum);
    } else if (level == 'Difficult') {
      return hardGenerationMonad(singelOnesProbabilityPyramid, firstNum);
    }
  } else {
    if (state.length < range) {
      for (let i = 1; i <= range; i++) {
        if (state.indexOf(i) == -1) {
          state.push(i);
          if (level == 'Easy') {
            return ezCheckProbability(singelOnesProbabilityPyramid, i);
          } else if (level == 'Difficult') {
            return hardGenerationMonad(singelOnesProbabilityPyramid, i);
          }
        }
      }
    } else {
      for (let i = state.length; i > 1; i--) {
        if (level == 'Easy') {
          if (singelOnesProbabilityPyramid[i].Easy.length != 9 - i) {
            return ezCheckProbability(singelOnesProbabilityPyramid, i);
          }
        } else if (level == 'Difficult') {
          if (singelOnesProbabilityPyramid[i].Difficult.length != i) {
            return hardGenerationMonad(singelOnesProbabilityPyramid, i);
          }
        }
      }

      state.forEach(index => {
        if (level == 'Easy') {
          singelOnesProbabilityPyramid[index].Easy = [];
        }
      });

      return ezgeneratemonad(singelOnesProbabilityPyramid, state, level);
    }
  }
}
/* in this function we generate the second number of guestion */
function ezCheckProbability(
  singelOnesProbabilityPyramid: Probability,
  firstNum: number
) {
  let copyofmonad = {
    answers: [5, 5, 5, 5],
    firstNumber: 5,
    secondNumber: 5
  };

  let secondNum = between(1, 9 - firstNum);
  console.log(singelOnesProbabilityPyramid[firstNum].Easy.length);
  if (
    singelOnesProbabilityPyramid[firstNum].Easy.length == 0 ||
    singelOnesProbabilityPyramid[firstNum].Easy.indexOf(secondNum) == -1
  ) {
    /* generat first second number */
    singelOnesProbabilityPyramid[firstNum].Easy.push(secondNum);
    let firstNumber = +(firstNum + '1');
    copyofmonad.firstNumber = firstNumber;
    secondNum = +(secondNum + '1');
    copyofmonad.secondNumber = secondNum;
    copyofmonad.answers = ansArray(firstNumber, secondNum);
    return copyofmonad;
  } else {
    /* to compleat all probability space after the first random generation  */
    for (let i = 1; i <= 9 - firstNum; i++) {
      if (singelOnesProbabilityPyramid[firstNum].Easy.indexOf(i) == -1) {
        singelOnesProbabilityPyramid[firstNum].Easy.push(i);
        let firstNumber = +(firstNum + '1');
        copyofmonad.firstNumber = firstNumber;
        secondNum = +(i + '1');
        copyofmonad.secondNumber = secondNum;
        copyofmonad.answers = ansArray(firstNumber, secondNum);
        return copyofmonad;
      }
    }
  }
}
/*in this function we generat singel guestion for Difficult singel ones*/

function hardGenerationMonad(
  singelOnesProbabilityPyramid: Probability,
  firstNum: number
) {
  let copyofmonad = {
    answers: [5, 5, 5, 5],
    firstNumber: 5,
    secondNumber: 5
  };

  let secondNum = between(10 - firstNum, 9);
  if (
    singelOnesProbabilityPyramid[firstNum].Difficult.length == 0 ||
    singelOnesProbabilityPyramid[firstNum].Difficult.indexOf(secondNum) == -1
  ) {
    /* generat first second number */
    singelOnesProbabilityPyramid[firstNum].Difficult.push(secondNum);
    let firstNumber = +(firstNum + '1');
    copyofmonad.firstNumber = firstNumber;
    secondNum = +(secondNum + '1');
    copyofmonad.secondNumber = secondNum;
    copyofmonad.answers = ansArray(firstNumber, secondNum);
    console.log('first ' + firstNumber + ' **  ' + secondNum);
    return copyofmonad;
  } else {
    console.log('hero');
    /* to compleat all probability space after the first random generation  */

    let i = 9;
    for (let k = 1; k < firstNum; k++) {
      if (singelOnesProbabilityPyramid[firstNum].Difficult.indexOf(i) == -1) {
        singelOnesProbabilityPyramid[firstNum].Difficult.push(i);
        let firstNumber = +(firstNum + '1');
        copyofmonad.firstNumber = firstNumber;
        secondNum = +(i + '1');
        copyofmonad.secondNumber = secondNum;
        copyofmonad.answers = ansArray(firstNumber, secondNum);
        console.log(firstNumber + ' **  ' + secondNum);
        return copyofmonad;
      }
      i--;
    }
  }
}
