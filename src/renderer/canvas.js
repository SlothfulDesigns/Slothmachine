function Renderer() {
	this.canvas = null;
	this.context = null;
	this.projection = null;
	this.view = null;
	
	this.width = 0;
	this.height = 0;

	this.far = 100.0;
	this.near = 0.1;

}

Renderer.prototype = {

	init: function(canvasId){
		console.log("Renderer: Initializing");

		this.canvas = document.getElementById(canvasId);

		if(!this.canvas){
			console.log("Renderer: ERROR - can't find canvas!");
		}
		
		this.context = this.canvas.getContext("webgl") ||
			this.canvas.getContext("experimental-webgl");

		if (!this.context) {
			console.log("Renderer: ERROR - Failed to init webGL context");
			return null;
		}

		this.width = this.canvas.width;
		this.height = this.canvas.height;

		this.context.viewport(0, 0, this.width, this.height);
		this.context.clearColor(0.0, 0.0, 0.0, 1.0);
		this.context.enable(this.context.DEPTH_TEST);
		this.context.depthFunc(this.context.LEQUAL);
		this.context.clear(this.context.COLOR_BUFFER_BIT | this.context.DEPTH_BUFFER_BIT);
	},

	draw: function(){
		this.context.clear(this.context.COLOR_BUFFER_BIT | this.context.DEPTH_BUFFER_BIT);
	}
};
