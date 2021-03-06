var kodersDb = [{
    name: "Eddy Alexander",
    lastName: "Ruiz Álvarez",
    deliveredPractices: 9,
    totalAssistance: 22
}, {
    name: "Iván",
    lastName: "Pedraza Sanchéz",
    deliveredPractices: 12,
    totalAssistance: 25
}, {
    name: "Mauricio",
    lastName: "López Suarez",
    deliveredPractices: 13,
    totalAssistance: 18
}, {
    name: "Xabier Enrique",
    lastName: "Hernández Hernández",
    deliveredPractices: 8,
    totalAssistance: 22
}, {
    name: "Raquel Monserrat",
    lastName: "Cruz Torres",
    deliveredPractices: 15,
    totalAssistance: 19
}, {
    name: "Etnar Uriel",
    lastName: "Sánchez González",
    deliveredPractices: 3,
    totalAssistance: 15
}, {
    name: "Gabriela Elvira",
    lastName: "Camarillo Luna",
    deliveredPractices: 10,
    totalAssistance: 18
}, {
    name: "Ana Marcela",
    lastName: "Casasola López",
    deliveredPractices: 15,
    totalAssistance: 24
}, {
    name: "Evelyn Fernanda",
    lastName: "Palacios Vera",
    deliveredPractices: 8,
    totalAssistance: 18
}, {
    name: "Víctor Octavio",
    lastName: "Torres Jimenez",
    deliveredPractices: 11,
    totalAssistance: 16
}]

/*Teniendo el array kodersDb, realizar las siguientes operaciones:
1.- Obtener a todos los koders cuyas practicas entregadas (deliveredPractices) sea menor a 10
2.- Obtener a todos los koders cuya asistencia (totalAssistance) sea menor a 20
3.- Obtener el promedio general de prácticas entregadas
4.- Obtener el promedio general de asistencias
5.- En el elemento con el id "practices-container" insertar una fila por cada koder obtenido en el paso 1, debería tener la siguiente estructura:
<tr>
    <td>{número de koder}</td>
    <td>{nombre completo del koder}</td>
    <td>{prácticas del koder}</td>
</tr>
6.- En el elemento con el id "assistances-container" insertar una fila por cada koder obtenido en el paso 2, debería tener la siguiente estructura:
<tr>
    <td>{número de koder}</td>
    <td>{nombre completo del koder}</td>
    <td>{asistencias del koder}</td>
</tr>
7.- En el elemento con el id "practices-average", mostrar el promedio general de prácticas entregadas obtenido en el paso 3
8.- En el elemento con el id "assistance-average", mostrar el promedio general de asistencias entregadas obtenido en el paso 4

***Notas***
Recordemos que podemos acceder a alguna propiedad de un objeto y asignar su valor a una variable con la sintaxis:

    var someVar = objeto.propiedad

Podemos crear contenido dinámico insertando variables mediante la sintaxis

    ${someVar}

así que podemos crear un elemento html con contenido dinámico de la siguiente forma:

var someObject = {
    songName = "Lago en el cielo",
    author = "Gustavo Cerati"
}

var mySong = someObject.songName;
var songAuthor = someObject.author;

var someElement = document.createElement("p");
-(con esto obtenemos un elemento <p></p>)

var someText = document.createTextNode(`Mi canción es ${mySong} y el autor es ${songAuthor}`)
-(con esto obtenemos un nodo de texto que dice "Mi canción es Lago en el cielo y el autor es Gustavo Cerati")

y después podemos crear un nodo completo:

someElement.appendChild(someText)
-(con esto obtenemos <p>Mi canción es Lago en el cielo y el autor es Gustavo Cerati</p>)


Happy Hacking!!!*/

// array: kodersDb
//1.- Obtener a todos los koders cuyas practicas entregadas (deliveredPractices) sea menor a 10

//usar filter

var filteredPractices = kodersDb.filter((koder) =>{
    return koder.deliveredPractices < 10
})

console.log (filteredPractices)


//2.-


//usar filter
//solo cuando hacemos return de una sola linea podemos simplificar la escritura de la funcion de la sgte manera:
var filteredAssistance = kodersDb.filter (koder => koder.totalAssistance < 20)

console.log(filteredAssistance)



//3.-

//usar reduce

var totalPractices = kodersDb.reduce ((accum,koder) => {

        return accum += koder.deliveredPractices
    },0)

    console.log(totalPractices)


    var practicesAverage = totalPractices / kodersDb.length

    console.log(practicesAverage)
    
//4.-

var totalAssistances = kodersDb.reduce ((accum,koder) => {

    return accum += koder.totalAssistance
},0)

console.log(totalAssistances)

var assistancesAverage = totalAssistances / kodersDb.length

console.log(assistancesAverage)
//usar reduce


/*5.- En el elemento con el id "practices-container" insertar una fila por cada koder obtenido en el paso 1, debería tener la siguiente estructura:
<tr>
    <td>{número de koder}</td>
    <td>{nombre completo del koder}</td>
    <td>{prácticas del koder}</td>
</tr>
*/
filteredPractices.forEach((koder,index) => {
    let koderRow = document.createElement("tr");

    let koderNumberCell = document.createElement("td");
    let koderNumberText = document.createTextNode(index + 1);

    let koderNameCell = document.createElement("td");
    let koderNameText = document.createTextNode(`${koder.name} ${koder.lastName}`);

    let koderPracticesCell = document.createElement("td");
    let koderPracticesText = document.createTextNode(koder.deliveredPractices);
        
    koderNumberCell.appendChild(koderNumberText)
    koderNameCell.appendChild(koderNameText)
    koderPracticesCell.appendChild(koderPracticesText)

    koderRow.appendChild(koderNumberCell)
    koderRow.appendChild(koderNameCell)
    koderRow.appendChild(koderPracticesCell)

    let practicesContainer = document.getElementById("practices-container")

    practicesContainer.appendChild(koderRow)

})


/*6.- En el elemento con el id "assistances-container" insertar una fila por cada koder obtenido en el paso 2, debería tener la siguiente estructura:
<tr>
    <td>{número de koder}</td>
    <td>{nombre completo del koder}</td>
    <td>{asistencias del koder}</td>
</tr>
*/


filteredAssistance.forEach((koder,index) => {
    let koderRow = document.createElement("tr");

    let koderNumberCell = document.createElement("td");
    let koderNumberText = document.createTextNode(index + 1);

    let koderNameCell = document.createElement("td");
    let koderNameText = document.createTextNode(`${koder.name} ${koder.lastName}`);

    let koderAssistanceCell = document.createElement("td");
    let koderAssistanceText = document.createTextNode(koder.deliveredPractices);
        
    koderNumberCell.appendChild(koderNumberText)
    koderNameCell.appendChild(koderNameText)
    koderAssistanceCell.appendChild(koderAssistanceText)

    koderRow.appendChild(koderNumberCell)
    koderRow.appendChild(koderNameCell)
    koderRow.appendChild(koderAssistanceCell)

    let assistancesContainer = document.getElementById("assistances-container")

    assistancesContainer.appendChild(koderRow)

})



/*7.-

*/

    var practicesAverageContainer = document.getElementById("practices-average");
    var practicesAverageText = document.createTextNode(practicesAverage)

    practicesAverageContainer.appendChild(practicesAverageText)


    /*8.-

    */
    var assistanceAverageContainer = document.getElementById("assistance-average");
    var assistanceAvergeText = document.createTextNode(assistancesAverage)

    assistanceAverageContainer.appendChild(assistanceAvergeText)



