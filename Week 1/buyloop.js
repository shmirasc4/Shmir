var prompt = require ("prompt-sync") ();
//
//get input from the user
//
var money= 1000;

var louisVuittonDuffleBag=[];

while (money>100 ){
    console.log("You have $" + money + "left");
    var answer= prompt("You can buy yeezy for 400, gucci flip flop for 200 or ray bans for a 100");

    if (answer.toLowerCase() == "yeezys" && money>= 500)
    {
        money-=400;
        louisVuittonDuffleBug.push("Yeezys");
        console.log("You have successfully bought these pairs of yeezys");
    }

    else if(answer.toLowerCase() == "gucci flip flops" && money>= 300)
    {
        money-=200;
       louisVuittonDuffleBug.push("Gucci FLip Flops"); 
       console.log ("You have successfully bought this pair of Gucci Flip");
    }

    else if(answer.toLowerCase() == "ray bans" && money>= 200)
    {
        money-=100;
       louisVuittonDuffleBug.push("Ray Bans"); 
       console.log ("You have successfully bought this pair of Ray Bans");
    }

    else {
        console.log("We dont have the item in the stock");
    }
}

console.log("You broke b");
