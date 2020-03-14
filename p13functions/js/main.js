
var bmentorNombreInicial;
var bmentorsNames = [
    "Brenda González",
    "Shalem Solis",
    "Jorge Ochoa",
    "Rurick Maqueo",
    "Alex Cruz",
    "Daniel Ortega"

]

var amentorsNames = [
    "David Moranchel",
    "Carlos Silva",
    "Michael Villalba",
    "Carlos Silva",
    "Veronica Nemecio",
    "Daniel Ortega"

]

/*
/*Iterar dentro del Array
Por cada item, obtener el nombre de cada bmentor
 extraer la primer letra de cada palabra del nombre
concatenar el contenido de cada item con las iniciales, separadas por un punto
Mostrar en la consola cada resultado
*/

/*name es una etiqueta que asigno a lo que voy a recibir al ejecutar el for, el recorrido*/

/*
var initials = "";

const getInitials = (word) => initials += word.charAt(0) + ". "

     amentorsNames.forEach( (name) => {

           console.log(name)
          var dividedName = name.split(" ");
          var initials ="";
          console.log(dividedName)
          dividedName.forEach( (division) => {
             console.log(division.charAt(0))
               initials += division.charAt(0) + ". "
              console.log(`${name}, ${initials}`)
          })
           })


 bmentorsNames.forEach( (name) => {
    var dividedName = name.split("");
    dividedName.forEach( getInitials )
    console.log(`${name}, ${initials}`)
    initials = "";
} )



const printSomeText = (textToPrint) => {
    console.log(textToPrint)


}

bmentorsNames.forEach( printSomeText )


const printNamesInitials = (arrayToPrint) => {
    bmentorsNames.forEach( (name) => {
        var dividedName = name.split(" ");
        dividedName.forEach( getInitials )
        console.log(`${name}, ${initials}`)
        initials = "";
    } )

}

printNamesInitials(amentorsNames);
printNamesInitials(bmentorsNames);

const printFullNames = (name, lastname) => console.log (`Tu nombre completo es: ${name} ${lastname}`)

printFullNames("eddy", "ruiz alvarez")


*/

/*
var numbersArray = [
    13,
    23,
    1,
    56,
    78
]

var otherNumbersArray = [
    54,
    32,
    45,
    12,
    9

]


var promedioArray1
var promedioArray2

const getNumbersAverage = (arrayToCompute) => {
    let total = 0;
    arrayToCompute.array.forEach((item) => {
        total += 0 + item
    })
    let average = total / arrayToCompute.length;
    console.log(`el promedio de este array es: ${average}`)

}

*/

//Practica: crear una funcion(es) que permita(n) al usuario elegir una operacion basica.
//elegir dos valores, y ejecutar la operacion seleccionada. Imprimir el resultado.
//El output debe ser: "la operación ${operacion} de los dos numeros que indicaste es: ${resultado}"





/*
const operacionRealizar = (numero1,numero2,operacionRequerida) => {
    var resultado;
    var operacion = prompt("Que operacion desea realizar?","suma / resta / multiplicacion / division")
    if(operacionRequerida === "suma"){

        resultado = numero1 + numero2;
    }
    
    console.log(`Este es el resultado: ${operacionRealizar}`)
}


*/

/*
const operationSelector = (operationType, number1, number2) => {
    
    if(operationType === "suma") {
        console.log(`la ${operationType} de los dos hnumers es ${number1 + number2}`)

    }else if (operationType = "resta") {
        console.log(`la ${operationType} de los dos numeros es ${numer1 + number2}`)



    }

    }
 const operationsSelector = (operationType, number1, number2) => {
        
        let result;
        if( operationType === "suma"){
            result = number1 + number2
        } else if ( operationType === "resta"){
            result = number1 - number2
        } else if ( operationType === "multiplicacion"){
            result = number1 * number2
        } else if ( operationType === "division"){
            result = number1 / number2
        } else {
            alert("Esa operación no la venimos manejando")
        }
    ​
        console.log(`La ${operationType} de los dos números que indicaste es ${result}`)
    } 
*/

const evaluateArray = (arrayToEvaluate) => {

    if(Array.isArray(arrayToEvaluate)){
        console.log ("la variable si es un array")
        alert(`Tu variable si es un array y contiene ${arrayToEvaluate.length} items`)

    }else {
        alert("la variable no es un array")
    }
}

    /* practica para casa

    1)  funcion que me permita que me permita ingresar el nombre de un arra y me permita contar cuantos 
    items tiene, si el array no existe, debe enviar un prompt que diga, "tu array no existe"

    2) funcion que reciba un array, e imprima los elementos de ese array en orden alfabeito y con 
    la primera palabra en upper case
    
    3) funcion que recibva un array, un numero, y debe imprimmir cada uno de los items del array 
    con los caracteress limitados al numero ingresado

    4) funcion puede incluir otras funciones dentro de si, que reciba una cantidad (numero), este
    numero sera la cantidad de veces que se pida a un usuario a trabés de un prompt algun nombre, todos 
    los nombres se deben almacenar en una coleccion, y al finalizar me debe mostrar la lista de 
    nombres con sus respectivas inciales

    */

