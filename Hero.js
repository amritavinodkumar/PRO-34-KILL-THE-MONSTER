class Hero {
  constructor(x,y,r)
	{
		var options = { 
			density: 1, 
			frictionAir: 0.1
		};
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("superhero.png");
		this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
		World.add(world, this.body);

	}
	
	display()
	{
			var heroPos = this.body.position;
			//var angle = this.body.angle
			
			push()
			translate(heroPos.x, heroPos.y);
			rectMode(CENTER)
			//rotate(angle)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r+150, this.r)
			pop()
			
	}
}
