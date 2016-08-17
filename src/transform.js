function Transform() {
	this.position = new Float32Array([
		1.0, 0.0,
		0.0, 1.0
	]);

	this.rotation = new Float32Array([
		1.0, 0.0,
		0.0, 1.0
	]);

	this.scale = new Float32Array([
		1.0, 0.0,
		0.0, 1.0
	]);
}

Transform.prototype = {
	getMatrix: function(){
		var mat = new Float32Array([
			1.0, 0.0,
			0.0, 1.0
		]);
		mat = mat2Multiply(mat, this.position);
		mat = mat2Multiply(mat, this.rotation);
		mat = mat2Multiply(mat, this.scale);
		//mat = mat2Multiply(mat, game.renderer.projection);

		return mat;
	},

	setPosition: function(x, y) {
		this.position[2] = x;
		this.position[3] = y;
	},

	setRotation: function(a) {

		var rad = a * (Math.PI / 180); 
		var cos = Math.cos(rad);
		var sin = Math.sin(rad);

		this.rotation[0] = cos;
		this.rotation[1] = -sin;
		this.rotation[2] = sin;
		this.rotation[3] = cos;
	},

	setScale: function(sx, sy) {
		this.scale[0] = sx;
		this.scale[3] = sy;
	}
};
