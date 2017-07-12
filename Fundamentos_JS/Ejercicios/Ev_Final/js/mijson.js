var miJSON = [
{
	"codigo":"001",
	"nombre":"Denisse Villamar",
  "nota":10
},{
  "codigo":"002",
	"nombre":"Daniela Villamar",
  "nota":10
},{
  "codigo":"003",
	"nombre":"Irina Villamar",
  "nota":10
},{
  "codigo":"004",
	"nombre":"Oscar Loor",
  "nota":8
},{
  "codigo":"004",
	"nombre":"Kristell Munoz",
  "nota":9
},{
  "codigo":"005",
	"nombre":"Manuel Rodas",
  "nota":7
},{
  "codigo":"006",
	"nombre":"Viviana Loor",
  "nota":8
},{
  "codigo":"007",
	"nombre":"Annabel Herrera",
  "nota":10
},{
  "codigo":"008",
	"nombre":"Freddy Merchan",
  "nota":8
},{
  "codigo":"009",
	"nombre":"Daniel Villamar Espinel",
  "nota":9
},{
  "codigo":"010",
	"nombre":"Nury Caguana",
  "nota":6
}
];

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

function leerJSON (json){
	var out ="";
	var i;
	for(i=0;i<json.length;i++){
		out += "Codigo:"+json[i].codigo+"-"+"Nombre:"+json[i].nombre+"-"+"Nota:"+json[i].nota+"<br>";
	}
  document.getElementById("todo").innerHTML = out;
}

function mostrarTodo (){
  leerJSON(miJSON);
}

function promedio (json){
	var out = 0;
	var i;
	for(i=0;i<json.length;i++){
		out += json[i].nota;
	}
  document.getElementById("promedio").innerHTML = out/10;
}

function calPromedio(){
  promedio(miJSON);
}

function mayor (json){
	var out = "";
  var prom = 0;
  for(i=0;i<json.length;i++){
		prom += json[i].nota;
	}
  prom = prom / 10;
	for (var i = 0; i < json.length; i++) {
		if (json[i].nota > prom){
			out += json[i].nombre+"<br>";
		}
	}
	document.getElementById("mayNota").innerHTML = out;
}

function mayNota (){
  mayor(miJSON);
}

function menor (json){
  var out = "";
	for (var i = 0; i < json.length; i++) {
    // Se consideran notas bajas las menores a 6
		if (json[i].nota <= 6){
			out += json[i].nombre+"<br>";
		}
	}
	document.getElementById("menNota").innerHTML = out;
}

function menNota (){
  menor(miJSON);
}
