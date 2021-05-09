var car1,car2,car3,carGroup
var mask,sanitizer,safetyKitGroup


function preload(){
groundImg=loadImage("track.png")
manImg=loadImage("Man.png")
car1=loadImage("car1.png")
car2=loadImage("car2.png")
car3=loadImage("car3.png")
mask=loadImage("mask.png")
sanitizer=loadImage("sanitizer.png")
}



function setup() {
  createCanvas(400,600);
  ground=createSprite(200,200);
  ground.addImage(groundImg)
  ground.velocityY=4
  ground.scale=1.2
 
  
  man = createSprite(100,500,20,20)
  man.addImage(manImg)
  man.scale=0.4

  carGroup=createGroup()
  safetyKitGroup=createGroup()
  }

function draw() {
  background(255,255,255);

  if(ground.y>400){

  ground.y=ground.height/2
  }

  if(keyDown(LEFT_ARROW)){
  man.x=man.x-2
  }

  if(keyDown(RIGHT_ARROW)){
  man.x=man.x+2
  }
    
  spawnCars()
  spawnSafetyKits()
  drawSprites();
}

function spawnCars(){
if(frameCount%180===0){
car=createSprite(200,-50,25,25)
var rand=Math.round(random(1,3))

switch(rand){
case 1: car.addImage(car1)
break;
case 2:car.addImage(car2)
break;
case 3:car.addImage(car3)
break;
default:break;


}
car.velocityY=3
car.scale=0.3
car.x=Math.round(random(100,300))
}



}

function spawnSafetyKits(){
if(frameCount%240===0){
  safetyKit=createSprite(200,-50,25,25)
  var rand=Math.round(random(1,2))
  
  switch(rand){
  case 1: safetyKit.addImage(mask)
  break;
  case 2:safetyKit.addImage(sanitizer)
  break;
  default:break;
  
  
  }
  safetyKit.velocityY=3
  safetyKit.scale=0.1
  safetyKit.x=Math.round(random(100,300))
  }


}





