function mostrar()
{
var numero;
var contador;
var letra;
var respuesta;
var contadorPares;
var contadorImpares;
var contadorCeros;
var promedioNumeroPos;
var contadorPos;
var acumuladorPos;
var sumaNeg;
var numeroMaximo;
var numeroMinimo;
var letraMaxima;
var letraMinima;

contadorPares=0;
contadorImpares=0;
contadorCeros=0;
promedioNumeroPos=0;
contadorPos=0;
acumuladorPos=0;
sumaNeg=0;
contador=0;



do{
    numero = parseInt(prompt("Ingrese numero"));
    while(isNaN(numero) || numero < -100 || numero > 100){
        numero = parseInt(prompt("Error.Ingrese numero"));    
    }
    letra = prompt("Ingrese letra");
    while(isNaN(letra)== false){
        letra = prompt("Error.Ingrese letra");    
    }
    if(numero == 0){
        contadorCeros++;
    }else if(numero %2==0){
        contadorPares++;
    }else{
        contadorImpares++;
    }
    if(numero > 0){
        contadorPos++;
        acumuladorPos = acumuladorPos + numero;
    }else{
        sumaNeg = sumaNeg + numero;
    }
    if(numero > numeroMaximo || contador==0){
        numeroMaximo = numero;
        letraMaxima = letra;
    }
    if(numero < numeroMinimo || contador==0){
        numeroMinimo = numero;
        letraMinima = letra;
    }



    contador++;
    respuesta = confirm("Desea cotinuar?");
}while(respuesta);
    if(contadorPos !=0){
    promedioNumeroPos = acumuladorPos / contadorPos;
    }

    document.write("La cantidad de números pares"+contadorPares+"<br>"+
    " La cantidad de números impares: "+contadorImpares+"<br>"+
    "La cantidad de ceros: "+contadorCeros+"<br>"+
    "El promedio de todos los números positivos ingresados: "+promedioNumeroPos+"<br>"+
    "La suma de todos los números negativos: "+sumaNeg+"<br>"+
    "El numero Maximo"+numeroMaximo+" y letra maxima: "+letraMaxima+"<br>"+
    "EL numero Minimo"+numeroMinimo+" y letra minima: "+letraMinima+"<br>"
    );



}
