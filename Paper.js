class Paper{
    constructor(x,y,r){
        var options ={
            
            restitution :0,
            friction :0,
            density :1.2
            
        }
        this.x =x;
        this.y =y;
        this.r =r;
        this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
        this.width =33;
        this.image = loadImage("images/paper.png");
        World.add(world, this.body);
    }
    display(){
        var paperpos = this.body.position;
        var angle = this.body.angle;
        push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			//ellipse(0,0,this.r, this.r);
			pop()
    }
}