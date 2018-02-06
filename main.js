
// Setting global variables
// Fisrt two variables gonna be reassigned by two functions
let computer = '';
let user = '';

let humanPoints = 0;
let computerPoints = 0;

//  Information for the player
alert('To start this game, pls Enter game() command into your browser\'s console after clearing this alert!');
console.info('To start, type game() command into console');

// Computer randomly takes 1, 2 or 3 and returns toUpperCased() string value

function computerSelection() {
  let x = Math.floor(Math.random() * 3) + 1;
   if(x === 1) {
     computer = 'SCISSORS';
   } else if(x === 2) {
     computer = 'ROCK';
   }  else {
     computer = 'PAPER';
   }
   return computer;
};

// User enter his choice. If user wrtires something else insted of rock, paper and scissors run exit()

function userSelection() {
  var userInput = prompt('Pls, enter Rock, Paper or Scissors');
  user = userInput.toUpperCase();
  if((user === 'ROCK') || (user === 'PAPER') || (user === 'SCISSORS')){
    return user;
  } else {
    alert('You did a mistake!');
    console.clear();
  }
}

// Let's compare computer and user inputs

function playRound(computer, user){

  if(user === 'ROCK'){
    if(computer === 'PAPER'){
      console.log('Computer Wins!');
      computerPoints += 1;}
    if(computer === 'SCISSORS'){
      console.log('You did it!');
      humanPoints += 1;
    }else{
      console.log('No one wins! It is a tie!');}
  }    
  else if(user === 'PAPER'){
    if(computer === 'ROCK'){
      console.log('You did it!');
      humanPoints += 1;}
    if(computer === 'SCISSORS'){
      console.log('Computer Wins!');
      computerPoints += 1;
    }else{
        console.log('No one wins! It is a tie!');}
  } 
  else if(user === 'SCISSORS'){
    if(computer === 'PAPER'){
      console.log('You did it!');
      humanPoints += 1;}
    if(computer === 'ROCK'){
      console.log('Computer wins!');
      computerPoints += 1;
    }else{
      console.log('No one wins! It is a tie!');}
  }
}

// I have all information so far: computer input, user input and the decission that is depending on these inputs
// It's time to play the GAME!!!

function game(){
  let round = 1;
  while(round <= 3) {
    userSelection();
    computerSelection();
    console.log(`Computer has choosen: ${computer} and User has choosen: ${user}`);
    playRound(computer, user);
    console.log(`Your points: ${humanPoints}. Computer points: ${computerPoints}`);
    round += 1;

    if(round === 4){
      let end = ((humanPoints > computerPoints) ? 'You win the game!' : (humanPoints < computerPoints) ? 'You loose the game!' : 'Nobody wins!');
      console.log(end);
    }
  }
}