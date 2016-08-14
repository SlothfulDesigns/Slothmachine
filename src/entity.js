function Entity(){
	this.position	= {0.0, 0.0, 0.0};
	this.rotation	= {0.0, 0.0, 0.0};
	this.scale		= {0.0, 0.0, 0.0};
	this.velocity   = {0.0, 0.0, 0.0};
	
	this.alive		= false;
	this.item = false;
	this.equippable = false;
	this.enemy = false;
	this.render		= false;
}

Entity.prototype = {
	init() {
		
	},

	spawn(){
		
	},

	kill(){
		
	},

	attack(targer){
		
	},

	aiTick(){
		
	},

	update(){
		
	},
}
