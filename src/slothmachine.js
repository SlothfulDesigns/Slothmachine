function SlothMachine() {
	var trim = 20;
	this.width = window.innerWidth - trim;
	this.height = window.innerHeight - trim;
	this.renderer = new THREE.WebGLRenderer();
	this.camera = new THREE.PerspectiveCamera(75, this.width/this.height, 0.1, 1000);
	this.scene = new THREE.Scene();
	this.input = new Input();
	this.entities = [];
}

SlothMachine.prototype = {
	init: function(){
		this.renderer.setSize(this.width, this.height);
		document.body.appendChild(this.renderer.domElement);

		var light = new THREE.DirectionalLight( 0xffffff, 0.5 );
		light.position.set( 0, 1, 0 );
		this.scene.add(light);
	},

	update: function() {
		this.entities.forEach(function(entity){
			entity.update();
		});
	},

	render: function() {
		this.entities.forEach(function(entity){
			entity.render();
		});
		this.renderer.render(this.scene, this.camera);
	}
};
