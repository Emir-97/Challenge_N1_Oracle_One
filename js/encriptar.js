var vocales = ["a", "e", "i", "o", "u"];
var cifrado = ["ai", "enter", "imes", "ober", "ufat"];

/* Se realiza una iteración de cada letra del mensaje para buscar las vocales
 luego se reemplaza el valor de la vocal por el cifrado correspondiente*/
function codificar(word){
	var data = "";
	for (var i = 0; i < word.length; i++) {
	var point = false;	    
	     for (var j = 0; j < vocales.length; j++) {
	     	if (word[i] == vocales[j]) {
	     		point = true;
	     		var index = j;
	     		break;
	     	}
	     }
	     if (point){
	     	data += cifrado[index];
	     } else{
	     	data += word[i];
	     }
	}
	
	return data;
}

function desencriptacion(string){
    var data = string;
    for (var i = 0; i < cifrado.length; i++){
        var clave = cifrado[i]
        var busca = new RegExp(clave, 'g');
        data = data.replace(busca, vocales[i]);
    }
    return data;
}
