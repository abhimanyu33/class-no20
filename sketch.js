var movingrect,fixedrect;
function setup() {
  createCanvas(1000,800);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(200,200,100,100)
}

function draw() {
  background(0); 
  movingrect.x=World.mouseX 
  movingrect.y=World.mouseY
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 &&
    fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 &&
    movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2 &&
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2 )
    {
    movingrect.shapeColor="grey";
    fixedrect.shapeColor="grey";
  }
  else{
    movingrect.shapeColor="blue";
    fixedrect.shapeColor="blue";
  }
  drawSprites();
}