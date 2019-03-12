function mostrar()
{
  var nombre1;
  var nombre2;
  var peso1;
  var peso2;
  var suma;
  var promedio;
  nombre1= prompt("Introduce nombre masculino");
  nombre2= prompt("Introduce nombre femenino");
  peso1= parseInt(prompt("Introduce peso"));
  peso2= parseInt(prompt("Introduce peso"));
  
  suma = peso1 + peso2;
  promedio = suma / 2;

  alert("ustedes se llaman: " +nombre1+ " y "+ nombre2+ " pesan "+ peso1+ " y " +peso2 +" kilos y "+ "que sumados son: "+ suma +" kilos y el promedio de peso: "+ promedio +" kilos")

}
