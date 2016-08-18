function Entity() {
	//simplified stuffs
	this.position	= {x: 0.0, y: 0.0, z: 0.0};
	this.scale		= {x: 1.0, y: 1.0, z: 0.0};
	this.velocity   = {x: 0.0, y: 0.0, z: 0.0};
	this.rotation   = {x: 0.0, y: 0.0, z: 0.0};

	this.color      = {r: 0.0, g: 0.0, b: 0.0};

	this.speed      = 0.01;

	//position, rotation & scale matrices
	this.transform = new Transform();

	this.alive		= false;
	this.item		= false;
	this.equippable = false;
	this.enemy		= false;
	this.render		= false;

	this.shader = null;

	//default mesh: a simple plane
	this.mesh = new Float32Array(
		[0.0, 0.0, 0.0,
		 0.0, 1.0, 0.0,
		 1.0, 0.0, 0.0,
		 1.0, 0.0, 0.0,
		 1.0, 1.0, 0.0,
		 0.0, 1.0, 0.0]);

	this.uv = new Float32Array([
		0.0, 0.0,
		0.0, 1.0,
		1.0, 1.0,
		1.0, 0.0
	]);

	this.normals = new Float32Array([
		0.0, -1.0, 0.0
	]);
}

Entity.prototype = {
	init: function(gl) {

		var vbo = {
			position: {
				buffer: gl.createBuffer(),
				itemSize: 3
			},
			normal: {
				buffer: gl.createBuffer(),
				itemSize: 3
			},
			tex: {
				buffer: gl.createBuffer(),
				itemSize: 2
			},
		};

		//vertex position
		var aPos = this.shader.attributes.position;
		gl.bindBuffer(gl.ARRAY_BUFFER, vbo.position.buffer);
		gl.bufferData(gl.ARRAY_BUFFER, this.mesh, gl.STATIC_DRAW);
		gl.enableVertexAttribArray(aPos);
		gl.vertexAttribPointer(aPos, vbo.position.itemSize, gl.FLOAT, false, 0, 0);

		//how the fuck do I?
		/*
		//vertex normal
		var aNorm = this.shader.attributes.normal;
		gl.bindBuffer(gl.ARRAY_BUFFER, vbo.normalBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, this.normals, gl.STATIC_DRAW);
		gl.enableVertexAttribArray(aNorm);
		gl.vertexAttribPointer(aNorm, 3, gl.FLOAT, false, 0, 0);

		//texture coordinates (aka. uv map for you artist fartists)
		var aUv = this.shader.attributes.texcoords;
		gl.bindBuffer(gl.ARRAY_BUFFER, texBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, this.uv, gl.STATIC_DRAW);
		gl.enableVertexAttribArray(aUv);
		gl.vertexAttribPointer(aUv, 2, gl.FLOAT, false, 0, 0);
		*/
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

		if(this.velocity.x !== 0 || this.velocity.y !== 0 || this.velocity.z !== 0) {
			this.position.x += this.velocity.x * this.speed;
			this.position.y += this.velocity.y * this.speed;
			this.position.z += this.velocity.z * this.speed;
		}
		
		this.transform.setPosition(this.position.x, this.position.y, this.position.z);
		this.transform.setRotation(this.rotation.x, this.rotation.y, this.rotation.z);
		this.transform.setScale(this.scale.x, this.scale.y, this.scale.z);
	},

	draw: function(gl){

		if (!this.render) return;

		//bind the shader
		gl.useProgram(this.shader.program);

		var res = new Float32Array([game.renderer.width, game.renderer.height]);

		//update uniforms
		gl.uniform2f(this.shader.uniforms.resolution, gl.FALSE, res);
		gl.uniformMatrix4fv(this.shader.uniforms.model, gl.FALSE, this.transform.getMatrix());
		gl.uniformMatrix4fv(this.shader.uniforms.view, gl.FALSE, game.camera.getView());
		gl.uniformMatrix4fv(this.shader.uniforms.projection, gl.FALSE, game.camera.getProjection());

		//draw vertex array
		var numIndices = this.mesh.length / 3;
		gl.drawArrays(gl.TRIANGLES,0, numIndices);
	}
};
