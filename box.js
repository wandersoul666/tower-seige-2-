class Box {
  constructor(x, y, width, height) {
    this.visibility = 255
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.x=x;
    this.y=y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);

    
  }
  display(){
     //console.log(this.body.speed);
   if(this.body.speed < 3){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
   
    rect(0, 0, this.width, this.height);
    pop();
   }
   else{

     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
    
  }
}
