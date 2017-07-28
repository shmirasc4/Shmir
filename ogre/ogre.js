var HP= 100;
var gold= 0;
var numberDefeated = 0;

function updateStatus(){
    $("#stats").text("HP: " + HP +  " Gold: " + gold + " Ogres Slain: " + numberDefeated);
}

function spawnOgre(){
    $("#ogres").prepend(
        "<img src='https://raw.githubusercontent.com/mahdiASC/allProjects/master/assets/ogre3.png'></img>"
    );
}

function attack(){
    if (HP > 0){
        if (Math.random()*100 > gold){
            gold = gold + 10;
            numberDefeated++;

            $("#ogres").prepend(
                "<p style = 'color:blue'> You won! + 10 gold. </p>"
            );
        }

        else{
            gold--;
            HP--;
            $("#ogres").prepend(
                "<p style= 'color: red'> You lost! - 1 gold </p>");
        }
        updateStatus();
        spawnOgre();
    }
    
    else{
        //game over
        $("#ogres").prepend(
            "<h1> GAME OVER </h1>"
        );
    }
}


function setup(){
    $("body").append(
    "<h1> Welcome to Ogre Fighter v.1.0 </h1>"
    );

    $("body").append(
        "<div> <h3> STATS </h3> <p id='stats'> </p> </div>"
    );

    $("body").append(
        "<div id= 'ogres'></div>"
    );

    $("body").append(
        "<button onclick= 'attack()'> Attack the Ogre! </button>"
    )

    updateStatus();
}


//Setup HTML Element

//Add Title to HTML- CHECK

//Show user stats (HP, gold, numberDefeated)- requires setup
//Add a random ogre image to start of body tag, requires setup
//When player clicks an "attack" button requires setup

//If player has HP
    //If player defeats ogre
        //add paragraph saying "you win"
        //+ gold to player
        //numb of ogres defeated
    //else
        //add paragraph saying "you lost"
        //- gold
        //- HP
        //updateStats
        //Add random ogre image
    //else
        //add paragraph tag saying "Game Over"
$(document).ready(setup);