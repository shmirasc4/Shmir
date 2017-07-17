function BasketballPlayer( name, team, height, position, number, netWorth, isGood, pastTeams){
    this.name= name;
    this.team= team;
    this.height= height;
    this.position= position;
    this.number= number;
    this.netWorth= netWorth;
    this.isGood= isGood;
    this.pastTeams= pastTeams;
}

var shaq =  new BasketballPlayer("Shaquille O' Neal", "Celtics", "7 feet 1", "Center", 36, 100000000, false, ["Magic", "Lakers", "Heat", "Suns", "Cavs"]);
console.log(shaq);
console.log(shaq.pastTeams.toString());