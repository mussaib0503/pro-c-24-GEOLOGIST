
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
	hammer=new hammer(700,600,100,60);
	stone=new stone(500,400,100,100);
	ground=new ground(200,height,1200,20);
	rubber=new rubber(400,300,70,70);
sand1=new sand1(300,400,20,20);
sand2=new sand2(330,430,20,20);
sand3=new sand3(360,400,20,20);
sand4=new sand4(390,400,20,20);
sand5=new sand5(420,400,20,20);


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  hammer.display();
  stone.display();
  ground.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  
 
}



