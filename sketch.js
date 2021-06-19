var ground,groundImage,bow,bowImage,balloon,balloonImage,arrowImage;
var score,canvas;
var pink_balloon,pink_balloonImage,red_balloon,red_balloonImage,green_balloon,green_balloonImage,blue_balloon,blue_balloonImage;
function preload(){
  
   //to load the arrow
   arrowImage=loadImage("arrow0.png");
  
   //to load the ground image
   groundImage= loadImage("background0.png");
  
   //to load bow image 
   bowImage=loadImage("bow0.png");
  
   //to load the balloon images
   pink_balloonImage=
    loadImage("pink_balloon0.png");
  
   red_balloonImage=
    loadImage("red_balloon0.png");
  
   green_balloonImage=
    loadImage("green_balloon0.png");
  
   blue_balloonImage=
    loadImage("blue_balloon0.png");
  
}

function setup() {
  
  //create the canvas
 canvas= createCanvas(displayWidth-20,displayHeight+30);
  
  score=0;
  //create the ground 
  ground=createSprite(0,0,600,600);
  ground.velocityX=-3;
  ground.scale=2.5;
  ground.addImage("ground",groundImage);
  
  
  //create the bow
  bow=createSprite(550,250,10,30);
  bow.addImage("bow",bowImage);
  
  
  //to create the groups
  arrowGroup=new Group();
  redB=new Group();
  pinkB=new Group();
  blueB=new Group(); 
  greenB=new Group();
}

function draw() {
  
  //create all the sprites
 drawSprites();

  
  textSize=20;
  text("Score:" + score,270,300)

  
  camera.x=redB.x;
  camera.x=pinkB.x;
  camera.x=blueB.x;
  camera.x=greenB.x;
  
  //create edges
    createEdgeSprites();
  
  if(arrowGroup.isTouching(redB)){
    redB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
  if(arrowGroup.isTouching(pinkB)){
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score=score+4;
  }
  if(arrowGroup.isTouching(blueB)){
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
  }
  if(arrowGroup.isTouching(greenB)){
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score=score+2;
  }
  //to spawn the balloons
  var select_balloon = Math.round(random(1,4));
  console.log(select_balloon)
  
  if(World.frameCount%80 ==0){
    if(select_balloon == 1){
      redBalloon();
    }
    else if(select_balloon == 2){
      greenBalloon();
    }
    else if(select_balloon == 3){
      blueBalloon();
    }
    else{
      pinkBalloon();
    }
  }
  
  //to move the arrow
  if(keyDown("space"))
  {
   createArrow();
  } 
  
  //bow to move with the mouse
    bow.y=mouseY;
  
  //ground to move in infinity
    if(ground.x<0){
    ground.x=ground.width/2;
    }
   
}
  
  function redBalloon(){
    var red = createSprite(0,Math.round(random(20,370)),10,10);
    red.addImage(red_balloonImage);
    red.velocityX=3;
    red.lifetime = 150;
    red.scale=0.1;
    redB.add(red);
  }
  
  function greenBalloon(){
    var green = createSprite(0,Math.round(random(20,370)),10,10);
    green.addImage(green_balloonImage);
    green.velocityX=3;
    green.lifetime=150;
    green.scale=0.1;
    greenB.add(green);
  }
  
   function blueBalloon(){
    var blue = createSprite(0,Math.round(random(20,370)),10,10);
    blue.addImage(blue_balloonImage);
    blue.velocityX=3;
    blue.lifetime=150;
    blue.scale=0.1;
    blueB.add(blue);
   }
  
   function pinkBalloon(){
    var pink = createSprite(0,Math.round(random(20,370)),10,10);
    pink.addImage(green_balloonImage);
    pink.velocityX=3;
    pink.lifetime=150;
    pink.scale=0.1;
    pinkB.add(pink);
   }
  
 function createArrow()
  {
   //creating the arrow
   arrow=createSprite(360,100,5,10);
   arrow.addImage(arrowImage);
   arrow.y=bow.y;
   arrow.velocityX=-6;
   arrow.scale=0.3;
    arrow.lifetime=100;
  arrowGroup.add(arrow);
   return arrow;
    
    //to display the sprites
   drawSprites();
  }
  


