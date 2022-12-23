class CannonBall {
  constructor(x, y, angle) {

    this.x = x
    this.y = y
    this.angle = angle
    var options = {
      isStatic: true
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("./assets/cannonball.png");
    World.add(world, this.body);
  }


  display() 
  {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(this.angle)
    imageMode(CENTER);
    image(this.image,0,0, this.r, this.r);
    pop();

  }

 shoot(){


   var anco = cannon.angle - 28;

   anco = anco * (3.14 / 180);

   var velocidade = p5.Vector.fromAngle(anco);
   velocidade.mult(0.5);

   Matter.Body.setStatic(this.body, false);
   Matter.Body.setVelocity(this.body, {
   x:velocidade.x*(180/3.14),
   y:velocidade.y*(180/3.14)})
   
   


 }


}
