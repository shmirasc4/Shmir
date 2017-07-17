function Printroster(name, type, HP, ATK, DEF, legend){
    this.name= name;
    this.type= type;
    this.HP= HP;
    this.ATK= ATK;
    this.DEF= DEF;
    this.legend= legend;
}

var blastoise= new Printroster("Blastoise", "Water", 79, 83, 100, false);
var pidgeot= new Printroster("Pidgeot", "Flying", 83, 80, 75, false);
var wobbuffet= new Printroster("Wobbuffet", "Psychic", 190, 33, 58, false);
var gible= new Printroster("Gible", "Ground", 58, 70, 45, false);
var sawk= new Printroster ("Sawk", "Fighting", 75, 125, 75, false);
var dialga= new Printroster("Dialga", "Dragon", 100, 120, 120, true);

var roster= [blastoise, pidgeot, wobbuffet, gible, sawk, dialga];

for (var i=0; i<roster.length; i++)
{
    console.log(roster[i]);
}

function PokemonAttacked(){
    for (var i=0; i<roster.length; i++){
        console.log(roster[i].HP-10);
    }
}

PokemonAttacked();