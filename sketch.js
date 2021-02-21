const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var helicopterIMG, helicopterSprite;
var packageSprite,packageIMG,packageBody;
var groundSprite, ground;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}


function setup() {
	createCanvas(800, 600);

    packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
    packageSprite.scale=0.2;
    
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 550, width, 10 , {isStatic:true} );
    World.add(world, ground);
     
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor='red';
  
    // To update engine you can use either run or update function
    //Engine.run(engine);

}

function draw() {
    rectMode(CENTER);
    background('black');

    Engine.update(engine);

    packageSprite.x= packageBody.position.x ;
    packageSprite.y= packageBody.position.y;

    drawSprites();
   
  }

function keyPressed() {
    if (keyCode === DOWN_ARROW) {
      Matter.Body.setStatic(packageBody,false);
       
     }
}