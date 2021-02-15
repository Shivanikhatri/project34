class Box{
    constructor(x,y){
        var options ={
            restitution: 0.5,
            density: 1,
            friction: 2
        }
        this.body = Bodies.rectangle(x,y,70,70,options);
        this.width= 70;
        this.height =70;
        //this.image = loadImage("yellow.png");
        World.add(world,this.body);
        //this.Visiblity = 255;
    }
    display(){
        console.log(this.body.speed);
        var pos = this.body.position;
        var angle = this.body.angle;


        push();
       rectMode(CENTER);
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("green");
        fill("white");
        rect(0,0,this.width,this.height);
        pop();
        
    }
}