class Box{

    constructor(x,y,width,height){
       var options ={
       
       restitution:0.8,
       friction:1.0,
       density:1.0, 
       }
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.height = height ;
       this.width = width ;
       World.add(world,this.body)
    }
    display(){
      push();
      var pos = this/this.body.position;
      ellipseMode(CENTER);
      fill ("white"); 
      rect(pos.x,pos.y,this.width,this.height)
      pop ();
    }
    
    
    }