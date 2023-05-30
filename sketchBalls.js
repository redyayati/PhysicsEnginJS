const Engine = Matter.Engine,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

let engine ; 
let world ; 
let boxy ;
let balls = []
let boundaries = []


function setup() {
  createCanvas(600,600);
  // create an engine
  engine = Engine.create();
  world = engine.world ;
  // Matter.Runner.run(engine);
  boxy = new Ball(200,200,20)
  boundaries.push(new Boundary(width/2,height/1.2,width,50,PI/8))
  boundaries.push(new Boundary(width/1.2,height/3,width,50,-PI/8))
  // console.log(boxy);
  Composite.add(world,boundaries)
}

function draw() {
  background(51) ;
  Engine.update(engine);
  for (var i=0; i<boundaries.length;i++) {boundaries[i].show()}
  for (var i = 0 ; i < balls.length ; i++){
    balls[i].show()
    // if (balls[i].offScreen()){
    //   balls.splice(i,1) ;
    // }
  }

  for (var i = balls.length-1 ; i >0 ; i--) {
    if (balls[i].offScreen()) { 
      balls[i].removeFromWorld();
      balls.splice(i,1);
    }
  }
  // console.log(balls.length , world.bodies.length);
}

function mouseDragged() { 
  balls.push(new Ball(mouseX,mouseY,random(10,40)));
}