var mashArray= ["Final Destination", "Congo Jungle", "The Great Maze", "Dream Land"];
var firstQuestion= [1,2];
var secondQuestion= ["Mario", "Sonic"];
var prompt= require("prompt-sync")();

function userInput(){
    var strike= prompt("How many times will you strike?");
    var person= prompt("Who do you want to fight?");
    firstQuestion.push(strike);
    secondQuestion.push(person);
    mashArray1= Math.round(Math.random()*mashArray.length);
    console.log(firstQuestion); 
    console.log(secondQuestion);
    console.log("You will strike " + person + " in the " + mashArray[mashArray1] + " and hit them " + strike + " times. ");
}
userInput();
console.log("Too bad. Mewtwo wins!");

var restart= prompt("Would you like to restart the game?");

if (restart == "y"){
    userInput();
    console.log("Too bad. Mewtwo wins!");
}