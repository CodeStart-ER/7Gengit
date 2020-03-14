

//crear una funcion que pida al usuario a través de un prompt
//las propiedades nombre{name}, appelido{lastName},edad{age} y 
//telefono{phone} de un koder y crear un {koderObject} con esos
//datos


/*

const functionFillObject = (koderFill) => {

    let koderObject = {
            name = undefined,
            lastName = undefined,
            age = undefined,
            phone = undefined
    }


    for ( prop in koderObject){
        
        let varArrayKoder; 

        koderObject[prop]=prompt()
         
    }


}

*/

/*
var beerCollection = [
    {
        marca: "corona",
        tipo: "lager",
        tamano: "355ml"
    },

    {
        marca: "tecate",
        tipo: "lager",
        tamano: "355ml" 
    },
    {
        marca: "paulaner",
        tipo: "pilsner",
        tamano: "500ml"
    }
]

//creo funcion con nombre cualquiera, en este caso printBeerBrand, el parametro que recibe (berrCollection) 
//ahora sera representado por (beerBox)
//para recorrer la matriz (beerCollection) ahora llamo a cada item con un nombre cualquiera, en este caso
//lo llamo (beer) y para cada item hago llamado a cada propiedad del objeto con objeto.marca etc
const printBeerBrand = ( beerBox ) => {
    beerBox.forEach((beer) => {
        console.log(beer.marca) 
        console.log(beer.tipo)
    })
}

//llamada de la funcion pasando parametro, el parametro corresponde al nombre del array
printBeerBrand(beerCollection)


//voy a crear una funcion constructora para crear una nueva cerveza en matriz beerCollection
// uso this para designar la propiedad del objeto que estoy creando, y lueg debo asignar el valor a cada prop..
//

*/
/*

//funcion contrstructora para crear un objeto llamado cerveza, y crear una cerveza a la vez
function Cerveza(nombre, tipo, tamaño){
    this.name = nombre,
    this.tipo =  tipo,
    this.tamano = tamaño
    this.promocion = function(){
        alert("Esta es la mejor cerveza del mundo!!!!")
    }
}


var recetasDeCervezas = [

    [
        "Fer's One",
        "Stout",
        "355ml"
    ],[
        "Cualquiera",
        "Ale",
        "500ml"
    ],[
        "No es One",
        "Lager",
        "1.5Lts"
    ]
]



var nuevasCervezas = []

const crearCervezas = (libreDeRecetas) => {
    libreDeRecetas.forEach((receta) => {
        let cerveza = new Cerveza(...receta)
        nuevasCervezas.push(cerveza)
    })
    console.log(nuevasCervezas)
}

//debo comentar la siguiente linea para que haga ejecucion de funcones mas abajo
crearCervezas(recetasDeCervezas)
}


// en este caso se ejecuta el comando crearCervezas(recetasDeCervezas) automaticamente en la consola

*/
/*
var libroDeRectas7g = []

const pedirRecetas = () => {
    let cuantasRecetas  = parseInt(prompt("dile a isra cuantas recetas quieres"));
    let i;

    for (i = 0; i < cuantasRecetas, i++){
        let nombre = prompt ("Como se va a llamar tu cerveza?")
        let tipo = prompt ("De que tiepo va a ser tu cerveza?")
        let tamaño = prompt ("De que tamaño va a ser?")
        let receta = [nombre, tipo, tamaño]
        libroDeRectas7g.push(receta)

        //muestro por consola el libro de recetas con las adiciones que voy haciendo via prompt
        console.log(libroDeRectas7g)


        //consola: pedirRecetas() --> va a pedir numero de recetas a crear
        // de esta manera creo una receta nueva con los datos que ingresa el usuario via prompt
    
        // con el siguiente llamado de funcion, y luego de crear nuevas recetas,  
        crearCervezas(libroDeRectas7g)
        
    }

}


*/

var papasRecipes = [
    [

    "Ruffles",
    "Original",
    "40gms"
    ],[
    "Sabritas",
    "Picosas",
    "40gms"
    ],[
    "Pringles",
    "Naturales",
    "45gms"
    ]
]


function Papas(nombre, sabor, contenido){
    this.nombre = nombre,
    this.sabor =  sabor,
    this.contenido = contenido,
    this.slogan = function() {alert(
        `nuestra botana ${this.nombre} es la mas sabrosa`)}
    }


var nuevasPapas = []

const crearPapas = (recetaPapas) => {
        recetaPapas.forEach((recipe) => {
            let papas = new Papas(...recipe)
            nuevasPapas.push(papas)
            
        })

}

crearPapas(papasRecipes)


var todosProductosPapas = []

const pedirNuevasPapas = () => {
    let cuantasNuevasPapas = parseInt (prompt("Cuantos nuevos elementos de Papas vas a crear?"));
    let i;

    for (i=0;i < cuantasNuevasPapas; i++){
        let nombre = prompt("Indique el nombre comercial de las papas:")
        let sabor = prompt("Cual es el sabor de las papas?")
        let contenido = prompt("Especifique el contenido en peso de este producto")
        let productoPapas = [nombre,sabor,contenido]
        todosProductosPapas.push(productoPapas)



    }



    

}