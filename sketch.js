const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1;
var stopper;
var slingshot;
var ball1;
var balls=5;

var gameState = "onSling";

function setup() {
  var canvas = createCanvas(1200,550);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,590,1200,100);
  ground1 = new Ground(1230,600,100,2000);
  ground2 = new Ground(-40,600,100,2000);
  platform = new Ground(200,350,200,10);
  platform1 = new Ground(790,250,200,10);
  platform2 = new Ground(990,450,200,10);

  ball1 = new Ball(200,150,30,30);
  ball2 = new Text(50,50,40,40);

  stopper = new Stopper(400,150,20,150);
  
  block1 = new Block(760,175,20,40);  
  block2 = new Block(780,175,20,40);
  block3 = new Block(800,175,20,40);
  block4 = new Block(820,175,20,40);

  block5 = new Block(770,75,20,40);
  block6 = new Block(790,75,20,40);
  block7 = new Block(810,75,20,40);

  block8 = new Block(780,25,20,40);
  block9 = new Block(800,25,20,40);

  block10 = new Block(960,375,20,40);  
  block11 = new Block(980,375,20,40);
  block12 = new Block(1000,375,20,40);
  block13 = new Block(1020,375,20,40);

  block14 = new Block(970,275,20,40);
  block15 = new Block(990,275,20,40);
  block16 = new Block(1010,275,20,40);

  block17 = new Block(980,175,20,40);
  block18 = new Block(1000,175,20,40);

  screen=new Screen(-1000,-1000,1200,550);

  slingshot = new SlingShot(ball1.body,{x:185, y:180});
}

function draw() {
  background("blue");  
  Engine.update(engine);
  strokeWeight(1);
  ground.display();
  ground1.display();
  ground2.display();
  platform.display();
  platform1.display();
  platform2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  slingshot.display();
  stopper.display();

  ball1.display();
  ball2.display();

  textSize(20);
  fill("black");
  text(balls,45,55);

  if(balls<=0 ){
    Matter.Body.setPosition(screen.body,{x:600,y:275});
    screen.display();
  }
   
  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
  balls=balls-1;
}
if(gameState!=="play"){
function keyPressed(){
  if(keyCode === 32 && ball1.body.speed<1){
    Matter.Body.setPosition(ball1.body,{x:185,y:180});
    slingshot.attach(ball1.body);
  }
}
}