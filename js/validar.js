function validar(data){
	var verificador = false;
	if(/[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/.test(data) ||
		/[0-9]/.test(data)){
		alert("No debe ingresar valores simbólicos o numéricos.");
		return verificador = false;
	} else if((data=="")){
		alert("Escriba un texto para codificar o decodificar.");
		return verificador = false;
	} else {
		return verificador = true;
	}
}