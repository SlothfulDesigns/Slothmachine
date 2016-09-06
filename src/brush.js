function Brush() {
	this.position	= {x: 0.0, y: 0.0, z: 0.0};
	this.scale		= {x: 1.0, y: 1.0, z: 1.0};
	this.rotation   = {x: 0.0, y: 0.0, z: 0.0};
	this.color      = 0x808080; //TODO rgb to hex conversion?

	//TODO: cube/plane/cylinder/ball/mesh etc selector
	this.geometry = new THREE.BoxGeometry(this.scale.x, this.scale.y, this.scale.z);
	this.material = new THREE.MeshStandardMaterial( { color: this.color } );
	this.material.roughness = 1.0;
	this.material.metallic = 0.1;

	this.mesh = null;
	this.solid = true;

	//init mesh from defaults
	this.updateMesh();
}

Brush.prototype = {
	setScale: function(x, y, z){
		this.scale.x = x;
		this.scale.y = y;
		this.scale.z = z;

		//update mesh with new scaling
		this.updateMesh();
	},

	setColor: function(hex){
		//update mesh with new color
		this.color = hex;
		this.updateMesh();
	},

	setPosition: function(x, y, z){
		this.position.x = x;
		this.position.y = y;
		this.position.z = z;
	},

	updateMesh: function(){

		//update the mesh geometry and material
		this.geometry = new THREE.BoxGeometry(this.scale.x, this.scale.y, this.scale.z);
		this.material = new THREE.MeshStandardMaterial( { color: this.color } );
		this.material.roughness = 0.8;
		this.material.metallic = 0.5;
		this.mesh = new THREE.Mesh( this.geometry, this.material );
		this.mesh.castShadow = true;
		this.mesh.receiveShadow = true;

		//update position and rotation
		this.mesh.position.x = this.position.x;
		this.mesh.position.y = this.position.y;
		this.mesh.position.z = this.position.z;

		this.mesh.rotation.x = this.rotation.x;
		this.mesh.rotation.y = this.rotation.y;
		this.mesh.rotation.z = this.rotation.z;
	},

	render: function() {
		
	}
};
