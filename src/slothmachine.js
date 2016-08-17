function SlothMachine() {
	this.canvasId = null;
	this.renderer = null;
	this.context = null;
	this.input = null;
}

SlothMachine.prototype = {
	init: function(){
		this.renderer = new Renderer();
		this.renderer.init("game");

		this.input = new Input();
	},
	update: function() {
		this.renderer.draw();
	}
};
