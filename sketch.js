var man;


function preload(){

}



function setup(){ 
  createCanvas(1200,600);
   man = createSprite(200,140,30,80); 
}


function draw(){ 
  background(180);
   spawnObstacles(); 
   drawSprites();
   } 
  
  
  function spawnObstacles(){
    
    if(frameCount % 60 === 0){ 
      
       obstacles = createSprite(2000,200,200,30); 
      obstacles.velocityX = -5 } 
    }

