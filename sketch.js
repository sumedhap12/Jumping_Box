var canvas;
var music;
var Box1,Box2,Box3,Box4;
var movingBox


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    edge=createEdgeSprites();

    //creating box sprite 
    Box1=createSprite(680,550,170,20)
    Box1.shapeColor="red"

     Box2=createSprite(480,550,170,20)
     Box2.shapeColor="green "

     Box3=createSprite(280,550,170,20)
     Box3.shapeColor="blue"
    
     Box4=createSprite(90,550,170,20)
     Box4.shapeColor="yellow"

     movingBox=createSprite(random(20,750),300,35,35)
     movingBox.shapeColor="white"
     movingBox.velocityX=-2;
     movingBox.velocityY=5;

     
}

function draw() {
    background(rgb(169,169,169));
    

    movingBox.bounceOff(edge[0]);
    movingBox.bounceOff(edge[1]);
    movingBox.bounceOff(edge[2]);
    movingBox.bounceOff(edge[3]);

    if (movingBox.isTouching(Box1)){
        movingBox.shapeColor = "red";
        movingBox.bounceOff(Box1);
    }

    if (movingBox.isTouching(Box2)){
        movingBox.shapeColor = "green";
        movingBox.bounceOff(Box2);
    }

    if (movingBox.isTouching(Box3)){
        movingBox.shapeColor = "blue";
        movingBox.bounceOff(Box3);
    }

    if (movingBox.isTouching(Box4)){
        movingBox.shapeColor = "yellow";
        movingBox.bounceOff(Box4);
    }
    drawSprites();
}
