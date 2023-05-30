const Engine = Matter.Engine,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

let engine ; 
let world ; 
let boxy ;
let boxes = []


function setup() {
  createCanvas(500,500);
  // create an engine
  engine = Engine.create();
  world = engine.world ;
  // Matter.Runner.run(engine);
  boxy = new Box(200,200,20,20)
  ground = new Boundary(width/2,height,width,50 , 0)
  // console.log(boxy);
  Composite.add(world,ground)
}

function draw() {
  background(51) ;
  Engine.update(engine);
  ground.show();
  for (var i = 0 ; i < boxes.length ; i++){
    boxes[i].show()
  }
  // console.log(boxes.length);

}

function mousePressed() { 
  boxes.push(new Box(mouseX,mouseY,random(10,40),random(10,40)))
}