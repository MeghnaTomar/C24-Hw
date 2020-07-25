
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj;
var ground;
var paperObject;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbinObj = new Dustbin(600,620);
	ground = new Ground(400,650,800,20);
	paperObject = new Paper(200,200,20);
	Engine.run(engine);

	
  }
  



function draw() {
  rectMode(CENTER);
  background(0);
  dustbinObj.display();
paperObject.display();
  ground.display();


}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}



