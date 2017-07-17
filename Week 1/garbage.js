function Poke(name,type,hp,def,atk,legendary)
{
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.def = def;
    this.atk= atk;
    this.legendary = legendary;

}
// creating the poke
 var a  = new Poke("charizard","fire",78 ,78 , 84, false);
var b  = new Poke("blastoise","water",79 ,100 , 83, false);
var c  = new Poke("jynx","ice",65 ,35 , 50, false);
var d  = new Poke("paras","bug",35 ,55 , 70, false);
var e  = new Poke("machoke","fighting",80 ,70 , 100, false);
var f  = new Poke("entei","fire",115 ,85 , 115, true);
var prompt = require('prompt-sync')();
// creating the array of poke
var roster = [a,b,c,d,e,f]
function printroster(roster)
{ 
for( var i=0; i<6;i++)
{
console.log(roster[i])
}
}
printroster(roster)
// subtracts each pokemons hp by 10
function pokemonAttacked()
{
for (i=0; i<6; i++)
{
    roster[i].hp -= 10
}
return roster

}

console.log(pokemonAttacked(roster))




function slashhealth()
{
var x = prompt("which pokemon do you want to hurt? 0 = charizard, 1=blastoise, 2 = jynx, 3= paras, 4= machamp, 5= entei.")
console.log(x)
console.log("You chose to hurt " + roster[x].name)

var y= prompt("how much hp do you want to inflict?")
console.log("you will now be dishing out " + y +" damage!")

roster[x].hp= roster[x].hp -= y
console.log(roster[x].name+" now has "+roster[x].hp+ " hp")

if(roster[x].hp <= 0)
{console.log("Oh no!, you killed him")} 



}

slashhealth()

function addnew()
{
var egg= prompt("choose a new pokemon to add in?")
wtype=prompt("whats this pokemon's type?")
whp= prompt("whats this pokemon's hp?")
wdef=prompt("whats this pokemon's defense stat?")
watk=prompt("whats this pokemon's attack stat?")
islegend=prompt("is this pokemon a legendary?")
g= new Poke(egg,wtype,whp,wdef,watk,islegend)

roster.push(g)
console.log(roster)
}
addnew()
