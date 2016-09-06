/*jshint esversion: 6*/

class Light extends EntityComponent { 
	constructor(parent){
		super(parent);

		this.light = null;
		this.color = 0xffffff;
		this.intensity = 10.0;
		this.range = 1000.0;
		this.decay = 2.0;
	}

	update() {
		super.update();
		
		this.light.position.x = this.parent.position.x;
		this.light.position.y = this.parent.position.y;
		this.light.position.z = this.parent.position.z;
	}

	setIntensity(intensity){
		this.light.intensity = intensity;
	}

	setColor(color){
		this.light.color = new THREE.Color(color);
	}
}

class PointLight extends Light {
	constructor(parent){
		super(parent);

		this.light = new THREE.PointLight(this.color,
										  this.intensity,
										  this.range,
										  this.decay);
		this.light.Visualize();

		this.parent.engine.scene.add(this.light);
	}
}
