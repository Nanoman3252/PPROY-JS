//Salida de la pagina por link
function salida(){
	return confirm("¿Desea Salir de la pagina y ver la bibliografia?"); 
}

//Reloj que marca la hora al principio de la pagina 
function Ver_Hora()
{
	var mihora = new Date();
	var horas = mihora.getHours().toString();
	var minutos = mihora.getMinutes().toString();
	if (minutos.length == 1) minutos = "0" + minutos;
	var segundos = mihora.getSeconds().toString();
	if (segundos.length == 1) segundos = "0" + segundos;
	document.forms[0].miReloj.value = horas + " : " + minutos + " : " + segundos;
}

//Confirmacion de salida por boton
function ConfirSalida(){
	alert("va a salir");
	setTimeout("location.href='http://www.google.com'", 1000);
}

//Saludo de Entrada
var nom;
nom=prompt ("Escribe tu nombre","Nombre");
	alert("Mucho gusto y Bienvenido " + nom);
//Caja y Cambio de links
function Inicializar(){
	var caja = document.getElementById("cajaContenido");
	var link = document.getElementById("LinkV2B");
	
	link.href = "https://www.facebook.com/cesardejesus.navarrobarron";
	caja.style.backgroundColor = "yellow";
	caja.style.height = "100px";
	caja.style.border = "1px solid black";
}
//Funcion para la obtencion del Link
function cambioLink(){
	document.getElementById("Bibliografia").href = "https://www.xataka.com/robotica-e-ia/las-redes-neuronales-que-son-y-por-que-estan-volviendo";
}
//Funcion que da alerta de que ya se dio el link
function alertar(mensaje) {
	var estado = document.getElementById("estado");
	estado.style.display = "block";
	estado.innerHTML = mensaje + "<br/>" + estado.innerHTML;	
}
//Funcion que eliminara las advertencias cada 10 segundos
function apagar() {
	var contenedor = document.getElementById("estado");
	contenedor.style.visibility = "hidden";
	contenedor.style.display = "none";
}
//Funcion que une la obtencion del link la alerta y su desactivacion  
//para que esten en una sola funcion
function Union(){
	pop = setInterval("apagar()",5000);
	cambioLink();
	alertar('Ya tiene el Link');
}

function PopUp() {
	window.open('https://www.xataka.com/robotica-e-ia/las-redes-neuronales-que-son-y-por-que-estan-volviendo', 'Nombre de la ventana', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=300,height=200,left = 390,top = 50');
}
//Funcion Ocultar y mostar columna
			function ocultarColumna() {
				var contenedor = document.getElementById("Col");
				contenedor.style.visibility = "hidden";
				contenedor.style.display = "none";
			}

			function mostrarColumna() {
				var contenedor = document.getElementById("Col");
				contenedor.style.visibility = "visible";
				contenedor.style.display = "block"
			}
