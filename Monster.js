class Monster {
    constructor(x,y)
      {
          var options = { 
        friction:1,
        density: 1,
        isStatic : false
        
      };
          
          this.r=100;
          this.image=loadImage("Monster-01.png");
          this.body=Bodies.circle(x, y,100, options)
          World.add(world, this.body);
  
      }
      display()
      {
              
              var MonPos=this.body.position;		
              push()
              translate(MonPos.x, MonPos.y);
              ellipseMode(RADIUS)
              fill(255,0,255)
              imageMode(CENTER);
              image(this.image, 0,0,300,300)
              pop()
              
      }
  }
  