class Blue{
    constructor(x,y,w,h){

        var options = {
            isStatic:false
        }

        this.x=x
        this.y=y
        this.w=w
        this.h=h

        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options)
        World.add(world,this.body)
    }

    display(){
        var bPos = this.body.position
        rectMode(CENTER)
        translate(bPos.x,bPos.y)
        fill("blue")
        rect(0,0,this.w,this.h)
        
    }

}