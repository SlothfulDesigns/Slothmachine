function Entity() {
	//simplified stuffs
	this.position	= {x: 0.0, y: 0.0, z: 0.0};
	this.scale		= {x: 1.0, y: 1.0, z: 1.0};
	this.velocity   = {x: 0.0, y: 0.0, z: 0.0};
	this.rotation   = {x: 0.0, y: 0.0, z: 0.0};
	this.color      = 0x404040;
	this.speed      = 0.1;

	//position, rotation & scale matrices
	this.alive			= false;
	this.item			= false;
	this.equippable		= false;
	this.enemy			= false;

	//init rendering stuffs
	var geometry = new THREE.BoxGeometry(this.scale.x, this.scale.y, this.scale.z);
	var material = new THREE.MeshStandardMaterial( { color: this.color } );
	material.roughness = 0.2;
	material.metallic = 0.4;
	this.mesh = new THREE.Mesh( geometry, material );
}

Entity.prototype = {
	init: function() {
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
	},

	render: function(){
		this.mesh.position.x = this.position.x;
		this.mesh.position.y = this.position.y;
		this.mesh.position.z = this.position.z;

		this.mesh.rotation.x = this.rotation.x;
		this.mesh.rotation.y = this.rotation.y;
		this.mesh.rotation.z = this.rotation.z;
	}
};
