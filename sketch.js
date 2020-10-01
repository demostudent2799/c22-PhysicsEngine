const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
 var engine,world,object;

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);

  engine=Engine.create();
  world=engine.world;
  var object_options ={
    isStatic: true
}
  object=Bodies.rectangle(200,100,80,50,object_options);
  World.add(world,object);

  console.log(object.position.x);
  console.log(object.position.y);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,20);
 // drawSprites();
}
