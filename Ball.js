class Ball{
    constructor(x,y,radius){
        var options = {
            restitution : 0.3,
            friction : 0.3,
            density : 1        
        }
      this.body = Bodies.circle(x,y,radius,options);
    
     this.radius = radius;
      World.add(world,this.body);
     
    }
   display(){
        
       var angle = this.body.angle
      
       var pos = this.body.position
       push()
       ellipseMode(RADIUS)
       translate(pos.x,pos.y)
       fill("red")
       rotate(angle)
       ellipse(0,0,this.radius,this.radius)
       pop()
    }
}