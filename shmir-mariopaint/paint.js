function setup(){
    createCanvas(1000, 1000);
    background(225);
}

function mouseDragged(){
    fill(random(255), random(255), random(255));
    ellipse(random(1000), random(1000), 50, 50);
    fill(random(255), random(255), random(255));
    //line(random(1000), random(1000), random(1000), random(1000));
    fill(random(255), random(255), random(255));
    rect(random(1000), random(1000), 50, 50);
    noStroke();

}