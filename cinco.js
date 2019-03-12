function mostrar()
{
var continentes;
var cantidadDeDias;
var medioDePago;
var descuento;
var precioPorDias;
var precioFinal;

continentes = document.getElementById("Marca").value;
medioDePago = prompt("Ingrese el modelo de Pago.");
cantidadDeDias = prompt("Ingrese la Cantidad de Dias.");
precioPorDias = cantidadDeDias * 100

switch(continentes){
    case "América":
            switch(medioDePago){
                case "debito":
                descuento = 0.6;
                break;
               
                default:
                descuento = 0.5;
                break;
            }
    break;

    case "África":
            switch(medioDePago){
                case "mercadoPago":
                case "efectivo":
                descuento = 0.75;
                break;
                
                default:
                descuento = 0.6;
                break;
            }
    break;

    case "Europa":
            switch(medioDePago){
               case "debito":
                descuento = 0.35;
                case "mercadoPago":
                descuento = 0.3; 
                break;
                
                default:
                descuento = 0.25;
                break;
            }
    break;

    default:
        descuento = - 0.2;
                
              
    
    break;

}

descuento = precioPorDias * descuento;
precioFinal = precioPorDias - descuento;

alert("El continente es: "+ continentes+ " y la cantidad de dias son: "+ cantidadDeDias+ " y su precio con descuento es: "+ precioFinal);



}
