//Practica 12


//pedir al usuario la cantidad de koders a registar
//pedir tantos nombres de koder como el usuario haya indicado
//guardar cada nombre de cada koder en una colección
//de cada Koder imprimir únicamente el primer nombre


//Algoritmo:

//Declarar la variable cantidadKoders en la cual el usuario deberá capturar la cantidad de koders
//declarar una variable nombresKoders de tipo Array a la cual se asignarán los nombres completos de los koders 
//de acuerdo a la cantidad especificada por el usuario en el paso anterior.
//Usando el método Prompt y un ciclo For solicitar al usuario la captura de los nombres completos 
//de los koders, dichos registros serán asignados a la variable nombresKoders, el ciclo For concluirá
//cuando el contador de registros en el ciclo For sea menor a cantidadKoders


//for (var i=0;i<firstWords.length;i++)


//var firstWord = codeLine.substr(0, codeLine.indexOf(" "));


                var totalKoders;
                var fullNameKoder = new Array();
                var fullNameTemp;


                var totalKoders = prompt("por favor ingrese la cantidad de Koders, ingrese el número")



                    for(i=0;i<totalKoders;i++){

                        fullNameTemp = prompt("Ingrese los nombres completos del usuario, ingrese los nombres")
                        
                        fullNameKoder.push(fullNameTemp)

                    }


//tryout with a function



//string_to_array = function (str) {
//        return str.trim().split(" ");
//   };
//   console.log(string_to_array("casa de campo en el pueblo vecino"));



