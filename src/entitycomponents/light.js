/*jshint esversion: 6*/

class Light extends EntityComponent { 
	constructor(parent){
		super(parent);

		this.color = 0xFFFFFF;
		this.intensity = 1.0;
		this.range = 1000.0;
	}

	update() {
		super.update();
		
		this.light.position.x = this.parent.position.x;
		this.light.position.y = this.parent.position.y;
		this.light.position.z = this.parent.position.z;
	}

	setIntensity(intensity){
		this.intensity = intensity;
	}
}

class PointLight extends Light {
	constructor(parent){
		super(parent);

		this.light = new THREE.PointLight(this.parent.color, this.parent.intensity, this.parent.range);
		this.parent.engine.scene.add(this.light);
	}

	setIntensity(intensity){
		super.setIntensity();
		this.light.intensity = intensity;
	}
}
