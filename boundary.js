class Boundary {
    constructor(x, y, w, h , a) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        let options = {
            friction: 0.3,
            restitution: 0.6,
            isStatic: true,
            angle : a 
        }
        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options);
        // console.log(this.body)
        Composite.add(world, this.body);
    }

    show() {
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        noStroke();
        fill(100);
        rect(0, 0, this.w, this.h);
        pop();
    }
}