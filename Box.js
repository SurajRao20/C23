class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0,
      }
      this.body = Bodies.rectangle(x, y, 300, 25, {isStatic:true});
      this.width = 300;
      this.height = 25;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push ();
      translate (pos.x, pos.y);
      rotate (this.body.angle)
      rectMode(CENTER);
      fill(255, 0, 0);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };