function mostrar()
{
var altura;
var sexo;
var promedioAltura;
var contadorAltura;
var acumuladorAltura;
var alturaBaja;
var alturaBajaSexo;
var contadorMujeres;


contadorAltura=0;
acumuladorAltura=0;
contadorMujeres=0;
promedioAltura=0;

while(contadorAltura < 5){
    altura = parseInt(prompt("Ingrese altura"));
    while(isNaN(altura) || altura < 0 || altura > 250){
        altura = parseInt(prompt("Error.Ingrese altura"));    
    }
    sexo = prompt("Ingrese sexo");
    while(isNaN(sexo)== false || sexo != "f" && sexo != "m"){
        sexo = prompt("Error.Ingrese sexo");    
    }
    if(altura>190 && sexo == "f"){
        contadorMujeres++;
    }

    if(altura < alturaBaja || contadorAltura==0){
        alturaBaja = altura;
        alturaBajaSexo = sexo;
    }

    contadorAltura++;
    acumuladorAltura = acumuladorAltura + altura;
}
promedioAltura = acumuladorAltura / contadorAltura;
alert("El promedio de las alturas totales "+promedioAltura+" La altura más baja y el sexo de esa persona "+alturaBaja+" y sexo es: "+alturaBajaSexo+" La cantidad de mujeres que su altura supere los 190 centimetros "+contadorMujeres);

}
