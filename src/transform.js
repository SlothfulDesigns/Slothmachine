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
		var mat = mat3Multiply(this.scale, this.rotation);
		mat = mat3Multiply(mat, this.position);
		mat = mat3Multiply(mat, game.renderer.projection);

		return mat;
	},

	setPosition: function(x, y) {
		this.position[6] = x;
		this.position[7] = y;
	},

	setRotation: function(r) {
		var cos = Math.cos(r);
		var sin = Math.sin(r);

		this.position[0] = cos;
		this.position[1] = -sin;
		this.position[2] = sin;
		this.position[3] = cos;
	},

	setScale: function(sx, sy) {
		this.scale[0] = sx;
		this.scale[4] = sy;
	}
};
