const Engine = Matter.Engine,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

let engine ; 
let world ; 
let boxy ;
let balls = []
let boundaries = []
let pegs = []
let num = 12 ;
let pegDist ;
let numWalls = 15 ;
let wallDist ;


function setup() {
  createCanvas(600,600);
  colorMode(HSB);
  wallDist = width/numWalls ;
  pegDist = width/num ; 
  // create an engine
  engine = Engine.create();
  world = engine.world ;
  // Matter.Runner.run(engine);
  
  boundaries.push(new Boundary(width/2,height,width,50,0))
  for (i=0;i<numWalls;i++){
    var boundary = new Boundary(i*wallDist + wallDist/2,height-50,5,200,0);
    boundaries.push(boundary);
  }
  Composite.add(world,boundaries);

  for (i=2; i <=num-3 ;i++){
    let off = pegDist/2 ; 
    if (i%2==0) { off = 0}
    for (j=0;j<=num-1;j++){
      peg = new Ball(j*pegDist + off , i*pegDist-50 , 25 , true) ;
      pegs.push(peg);
    }
  }
}

function draw() {
  if (frameCount%10==0){
    let off = random(-5,5)
    balls.push(new Ball(width/2 + off ,10,15));
  }
  background(0,0,0) ;
  Engine.update(engine,32 );

  for (i=0;i<pegs.length;i++){
    pegs[i].show();
  }
  for (var i=0; i<boundaries.length;i++) {boundaries[i].show()}
  for (var i = 0 ; i < balls.length ; i++){
    balls[i].show()
    // if (balls[i].offScreen()){
    //   balls.splice(i,1) ;
    // }
  }
  // balls.push(new Ball(width/2 - 5,70,15));
  for (var i = balls.length-1 ; i >0 ; i--) {
    if (balls[i].offScreen()) { 
      balls[i].removeFromWorld();
      balls.splice(i,1);
    }
  }
  // console.log(balls.length , world.bodies.length);
}

// function mousePressed() { 
function mouseDragged() { 
  let off = random(-5,5)
  balls.push(new Ball(width/2 + off ,10,15));
}