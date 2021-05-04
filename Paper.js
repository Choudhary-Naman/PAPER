class Paper{
	constructor(x,y){
   var options = {
     isStatic:false,
     restitution:0.3,
     friction:0,
     density:1.2

   }


		this.x=x;
		this.y=y;
		this.PaperWidth=100;
		this.PaperHeight=103;
		
		
		this.image=loadImage("paper.png");
		

	}
	display()
	{
			
			

    	push();
			translate(posBottom.x, posBottom.y+10);
			rectMode(CENTER);
			//strokeWeight(4);
			angleMode(RADIANS);
			fill(255);
			imageMode(CENTER);
			image(this.image, 0,-this.PaperHeight/2,this.PaperWidth, this.PaperHeight);
			//rect(0,0,this.PaperWidth, this.wallThickness);
			pop();
			
	
}

}