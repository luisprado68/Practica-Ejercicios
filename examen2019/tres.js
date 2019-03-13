function mostrar()
{

var precio;
var porcentaje;
var descuento;
var precioFinal;

precio = parseInt(prompt("Introduce un numero"));
porcentaje = parseInt(prompt("Introduce un porcentaje"));

descuento = precio * porcentaje / 100;
precioFinal = precio - descuento;

document.getElementById("elPrecioFinal").value = precioFinal;







}
