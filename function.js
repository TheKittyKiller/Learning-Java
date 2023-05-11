


function subInnit(){


const buttonElm = document.querySelector('.yt'); 
if( buttonElm.innerText === 'subscribe') { buttonElm.innerHTML = 'subbed' 
} else  { buttonElm.innerHTML = 'subscribe'} 




}


function calcOrder(){


const inputElm = document.querySelector('.ting') ;

let cost = Number(inputElm.value);


if (cost < 40) { 

cost = cost + 10;

   } document.querySelector('.total').innerHTML = `$${cost}`
  
  

}

function checkEnter(event){

if(event.key === 'Enter' ){

calcOrder();

}


}