function mostrar()
{
var continente;
var medioPago;
var dia;
var descuento;
var precioPorDia;
var precioFinal;



continente = document.getElementById("Marca").value;
medioPago = prompt("Ingrese un medio de pago");
dia = parseInt(prompt("Ingrese cantidad de dias"));

precioPorDia = dia * 100;

switch(continente){
    case"América":
            switch(medioPago){
                case "debito":
                descuento = 0.6;
                break;
                
                default:
                descuento = 0.5;
                break;
            }
    break;

    case"África":
            switch(medioPago){
                case "mercadoPago":
                case "efectivo":
                descuento = 0.75;
                break;
                
                default:
                descuento = 0.6;
                break;
            }
    break;

    case"Europa":
            switch(medioPago){
                case "debito":
                descuento = 0.35;
                break;
                case "mercadoPago":
                descuento = 0.3;
                break;
                
                default:
                descuento = 0.05;
                break;
            }
    break;

    default:
    descuento = -0.2;
    break;

}

descuento = precioPorDia * descuento;
precioFinal = precioPorDia - descuento;

alert("Usted viajara al continente: "+ continente+ " y por el precio de:"+ precioFinal+ "$ por : "+ dia+" dias.");


}
