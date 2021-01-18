class Grey{
    constructor(x,y,wi,he){

        var options2 = {
            isStatic:true
        }

        this.x=x
        this.y=y
        this.wi=wi
        this.he=he

        this.body = Bodies.rectangle(this.x,this.y,this.wi,this.hi=e,options2)
        World.add(world,this.body)
    }

    display(){
        var gPos = this.body.position
        rectMode(CENTER)
        translate(gPos.x,gPos.y)
        rect(0,0,this.wi,this.he)
        
    }

}