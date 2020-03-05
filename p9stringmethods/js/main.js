//inicio ejercicio 1 clase
    // tener los valores de x e y, y compararlos
    // si x es mayor que y, mostrar un mensaje que lo indique
    // si x es menor que y, mostrar un mensaje que lo indique


    // el siguiente método nos permite descubrir que nos hace falta para dar una solución a la necesidad planteada
    // Algoritmo:
    // declarar los valores de x e y (var)
    // preguntar si x es mayor que y (comparison operators)
    // obtener la respuesta de la comparacion (conditional operators)
    // si x es mayor que y, mostrar el mensaje "x es mayor que y" (console methods)
    // si x es menor que y, mostrart el mensaje "x es menor que y" (console methods)

    //if {
        // si algo se cumple 
    //}
    //else if{
        // si lo anterior no se cumple, pero esto si
    //}
    //else {
        // Si nada de lo anterior se cumple
    //}
        // condition ? case true : case false

    
    
        //ejemplo a continuacion

    // var x = 620;
    // var y = 49;

        //string interpolation - string y variables dentro

    //  if ( x > y){
    //      console.log(x," es mayor que ",y);
    //     console.log(`${x} es mayor que ${y}`)
    //   } else if ( x < y){
    //      console.log(x, " es menor que ", y);
    //  } else {
    //      console.log(x," es igual que ",y)
    //  }

//fin de ejercicio 1 clase

//inicio ejercicio 2 clase

    //Multiplicar 2 valores, y verificar si el resultado de la multiplicacion es par o non -impar-
    //si es par, indicarlo con un mensaje
    //si es non, indicarlo con un mensaje

    // Algoritmo:
    // declarar los valores de x e y (var)
    // declarar variable para almacenar resultado de operacion resultadoMult(var resultado)
    // declarar la variable para almacenar el modulo de resultadoModul / 2 (var resultado2)
    // realizar la multiplicacion de x e y
    // almacenar el resultado de la multiplicacion en variable resultado
    // almaceenar el resultado del modulo de resultadoMult / 2 --> aplicamos la funcion modulo de js
    // preguntad si resultadoModul es igual a 0
    // si resultadoModul es igual a 0, imprimir el mensaje "el producto de x * y es un numero par"
    // si resultadoModul no es igual a 0, imprimir el mensaje "el prodcuto de x * y es un numero impar"

    //var x = 27;
    //var y = 4;
    //var resultadoMult;
    //var resultadoModul;

    //resultadoMult = x * y;

    //resultadoModul = resultadoMult % 2

    //    if ( resultadoModul === 0){
    //        console.log ("El producto de x * y es un numero par")
    //    }else {
    //        console.log ("El producto de x * y es un numero impar")
    //    }

//fin ejercicio 2 clase 

//inicio ejercicio 3 clase

    //recibir un numero de parte del usuario y calcular el area de un circulo cuyo radio sea igual 
    // al numero proporcionado

    // Algoritmo:
    //Declarar variable para recibir número

    //declarar la variable r donde se recibirá un número (var)
    //declarar y asignar a la variable result_area la formula matemática para calcular la formula de un circulo (var)
    //imprimir un mensaje que diga el area de un circulo con radio r es igual a result_area
    //var r = prompt("Ingresa el radio del circulo","escribe el valor del radio");
    //var PI = 3.14159265358979323846264338327950288419716939937510;
    //result_area = PI * (parseFloat(r) ** 2);
    //console.log(`El área de un circulo con radio ${r} es igual a ${result_area}`);

//fin ejercicio 3 clase


//inicio ejercicio 4 CASA

//practica 4
//recibir del usuario los datos de 3 lados de un triangulo (ladoUno, ladoDos, ladoTres)
//con base en esos datos, determinar el área del triangulo y mostrarla en un mensaje (areaTriangulo)
//en otro mensaje, indicar si el triangulo es isoseles (al menos dos lados iguales y un lado mas corto), 
//equilátero (todos sus lados iguales) o escaleno (todos sus lados de diferente longitud) (tipoTriangulo).

//1) Declarar las variables ladoUno, ladoDoc, ladoTres donde se almacenarán las longitudes de 
    //los lados del triangulo (var)
//2) Declarar la variable semiPerimetro en la cual se almacenará el resultado de calcular el perímetro del triangulo (var)
//3) Declarar la variable areaTrianguloangulo en la cual se almacenará el resultado obtenido de calcular el Area del Triangulo (var)
//4) Declarar la variable tipoTriangulo en la cual se almacenará el resultado de evaluar los valores correspondientes a
    //los lados del triangulo y establecer si el triangulo es equilatero, isoseles o escaleno
//4) requerir del usuario la captura de 3 datos a través del método Prompt, correspondientes a la longutud de cada
    //lado del triangulo, los cuales serán asignados a las variables ladoUno, ladoDos, ladoTres 
//5) Almacenar el resultado de calcular el perímetro en la variable semiPerimetro, para lo cual, se suman las longitudes 
    //de cada lado del triangulo y a continuacion se realiza la división del resultado de la suma entre 2 
    // (ladoUno+ladoDos+ladoTres)/2 (Arithmetic Operators)
//6) Almacenar el resultado de calcular el Area del triangulo en la variable areaTriangulo. Tomando el teorema de Herón, 
    //calcular la raiz cuadrada al valor que se obtiene de realizar la multiplicación del valor del 
    //semi perímtero (semiPerimetro) por el valor obtenido luego de realizar tres operaciones sub-secuentes,
    //a semiPerimetro restarle ladoUno y multiplicarlo por semiPerimetro menos ladoDos y multiplicarlo por 
    //semiPerimetro menos ladoTres 
    //areaTriangulo = sqr(semiPerimetro * (semiPerimetro - ladoUno) * (semiPerimetro - ladoDos) * (semiPerimetro - ladoTres) )
    //(Arithmetic Operators)
//7) Imprimir un mensaje que diga el area del triangulo segun los valores capturados es igual a areaTriangulo
//8) Evaluar si el triangulo es equilatero, dados los valores para cada lado del triagulo, determinar si ladoUno 
    //es igual ladoDos ó ladoUno es igual a ladoTres ó ladoDos es igual a ladoTres, en caso de
    //cumplirse alguna de las operaciones lógicas asignar a tipoTriangulo el valor Equilatero, en caso contrario evaluar
    //si el triangulo es de tipo isoseles o escaleno
//9) Evaluar si el triangulo es isoceles, dados los valores para cada lado del triangulo, determinar si 
    //ladoUno es igual a ladoDos y ladoTres es menor que lado uno ó ladoUno es igual a ladoTres y ladoDos es menor que
    //ladoUno ó ladoDos es igual a ladoTres y ladoUno es menor a ladoDos, en caso de cumplirse alguna de las 
    //expresiones evaluadas asignar a tipoTriangulo el valor Isoseles, en caso contrario evaluar si el triangulo es
    //escaleno
//10) Evaluar si el triangulo es escaleno, dados los valores para cada lado del triangulo, determinar si
    //ladoUno es distinto que ladoDos y ladoUno es distinto de ladoTres y ladoDos es distinto de ladoTres,
    //en caso de cumplirse alguna de las expresiones evaluadas asignar a tipoTriangulo el valor Escaleno, en caso contrario,
    //asignar a tipoTriangulo el valor Otro.
//11) Imprimir un mensaje que diga el tipo de triangulo de acuerdo a los valores capturados es: tipoTriangulo






//fin ejercicio 4 CASA



//inicio ejercicio 5 CASA

//practica 5
//una vez lograda la practica 4, determinar si el triángulo es un triángulo rectángulo 


//fin ejercicio 5 CASA

