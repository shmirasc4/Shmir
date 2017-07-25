function setup(){
    createCanvas (800,800);
    background(225);
}

function Shoot(xOne, yOne, width, height, boolean){
    this.xOne= xOne;
    this.yOne= yOne; 
    this.width= width;
    this.height= height;
    this.boolean= boolean;
   
}

var bullet= new Shoot(56, 560, 6, 6, true);
var bulletup = 1;
function draw(){
    createCanvas (800,800);
    background(225);
    fill("black");
    ellipse(bullet.xOne, bullet.yOne, bullet.width, bullet.height);

        bullet.yOne -= bulletup;

}