var square
function setup() {
  createCanvas(400,400);
  square = createSprite(200,200,100,100);
  square.shapeColor = "white";
}

function draw() 
{
  background("black");
  if (keyDown("left")){
    square.x = square.x-3
    background ("yellow")
  }
  if (keyDown("right")){
    square.x = square.x+3
    background ("green")
  }
  if (keyDown("up")){
    square.y = square.y-3
    background ("blue")
  }
  if (keyDown("down")){
    square.y = square.y+3
    background ("red")
  }
  drawSprites()
}




