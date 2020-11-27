class Ball {
    constructor(x, y, r) {
      var options = {
          'restitution':0.2,
          'friction':0.3,
          'density':1.0,
         // isStatic:true
          
    
      }
      this.body = Bodies.circle(x,y,r,options)
      this.r=r;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill(255);
      ellipse(pos.x,pos.y,this.r);
      
    }
  }
