function rand(number){
    return Math.round(Math.random()*number);
    
}

console.log(rand(10)); //use console.log() to print out the number

var artists=["Quavo", "Travis Scott", "Drake", "Tupac", "Future", "Uzi Vert"];
function randArtist(){
    console.log(artists[Math.round(Math.random()*artists.length-1)]);
}

//Game Rules: The Last Artist is the artist we choose
// IF the first four results doesnt have any repeats 

for (var i=0; i<5; i++){
    randArtist();
}


function rand(number){
    var randomDecimalNumber= Math.random()*number;
    console.log(randomDecimalNumber);
    var wholeIntegerNumber= Math.round(randomDecimalNumber);

    
    return wholeIntegerNumber;

}

rand(6);
