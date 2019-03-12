function mostrar()
{
var numero1;
var numero2;
var resultado;

numero1 = parseInt(prompt("Introduce un numero"));
numero2 = parseInt(prompt("Introduce un numero"));


if(numero1 == numero2){
    resultado = numero1+""+numero2;
}
else if(numero1>numero2){
    resultado = numero1 - numero2;
       
    if(resultado>10){
        alert("La resta es: "+ resultado+ " y supero al 10")
    }
}
else{
        resultado = numero1 + numero2;
}

alert("El resultado es: "+ resultado);







}
