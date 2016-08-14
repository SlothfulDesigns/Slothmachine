function SlothMachine() {
	this.canvasId = null;
	this.renderer = null;
	this.context = null;
}

SlothMachine.prototype = {
	init: function(){
		this.renderer = new Renderer();
		this.renderer.init("game");

	},
	update: function(){
		this.renderer.draw();
	}
}
