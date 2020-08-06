function getVertices() {

vertices=[vec4(-20, 0.0, -20,1.0),
	vec4(-20,0.0,20,1.0),
	vec4(20,0.0,20,1.0),
	vec4(20,0.0,-20,1.0),
	]
return vertices;
}


function getFaces() {

indexList=[0,1,2,
	0,1,3,
	5,1,4,
	4,1,0,
	]
return indexList;
}