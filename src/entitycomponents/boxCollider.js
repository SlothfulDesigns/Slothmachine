/*jshint esversion: 6*/

class BoxCollider extends EntityComponent {
	constructor(parent) {
		super(parent);

		var p = parent.position;
		var s = parent.scale;

		this.position	= {x: p.x, y: p.y, z: p.z};
		this.scale		= {x: s.x, y: s.y, z: s.z};

		this.boundingBox = {min_x: 0.0, max_x: 0.0,
							min_y: 0.0, max_y: 0.0,
							min_z: 0.0, max_z: 0.0};

		//don't really need this yet, let's go with AABB
		//this.rotation   = {x: 0.0, y: 0.0, z: 0.0};
	}

	update(){
		super.update();

		this.position.x = this.parent.position.x;
		this.position.y = this.parent.position.y;
		this.position.z = this.parent.position.z;

		this.scale.x = this.parent.scale.x;
		this.scale.y = this.parent.scale.y;
		this.scale.z = this.parent.scale.z;

		/*
		this.rotation.x = this.parent.rotation.x;
		this.rotation.y = this.parent.rotation.y;
		this.rotation.z = this.parent.rotation.z;
		*/

		var box_x = 1 - (this.position.x + (this.scale.x / 2));
		var box_y = 1 - (this.position.y + (this.scale.y / 2));
		var box_z = 1 - (this.position.z + (this.scale.z / 2));

		this.boundingBox.max_x	=  box_x;
		this.boundingBox.max_y	=  box_y;
		this.boundingBox.max_z	=  box_z;
		this.boundingBox.min_x	= -box_x;
		this.boundingBox.min_y	= -box_y;
		this.boundingBox.min_z	= -box_z;
	}

	collides(targetCollider){
		var collides = false;
		var a = this.boundingBox;
		var b = targetCollider.boundingBox;

		collides = (a.min_x <= b.max_x && a.max_x >= b.min_x) &&
				   (a.min_y <= b.max_y && a.max_y >= b.min_y) &&
				   (a.min_z <= b.max_z && a.max_z >= b.min_z);

		return collides;
	}
}
