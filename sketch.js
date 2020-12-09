var rect1,rect2,rect3,rect4,rope
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    rect1 = new Box(300,300,40,40)
    rect2 = new Box(340,300,40,40)
    rect3 = new Box(380,300,40,40)
    rect4 = new Box(420,300,40,40)

    rect5 = new Box(330,200,40,40)
    rect6 = new Box(380,200,40,40)
    rect7 = new Box(420,200,40,40)

    rect8 = new Box(350,150,40,40)
    rect9 = new Box(390,150,40,40)
    
    rect10 = new Box(390,100,40,40)

  options = {
    isStatic:true
  }
  ground = Bodies.rectangle(380,380,200,10,options)
  World.add(world, ground)
	ball = new Ball(200,200,20)
  rope = new Rope(ball.body,{x:200,y:200})
	Engine.run(engine);
  
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  rope.fly()

}

function draw() {
  rectMode(CENTER);
  background(0);
  rect1.display()
  rect2.display()
  rect3.display()
  rect4.display()

  rect5.display()
  rect6.display()
  rect7.display()

  rect8.display()
  rect9.display()
 
  rect10.display()

  //rope.display()
  ball.display()
  rect(ground.position.x, ground.position.y,200,10)
}





