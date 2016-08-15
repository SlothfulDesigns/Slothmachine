function Entity() {
	this.position	= {x: 0.0, y: 0.0, z: 0.0};
	this.rotation	= {x: 0.0, y: 0.0, z: 0.0};
	this.scale		= {x: 0.0, y: 0.0, z: 0.0};
	this.velocity   = {x: 0.0, y: 0.0, z: 0.0};
	
	this.alive		= false;
	this.item		= false;
	this.equippable = false;
	this.enemy		= false;
	this.render		= false;

	this.shader = null;
	this.mesh = [0.0, 0.0,
				 0.0, 1.0,
				 1.0, 0.0,
				 1.0, 1.0];
}

Entity.prototype = {
	init: function(gl) {
		var positionBuffer = gl.createBuffer();
		var aPos = this.shader.attributes.position;

		gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.mesh), gl.STATIC_DRAW);
		gl.enableVertexAttribArray(aPos);
		gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
	},

	spawn: function(){
		
	},

	kill: function(){
		
	},

	attack: function(targer){
		
	},

	aiTick: function(){
		
	},

	physicsTick: function(){
		
	},

	update: function(){
		
	},

	draw: function(gl){

		//bind the shader
		gl.useProgram(this.shader.program);
		
		//draw vertex array
		var numIndices = this.mesh.length / 2; //because one x/y pair is one indice
		gl.drawArrays(gl.TRIANGLES,0, numIndices);
	}
};