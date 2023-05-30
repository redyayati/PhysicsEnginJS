

class Ball {
    constructor(x, y, r , fixed) {
        this.x = x;
        this.y = y;
        this.r = r;

        let options = {
            friction: 0.,
            restitution: 0.5,
            isStatic : fixed
        }
        this.body = Bodies.circle(this.x, this.y, this.r/2, options);
        // console.log(this.body)
        Composite.add(world, this.body);
    }
    offScreen() {
        var pos = this.body.position ;
        return (pos.y > height) ;
    }
    removeFromWorld(){
        Composite.remove(world,this.body);
    }
    show() {
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        stroke(255)
        if (this.body.isStatic) {
            fill(0,150,0);
        } else {fill(150,0,0)}
        ellipse(0, 0, this.r);
        pop();
    }
}