function Superhero(realName, ability, gender, archEnemy, age, weakness){
    this.realName= realName;
    this.ability= ability;
    this.gender= gender;
    this. archEnemy= archEnemy;
    this.age= age;
    this.weakness= weakness;

this.talk = function(){
    console.log("Yo! My name is " + realName);
}

this.callForHelp= function(call){
    console.log(call);
    }
}

var superMan= new Superhero("Clark Kent", "Dat Money", "Male", "Joker", 30, "Cryptonite");
var wonderWoman= new Superhero ("Diana Prince", "Super Strength", "Female", "Donald Trump", 20, "Guns");
superMan.ability= "lazer vision";
console.log(superMan.ability);
wonderWoman.archEnemy= superMan;
console.log(wonderWoman);
wonderWoman.callForHelp("Im booling out");
superMan.callForHelp("It's not looking good right now!");

