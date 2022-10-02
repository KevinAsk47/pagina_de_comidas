
function prueba() {
    var arrayNames = ['sol', 'keviiin', 'joseee', 'mateo', 'ciro']
    console.log(arrayNames.sort())

    for (let i = 0; i < arrayNames.length; i++) {
        const element = arrayNames[i];
        console.log(element)
    }

    const solContreras = "sol"
    var object = {
        nombre: "sol",
        apellido: "contreras",
        edad: 22
    }
    console.log(object)

}

//  prueba()



function andrea() {

    var object = {
        nombre: "Andrea",
        apellido: "Fajardo",
        edad: 24
    }
    console.log(object.nombre)
}

andrea()



function prueba1() {

    var arrayNames = ['sol', 'kevin', 'jose', 'mateo', 'ciro']
    console.log(arrayNames.pop())

    for (let i = 0; i < arrayNames.length; i++) {
        const element = arrayNames[i];
        console.log(element)
    }


}

// prueba1()

//  function palabraMasLarga(larga) {

//    var arrayNames = ['sol','kevin','jose','mateo','ciro']
//     console.log (arrayNames.from())

//      for (let i = 0; i < arrayNames.length; i++) {

//          if(larga[i].length>palabra.length){
//              larga=palabra[i].length;
//          }
//         const element = arrayNames[i];
//         console.log(element)
// }

//     }

//      palabraMasLarga()

function palabraMasLarga() {

    var arrayNames = ['sol', 'kevinnnn', 'jose', 'mateo', 'ciro']
    //  console.log (arrayNames.from())


    arrayNames.sort((a, b) => a - b)
    console.log(arrayNames)
    // for (let i = 0; i < arrayNames.length; i++) {
    //     var element = arrayNames[i]
    //     var convertir = [...element].length
    //     contador = convertir

    //     for (let y = 1; y < arrayNames.length; y++) {
    //         const element = arrayNames[y];


    //     }


    //     // console.log(element)
    // }

    // console.log(contador)

}


// palabraMasLarga()


function prueba3() {

    var arrayNames = ['sol', 'kevin', 'jose', 'mateo', 'ciro']
    console.log(arrayNames.push())

    for (let i = 0; i < arrayNames.length; i++) {
        const element = arrayNames[i];
        console.log(element)
    }

}

// prueba3()

// 0 a 4 > reprobado
// 4 a 7 > aprobado 
// 7 a 10 > excelente
var nota = 20

function prueba4(notita) {


    if (notita < 0 || notita > 10) {
        console.log("No se encuentra su nota")
    } else {


        if (notita <= 4) {
            console.log("Reprobado")
        } else if (notita >= 5 && notita <= 7) {
            console.log("AProbado")

        } else {
            console.log("EXCELENTE")
        }
    }



}
// prueba4(nota)


// 1 a 5 > reprobado
// 6 a 8 > aprobado 
// 9 a 11 > excelente
// si pone una nota mas arriba de 11 entonces que diga no se encuentra su nota 


function prueba5() {

    var nota = 7

    if (nota < 1 || nota > 11) {
       alert("No se encuentra su nota")
    } else {
        if (nota <= 5) {
           alert("Reprobado")
        }else if (nota >= 6 && nota <= 8) {
           alert("Aprobado")

        } else{
           alert("Excelente")
        }


    }

}

// prueba5()



//Exercise 6: Write a function which receives an array and only prints the values that repeat. 
// For example, given the following array and index, the function will print '6,23,33,100'


function ejercicio6() {

    var arrayNames = [3, 5, 7, 2, 1, 9, 0, 99, 44];
    console.log(arrayNames.sort())

    for (let i = 0; i < arrayNames.length; i++) {
        const element = arrayNames[i];
        console.log(element)
    }

}

//  ejercicio6()

//Exercise 5: Write a function which receives two parameters, an array and an index.
// The function will print the value of the element at the given position (one-based) to the console.
//For example, given the following array and index, the function will print '6'. 



var arrayNames = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var i = 6;

function ejercicio7(array, index) {

    console.log(arrayNames, index)


    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(element)

    }

}

//   ejercicio7(arrayNames, i)




//Exercise 2: Create an array with all the ages of the students in your class. Iterate the 
//array using a while loop, and then print every age in the console. Add a conditional 
//inside the while loop to only print even numbers. Change the loop to use a "for" loop 
//instead of a "while" loop




function ejercicio8() {

    var edades = [22, 24, 12, 55, 65, 28, 32, 30, 41, 40];

    console.log(edades.sort())

    let i = 0

    // while (i < edades.length) {

    //     let dato = edades[i]
    //     console.log(dato)

    //     i++
    // }

    for (let i = 0; i < edades.length; i++) {
        const element = edades[i];
        console.log(element)
    }
}
// ejercicio8()



//Write a JavaScript function that reverses a number. For example, if x = 32443 then the output should be 34423.
//Save your JavaScript file and reload the page. Make sure you see the correct output. If 
//not, investigate and fix.


// FUNCIONES DE ORDEN SUPERIOR (REVERSE)
function ejercicio9() {

    var numeros = [1, 2, 3, 4, 5];
    var alReves = numeros.reverse()
    console.log(alReves)
}

// ejercicio9 () 

// FUNCIONES DE ORDEN SUPERIOR (FILTER)
// var edades = [22,24,12,55,65,28,32,30,41,40];
// var edadesFiltradas = edades.filter((edad)=>{

// if(edad<=30){
//     return edad
// }
// })
// console.log(num)

function reversa() {

    var numeros = [1,2,3,4,5,];
    var alReves = numeros.reverse()
    console.log(alReves)

    
}

reversa()


// FUNCIONES DE ORDEN SUPERIOR (MAP)
// var arrayNames = ['sol', 'kevin', 'jose', 'mateo', 'ciro']
// var edades = [22,24,12,55,65,28,32,30,41,40];
// //var num = arrayNames.map((nombre) => console.log(nombre))
// var num = arrayNames.map((nombre) => {

//     if (nombre == 'kevin') {
//        return "Encontre Kevin"

//     }else { return "No se encontro"
//  }

// })
// console.log(num)

// Write a JavaScript function that returns a string in alphabetical order. For 
//example, if x = 'webmaster' then the output should be 'abeemrstw'. Punctuation and 
//numbers aren't passed in the string.

function ejercicio10() {

    var palabra = 'webmaster'

    // CONVIERTO ARRAY EN STRING
    var convertir = [...palabra].sort()

    // CONVIERTO STRING EN ARRAY
    var normal = convertir.toString()
    console.log(normal)
}

//   ejercicio10 () 


//Write a JavaScript function that converts the first letter of every word to uppercase.
// For example, if x = "prince of persia" then the output should be "Prince Of Persia"


function ejercicio11() {

    var frases = "prince of persia"
    var convertir = frases.split(" ");

    var mayuscula = convertir.map((letra) => {
        return letra[0].toUpperCase() + letra.substring(1);
    }).join(" ")

    console.log(mayuscula)

}

// ejercicio11()



//Write a JavaScript function that finds the longest word in a phrase. For 
//example, if x = "Web Development Tutorial", then the output should be 
//"Development".


function ejercicio12() {

    var phrase = "Web Development Tutorial narcotraficates ss"
    var array = phrase.split(" ")
    var palabraMasLarga = array[0];
    for (let i = 1; i < array.length; i++) {

        if (array[i].length < palabraMasLarga.length) {
            palabraMasLarga = array[i];
        }
    }
    return palabraMasLarga
}

// console.log(ejercicio12())



//CONCATENACION

// var kevin = "kevin"

// var nombreMujer = "sol"

// var total = kevin + " y " + nombreMujer

// var total2 = `hola como estas ${nombreMujer}`

// console.log(total2)

