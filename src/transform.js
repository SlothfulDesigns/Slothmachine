function Transform() {
	this.position = new identityMatrix();
	this.rotation = new identityMatrix();
	this.scale = new identityMatrix();
}

Transform.prototype = {
	getMatrix: function(){
		mat = mat4Multiply(this.position, this.rotation);
		mat = mat4Multiply(mat, this.scale);

		return mat;
	},

	setPosition: function(x, y) {
		this.position[3] = x;
		this.position[7] = y;
	},

	setRotation: function(a) {

		var rad = a * (Math.PI / 180); 
		var cos = Math.cos(rad);
		var sin = Math.sin(rad);

		this.rotation[0] = cos;
		this.rotation[1] = -sin;
		this.rotation[4] = sin;
		this.rotation[5] = cos;
	},

	setScale: function(sx, sy) {
		this.scale[0] = sx;
		this.scale[5] = sy;
	}
};
