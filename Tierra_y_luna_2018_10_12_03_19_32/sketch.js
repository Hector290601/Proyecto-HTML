var angulo = 0
var TX=0
var TY=0
var m=.155
function setup() {
  createCanvas(displayWidth, displayHeight, WEBGL);
  
}

function draw(){
 tierra(); 
}

function tierra() {
  background(0);
  translate(TX,TY);
  rotateX(radians(90));
  push();
  fill(0,255,0);
  rotateX(radians(angulo));
  sphere(displayHeight*.20,20,20);
  pop();
  push();
  fill(255);
  rotateY(radians(angulo));
  translate(displayWidth*m,displayHeight*m);
  sphere(displayHeight*.02,5,3);
  pop();
  angulo = angulo+1
}