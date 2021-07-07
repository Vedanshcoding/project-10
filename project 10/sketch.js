var seaIMG, shipIMGs, sea, ship
function preload(){
 seaIMG = loadAnimation("sea.png")
 shipIMGs = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup(){
  createCanvas(400,400);
  background("blue");
  sea = createSprite(400,200)
  sea.addImage(seaIMG)
}

function draw() {
  
 drawSprites()
}