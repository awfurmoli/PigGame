/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//Pig Game 

var scores , roundScore , activePlayer ,gamePlaying=true, prevDice , winningScore ;
 
init();

document.querySelector('.btn-roll').addEventListener('click' , function(){
    if(gamePlaying){
       //1 Random Number
    var dice= Math.floor((Math.random()*6)+1) ;
    var dice1= Math.floor((Math.random()*6)+1) ;
    console.log(dice+' '+dice1) ;
    
    
    //Display the Result
    var diceDom =  document.querySelector('.dice');
    var diceDom1= document.querySelector('.dice-1');
    diceDom.style.display='block';
    diceDom1.style.display='block';
    diceDom.src = 'dice-'+dice + '.png';
    diceDom1.src= 'dice-'+dice1+ '.png';
    //update the reound score if not 1
    if(prevDice===6 && dice===6){
        
        scores[activePlayer]=0 ;
        document.getElementById ('score-'+activePlayer).textContent='0';
        prevDice=0 ;
        nextPlayer();
    }else if(dice!==1 && dice1!==1){
        //add score
     roundScore+=dice ;
     document.querySelector('#current-'+activePlayer).textContent=roundScore;
    }else{
        
        //next player
        nextPlayer();
      
    } 
    prevDice= dice ;
} } );


document.querySelector('.btn-hold').addEventListener('click' , function(){
    
   if(gamePlaying){
     // add current score to player global score
     scores[activePlayer]=scores[activePlayer]+roundScore ;
    
    // update user Interface
    document.getElementById('score-'+activePlayer).textContent=scores[activePlayer]; ;
    
    
    // Check if player won the game
    
    if(scores[activePlayer]>= winningScore){
       document.querySelector('#name-'+activePlayer).textContent='winner!';
        document.querySelector('.dice').style.display='none' ; 
        document.querySelector('.player-'+activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer + '-panel').classList.remove('active');
        gamePlaying=false ; 
    }else{
        //NExt Player
        nextPlayer();
    }  
   }
    
    
    
    
    
});

function nextPlayer(){
     activePlayer===0 ? activePlayer=1 : activePlayer = 0 ; 
        roundScore=0 ;
        prevDice=0 ;
        
        
        document.getElementById('current-0').textContent= '0' ;
        document.getElementById('current-1').textContent= '0' ;

        
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    document.querySelector('.dice').style.display='none';
    document.querySelector('.dice-1').style.display='none';
    
}



document.querySelector('.btn-new').addEventListener('click' , init) ; 


function init(){
    
    scores= [0,0] ;
    activePlayer=0 ;
    roundScore=0 ;
    prevDice=0 ;
    document.querySelector('.dice').style.display = 'none' ;
    document.querySelector('.dice-1').style.display= 'none';
    gamePlaying=true;
   winningScore=prompt('what number do you want to be the winning score?');

    document.getElementById ('score-0').textContent= '0' ;
    document.getElementById('score-1').textContent= '0' ;
    document.getElementById('current-0').textContent= '0' ;
    document.getElementById('current-1').textContent= '0' ;
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}




































