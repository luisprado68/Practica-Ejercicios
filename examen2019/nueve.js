function mostrar()
{
    var habitantes;
    var pais;
    var temperatura;
    var respuesta;
    var contadorTemperaturaPar;
    var menosHabitantes;
    var paisMenosHabitantes;
    var contadorPaises40;
    var promedioHabitantes;
    var acumuladorHabitantes;
    var contadorPaises;
    var temperaturaMinima;
    var temperaturaMinimaPais;

    contadorPaises40=0;
    contadorTemperaturaPar=0;
    promedioHabitantes=0;
    acumuladorHabitantes=0;
    contadorPaises=0;


    do{
        habitantes = parseInt(prompt("Ingrese habitantes"));
        while(isNaN(habitantes) || habitantes < 1 || habitantes > 7000){
            habitantes = parseInt(prompt("Error.Ingrese habitantes"));    
        }
        pais = prompt("Ingrese pais");
        while(isNaN(pais)== false){
            pais = prompt("Error.Ingrese pais");    
        }
        temperatura = parseInt(prompt("Ingrese temperatura"));
        while(isNaN(temperatura) || temperatura < -50 || temperatura > 50){
            temperatura = parseInt(prompt("Error.Ingrese temperatura"));    
        }
        if(temperatura %2 == 0){
            contadorTemperaturaPar++;
        }
        if(temperatura>40){
            contadorPaises40++;
        }
        if(habitantes < menosHabitantes || contadorPaises==0){
            menosHabitantes = habitantes;
            paisMenosHabitantes= pais;
        }
        if(temperatura<temperaturaMinima || contadorPaises==0){
            temperaturaMinima= temperatura;
            temperaturaMinimaPais= pais;
        }

    
        contadorPaises++;
        acumuladorHabitantes = acumuladorHabitantes + habitantes;
        respuesta = confirm("Desea cotinuar?");
    }while(respuesta);

    promedioHabitantes= acumuladorHabitantes / contadorPaises;

    document.write("La cantidad de números pares"+contadorTemperaturaPar+"<br>"+
    " El nombre del pais con menos habitantes "+paisMenosHabitantes+"<br>"+
    "la cantidad de paises que superan los 40 grados: "+contadorPaises40+"<br>"+
    "el promedio de habitantes entre los paises ingresados: "+promedioHabitantes+"<br>"+
    "Temperatura Minima"+temperaturaMinima+" y pais : "+temperaturaMinimaPais+"<br>" );


}
