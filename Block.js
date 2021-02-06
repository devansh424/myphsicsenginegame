class Block{
    constructor(x, y, width, height) {
        var options = {
          'restitution':0,
           'isStatic':false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("sprites/bottle.png");
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<15){
        var pos= this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width, this.height);
        }else{
          World.remove(world,this.body);
          push();
          tint(255,this.visibility);
          this.visibility=this.visibility-5;
          pop();
        }
      }
}