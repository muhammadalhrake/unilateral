function generateSingelTens(ez: number[], hard: number[], stat: string) {
  generateProbabilitySpace(ez, hard, stat);
  if(stat=='Easy'){

  }else if(stat=='Difficult'){
    
  }
}

function generateProbabilitySpace(ez: string[], hard: string[], stat: string) {
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j < 9; j++) {
      if(((i+j).toString().length>1)||((i*j).toString().length>1)){
        //hard way 
      }else{
        //ez way 
      }
    }
  }
}
