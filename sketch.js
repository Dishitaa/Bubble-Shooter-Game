var canon, bubbles;
var gameState;

function preload(){
   orange = loadImage("orangeB.png");
   pink = loadImage("pinkB.png");
   yellow = loadImage("yellowB.png");
   backGround= loadImage("background.jpg")
} 
function setup(){
    createCanvas(1366,800);

    canon = createSprite(683,765,25,25);
    canoncolor();

    for(i=20;i<1366;i=i+60){
      bubble1 = createSprite(i,25,30,30)
      colorselection();
    }
    for(i=20;i<1366;i=i+60){
      bubble1 = createSprite(i,85,30,30)
      colorselection();
    }
    for(i=20;i<1366;i=i+60){
      bubble1 = createSprite(i,145,30,30)
      colorselection();
    }
    for(i=20;i<1366;i=i+60){
      bubble1 = createSprite(i,205,30,30)
      colorselection();
    }
    for(i=20;i<1366;i=i+60){
      bubble1 = createSprite(i,265,30,30)
      colorselection();
    }
}
function draw(){
    background(backGround);

    launch();


      if(canon.isTouching(bubble1)){
       canon.velocityY=0
      }



    drawSprites()
}

function colorselection(){
  rand1=Math.round(random(1,3));
  if (rand1==1){
    bubble1.addImage(orange);
    bubble1.scale=0.1;
  }
  else if (rand1==2){
    bubble1.addImage(pink);
    bubble1.scale=0.1;
  }
  else {
    bubble1.addImage(yellow);
    bubble1.scale=0.05;
  }
}
function canoncolor(){
  rand2=Math.round(random(1,3));
  if (rand2==1){
    canon.addImage(orange);
    canon.scale=0.1;
  }
  else if (rand2==2){
    canon.addImage(pink);
    canon.scale=0.1;
  }
  else {
    canon.addImage(yellow);
    canon.scale=0.05;
  }
}
function launch(){
  if(keyDown("left")){
    canon.x = canon.x - 5
  }
  if(keyDown("right")){
    canon.x = canon.x + 5
  }
  if(keyDown("up")){
    canon.velocityY = -10
  }
}
