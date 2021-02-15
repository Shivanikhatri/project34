class Hero {
    constructor(x,y)
      {
          var options = { 
        density: 1,
        isStatic: true
        
      };
          
          this.r=20;
          this.image=loadImage("Superhero-01.png");
          this.body=Bodies.circle(x, y,20, options)
          World.add(world, this.body);
  
      }
      display()
      {
              
              var heroPos=this.body.position;		
              push()
              translate(heroPos.x, heroPos.y);
              ellipseMode(RADIUS)
              fill(255,0,255)
              imageMode(CENTER);
              image(this.image, 0,0,300,300)
              pop()
              
      }
  }
  