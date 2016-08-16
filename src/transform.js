function Transform() {
	this.position = new Float32Array([
		1.0, 0.0, 0.0,
		0.0, 1.0, 0.0,
		0.0, 0.0, 1.0,
	]);

	this.rotation = new Float32Array([
		1.0, 0.0, 0.0,
		0.0, 1.0, 0.0,
		0.0, 0.0, 1.0,
	]);

	this.scale = new Float32Array([
		1.0, 0.0, 0.0,
		0.0, 1.0, 0.0,
		0.0, 0.0, 1.0,
	]);
}

Transform.prototype = {
	getMatrix: function(){
		var mat = matrixMultiply(this.position, this.rotation);
		mat = matrixMultiply(mat, this.scale);
		mat = matrixMultiply(mat, game.renderer.projection);

		return mat;
	},

	setPosition: function(x, y) {
		this.position[6] = x;
		this.position[7] = y;
	},

	setRotation: function(a) {

		var rad = (360.0 - a) * (Math.PI / 180.0); 
		var cos = Math.cos(rad);
		var sin = Math.sin(rad);

		this.rotation[0] = cos;
		this.rotation[1] = -sin;
		this.rotation[3] = sin;
		this.rotation[4] = cos;
	},

	setScale: function(sx, sy) {
		this.scale[0] = sx;
		this.scale[4] = sy;
	}
};
