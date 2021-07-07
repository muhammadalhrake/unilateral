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
    return ezgeneratemonad(singelOnesProbabilityPyramid, ez);
  } else {
    console.log('hello faild');
  }
}

/* in this function we generat singel guestion for eazy singel ones */
function ezgeneratemonad(
  singelOnesProbabilityPyramid: Probability,
  ez: number[]
) {
  let firstNum = between(1, 8);
  if (ez.length == 0) {
    ez.push(firstNum);
    console.log(firstNum);
    return ezCheckProbability(singelOnesProbabilityPyramid, firstNum, ez);
  } else if (ez.indexOf(firstNum) == -1) {
    ez.push(firstNum);
    return ezCheckProbability(singelOnesProbabilityPyramid, firstNum, ez);
  } else {
    if (ez.length < 8) {
      for (let i = 1; i < 9; i++) {
        if (ez.indexOf(i) == -1) {
          ez.push(i);
          return ezCheckProbability(singelOnesProbabilityPyramid, i, ez);
        }
      }
    } else {
      for (let i = 1; i < ez.length; i++) {
        if (singelOnesProbabilityPyramid[i].Easy.length != 9 - i) {
          return ezCheckProbability(singelOnesProbabilityPyramid, i, ez);
        }
      }
      ez.forEach(index => {
        singelOnesProbabilityPyramid[index].Easy = [];
      });
      return ezgeneratemonad(singelOnesProbabilityPyramid, ez);
    }
  }
}
/* in this function we generate the second number of guestion */
function ezCheckProbability(
  singelOnesProbabilityPyramid: Probability,
  firstNum: number,
  ez: number[]
) {
  let copyofmonad = {
    answers: [5, 5, 5, 5],
    firstNumber: 5,
    secondNumber: 5
  };

  let secondNum = between(1, 9 - firstNum);
  if (ez.indexOf(firstNum) == -1) {
    ez.push(firstNum);
  }
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
