class Ground {
    constructor(x,y,w,h){

        var options1 = {
            isStatic:true
        }

        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;

        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options1)
        World.add(world,this.body)
    }

    display(){
    
        var Gpos = this.body.position;
        rectMode(CENTER);
        rect(Gpos.x,Gpos.y,this.w,this.h);
        
    }

}