var tower,towerImage
var ghost,ghostSimage
var climb,climbImage
var door,doorImage
var obbyG

function preload()
{
towerImage = loadImage("tower.png")
ghostSimage = loadImage("ghost-standing.png")  
climbImage = loadImage("climber.png")
doorImage = loadImage("door.png")
  
  
  
}
function setup(){
createCanvas(600,600)

tower = createSprite(300,300,600,600)
tower.addImage(towerImage)
tower.velocityY = 2

ghost = createSprite(330,350,50,50)
ghost.addImage(ghostSimage)
ghost.scale = 0.5
 
obbyG = new Group()
  
  
}
function draw(){

  
  
  
  
  
  if (tower.y>620){
    tower.y = 300
    
  }

if (keyDown("up_arrow")){
ghost.velocityY = -5
}
ghost.velocityY = ghost.velocityY+1
  
if (keyDown("right_arrow")){
ghost.x = ghost.x+4
}
  
if (keyDown("left_arrow")){
ghost.x = ghost.x-4
}
  Obby()
  
 if (ghost.isTouching(obbyG)){
  background("black")
  obbyG.destroyEach()
   
   
 } 
  
  
drawSprites() 
}

function Obby(){
  
 if (frameCount%200===0){
a = Math.round(random(100,500))
climb = createSprite(a,58,50,50)
climb.addImage(climbImage)
climb.velocityY = 2
door = createSprite(a,0,50,50)
door.addImage(doorImage)
door.velocityY = 2
door.scale = 0.8
obbyG.add(climb)
obbyG.add(door)
}
  
}
