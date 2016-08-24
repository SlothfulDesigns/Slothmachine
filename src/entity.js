function Entity() {
	//simplified stuffs
	this.position	= {x: 0.0, y: 0.0, z: 0.0};
	this.scale		= {x: 0.5, y: 0.5, z: 0.0};
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
	this.loaded     = false;

	this.shader = null;
	this.texture = null;
	this.vbo = null;

	//default mesh: a simple plane
	this.mesh = new Float32Array(
		[-1.0, -1.0,  0.0,
		  1.0, -1.0,  0.0,
		  1.0,  1.0,  0.0,
		 -1.0,  1.0,  0.0,
		 ]);

	this.indices = new Uint16Array([
		0, 1, 2,
		0, 2, 3
	]);

	this.uv = new Float32Array([
		0.0, 0.0,
		1.0, 0.0,
		1.0, 1.0,
		0.0, 1.0
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
			normal: {
				data: this.normals,
				buffer: gl.createBuffer(),
				itemSize: 3,
				numItems: this.normals.length / 3
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
		var aPos = this.shader.attributes.position;
		gl.bindBuffer(gl.ARRAY_BUFFER, vbo.position.buffer);
		gl.bufferData(gl.ARRAY_BUFFER, vbo.position.data, gl.STATIC_DRAW);
		gl.enableVertexAttribArray(aPos);
		gl.vertexAttribPointer(aPos, vbo.position.itemSize, gl.FLOAT, false, 0, 0);

		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vbo.indices.buffer);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, vbo.indices.data, gl.STATIC_DRAW);

		/*
		//how the fuck do I?
		//vertex normal
		var aNorm = this.shader.attributes.normal;
		gl.bindBuffer(gl.ARRAY_BUFFER, vbo.normal.buffer);
		gl.bufferData(gl.ARRAY_BUFFER, this.normals, gl.STATIC_DRAW);
		gl.enableVertexAttribArray(aNorm);
		gl.vertexAttribPointer(aNorm, vbo.normal.itemSize, gl.FLOAT, false, 0, 0);
		*/

		//texture coordinates (aka. uv map for you artist fartists)
		var aUv = this.shader.attributes.texcoords;
		gl.bindBuffer(gl.ARRAY_BUFFER, vbo.tex.buffer);
		gl.bufferData(gl.ARRAY_BUFFER, vbo.tex.data, gl.STATIC_DRAW);
		gl.enableVertexAttribArray(aUv);
		gl.vertexAttribPointer(aUv, vbo.tex.itemSize, gl.FLOAT, false, 0, 0);

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

		if (!this.loaded || !this.render){
			console.log("not drawing " + this);
			return;
		} 

		//bind the shader
		gl.useProgram(this.shader.program);

		var res = new Float32Array([game.renderer.width, game.renderer.height]);

		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, this.texture.texture);
		gl.uniform1i(gl.getUniformLocation(this.shader.program, "texture"), 0);

		//update uniforms
		gl.uniform2f(this.shader.uniforms.resolution, gl.FALSE, res);
		gl.uniformMatrix4fv(this.shader.uniforms.model, gl.FALSE, this.transform.getMatrix());
		gl.uniformMatrix4fv(this.shader.uniforms.view, gl.FALSE, game.camera.getView());
		gl.uniformMatrix4fv(this.shader.uniforms.projection, gl.FALSE, game.camera.getProjection());

		//draw stuff
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.vbo.indices.buffer);
		gl.drawElements(gl.TRIANGLES, this.vbo.indices.numItems, gl.UNSIGNED_SHORT, 0);
	}
};
