
var a;
var b;

function setup() {
  createCanvas(800,400);
  
  a=createSprite(400, 200, 50, 50);
  b=createSprite(200, 200, 40, 40);
  a.shapeColour="red";
  b.shapeColour="red";
}

function draw() {
  background(255,255,255); 
  a.x=World.mouseX;
  a.y=World.mouseY;
  console.log(a.x-b.x);
  if(a.x-b.x<45 && b.x-a.x<45) {
a.shapeColour="green";
b.shapeColour="green";
  } 
  else{
    a.shapeColour="red";
    b.shapeColour="red";
  }
  drawSprites();
}