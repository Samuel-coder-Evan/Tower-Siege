class Rope{
    constructor(body1, point2){

        
    var options = {
        bodyA: body1,
        pointB: point2,
        length: 10,
        stiffness: 0.12
           }
    this.chain =  Constraint.create(options)
    //console.log(chain)
    World.add(world,this.chain)

    }
    fly(){
        this.chain.bodyA = null
    }
    display(){


        var pos1 = this.chain.bodyA.position
        var pos2 = this.chain.pointB
       
       push()
        stroke("white")
        line(pos1.x,pos1.y,pos2.x,pos2.y)
        pop()
    }
    }

 