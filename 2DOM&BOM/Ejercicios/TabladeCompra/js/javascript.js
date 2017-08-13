function validar(num1){
	if (isNaN(num1)){
		return false;
	}else{
		return true;
	}
}

function calcSubt(){
	var num1 = parseFloat(document.getElementById("PrecioCamisa").value);
	var num2 = parseFloat(document.getElementById("CantCamisa").value);
	var num3 = parseFloat(document.getElementById("PrecioGorra").value);
	var num4 = parseFloat(document.getElementById("CantGorra").value);
	var num5 = parseFloat(document.getElementById("PrecioZapatos").value);
	var num6 = parseFloat(document.getElementById("CantZapatos").value);
	var num7 = parseFloat(document.getElementById("PrecioPant").value);
	var num8 = parseFloat(document.getElementById("CantPant").value);

	if(validar(num2) && validar(num4) && validar(num6) && validar(num8)){
		document.getElementById("SubTotCamisa").value = num1*num2;
		document.getElementById("SubTotGorra").value = num3*num4;
		document.getElementById("SubTotZapatos").value = num5*num6;
		document.getElementById("SubTotPant").value = num7*num8;
	}else{
		alert("Llenar el campo cantidad");
	}
}

function calcTotal(){
	var num1 = parseFloat(document.getElementById("SubTotCamisa").value);
	var num2 = parseFloat(document.getElementById("SubTotGorra").value);
	var num3 = parseFloat(document.getElementById("SubTotZapatos").value);
	var num4 = parseFloat(document.getElementById("SubTotPant").value);

	if(validar(num1) && validar(num2) && validar(num3) && validar(num4)){
		document.getElementById("Total").value = num1+num2+num3+num4;
	}else{
		alert("Calcular primero el subtotal");
	}
}