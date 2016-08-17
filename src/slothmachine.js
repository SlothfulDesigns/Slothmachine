function SlothMachine() {
	this.canvasId = null;
	this.renderer = new Renderer();
	this.camera = new Camera();
	this.input = new Input();
}

SlothMachine.prototype = {
	init: function(){
		this.renderer.init("game");
		var aspect = this.renderer.width / this.renderer.height;
		this.camera.setAspectRatio(90, aspect);

	},

	update: function() {
		this.renderer.draw();
	},
};
