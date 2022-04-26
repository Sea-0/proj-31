class Particle{
	constructor(x,y)
	{

		this.x=x;
		this.y=y;
		this.r=12
		this.body=Bodies.circle(random(50,777), this.y,this.r)
        this.color=color(random(0,255),random(0,255),random(0,255))
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill(this.color);
			//draw the ellipse here to display the rubber ball
			ellipseMode(RADIUS)
            ellipse(0,0,this.r,this.r)
			pop()
	}

}
