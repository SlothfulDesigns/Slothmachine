function Renderer(canvas) {
	console.log("* Initializing renderer")

	gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

	if (!gl) {
		console.log("Failed to init webGL context");
		return;
	}

	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.enable(gl.DEPTH_TEST);
	gl.depthFunc(gl.LEQUAL);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}
