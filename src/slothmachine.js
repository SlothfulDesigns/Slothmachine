/*jshint esversion: 6*/

class SlothMachine {

	constructor(){
		var trim = 20;
		this.width = window.innerWidth - trim;
		this.height = window.innerHeight - trim;
		this.renderer = new THREE.WebGLRenderer();
		this.composer = new THREE.EffectComposer(this.renderer);
		this.camera = new THREE.PerspectiveCamera(75, this.width/this.height, 0.1, 1000);
		this.scene = new THREE.Scene();
		this.renderScene = new THREE.RenderPass(this.scene, this.camera);

		this.entities = [];
		this.brushes = [];

		this.renderer.setSize(this.width, this.height);
		this.renderer.shadowMap.enabled = true;

		this.copyShader = new THREE.ShaderPass(THREE.CopyShader);
		this.copyShader.renderToScreen = true;
		this.bloomPass = new THREE.UnrealBloomPass(new THREE.Vector2(this.width, this.height),
												   1.5, 0.4, 0.85);

		this.composer.setSize(this.width, this.height);
		this.composer.addPass(this.renderScene);
		this.composer.addPass(this.bloomPass);
		this.composer.addPass(this.copyShader);

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
		
		//this.renderer.render(this.scene, this.camera);
		this.composer.render();
	}
}
