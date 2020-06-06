class Paper{
constructor(x,y,radius){
    var options={
       isStatic:false,
        restitution:0.3,
       friction:0.5,
        density:1.2

    }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius;
    //this.paper=loadImage("paper.png")


   
    
    World.add(world,this.body);

}
display(){
   
   // image (this.paper,100,450)
    var pos=this.body.position;
   push ();
   translate(pos.x,pos.y)
  ellipseMode(RADIUS);
    fill ("pink");
    ellipse(0,0,this.radius,this.radius);
    
   
    pop ();
}
}