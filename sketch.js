var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	//helicopterSprite.velocityX = -10;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	lowerSprite=createSprite(width/2,height-50,200,20);
	leftSprite=createSprite(width/2-100,height-100,20,100);
	rightSprite=createSprite(width/2+100,height-100,20,100);

  leftSprite.shapeColor=("red")
  lowerSprite.shapeColor=("red")
  rightSprite.shapeColor=("red")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(width/2 , 200 , 50,50 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	 LowerRect=Bodies.rectangle(width/2,height-50,200,20)
	 World.add(world, LowerRect);
	 LowerRect=Bodies.rectangle(width/2-100,height-100,20,200)
	 World.add(world, LowerRect);
	 LowerRect=Bodies.rectangle(width/2+100,height-100,20,200)
	 World.add(world, LowerRect);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();

  drawSprites();
 
}


function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
		helicopterSprite.x+=20;
		Matter.Body.translate(packageBody,{x:20,y:0});
	}
	if (keyCode === LEFT_ARROW) {
		helicopterSprite.x-=20;
		Matter.Body.translate(packageBody,{x:-20,y:0});
	}


 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody,false)
  }
}



