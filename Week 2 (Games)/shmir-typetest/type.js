var point=0;
function setup(){
    createCanvas(1000, 500);
    textSize(30);
    noLoop();
}

var words= ["black ", "I am white ", "You look like a barnacle", "turn it up", "jokes on you"];

function draw(){
    background("blue");
    var rand= Math.round(Math.random()*4);
    fill("white");
    text(words[rand], 300, 250);
}

function mousePressed(){
    redraw();
}

function keyTyped(){

}
