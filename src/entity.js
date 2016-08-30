function Entity() {
	//simplified stuffs
	this.position	= {x: 0.0, y: 0.0, z: 0.0};
	this.scale		= {x: 1.0, y: 1.0, z: 1.0};
	this.velocity   = {x: 0.0, y: 0.0, z: 0.0};
	this.rotation   = {x: 0.0, y: 0.0, z: 0.0};
	this.color      = {r: 0.0, g: 0.0, b: 0.0};
	this.speed      = 0.01;

	//position, rotation & scale matrices
	this.transform      = new Transform();
	this.alive			= false;
	this.item			= false;
	this.equippable		= false;
	this.enemy			= false;
	this.render			= false;
	this.loaded			= false;
	this.textureLoaded	= false;
	this.shader			= null;
	this.texture		= null;
	this.vbo			= null;

	//default mesh: a simple plane
	this.mesh = new Float32Array(
		//front
		[-1.0, -1.0,  1.0,
		  1.0, -1.0,  1.0,
		  1.0,  1.0,  1.0,
		 -1.0,  1.0,  1.0,

		 //back
		 -1.0, -1.0, -1.0,
		 -1.0,  1.0, -1.0,
		  1.0,  1.0, -1.0,
		  1.0, -1.0, -1.0,

		 //top
		 -1.0,  1.0, -1.0,
		 -1.0,  1.0,  1.0,
		  1.0,  1.0,  1.0,
		  1.0,  1.0, -1.0,

		 //bottom
		 -1.0, -1.0, -1.0,
		  1.0, -1.0, -1.0,
		  1.0, -1.0,  1.0,
		 -1.0, -1.0,  1.0,

		 //right
		  1.0, -1.0, -1.0,
		  1.0,  1.0, -1.0,
		  1.0,  1.0,  1.0,
		  1.0, -1.0,  1.0,

		 //leftt
		 -1.0, -1.0, -1.0,
		 -1.0, -1.0,  1.0,
		 -1.0,  1.0,  1.0,
		 -1.0,  1.0, -1.0,
		 ]);

	this.indices = new Uint16Array([
		0, 1, 2,    0, 2, 3,  //front
		4, 5, 6,    4, 6, 7,  //back
		8, 9, 10,   8, 10, 11,  //top
		12, 13, 14,    12, 14, 15,  //bottom
		16, 17, 18,    16, 18, 19,  //right
		20, 21, 22,    20, 22, 23,  //left
	]);

	this.uv = new Float32Array([
		//front
		0.0, 0.0,
		0.0, 1.0,
		1.0, 0.0,
		1.0, 1.0,

		//back
		0.0, 0.0,
		1.0, 0.0,
		1.0, 1.0,
		0.0, 1.0,

		//top
		0.0, 0.0,
		1.0, 0.0,
		1.0, 1.0,
		0.0, 1.0,

		//bottom
		0.0, 0.0,
		1.0, 0.0,
		1.0, 1.0,
		0.0, 1.0,

		//right
		0.0, 0.0,
		1.0, 0.0,
		1.0, 1.0,
		0.0, 1.0,

		//left
		0.0, 0.0,
		1.0, 0.0,
		1.0, 1.0,
		0.0, 1.0,
	]);

	this.normals = new Float32Array([
		0.0, -1.0, 0.0
	]);
}

Entity.prototype = {
	init: function(gl) {
		var vbo = {
			position: {
				data: this.mesh,
				buffer: gl.createBuffer(),
				itemSize: 3,
				numItems: this.mesh.length / 3
			},
			indices: {
				data: this.indices,
				buffer: gl.createBuffer(),
				itemSize: 1,
				numItems: this.indices.length
			},
			tex: {
				data: this.uv,
				buffer: gl.createBuffer(),
				itemSize: 2,
				numItems: this.uv.length / 2
			},
		};

		this.vbo = vbo;

		//vertex position
		gl.bindBuffer(gl.ARRAY_BUFFER, vbo.position.buffer);
		gl.bufferData(gl.ARRAY_BUFFER, vbo.position.data, gl.STATIC_DRAW);
		gl.enableVertexAttribArray(0);
		gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);

		//texture coordinates (aka. uv map for you artist fartists)
		gl.enableVertexAttribArray(2);
		gl.bindBuffer(gl.ARRAY_BUFFER, vbo.tex.buffer);
		gl.bufferData(gl.ARRAY_BUFFER, vbo.tex.data, gl.STATIC_DRAW);
		gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 0, 0);

		//index buffer
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vbo.indices.buffer);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, vbo.indices.data, gl.STATIC_DRAW);

		this.loaded = true;
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
		//bind the shader
		gl.useProgram(this.shader.program);

		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, this.texture.texture);
		gl.uniform1i(this.shader.uniforms.texture, 0);

		//update uniforms
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.vbo.indices.buffer);

		gl.uniformMatrix4fv(this.shader.uniforms.model, gl.FALSE, this.transform.getMatrix());
		gl.uniformMatrix4fv(this.shader.uniforms.view, gl.FALSE, game.camera.getView());
		gl.uniformMatrix4fv(this.shader.uniforms.projection, gl.FALSE, game.camera.getProjection());

		//draw stuff
		gl.drawElements(gl.TRIANGLES, this.vbo.indices.numItems, gl.UNSIGNED_SHORT, 0);
	}
};
