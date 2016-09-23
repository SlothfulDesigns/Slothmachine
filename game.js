/*jshint esversion: 6*/

function Game(){
	this.engine = new SlothMachine("");
	this.player = null;
}


Game.prototype = {

	start: function(){
		this.setup();
		this.engine.start();
	},

	setup: function(){

		this.engine.camera.position.z = 5;
		this.engine.camera.position.y = 2;

		var spaceship = new Entity(this.engine);
		spaceship.components.push(new Mesh(spaceship));
		spaceship.components.push(new BoxCollider(spaceship));
		this.player = spaceship;

		var cube = new Entity(this.engine);
		cube.components.push(new Mesh(cube));
		cube.components.push(new BoxCollider(cube));
		cube.position.z = -5;

		var input = new Input(spaceship);

		var light = new Entity(this.engine);
		light.position.y = 5;
		light.position.z = 5;
		light.components.push(new PointLight(light));
		light.components[0].setIntensity(10.0);
		light.components[0].castShadow = true;

		var light2 = new Entity(this.engine);
		light2.position.y = 10;
		light2.position.z = -10;
		light2.components.push(new PointLight(light));
		light2.components[0].setIntensity(10.0);
		light2.components[0].setColor(0x000066);
		light2.components[0].castShadow = true;

		var room = new Brush();
		room.setPosition(0, 3.2, 0); //behind the player obv
		room.setScale(20, 8, 20);
		room.setColor(0x040404);
		room.material.side = THREE.BackSide;
		this.engine.brushes.push(room);
		this.engine.scene.add(room.mesh);
	},
};

