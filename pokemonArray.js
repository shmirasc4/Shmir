var myPokemonRoster= ["pikachu", "munchlax", "kyogre", "squirtle", "mankey"];
var firstToFight= myPokemonRoster[2];
var secondToFight= myPokemonRoster[0];

console.log(firstToFight);
console.log(secondToFight);
console.log(myPokemonRoster);

myPokemonRoster.pop("mankey");
console.log(myPokemonRoster);


myPokemonRoster.push("hitmonchan","pidgeot");
console.log(myPokemonRoster);

for (var i=0; i<myPokemonRoster.length; i++)
{
    console.log(myPokemonRoster[i]);
}

//Bonus (Reversing the order of the roster)
console.log(myPokemonRoster);
for (var i=6; i>=0; i--){
     console.log(myPokemonRoster[i]);
}

//Bonus 2 (Wrap your loop in a conditional that only runs if there are at least 5 Pokemon in the roster. If there are not 5 Pokemon it should log, “You Can’t Play! Not Enough Pokemon” to the console.)
 
 if ( myPokemonRoster.length>= 5){
     for (var i=0; i<5; i++){
         console.log(myPokemonRoster[i]);
     }
 }
    else{
        console.log( “You Can’t Play! Not Enough Pokemon”);
    }