var movingRect, fixedRect
function setup() {
  createCanvas(800,400);
 movingRect= createSprite(200, 300, 50, 50);
 fixedRect = createSprite(200, 150, 80, 100);
 movingRect.velocityY=-1;


}

function draw() {
  background(255,255,255);
  
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
     && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
      movingRect.velocityY=1;
    }






  drawSprites();
}