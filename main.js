//include("p5.js");
var s;
var scl = 10;
var food;

function setup(){

    createCanvas(600,300);
    s = new Snake();
    frameRate(10);
    pickLocation();
}


function pickLocation() {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);       // to fill all scl with food
}

/// cheating lol
function mousePressed() {
    s.total++;
}


function draw() {

    background(51);
    
    if (s.eat(food)) {
        pickLocation();
    }
    
    s.death();
    s.update();
    s.show();
    

    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);

}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.dir(0,-1);
    } else if (keyCode === DOWN_ARROW) {
        s.dir(0,1);
    } else if (keyCode === RIGHT_ARROW) {
        s.dir(1,0);
    } else if (keyCode === LEFT_ARROW) {
        s.dir(-1,0);
    }
}



