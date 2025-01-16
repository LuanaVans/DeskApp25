// DATOS
const alumnos = [
	[
		"Alejandro",
		"Primero",
		1990,
		"https://images.unsplash.com/photo-1499996860823-5214fcc65f8f"
	],
	[
		"Pepito McFly",
		"Primero",
		1991,
		"https://images.unsplash.com/photo-1441786485319-5e0f0c092803"
	],
	[
		"Isabel",
		"Tercero",
		1987,
		"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
	],
	[
		"María",
		"Segundo",
		1989,
		"https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453"
	]
];

// PINTAR
function pintar() {
	let libreta = "";

	// BUCLE
	for (i = 0; i < alumnos.length; i++) {
		libreta += "<li>";
		libreta += "<img src='" + alumnos[i][3] + "'>";
		libreta += "<p class='curso'>" + alumnos[i][1] + "</p>";

		libreta += "<h2>" + alumnos[i][0] + "</h2>";
		libreta += "<p class='anio'>" + alumnos[i][2] + "</p>";
		libreta += "</li>";
	}
	//console.log(libreta);
	document.querySelector("ul").innerHTML = libreta;
}

function agregaralumno() {
	// 	obtener valores de los 4 inputs y meterlos en variables
	let nombre = document.querySelector("#nombre").value;
	let curso = document.querySelector("#curso").value;
	let anio = document.querySelector("#anio").value;
	let foto = document.querySelector("#foto").value;

	// 	añadir esos valores a la array
	alumnos.push([nombre,curso,anio,foto]);

	// 	redibujar todo el contenido de la página web
	pintar();
	
	
	//Vaciar valores del formulario tras haber insertado al alumno
		document.querySelector("#nombre").value="";
	document.querySelector("#curso").value="";
	document.querySelector("#anio").value="";
	document.querySelector("#foto").value="";
}

// llamar a la función
pintar();