function Shader(gl, shaderId){

	var vertexSrc = document.getElementById(shaderId + "-vertex").text;
	var fragSrc = document.getElementById(shaderId + "-fragment").text;
	
	this.vertex = this.createShader(gl, gl.VERTEX_SHADER, vertexSrc);
	this.fragment = this.createShader(gl, gl.FRAGMENT_SHADER, fragSrc);
	this.program = this.createProgram(gl, this.vertex, this.fragment);

	this.attributes = {};
	this.uniforms = {};

	this.init(gl);
}

Shader.prototype = {

	init: function(gl){
		this.attributes.position = gl.getAttribLocation(this.program, "Position");
	},

	createShader: function(context, type, source){
		var shader = context.createShader(type);
		context.shaderSource(shader, source);
		context.compileShader(shader);

		var success = context.getShaderParameter(shader, context.COMPILE_STATUS);
		if(success){

			switch(type) {
				case context.VERTEX_SHADER:
					this.vertex = shader;
					break;
				case context.FRAGMENT_SHADER:
					this.fragment = shader;
					break;
			}

			return shader;
		}
		else {
			console.log("Shader: ERROR " + context.getShaderInfoLog(shader));
			context.deleteShader(shader);
		}
	},

	createProgram: function(context, vertex, fragment){
		var program = context.createProgram();
		context.attachShader(program, vertex);
		context.attachShader(program, fragment);
		context.linkProgram(program);

		var success = context.getProgramParameter(program, context.LINK_STATUS);
		if(success){
			this.program = program;
			return program;
		}
		else {
			console.log("Shader program: ERROR " + context.getProgramInfoLog(program));
			context.deleteProgram(program);
		}
	}
};