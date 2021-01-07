var fixrect,movingrect;
var rect1,rect2,rect3,rect4

function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400, 200, 50, 50);
  movingrect.shapeColor="red";
  fixrect=createSprite(200,200,50,50);
  fixrect.shapeColor="red";
  rect1=createSprite(200, 100, 50, 50);
  rect1.shapeColor="red";
  rect2=createSprite(400,100,50,50);
  rect2.shapeColor="red";
  rect2.velocityX=3;
  
  rect3=createSprite(600, 100, 50, 50);
  rect3.shapeColor="red";
  rect3.velocityX=-3;
  rect4=createSprite(600,200,50,50);
  rect4.shapeColor="red";
}

function draw() {
  background(255,255,255);
  rect1.x=World.mouseX;
  rect1.y=World.mouseY;
if( isTouching(rect1,rect4)){
  rect1.shapeColor="green";
  rect4.shapeColor="green";
}
else{
  rect1.shapeColor="red";
  rect4.shapeColor="red";
}
bounceOff(rect2,rect3)
    drawSprites();
}
