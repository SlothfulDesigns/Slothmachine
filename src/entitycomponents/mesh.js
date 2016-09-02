/*jshint esversion: 6*/

class Mesh extends EntityComponent {

	constructor(parent){
		super(parent);
		this.geometry = new THREE.BoxGeometry(parent.scale.x, parent.scale.y, parent.scale.z);
		this.material = new THREE.MeshStandardMaterial( { color: parent.color } );
		this.mesh = new THREE.Mesh( this.geometry, this.material );
		this.parent.engine.scene.add(this.mesh);
	}

	update() {
		super.update();

		this.mesh.position.x = this.parent.position.x;
		this.mesh.position.y = this.parent.position.y;
		this.mesh.position.z = this.parent.position.z;

		this.mesh.rotation.x = this.parent.rotation.x;
		this.mesh.rotation.y = this.parent.rotation.y;
		this.mesh.rotation.z = this.parent.rotation.z;
	}
}
