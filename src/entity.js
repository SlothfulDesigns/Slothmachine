function Entity() {
	//simplified stuffs
	this.position	= {x: 0.0, y: 0.0, z: 0.0};
	this.scale		= {x: 0.5, y: 0.5, z: 0.5};
	this.velocity   = {x: 0.0, y: 0.0, z: 0.0};
	this.rotation   = {x: 0.0, y: 0.0, z: 0.0};
	this.color      = {r: 0.0, g: 0.0, b: 0.0};
	this.speed      = 0.1;

	//position, rotation & scale matrices
	this.alive			= false;
	this.item			= false;
	this.equippable		= false;
	this.enemy			= false;

	//init rendering stuffs
	var geometry = new THREE.BoxGeometry( 1, 1, 1 );
	var material = new THREE.MeshBasicMaterial( { color: 0x666666 } );
	this.mesh = new THREE.Mesh( geometry, material );
	game.scene.add( this.mesh );
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
