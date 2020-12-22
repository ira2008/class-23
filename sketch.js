const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var world,engine;
var box1,box2,ground;

function setup(){
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  box1=new Box(400,200,30,50);
  box2=new Box(420,150,40,30);
  ground=new Ground(400,380,800,15);
}
function draw(){
  background("lightblue");
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
  
}