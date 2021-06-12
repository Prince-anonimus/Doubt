class Ground {
    constructor(x, y, width, height) {
        var options = {
            isStatic:true,
            restitution: 0.5,
            friction: 0.9,
            density:0.5
        }
        this.body = Bodies.rectangle(x, y, width, height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);


    }


    display() {
        push()
        rectMode(CENTER);
        translate(this.body.position.x, this.body.position.y); // it keeps giving new x and y position to rect
        rotate(this.body.angle);
        fill("yellow")
        rect(0, 0, this.width, this.height);
        pop();
    }
}