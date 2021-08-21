class createAsteroid{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1           
        }
        this.stone = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.stone);
    }

    updateY(){     
        if(this.stone.position.y > height){

            Matter.Body.setPosition(this.stone, {x:random(0,400), y:random(0,400)});
        }
    }

    showAsteroid(){
        fill("blue")
        ellipseMode(CENTER);
        ellipse(this.stone.position.x,this.stone.position.y,this.radius,this.radius);
    }
}