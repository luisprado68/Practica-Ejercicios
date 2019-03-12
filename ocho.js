function mostrar()
{
    var numero;
    var letra;
    var contador;
    var promedio;
    var numeroMinimo;
    var numeroMaximo;
    var letraMaxima;
    var letraMinima;
    var contadorPares;
    var contadorImpares;
    var contadorCeros;
    var contadorPositivos;
    var promedioPositivos;
    var acumuladorNegativo;
    var acumuladorPositivos;
    var respuesta;
    
    contador=0;
    acumulador=0;
    contadorPares=0;
    contadorImpares=0;
    contadorCeros=0;
    acumuladorNegativo=0;
    contadorPositivos=0;
    numeroMaximo=0;
    numeroMinimo=0;
    acumuladorPositivos=0;
    promedioPositivos=0;

    do{
        numero = parseInt(prompt("Ingrese numero"));
        while(isNaN(numero) || numero < -100 || numero >100){
            numero = parseInt(prompt("Error.Ingrese numero"));
        }
        letra = prompt("Ingrese letra");
        while(isNaN(letra)== false ){
            letra = (prompt("Error.Ingrese letra"));
        }
        if(numero == 0){
            contadorCeros++;
        }else if(numero % 2 == 0){
            contadorPares++;
        }else{
            contadorImpares++;
        }
        if(numero > 0){
            contadorPositivos++;
            acumuladorPositivos = acumuladorPositivos + numero;
        }else{
            acumuladorNegativo = acumuladorNegativo + numero;
        }

        if(numero > numeroMaximo || contador == 0){
            numeroMaximo = numero,
            letraMaxima = letra;
        }
        if(numero < numeroMinimo || contador == 0){
            numeroMinimo = numeroMinimo;
            letraMinima = letra;
        }
        contador++;
        
        respuesta = confirm("Desea Continuar?");

    }while(respuesta);
    if(contadorPositivos > 0){
        promedioPositivos = acumuladorPositivos / contadorPositivos;
    }
    
    

    document.write(
        "La cantidad de números pares: "+contadorPares +"<br>"+
        "La cantidad de números Impares: "+contadorImpares +"<br>"+
        "La cantidad de números Ceros: "+ contadorCeros+"<br>"+
        "Promedio de numeros positivos : "+ promedioPositivos+"<br>"+
        "La suma de  numeros negativos: "+acumuladorNegativo +"<br>"+
        "numero Maximo: "+numeroMaximo + "y letra Maxima "+letraMaxima+"<br>"+
        "numero minimo: "+ numeroMinimo+ "y letra Minima "+letraMinima+"<br>"

    );

    

    
}
