class Boy {
    constructor(x, y) {
        var options = {
            'isStatic': true
        }
        this.body = Bodies.rectangle(x, y, 175, 175, options);
        this.width = 175;
        this.height = 175;
        this.image = loadImage("boy.png");
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
      //  pos.x = mouseX;
      //  pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}