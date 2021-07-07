export interface monad {
  answers: number[];
  firstNumber: number;
  secondNumber: number;
}
export interface Probability {
  [key: string]: {
    Easy?: number[];
    Difficult: number[];
  };
}
export interface stateOfSingelTens{
  EZ:string[];
  Hard:string[];
}