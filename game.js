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
		this.engine.init();
		this.setup();
		this.engine.start();
	},

	setup: function(){

		this.engine.camera.position.z = 5;
		this.engine.camera.position.y = 2;

		var spaceship = new Entity();
		this.engine.entities.push(spaceship);
		this.engine.scene.add(spaceship.mesh);
		this.player = spaceship;

		var room = new Brush();
		room.setPosition(0, 3.2, 0); //behind the player obv
		room.setScale(20, 8, 20);
		room.setColor(0x040404);
		room.material.side = THREE.BackSide;
		this.engine.brushes.push(room);
		this.engine.scene.add(room.mesh);
/*
		var ambientLight = new THREE.AmbientLight(0x404040);
		this.engine.scene.add(ambientLight);
*/

		var fgLight = new THREE.PointLight(0xffffee, 10.0, 100);
		fgLight.position.set(-10, 8, 10);
		fgLight.Visualize();
		this.engine.scene.add(fgLight);

		var bgLight = new THREE.PointLight(0xeeffff, 8.0, 100);
		bgLight.position.set(10, 8, -10);
		bgLight.sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 16), new THREE.MeshBasicMaterial({color: this.color}));
		bgLight.add(this.sphere);
		//bgLight.Visualize();
		this.engine.scene.add(bgLight);
	},
};

