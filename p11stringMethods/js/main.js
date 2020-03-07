//string methods

//Práctica 1
//obtener el nombre completo del usuario e indicarle cuántos caracteres tiene su nombre

//Práctica 2
//obtener el nombre completo del usuario
//Contar cuántos caracteres tiene
//si su nombre tiene menos de 15 caracteres, indicarle mediante un mensaje que su nombre es mmuy corto
//si tiene más de 15 caracteres indicarle que su nombre es muy largo

//Práctica 3
//obtener el nombre completo del usuario
//contar cuántas vocales tiene

//Código Práctica 1

//var fullName;
//var totalCharacters;


//    fullName = (prompt("Usuario, por favor capture a continuación su nombre completo", 
//            "escriba sus nombres y apellidos"))

//    totalCharacters = fullName.length

//        console.log (`El número de caracteres que compone su nombre completo es: ${totalCharacters}`)

//Código Práctica 2
//var fullName;
//var totalCharacters;

//var nameEval;


//fullName = (prompt("Usuario, por favor capture a continuación su nombre completo", 
//"escriba sus nombres y apellidos"))

//totalCharacters = fullName.length

//console.log (`El número de caracteres que compone su nombre completo es: ${totalCharacters}`)



//if (totalCharacters < 15 ){
//    nameEval = "Muy Corto"
//} else {
//    nameEval = "Muy Largo"
//}

//console.log(`Usuario, su nombre es: ${nameEval}`);



//Código Práctica 3

//var fullName;
//var totalCharacters;

//var countVowels = 0;


//fullName = (prompt("Usuario, por favor capture a continuación su nombre completo", 
//"escriba sus nombres y apellidos"))

//totalCharacters = fullName.length

//for (var countVowels = 0; countVowels < fullName.length; countVowels++) {
//    if (fullName.charAt(countVowels) = "a" ) {

//    } else if (fullName.charAt(countVowels) = "e"){
//        countVowels++
//    } else if (fullName.charAt(countVowels) = "i") {
//        countVowels++
//    } else if (fullName.charAt(countVowels) = "o") {
//        countVowels++
//    } else if (fullName.charAt(countVowels) = "u") {
//        countVowels++
//    } else {

//    }


//    console.log(`Usuario, la cantidad de vocales en su nombre es: ${countVowels}`);

        // fullname.match <---- .match 

//}




//1) Recibir una palabra del usuario, y formar una nueva palabra usando las dos primeras y las dos últimas
//letras de esa palabra. Si la palabra tiene menos de 5 caracteres, enviar un mensaje de error al usuario 
//indicándoselo
//2) pedir al usuario nombre y edad, y mostar un mensaje que diga "hola, soy {nombre} y tengo {edad} años"
//3) Del texto "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante 
//complementa al estudiante que tiene a su lado"
//Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias por la 
//palabra "Koder", y mostrar el mensaje de nuevo al usuario

//codigo ejercicio 1
//var userWord;
//var firstTwoLetters;
//var lastTwoLetters;
//var resultWord;

//userWord = (prompt("Usuario, por favor capture una palabra a continuación, ingrese una palabra "))

//    if (userWord.length > 5){
//        resultWord = userWord.charAt(0) + userWord.charAt(1) + userWord.charAt (userWord.length-2) +
//            userWord.charAt (userWord.length-1);
//            console.log (`la palabra formada por las primeras 2 y ultimas 2 letras de la palabra capturada 
//            por el usuario es: ${resultWord}`);
//     } else {
//         console.error('la palabra capturada por el usuario contiene menos de 5 caracteres') 
//        }
        
            
//codigo ejercicio 2
//var userName;
//var userAge;

//        userName = (prompt("Por favor capture su Nombre","ingrese su nombre"))

//        userAge = (prompt("Por favor capture su Edad","ingrese su edad"))

//        console.log(`hola, soy ${userName} y tengo ${userAge} años`)




//Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias por la 
//palabra "Koder", y mostrar el mensaje de nuevo al usuario


//codifo
var countWord;
var textModified;
var x;
const TEXT_STUDENT = `Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante 
    complementa al estudiante que tiene a su lado`;


    countWord = TEXT_STUDENT.split('estudiante').length-1
    x = TEXT_STUDENT.length-1

    console.log(`la palabra estudiante se repite un total de ${countWord} veces`)


    textModified = TEXT_STUDENT.replace (/estudiante/g, "koder");
    
    console.log (`la palabra nueva es: ${textModified}`)



// NOTA: Isra, me faltaron los algarotimos, los completo en casa y actualizo el archivo en el repo


