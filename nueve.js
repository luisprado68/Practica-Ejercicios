function mostrar()
{
    var habitantes;
    var pais;
    var temperatura;
    var contador;
    var respuesta;
    var contadorTemperaturaPar;
    var menosHabitantes;
    var paisMenosHabitantes;
    var contadorPaisSupera40;
    var promedioHabitantes;
    var contadorPais;
    var acumuladorHabitantes;
    var temperaturaMinima;
    var paisTemperaturaMinima;

 
    
    
    contadorTemperaturaPar=0;
    contadorPaisSupera40=0;
    promedioHabitantes=0;
    contadorPais=0;
    acumuladorHabitantes=0;
 


    do{
        habitantes = parseInt(prompt("Ingrese habitantes"));
        while(isNaN(habitantes) || habitantes < 1 || habitantes > 7000){
        habitantes = parseInt(prompt("Error. Ingrese habitantes"));
        }
        pais = prompt("Ingrese pais");
        while(isNaN(pais)== false){
        pais = prompt("Error. Ingrese pais");
        }
        temperatura = parseInt(prompt("Ingrese temperatura"));
        while(isNaN(temperatura) || temperatura < -50 || temperatura > 50){
        temperatura = parseInt(prompt("Error. Ingrese temperatura"));
        }
        if(temperatura%2==0){
            contadorTemperaturaPar++;
        }
        if(temperatura >40){
            contadorPaisSupera40++;
        }
        if(habitantes < menosHabitantes || contadorPais==0){
            menosHabitantes = habitantes;
            paisMenosHabitantes = pais;
        }

        if(temperatura < temperaturaMinima || contadorPais==0){
            temperaturaMinima = temperatura;
            paisTemperaturaMinima = pais;
        }
        
        contadorPais++;
        acumuladorHabitantes = acumuladorHabitantes + habitantes;
        respuesta = confirm("Desea continuar?");

    }while(respuesta);
    
    promedioHabitantes = acumuladorHabitantes / contadorPais;

    document.write("cantidad de temperaturas pares: "+contadorTemperaturaPar+"<br>"
    +"El nombre del pais con menos habitantes : "+paisMenosHabitantes+"<br>"
    +" la cantidad de paises que superan los 40 grados: "+contadorPaisSupera40+"<br>"
    +"el promedio de habitantes entre los paises ingresados	: "+promedioHabitantes+"<br>"
    +"la temperatura mínima ingresada: "+temperaturaMinima+" y el pais es: "+paisTemperaturaMinima+"<br>");



}
