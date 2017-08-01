var personas = [

                {
                    "nombre": "Roman Gomez",
                    "edad": 35
                }, {
                    "nombre": "Mario Perez",
                    "edad": 39
                }, {
                    "nombre": "Ramiro Lopez",
                    "edad": 45
                }, {
                    "nombre": "Juan Gonzalez",
                    "edad": 25
                }, {
                    "nombre": "Gustavo Pua",
                    "edad": 32
                }, {
                    "nombre": "Marlene Morales",
                    "edad": 39
                }, {
                    "nombre": "Ivan Diaz",
                    "edad": 41
                }, {
                    "nombre": "Calrlos Hernandez",
                    "edad": 15
                }, {
                    "nombre": "Jorge Julio",
                    "edad": 18
                }, {
                    "nombre": "Carmen Manrrique",
                    "edad": 48
                }, {
                    "nombre": "Miguel Rosado",
                    "edad": 29

                }

            ];

function leerJSON (json){
	var out = "--------------- Lista Personas ------------------------<br>";
	for (var i = 0; i < json.length; i++) {
		out += "Nombre: "+json[i].nombre+" - Edad: "+json[i].edad+"<br>";
	}
	document.getElementById("estudiantes").innerHTML = out;
}

function mayorEdad (json){
	var out = "------------------ Personas con Mayoría de Edad -----------------------<br>"
	for (var i = 0; i < json.length; i++) {
		if (json[i].edad >= 18){
			out += json[i].nombre+"<br>";
		}
	}
	document.getElementById("mayores").innerHTML = out;
}

function mostrarPersonas(){
	leerJSON(personas);
}

function mostrarMayorEdad(){
	mayorEdad(personas);
}