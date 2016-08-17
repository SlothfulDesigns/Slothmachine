function Input(){
	window.addEventListener("keydown", this.onKeyDown, true);
	//window.addEventListener("keyup", this.onKeyUp, true);
}

Input.prototype = {
	onKeyDown: function(key){
		switch (key.keyCode) {
			case 32:
				game.player.shoot();
				break;
			case 37:
				game.player.position.x = -5;
				break;
			case 38:
				game.player.position.y = -5;
				break;
			case 39:
				game.player.position.x = 5;
				break;
			case 40:
				game.player.position.y = 5;
				break;
		}
	},

	onKeyUp: function(key) {

		switch (key.keyCode) {
			case 37:
				game.player.position.x += 5;
				break;
			case 38:
				game.player.position.y += 5;
				break;
			case 39:
				game.player.position.x -= 5;
				break;
			case 40:
				game.player.position.y -= 5;
				break;
		}
	}
};
