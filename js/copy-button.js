var copyButtonCoded = document.querySelector("#copy-button-coded");
var copyButtonDecoded = document.querySelector("#copy-button-decoded");

copyButtonCoded.addEventListener("click", function(event){
    event.preventDefault();
    navigator.clipboard.writeText(document.querySelector("#resultado-codificacion").value);
    console.log("Mensaje copiado!!");

});

copyButtonDecoded.addEventListener("click", function(event){
    event.preventDefault();
    navigator.clipboard.writeText(document.querySelector("#resultado-decodificacion").value);
    console.log("Mensaje copiado!!");
    
});

