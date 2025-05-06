let lati = 0
let long = 0
var map
var uluru
function iniciar() {
var elemento=document.getElementById("obtener");
elemento.addEventListener("click", obtenerubicacion);
}
function obtenerubicacion() {
navigator.geolocation.getCurrentPosition(mostrar, mostrarerror);
document.getElementById("map").style.display = 'block';
}
function mostrar(posicion) {

var ubicacion=document.getElementById("ubicacion");
var datos="";
lati = posicion.coords.latitude;
long = posicion.coords.longitude;
datos+="<h2>LATITUD: <h3>" + posicion.coords.latitude + "<br>";
datos+="<h2>LONGITUD: <h3>" + posicion.coords.longitude + "<br>";
datos+="<h2>EXACTITUD: <h3>" + posicion.coords.accuracy + " mts. <br>"
uluru = {lat: lati, lng: long};
map = new google.maps.Map(document.getElementById("map"), {
zoom: 15,
center: uluru,
});

marker = new google.maps.Marker({
position: uluru,
map: map,
});
ubicacion.innerHTML= datos;
}
function mostrarerror(error) {
// body...
alert("error"+error.code+""+ error.message);
}



window.addEventListener("load", iniciar);