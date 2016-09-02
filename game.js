/*jshint esversion: 6*/

function Game(){
	this.engine = new SlothMachine("");
	this.player = null;
}

THREE.PointLight.prototype.Visualize = function(){
	this.sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 16), new THREE.MeshBasicMaterial({color: this.color}));
	this.add(this.sphere);
};

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
		this.player = spaceship;

		var input = new Input(spaceship);

		var light = new Entity(this.engine);
		light.position.y = 5;
		light.position.z = 5;
		light.components.push(new PointLight(light));
		light.components[0].setIntensity(10.0);
	},
};

