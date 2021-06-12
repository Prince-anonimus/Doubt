
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper
var ground 
var box1,box2,box3;


function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(400,300,50,50)
	ground = new Ground(750,600,1500,20)
	box1 = new Box(750,540,20,100)
	box2 = new Box(835,580,150,20)
	box3 = new Box(899,540,20,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  
  drawSprites();
 
}



