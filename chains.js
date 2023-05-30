const Engine = Matter.Engine,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Constraint = Matter.Constraint,
    World = Matter.World,
    Mouse = Matter.Mouse, 
    MouseCon = Matter.MouseConstraint ;


let engine ; 
let world ; 
let ball ;
let balls = []
let mConstraint ; 



function setup() {
  let canvas = createCanvas(500,500);
  // create an engine
  engine = Engine.create();
  world = engine.world ;
  // Matter.Runner.run(engine);
  let prev = null ;
  for (x=200;x<500;x+=40){
    let fixed = false ;
    if (!prev) {
      fixed = true;
    }
    b = new Ball(x,200,30 , fixed);
    balls.push(b);
    if (prev) {
      let options = {
        bodyA : prev.body,
        bodyB : b.body,
        length : 30,
        stiffness : 0.4
      }
      let constraint = Constraint.create(options)
      Composite.add(world,constraint)
    }
    prev = b
  }
  
  ground = new Boundary(width/2,height,width,50 , 0)
  Composite.add(world,ground);

  let canvasmouse = Mouse.create(canvas.elt) ;
  canvasmouse.pixelRatio = pixelDensity();
  options = {
    mouse : canvasmouse
  }
  mConstraint = MouseCon.create(engine , options) ;
  Composite.add(world , mConstraint);

}

function draw() {
  background(51) ;
  Engine.update(engine);
  ground.show();
  for (var i = 0 ; i < balls.length ; i++){
    balls[i].show()
  }
  var prevPoint = null ; 
  stroke(255) ;
  for (i = 0; i < balls.length; i++){
    if (prevPoint) {
      line(prevPoint.body.position.x , prevPoint.body.position.y , balls[i].body.position.x , balls[i].body.position.y)    
    }
    prevPoint = balls[i]
  }  
  if (mConstraint.body) {
    let pos = mConstraint.body.position ;
    let mPos = mConstraint.mouse.position ;
    let offset = mConstraint.constraint.pointB ;
    stroke(0,255,0);
    // ellipse(pos.x,pos.y,20)
    line(pos.x + offset.x,pos.y + offset.y,mPos.x,mPos.y);
  }
}
