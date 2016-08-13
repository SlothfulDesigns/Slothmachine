function Renderer() {
	this.canvas = null;
	this.context = null;
}

Renderer.prototype = {

	init: function(canvasId){
		console.log("Renderer: Initializing")

		this.canvas = document.getElementById(canvasId);

		if(!this.canvas){
			console.log("Renderer: ERROR - can't find canvas!")
		}
		
		this.context = this.canvas.getContext("webgl")
			|| this.canvas.getContext("experimental-webgl");

		if (!this.context) {
			console.log("Renderer: ERROR - Failed to init webGL context");
			return null;
		}

		this.context.viewport(0, 0, this.canvas.width, this.canvas.height);
		this.context.clearColor(0.0, 0.0, 0.0, 1.0);
		this.context.enable(this.context.DEPTH_TEST);
		this.context.depthFunc(this.context.LEQUAL);
		this.context.clear(this.context.BUFFER_COLOR_BIT | this.context.DEPTH_BUFFER_BIT);
	},
	draw: function(){
		this.context.clear(this.context.BUFFER_COLOR_BIT | this.context.DEPTH_BUFFER_BIT);
	}
}
