function Entity() {
	//simplified stuffs
	this.position	= {x: 0.0, y: 0.0, z: 0.0};
	this.rotation	= {x: 0.0, y: 0.0, z: 0.0};
	this.scale		= {x: 1.0, y: 1.0, z: 1.0};
	this.velocity   = {x: 0.0, y: 0.0, z: 0.0};
	this.color      = {r: 0.0, g: 0.0, b: 0.0};

	//position, rotation & scale matrices
	this.transform = new Transform();
	
	this.alive		= false;
	this.item		= false;
	this.equippable = false;
	this.enemy		= false;
	this.render		= false;

	this.shader = null;

	//default mesh: a simple cube
	this.mesh = new Float32Array(
		[0.0, 0.0,
		 0.0, 1.0,
		 1.0, 0.0,
		 1.0, 0.0,
		 1.0, 1.0,
		 0.0, 1.0]);
}

Entity.prototype = {
	init: function(gl) {
		var positionBuffer = gl.createBuffer();
		var aPos = this.shader.attributes.position;

		gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.mesh), gl.STATIC_DRAW);

		//attributes for shader

		//position
		gl.enableVertexAttribArray(aPos);
		gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
	},

	spawn: function(){

	},

	destroy: function(){
		
	},

	aiTick: function(){
		
	},

	physicsTick: function(){
		
	},

	update: function(){
		this.transform.setPosition(this.position.x, this.position.y);
		//this.transform.setRotation(0);
		this.transform.setScale(this.scale.x, this.scale.y);
	},

	draw: function(gl){

		if(!this.render) return;

		//bind the shader
		gl.useProgram(this.shader.program);

		var res = new Float32Array([game.renderer.width, game.renderer.height]);

		//update uniforms
		gl.uniform2f(this.shader.uniforms.resolution, gl.FALSE, res);
		gl.uniformMatrix3fv(this.shader.uniforms.translation, gl.FALSE, this.transform.getMatrix());

		//draw vertex array
		var numIndices = this.mesh.length / 2; //because one x/y pair is one indice
		gl.drawArrays(gl.TRIANGLES,0, numIndices);
	}
};
