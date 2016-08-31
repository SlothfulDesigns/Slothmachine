function Game(){
	this.engine = new SlothMachine("");
	this.player = null;
}

Game.prototype = {

	start: function(){
		this.engine.init();
		this.setup();
		this.engine.start();
	},

	setup: function(){
		var spaceship = new Entity();
		this.engine.entities.push(spaceship);
		this.engine.scene.add(spaceship.mesh);
		this.player = spaceship;

		this.engine.camera.position.z = 5;

		var ambientLight = new THREE.AmbientLight(0x404040);
		this.engine.scene.add(ambientLight);

		var fgLight = new THREE.DirectionalLight(0xffffcc, 2.0);
		fgLight.position.set(-4, -2, 4);
		fgLight.target.position.set(0, 0, 0);
		this.engine.scene.add(fgLight);

		var bgLight = new THREE.DirectionalLight(0xccffff, 1.0);
		bgLight.position.set(4, 2, 4);
		bgLight.target.position.set(0, 0, 0);
		this.engine.scene.add(bgLight);
	},
};
