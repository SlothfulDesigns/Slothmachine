function Slothmachine(canvas) {
	console.log("Slothmachine: Initializing Slothmachine...")

	var canvas = document.getElementById(canvas);

	if (!canvas) {
		console.log("Error: can't find canvas")
	}

	Renderer(canvas);
}
