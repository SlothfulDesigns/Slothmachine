function Camera(){
	this.position = {x: 0.0, y: 0.0, z: 0.0};
	this.rotation = {x: 0.0, y: 0.0, z: 0.0};
	this.transform = new Transform();

	this.projection = new indentityMatrix();
	this.view = new identityMatrix();
}

Camera.prototype = {
	setAspectRation: function(fov, aspectRatio){
		this.projection = perspective(fov, aspectRation, 0.1, 100.0);
	},

	//also updates the current view thingy
	getView: function() {
		var p = this.position;
		var d = v3Add(p, this.getDirection());
		var view = lookAt(p, d, up);
		return this.view;
	}
};
