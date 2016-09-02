/*jshint esversion: 6*/
class Entity {
	constructor(engine) {

		this.engine = engine;
		
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

		this.components = [];

		engine.entities.push(this);
	}

	update() {
		this.components.forEach(function(component){
			component.update();
		});
	}

	render(){
		this.components.forEach(function(component){
			component.render();
		});
	}
}
