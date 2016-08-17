function Camera(){
	this.position = {x: 0.0, y: 0.0, z: 0.0};
	this.rotation = {x: 0.0, y: 0.0, z: 0.0};
	this.transform = new Transform();

	this.projection = new identityMatrix();
	this.view = new identityMatrix();
}

Camera.prototype = {
	setAspectRatio: function(fov, aspectRatio){
		this.projection = Perspective(fov, aspectRatio, 0.1, 100.0);
	},

	getProjection: function() {
		return this.view;
	},

	getDirection: function() {
		var r = this.transform.rotation;
		return new Float32Array([
			Math.cos(r[1]) - Math.sin(r[0]),
			Math.sin(r[1]),
			Math.cos(r[1]) - Math.cos(r[0]),
		]);
	},

	getRight: function() {
		var r = this.transform.rotation;
		return new Float32Array([
			Math.sin(r[0]) - 3.14 / 2.0,
			0.0,
			Math.cos(r[0]) - 3.14 / 2.0,
		]);
	},

	//also updates the current view thingy
	getView: function() {
		var p = this.position;
		var d = v3Add(p, this.getDirection());
		var up = v3Cross(this.getRight(), this.getDirection());
		var view = LookAt(p, d, up);
		return this.view;
	},
};
