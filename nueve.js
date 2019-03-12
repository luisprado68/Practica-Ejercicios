function mostrar()
{
    var pais;
    var habitantes;
    var temperatura;
    var contadorTemperaturaPar;
    var paisMenosHabitante;
    var contadorPaises40;
    var promedioHabitantes;
    var temperaturaMinima;
    var temperaturaMinimaPais;
    var respuesta;
    var acumuladorHabitantes;
    var contadorPaises;


    contadorTemperaturaPar=0;
    contadorPaises40=0;
    temperaturaMinima=0;
    acumuladorHabitantes=0;
    contadorPaises=0;

    do{
            pais = prompt("Ingrese un pais");
            while(isNaN(pais)==false){
                pais = prompt("Error. Ingrese un pais");
            }
            habitantes = parseInt(prompt("Ingrese cantidad habitantes"));
            while(isNaN(habitantes) || habitantes < 1 || habitantes >7000){
                habitantes = prompt("Error. Ingrese cantidad habitantes");
            }
            temperatura = parseInt(prompt("Ingrese una temperatura"));
            while(isNaN(temperatura) || temperatura < -50 || temperatura > 50){
                temperatura = prompt("Error. Ingrese una temperatura");
            }

            if (temperatura %2 ==0){
                contadorTemperaturaPar++;
            }
            if(temperatura > 40){
                contadorPaises40++;
            }
                
            if(habitantes < paisMenosHabitante || contadorPaises==0){
                paisMenosHabitante = habitantes;
                
                
            }
            if(temperatura < temperaturaMinima || contadorPaises ==0){
                temperaturaMinima = temperatura;
                temperaturaMinimaPais = pais;
            }
            contadorPaises++;
            acumuladorHabitantes = acumuladorHabitantes + habitantes;



            respuesta = confirm("Desea continuar?");
    }while(respuesta);
        paisMenosHabitante = pais;
        alert(acumuladorHabitantes);
        promedioHabitantes = acumuladorHabitantes / contadorPaises;

        document.write(
        "La cantidad de temperaturas pares: " + contadorTemperaturaPar+ "<br>"+
        "El nombre del pais con menos habitantes: " + paisMenosHabitante+ "<br>"+
        "la cantidad de paises que superan los 40 grados: " + contadorPaises40 + "<br>"+
        "Promedio de habitantes entre los paises ingresados: " + promedioHabitantes+ "<br>"+
        "La temperatura mínima ingresada: " + temperaturaMinima+" y el pais es: "+temperaturaMinimaPais+ "<br>");




}
