var moving,steady;



function setup() {
  createCanvas(800,400);
  moving = createSprite(400, 200, 50, 80);
  moving.shapeColor="red";
  moving.debug=true;
  steady = createSprite(200, 200, 80, 50);
  steady.debug=true;
  steady.shapeColor="red";
}

function draw() {
  background(255,255,255);  
  moving.x = World.mouseX;
  moving.y = World.mouseY;

  if(moving.x-steady.x<moving.width/2+steady.width/2 && 
    steady.x-moving.x<moving.width/2+steady.width/2 && 
    moving.y-steady.y<moving.height/2+steady.height/2 && 
    steady.y-moving.y<moving.height/2+steady.height/2){
    moving.shapeColor="green";
    steady.shapeColor="green";
  }
  else {
    moving.shapeColor="red";
  steady.shapeColor="red";
}
  drawSprites();
}