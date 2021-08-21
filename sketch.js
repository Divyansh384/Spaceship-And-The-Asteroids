
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;

	var PLAY = 1;
	var END = 0;
	var gameState = PLAY;

	var spaceship, shaceshipImage;
	var back, backImage;
	var backgroundImage;
	var asteroid, asteroidGroup;
	var asteroid1Image;
	var score;
	var maxAsteroid=100;
	var leftWall,rightWall;
	var ground;

	function preload()
	{
		shaceshipImage = loadImage("spaceship.png");
		asteroid1Image = loadImage("astter.png");
		bgImg = loadImage("back2.jpg");
		asteroidGroup = new Group();
	}

	function setup() {
		engine = Engine.create();
		world = engine.world;
		createCanvas(800, 700);
		Engine.run(engine);

		spaceship = createSprite(400,500);
		spaceship.addImage(shaceshipImage);
		spaceship.scale = 0.2;

		leftWall = createSprite(5,700,5,1400);
		leftWall.visible = false;

		rightWall = createSprite(795,700,5,1400);
		rightWall.visible = false;

		

		score = 0;
		score.visibile = true;

	}



	function draw() {
	Engine.update(engine);
	rectMode(CENTER);
	background(bgImg);
	textSize(20);
	fill("white");
	text("Score: "+ score, 650,50);

	score = score + Math.round(frameCount/100);
	
	if (gameState === END) {
		score.visibile = false;
		textSize(40);
		text("Score: " + score , 300,350);
		textSize(20);
		text("Your Spaceship got crashed,better luck next time , play again by pressing'Control+R'.",10,425);
		asteroidGroup.setVelocityXEach(0);
		spaceship.velocityX(0);
		
	}

	spaceship.collide(leftWall);
	spaceship.collide(rightWall);


	

	if(spaceship.isTouching(asteroidGroup)){
		gameState = END;
	

	}
	

	if(keyDown(LEFT_ARROW)){
		spaceship.x = spaceship.x - 7;
	}
	if(keyDown(RIGHT_ARROW)){
		spaceship.x = spaceship.x + 7;
	}


	
	spawnasteroid();
	
	drawSprites();
	
	}

	function spawnasteroid(){
		if(frameCount% 50===0){
		asteroid = createSprite(200, -50);
		asteroid.addImage(asteroid1Image);
		asteroid.scale = 0.2;
		asteroid.x = Math.round(random(120, 600));
		asteroid.velocityY = 12;
		asteroid.lifetime = 800;
		
		
		asteroidGroup.add(asteroid);

		}
	}
