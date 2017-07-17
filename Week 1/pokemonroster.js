var pokemonArray= [
     ["Name: Charizard "], 
     ["Type: Fire "], 
     ["HP: 200 "], 
     ["ATK: 120 "], 
     ["DEF: 150 "], 
     ["Legend: False "]
     ]; 

var pokemonArray1= [
    ["Name: Golbat "],
    ["Type: Poision/Flying "],
    ["HP: 75 "],
    ["ATK: 80 "],
    ["DEF: 70 "],
    ["Legend: False "]
];

var pokemonArray2= [
    ["Name: Mewtwo "],
    ["Type: Psychic "]
    ["HP: 106 "],
    ["ATK: 110 "],
    ["DEF: 90 "],
    ["Legend: True "]
];


var prompt= require("prompt-sync")();
function userInput(){
    var pokemonpresent= prompt ("What pokemon would you like to see?");
    if(pokemonpresent== "Charizard"){
        console.log("")
    }
}