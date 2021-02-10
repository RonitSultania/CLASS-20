var r, m;
function setup() {
  createCanvas(800,400);
 r =  createSprite(400, 200, 50, 50);
 m = createSprite(300, 150, 50, 80);
 r.shapeColor="red";
 m.shapeColor="red";
}

function draw() {
  background("black");  
  r.x = mouseX;
  r.y = mouseY;
  if(r.x-m.x<r.width/2+m.width/2 && m.x-r.x<r.width/2+m.width/2 && 
    r.y-m.y<r.height/2+m.height/2 && m.y-r.y<r.height/2+m.height/2){
    r.shapeColor = "green";
    m.shapeColor = "green";
  }
  else{
    r.shapeColor="red";
 m.shapeColor="red";
  }
  drawSprites();
}