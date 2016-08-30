function Texture(entity, gl, src){
	this.texture = gl.createTexture();
	this.image = new Image();
	this.image.onload = function() { imageLoaded(entity, gl); };
	this.image.src = "res/" + src;
}

function imageLoaded(entity, gl){
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);
	gl.bindTexture(gl.TEXTURE_2D, entity.texture.texture);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, entity.texture.image);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	gl.bindTexture(gl.TEXTURE_2D, null);
	entity.textureLoaded = true;
}

