function Input(){
	window.addEventListener("keydown", onKeyDown, true);
	window.addEventListener("keyup", onKeyUp, true);
}

Input.prototype = {
	function onKeyDown(key){
		switch (key.keyCode) {
			case 32:
				game.player.shoot();
				break;
			case 37:
				game.player.velocity.x = -5;
				break;
			case 38:
				game.player.velocity.y = -5;
				break;
			case 39:
				game.player.velocity.x = 5;
				break;
			case 40:
				game.player.velocity.y = 5;
				break;
		}
	}

	function onKeyUp(key) {

		switch (key.keyCode) {
			case 37:
				game.player.velocity.x += 5;
				break;
			case 38:
				game.player.velocity.y += 5;
				break;
			case 39:
				game.player.velocity.x -= 5;
				break;
			case 40:
				game.player.velocity.y -= 5;
				break;
		}
	}
}

