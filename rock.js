
function playDaTing (playerMove){

  const compMove = compPickMove();

  let result = '';

  if (playerMove === 'siccors'){   if (compMove === 'rock') {
  
     result = 'L';
  } else if  (compMove === 'paper') {
      result = 'W'; 
  } else if ( compMove === 'siccors') {  
   result = 'tie'}
  
   } else if (playerMove === 'paper') {
    

    if (compMove === 'rock') {
    
       result = 'W';
    } else if  (compMove === 'paper') {
        result = 'you TIE'; 
    } else if ( compMove === 'siccors') {  
     result = ' L'}
    
    } else if (playerMove === 'rock') {
      if (compMove === 'rock') {

        result = 'tie';
     } else if  (compMove === 'paper') {
         result = 'you loseeeee'; 
     } else if ( compMove === 'siccors') {  
      result = 'you win'}

    }
  
  alert(`you picked ${playerMove}. Computer picked,  ${compMove} ${result}`); 
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


