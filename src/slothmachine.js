class SlothMachine {

	constructor(){
		var trim = 20;
		this.width = window.innerWidth - trim;
		this.height = window.innerHeight - trim;
		this.renderer = new THREE.WebGLRenderer();
		this.camera = new THREE.PerspectiveCamera(75, this.width/this.height, 0.1, 1000);
		this.scene = new THREE.Scene();
		this.input = new Input();

		this.entities = [];
		this.brushes = [];

		this.renderer.setSize(this.width, this.height);
		document.body.appendChild(this.renderer.domElement);
	}

	start() {
		this.gameLoop();
	}

	gameLoop() {
		requestAnimationFrame(this.gameLoop.bind(this));
		this.update();
		this.render();
	}

	update() {
		this.entities.forEach(function(entity){
			entity.update();
		});
	}

	render() {

		//render world
		this.brushes.forEach(function(brush){
			brush.render();
		});

		//render entities
		this.entities.forEach(function(entity){
			entity.render();
		});
		this.renderer.render(this.scene, this.camera);
	}
}
