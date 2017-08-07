function rps(x){
    var playChoice = x;
    console.log(playChoice);
    var comp = ['r', 's', 'p']
    var compChoice = comp[Math.round(Math.random()*2)] ;
    if (playChoice == "r" && compChoice == "s"){
        console.log("you won rock beats scissors");
        $(".game").append("<p>"+ "you won rock beats scissors" + "</p>")
    }

   if (playChoice == "r" && compChoice == "p"){
        console.log("you lost paper smacks rock");
        
   }

   if (playChoice == compChoice){
        console.log("tie");
    }

   if (playChoice == "s" && compChoice == "p"){
        console.log("you lost scissors chops paper");
    }

   if (playChoice == "s" && compChoice == "r"){
        console.log("you lost rock cracks scissors");
    }

   if (playChoice == "p" && compChoice == "s"){
        console.log("you lost scissors shredes paper");
    }

   if (playChoice == "p" && compChoice == "r"){
        console.log("you win paper somehow beats rock");
    }
}