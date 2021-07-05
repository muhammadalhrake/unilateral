// Import stylesheets
import './style.css';
import random from 'random'

//helper function 

function between(min: number, max: number) {
  return random.int(min, max);
}
interface A {
  [key:string]:{
    Easy?:number[],
    Difficult:number[]
  }
}
let ezProbabilityPyramid:A = {
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
let ez=new Array<number>();
let hard= new Array<number>();
function generateQuestion(count: number,ruls:string[], state: string[]) {
  for(let i =0;i<count;i++){
    for(let j=0;j<ruls.length;j++){
      for(let k=0;k<state.length;k++){
        let rule =ruls[j];
        let stat=state[k];
        if(rule=="monad"){

        }
      }
    }
  }
}
function generateMonad(ez:[],hard:[] ,stat:string){
  
}
function ezgeneratemonad(ezProbabilityPyramid:A,ez:number[]){
  
  let firstNum=between(1,8);
  if(ez.length==0){
    ez.push(firstNum)
  }else if(ez.indexOf(firstNum)==-1){

  }
}
//console.log(ezProbabilityPyramid);
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
