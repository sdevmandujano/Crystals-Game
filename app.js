//Pseudo Coding

// (DONE) A game with 4 crystals an Random Result 
// (DONE) Every crystal need to have a random number between 1 - 12
// (DONE)When clicking any Crystal, it should be adding with the previous result 
//(DONE) Until it equals the random result
// (DONE) if it is greater than the Random Result, we decrement a lost counter
// (DONE) if it is equal, then we increment a win counter 
//(DONE) A new random  number should be generate every single time we win or lost

//Add music, the final fantasy music compilation

//Display the currently results

//1.-Declare Global Variables
var random_target;  //This is the random number that the user is aiming for
var losses = 0; // The Number of Losses
var wins = 0; // The Number of Wins
var user_input; // Numbers that user will sum according to the Crystals they choose
var sum = 0; // Will sum the values of the crystals
var crystal1 = Math.floor(Math.random() * 12) + 1; // Creates the random number for each crystal
var crystal2 = Math.floor(Math.random() * 12) + 1;
var crystal3 = Math.floor(Math.random() * 12) + 1;
var crystal4 = Math.floor(Math.random() * 12) + 1;

$(document).ready(function(){
//2.-Will create the Random Number 
random_target = Math.floor(Math.random() * 120 ) + 19;

//Displays the Random Target Number in html
$("#00").html("This Number is your Target:  " + random_target);
    

//Assign the random number to each crystal(div) and sum the previous, and shows it

$("#div1").click(function() {
  sum +=  crystal1;
  check_status();
  $("#user").text("Your score:  " + sum);
});
$("#div2").click(function() {
  sum +=  crystal2;
  check_status();
  $("#user").text("Your score:  " + sum);
});

$("#div3").click(function() {
  sum +=  crystal3;
  check_status();
  $("#user").text("Your score:  " + sum);
});

$("#div4").click(function() {
  sum +=  crystal4;
  check_status();
  $("#user").text("Your score:  " + sum);
});



//Conditional to test if the User won or lost
function check_status (){
    if(sum > random_target) {
      ++losses;
       alert("You lost!!");
       reset();
    }
    else if(sum === random_target) {
      ++wins;
      alert("You won!!");
      reset();
    }  
 $( "#01" ).html("Wins: " + wins);
 $( "#02" ).html("Losses: " + losses);
      }

//Resets the Game to start again 

function reset () {
  crystal1 = Math.floor(Math.random() * 12) + 1;
  crystal2 = Math.floor(Math.random() * 12) + 1;
  crystal3 = Math.floor(Math.random() * 12) + 1;
  crystal4 = Math.floor(Math.random() * 12) + 1;
  sum = 0;
  random_target = Math.floor(Math.random() * 120 ) + 19;
  $("#00").html("Target:  " + random_target);
}



 

});



