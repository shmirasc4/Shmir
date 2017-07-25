var x = 500;
var y = 200; 
var randNum1 = (Math.random() * 15);
var randNum2 = (Math.random() * 15);

function setup() {
    createCanvas(1000, 1000);
    noLoop();    
   frameRate(1000);
}

var colorList = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "pink", "brown", "white"];

function draw() {
    background("black");
    x+= randNum1;
    y+= randNum2;  

  // Right side
    if (x>= width - 25) {
        fill(colorList[Math.round(Math.random() * 10)]);
        // Bottom right corner
        if (y >= height - 25) {
            temp = randNum1;
            randNum1 = randNum2 * -1;
            randNum2 = temp * -1;
        }
        // Top right corner
        else if (y <= 25) {
            temp = randNum1;
            randNum1 = randNum2;
            randNum2 = temp;      
      }
        // Non-corners
        else {
            randNum1 = randNum1 * -1;
        }
    }
    // Left side
    else if (x <= 25) {
        fill(colorList[Math.round(Math.random() * 10)]);
        // Bottom left corner
        if (y >= height - 25) {
            temp = randNum1;
            randNum1 = randNum2 * -1;
            randNum2 = temp * -1;                  
      }
        // Top left corner
        else if (y <= 25) {
            temp = randNum1;
            randNum1 = randNum2 * -1;
            randNum2 = temp * -1;            
       }
        // Non-corners
        else {
            randNum1 = randNum1 * -1;
        }
    }
    // Bottom side
    else if (y >= height - 25) {
        fill(colorList[Math.round(Math.random() * 10)]);
        // Bottom right corner
        if (x >= width - 25) {
            temp = randNum1;
            randNum1 = randNum2 * -1;
            randNum2 = temp * -1;            
      }
        // Bottom left corner
        else if (x <= 25) {
            temp = randNum1;
            randNum1 = randNum2 * -1;
            randNum2 = temp * -1;          
      }
        // Non-corners
        else {
            randNum2 = randNum2 * -1;
        }
    }
    // Top side
    else if (y <= 25){
        fill(colorList[Math.round(Math.random() * 10)]);
        // Top right corner
        if (x >= width - 25) {
            temp = randNum1;
            randNum1 = randNum2;
            randNum2 = temp;  
      }
        // Top left corner
        else if (x <= 25) {
            temp = randNum1;
            randNum1 = randNum2 * -1;
            randNum2 = temp * -1;            
       }
        // Non-corners
        else {
            randNum2 = randNum2 * -1;
        }
    }
      
  ellipse(x, y, 50, 50);

}

function keyPressed() {
    loop();
}