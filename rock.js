

let score = JSON.parse(localStorage.getItem('score'))|| { 

  wins:  0,
 losses: 0,
 ties: 0

}




updateScoreHtml();
displayResult();


/*
  if (!score) {

score =  {

  wins:  0,
 losses: 0,
 ties: 0

}

  }
  */



function resetScore(){

score.wins =  0;
score.losses = 0;
score.ties = 0;
localStorage.removeItem('score')
updateScoreHtml();

}

function playDaTing (playerMove){

  const compMove = compPickMove();

  let result = '';

  if (playerMove === 'siccors'){   if (compMove === 'rock') {
  
     result = 'L';
  } else if  (compMove === 'paper') {
      result = 'W'; 
  } else if ( compMove === 'siccors') {  
   result = 'TIE'}
  
   } else if (playerMove === 'paper') {
    

    if (compMove === 'rock') {
    
       result = 'W';
    } else if  (compMove === 'paper') {
        result = 'TIE'; 
    } else if ( compMove === 'siccors') {  
     result = 'L'}
    
    } else if (playerMove === 'rock') {
      if (compMove === 'rock') {

        result = 'TIE';
     } else if  (compMove === 'paper') {
         result = 'L'; 
     } else if ( compMove === 'siccors') {  
      result = 'W'}

    }

if (result === 'W'){ score.wins += 1 
} else if ( result === 'L' ) { score.losses += 1
} else if ( result ==='TIE') { score.ties += 1} 

  
localStorage.setItem('score', JSON.stringify(score));

updateScoreHtml();

document.querySelector('.result').innerHTML = result;

document.querySelector('.move').innerHTML = `you picked ${playerMove}. Computer picked,  ${compMove}`;

 
}

function updateScoreHtml(){

  document.querySelector('.scoreinnit').innerHTML = `your wins is ${score.wins}, your losses ${score.losses}, your ties ${score.ties}`;
}









function compPickMove(){

    const randomNumber = Math.random();


    let compMove = '';
   
       if (randomNumber >= 0 && randomNumber < 1/3 ) {
         compMove = 'rock';
       } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
         compMove ='paper'; 
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
    
         compMove ='siccors';
    } 

  return compMove;
}


