var particles = [];
var plinkos = [];
var divisions = [];

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var divisionHeight=300

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

 
  for (var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75))
  }
  
  division1 = new Division(0,650,10,300,)
  division2 = new Division(80,650,10,300,)
  division3 = new Division(160,650,10,300,)
  division4 = new Division(240,650,10,300,)
  division5 = new Division(320,650,10,300,)
  division6 = new Division(400,650,10,300,)
  division7 = new Division(480,650,10,300,)

  ground = new Ground(240,790,480,20)
}

function draw() {
  background("black");  

 

  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

  drawSprites();
}