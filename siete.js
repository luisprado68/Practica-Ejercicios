function mostrar()
{
var altura;
var sexo;
var contador;
var promedioAltura;
var alturaBaja;
var alturaBajaSexo;
var ContadorMujeres;
var acumulador;

contador=0;
ContadorMujeres=0;
acumulador =0;


    while(contador <5){
        

        altura = parseInt(prompt("Ingrese altura"));
        while(isNaN(altura) || altura < 0 || altura >250){
            altura = parseInt(prompt("Error.Ingrese altura"));
        }
        sexo = prompt("Ingrese sexo");
        while(isNaN(sexo)== false || sexo != "f" && sexo != "m"){
            sexo = (prompt("Error.Ingrese sexo"));
        }

        if(altura < alturaBaja || contador == 0){
            alturaBaja = altura,
            alturaBajaSexo = sexo;
        }

        if(altura > 190 && sexo == "f"){
            ContadorMujeres++;
        }
        
        acumulador = acumulador + altura;
        contador++;
    }
    promedioAltura = acumulador / contador;

    alert("El promedio de las alturas totales. "+ promedioAltura + "La altura más baja y el sexo de esa persona. " + alturaBaja + " y su sexo es " + alturaBajaSexo + " La cantidad de mujeres que su altura supere los 190 centimetros. " + ContadorMujeres);




}
