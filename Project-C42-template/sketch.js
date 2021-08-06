var backGround, spaceCraftMain ;
var spaceShip, dockShip
var dockCompleted = false

function preload(){
    backGround=loadImage("space.jpg");
    spaceCraftMain=loadImage("spacecraft.png");
    space1=loadImage("spacecraft1.png");
    space2=loadImage("spacecraft2.png");
    space3=loadImage("spacecraft3.png");
    space4=loadImage("spacecraft4.png");
} 
function setup(){
    createCanvas (600,400);
    spaceShip=createSprite(200,50);
    dockShip=createSprite(400,350);

    spaceShip.addImage(spaceCraftMain);

    dockShip.addImage(space1);

    spaceShip.scale=0.2
    dockShip.scale=0.1
}

function draw(){
    background(backGround);

    if(! dockCompleted){
        dockShip.x=dockShip.x + random(-2,2)

    }

    if(keyDown(UP_ARROW)){
        dockShip.y=dockShip.y - 5

    }

    if(keyDown(DOWN_ARROW)){
        dockShip.addImage(space2);

    }

    if(keyDown(LEFT_ARROW)){
        dockShip.x=dockShip.x - 5
        dockShip.addImage(space3);
    }

    if(keyDown(RIGHT_ARROW)){
        dockShip.x=dockShip.x + 5
        dockShip.addImage(space4);
    }

    if(dockShip.x<= 200 && dockShip.y<= 190 ){
dockCompleted= true
text("Dock Complete",300,200)
    }
    drawSprites();
}
