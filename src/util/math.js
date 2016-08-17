/*
Doing my own math library because brain damage.
Has all the usefull mathematical stuff for vectors and matrixes.
*/


//vector mathses

function vec3(){
	return new Float32Array([
		0.0, 0.0, 0.0
	]);
}

function v3Add(v1, v2){
	return new Float32Array([
		v1[0] + v2[0],
		v1[1] + v2[1],
		v1[2] + v2[2],
	]);
}

function v3Sub(v1, v2){
	return new Float32Array([
		v1[0] - v2[0],
		v1[1] - v2[1],
		v1[2] - v2[2],
	]);
}

function v3Mult(v1, v2){
	return new Float32Array([
		v1[0] * v2[0],
		v1[1] * v2[1],
		v1[2] * v2[2],
	]);
}

function v3Length(v){
	return Math.sqrt((v[0] * v[0]) +
					 (v[1] * v[1]) +
					 (v[2] * v[2]));
}

function v3Normalize(v){
	var l = v3Length(v);
	return new Float32Array([
		v.x / l,
		v.y / l,
		v.z / l
	]);
}

function v3Cross(v1, v2){
	return new Float32Array([
		(v1[1] * v2[2]) - (v1[2] * v2[1]),
		(v1[2] * v2[0]) - (v1[0] * v2[2]),
		(v1[0] * v2[1]) - (v1[1] * v2[0]),
	]);
}

function v3Dot(v1, v2){
	return (v1[0] * v2[0]) +
		   (v1[1] * v2[1]) +
		   (v1[2] * v2[2]);
}

//matrix mathses
function identityMatrix(){
	return new Float32Array([
		1.0, 0.0, 0.0, 0.0,
		0.0, 1.0, 0.0, 0.0,
		0.0, 0.0, 1.0, 0.0,
		0.0, 0.0, 0.0, 1.0,
	]);
}

function Perspective(fov, aspect, zNear, zFar){
	var perspective = new identityMatrix();
	return perspective;
}

function LookAt(position, direction, up){

	var z = v3Normalize(v3Sub(position, direction));
	var y = v3Normalize(up);
	var x = v3Normalize(v3Cross(y, z));
	
	return new Float32Array([
		x[0], x[1], x[2], -v3Dot(x, position),
		y[0], y[1], y[2], -v3Dot(y, position),
		z[0], z[1], z[2], -v3Dot(z, position),
		0.0, 0.0, 0.0, 1.0
	]);
}

function mat2Multiply(a, b){
	return new Float32Array([
		a[0] * b[0] + a[1] * b[2],
		a[0] * b[1] + a[1] * b[3],

		a[2] * b[0] + a[3] * b[2],
		a[2] * b[1] + a[3] * b[3],
	]);
}

function mat3Multiply(a, b){
	return new Float32Array([
		a[0] * b[0] + a[1] * b[3] + a[2] * b[6],
		a[0] * b[1] + a[1] * b[4] + a[2] * b[7],
		a[0] * b[2] + a[1] * b[5] + a[2] * b[8],

		a[3] * b[0] + a[4] * b[3] + a[5] * b[6],
		a[3] * b[1] + a[4] * b[4] + a[5] * b[7],
		a[3] * b[2] + a[4] * b[5] + a[5] * b[8],

		a[6] * b[0] + a[7] * b[3] + a[8] * b[6],
		a[6] * b[1] + a[7] * b[4] + a[8] * b[7],
		a[6] * b[2] + a[7] * b[5] + a[8] * b[8],
	]);
}

function mat4Multiply(a, b){
	return new Float32Array([
		a[0] * b[0] + a[1] * b[4] + a[2] * b[8] + a[3] * b[12],
		a[0] * b[1] + a[1] * b[5] + a[2] * b[9] + a[3] * b[13],
		a[0] * b[2] + a[1] * b[6] + a[2] * b[10] + a[3] * b[14],
		a[0] * b[3] + a[1] * b[7] + a[2] * b[11] + a[3] * b[15],

		a[4] * b[0] + a[5] * b[4] + a[6] * b[8] + a[7] * b[12],
		a[4] * b[1] + a[5] * b[5] + a[6] * b[9] + a[7] * b[13],
		a[4] * b[2] + a[5] * b[6] + a[6] * b[10] + a[7] * b[14],
		a[4] * b[3] + a[5] * b[7] + a[6] * b[11] + a[7] * b[15],

		a[8] * b[0] + a[9] * b[4] + a[10] * b[8] + a[11] * b[12],
		a[8] * b[1] + a[9] * b[5] + a[10] * b[9] + a[11] * b[13],
		a[8] * b[2] + a[9] * b[6] + a[10] * b[10] + a[11] * b[14],
		a[8] * b[3] + a[9] * b[7] + a[10] * b[11] + a[11] * b[15],

		a[12] * b[0] + a[13] * b[4] + a[14] * b[8] + a[15] * b[12],
		a[12] * b[1] + a[13] * b[5] + a[14] * b[9] + a[15] * b[13],
		a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14],
		a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15],
	]);
}
