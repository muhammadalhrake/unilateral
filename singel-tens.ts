import random from 'random';
import { ansArray } from './answers';
import { stateOfSingelTens } from './model';
//helper function
function between(min: number, max: number) {
  return random.int(min, max);
}
function filterA(arr: string[], mumber: string) {
  return arr.filter(index => {
    index != mumber;
  });
}
export function generateSingelTens(
  singelTensProbabilityPyramid: stateOfSingelTens,
  stat: string
) {
  let copyOfMonad = {
    answers: [5, 5, 5, 5],
    firstNumber: 5,
    secondNumber: 5
  };
  if (
    singelTensProbabilityPyramid.EZ.length == 0 ||
    singelTensProbabilityPyramid.Hard.length == 0
  ) {
    generateProbabilitySpace(singelTensProbabilityPyramid, stat);
  }
  if (stat == 'Easy') {
    let random = between(0, singelTensProbabilityPyramid.EZ.length - 1);
    let mumber = singelTensProbabilityPyramid.EZ[random];
    console.log(mumber);
    let question = mumber.split('*');
    copyOfMonad.firstNumber = +question[0];
    copyOfMonad.secondNumber = +question[1];
    copyOfMonad.answers = ansArray(+question[0], +question[1]);

    singelTensProbabilityPyramid.EZ = filterA(
      singelTensProbabilityPyramid.EZ,
      mumber
    );

    return copyOfMonad;
  } else if (stat == 'Difficult') {
    //console.log(hard)
    //console.log(ez)
    let random = between(0, singelTensProbabilityPyramid.Hard.length - 1);
    let mumber = singelTensProbabilityPyramid.Hard[random];
    //console.log(mumber)
    let question = mumber.split('*');
    copyOfMonad.firstNumber = +question[0];
    copyOfMonad.secondNumber = +question[1];
    copyOfMonad.answers = ansArray(+question[0], +question[1]);
    singelTensProbabilityPyramid.Hard = filterA(
      singelTensProbabilityPyramid.Hard,
      mumber
    );
    return copyOfMonad;
  }
}

function generateProbabilitySpace(
  singelTensProbabilityPyramid: stateOfSingelTens,
  stat: string
) {
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      if ((i + j).toString().length > 1 || (i * j).toString().length > 1) {
        let first = '1' + i;
        let second = '1' + j;
        let question = first + '*' + second;
        singelTensProbabilityPyramid.Hard.push(question);
      } else {
        //ez way
        let first = '1' + i;
        let second = '1' + j;
        let question = first + '*' + second;
        singelTensProbabilityPyramid.EZ.push(question);
      }
    }
  }
  if (stat == 'Easy') {
    return singelTensProbabilityPyramid.EZ;
  } else {
    return singelTensProbabilityPyramid.Hard;
  }
}
