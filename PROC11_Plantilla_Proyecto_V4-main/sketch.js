var sea_img , sea
var barco , barco_running

function preload(){
barco_running = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
sea_img = loadImage ("sea.png")


}


function setup(){
  createCanvas(400,400);
  
 sea = createSprite (200,160,20,50)
 sea.addAnimation ( "img",sea_img)
 sea.scale=0.3

if (sea.x < 0){
  sea.x=sea.width/2;
  
}

 barco = createSprite(200,160,20,50)
 barco.addAnimation ("running ", barco_running)

 barco.scale = 0.4
 barco.y=200
}

function draw() {
  background("white");
 

  drawSprites();
} 