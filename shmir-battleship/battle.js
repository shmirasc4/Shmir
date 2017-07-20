function setup(){
    createCanvas(800,800);
}

function draw(){
    background("grey");
    text("Battleship", 300, 50);
    textSize(40);
      //Vertical Grid Lines:
    line(100,100,100,800);
    line(200,100,200,800);
    line(300,100,300,800);
    line(400,100,400,800);
    line(500,100,500,800);
    line(600,100,600,800);
    line(700,100,700,800);
    line(800,100,800,800);
    
    //Horizontal Grid Lines:
    line(0,100,800,100);
    line(0,200,800,200);
    line(0,300,800,300);
    line(0,400,800,400);
    line(0,500,800,500);
    line(0,600,800,600);
    line(0,700,800,700);
    line(0,800,800,800);

    fill("black");
    ellipse(50,150,50,50);
    ellipse(250,350,50,50);

}