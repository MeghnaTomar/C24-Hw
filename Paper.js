class Paper {
    constructor(x,y,diameter){
        var options={
        isStatic:false,
        restituton:0.3,
        friction:0.5,
        density:1.8
    
        }
        this.x=x;
        this.y=y;
        this.body = Matter.Bodies.circle(x,y,diameter,options);
        this.diameter = diameter;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        strokeWeight(3);
        fill("pink");
        ellipse(0,0,this.diameter);
        pop();
    }
}