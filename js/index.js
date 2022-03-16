// Variables utilizadas para codificar el Mensaje.
var inputEntrada = document.querySelector("#texto-inicial");
var botonCodificar = document.querySelector("#boton-encriptar");
var resultadoCodificado = document.querySelector("#resultado-codificacion");

// Variables utilizadas para decodificar el Mensaje.
var inputDecodificar = document.querySelector("#codigo-encriptado");
var botonDecodificar = document.querySelector("#boton-decodificar");
var resultadoDecodificado = document.querySelector("#resultado-decodificacion");

botonCodificar.addEventListener("click", function(event){
	
	event.preventDefault();
	var text = inputEntrada.value.toLowerCase();
	console.log(text);
	if(validar(text)){
		text = codificar(text);
		resultadoCodificado.innerHTML = text;
		resultadoCodificado.classList.remove("invisible");
	}
});

botonDecodificar.addEventListener("click", function(event){
	event.preventDefault();
	var text = inputDecodificar.value.toLowerCase();
	console.log(text);
	if (validar(text)) {
		text = desencriptacion(text);
		resultadoDecodificado.innerHTML = text;
		resultadoDecodificado.classList.remove("invisible");
	}
	if(text == ""){
		resultadoDecodificado.clean();
		resultadoDecodificado.classList.add("invisible");
	}
});

