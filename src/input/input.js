function Input(){
	window.addEventListener("keydown", this.onKeyDown, true);
	window.addEventListener("keyup", this.onKeyUp, true);
}

Input.prototype = {
	onKeyDown: function(key){
		switch (key.keyCode) {
			case 17:
				game.player.velocity.z = -1;
				break;
			case 32:
				game.player.velocity.z = 1;
				break;
			case 37:
				game.player.velocity.x = -1;
				break;
			case 38:
				game.player.velocity.y = 1;
				break;
			case 39:
				game.player.velocity.x = 1;
				break;
			case 40:
				game.player.velocity.y = -1;
				break;
		}
	},

	onKeyUp: function(key) {

		switch (key.keyCode) {
			case 32:
			case 17:
				game.player.velocity.z = 0;
			break;
			
			case 37:
			case 39:
				game.player.velocity.x = 0;
				break;
			case 38:
			case 40:
				game.player.velocity.y = 0;
				break;
		}
	}
};
