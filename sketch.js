
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var dustbin1,dustbin2,dustbin3;
var ground;
var paperObject;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin(600,580,20,100);
	dustbin2 = new Dustbin(650,630,100,20);
	dustbin3 = new Dustbin(700,580,20,100);
	ground = new Ground(400,650,800,20);
	paperObject = new Paper(200,200,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin3.display();
  dustbin2.display();
paperObject.display();
  ground.display();
  drawSprites();
 keyPressed();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}



