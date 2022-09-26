//1.Variables

// Crea un cuadro de diálogo (alert) que muestre lo siguiente “JavaScript funcionando correctamente”
alert('JavaScript funcionando correctamente');

// Comenta el código que muestra el cuadro de diálogo
//Salta un pop-up

// Crear variable tipo let de nombre variableSinValor declarada sin valor
let variableSinValor;

// Crear 2 variables tipo let de nombres booleano1 y booleano2 con valores booleanos
let booleano1 = true;
let booleano2 = false;
console.log(booleano1);

// Crear variable tipo const de nombre PI declarada con valor 3.14
const pi = 3.14;
console.log(pi);

// Crear variable tipo const de nombre TAU declarada con valor 2 veces PI
const tau = 3.14 * 2;
console.log(tau);

// Crear variable tipo const de nombre miNombre declarada con valor tu nombre
const miNombre = "Miguel";
console.log(miNombre);

// Crear variable tipo const de nombre miNumeroFav declarada con valor numérico
const miNumeroFav = 2;
console.log(miNumeroFav);

// Crea una variable de tipo booleano
const isCool = true;
console.log(isCool);

// Muestra por consola la longitud de la variable miNombre
console.log(miNombre.length);

// Muestra por consola el tipo de dato de la variable miNumeroFav
console.log(typeof miNumeroFav);

// Muestra un console.log que diga ‘Mi nombre es Euralio y mi numero favorito es 7” concatenado variables declaradas más arriba.
const otherName = "Euralio";
const number = 7;
console.log(" Mi nombre es " + otherName + " y mi número favorito es el " + number);

// Muestra por consola “Seré un crack en JavaScript al terminar el bootcamp” en mayúsculas.
const phrase = "Seré un crack en JavaScript al terminar el bootcamp";
console.log(phrase.toLocaleUpperCase());

// Muestra por consola solo los primeros 5 caracteres de la siguiente variable = ‘Hola soy un crack”
const phrase2 = "Hola soy un crack";
console.log(phrase2.substring(0, 5));

// Convierte la variable miNumeroFav en una string y luego muestra por consola el tipo de dato que es dicha variable
const miNumeroFav2 = miNumeroFav.toString();
console.log(typeof miNumeroFav2);

// Crea una variable y asignale un valor. Después utilizando template literal haz uso de la variable que habías creado,
//guarda el template literal en otra variable y sacala por consola.
const varTemplate = "JS hehe";
const textTemplate = `Estoy aprendiendo ${varTemplate}`;
console.log(textTemplate);

// Muestra por consola la variable PI hasta los 2 primeros decimales
console.log(pi.toFixed(1));


//2.Arrays

// Crear variable de nombre arrayVacio cuyo valor sea un array vacío
const arrayVacio = [];
console.log(arrayVacio);

// Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)
const arrayNumeros = [0,1,2,3,4,5,6,7,8,9];
console.log(arrayNumeros);

// Crear variable de nombre arrayNumeros2 declarada con un array de números del 0 al 15 (0, 1, 2...)
const arrayNumeros2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(arrayNumeros2);

// Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)
const arrayNumerosPares = [0,2,4,6,8];
console.log(arrayNumerosPares);

// Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)
const arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9];
console.log(arrayNumerosNeg);

// Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'
const holaMundo = ['Hola', 'Mundo'];
console.log(holaMundo);

// Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'
const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];
console.log(loGuardoTodo);

// Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
const arrayDeArrays = [[756, 'nombre'],[225, 'apellido'],[298, 'direccion']];
console.log(arrayDeArrays);

// Muestra por consola la longitud del array “loGuardoTodo”
console.log(loGuardoTodo.length);

// Crea un nuevo elemento y añadelo al final del array “loGuardoTodo” y muestralo por consola
loGuardoTodo.push("Pascual");
console.log(loGuardoTodo);

// Muestra por consola la propiedad ‘que’ de la variable loGuardoTodo
console.log(loGuardoTodo[1]);

// Añade la propiedad ‘Euralio’ en la array loGuardoTodo y muestrala por consola
loGuardoTodo[2]="Euralio";
console.log(loGuardoTodo[2]);


// 3.Objetos

// Crea un objeto de nombre Coche que tenga las propiedades: marca, modelo y matrícula con sus respectivos valores
const coche = {
    marca: "Toyota",
    modelo: "Subaru",
    matricula: 123456, 
};
console.log(coche);

// Crea un objeto de nombre Casa que tenga las propiedades: codPostal, calle, portal y piso con sus respectivos valores
const casa = {
    codPostal: 46015,
    calle: "c/Maestro Rodrigo",
    portal: 37,
    piso: 4,
};
console.log(casa);

// Crea un objeto de nombre FullStackDeveloper que tenga las propiedades: array lenguajes(ej. ‘javascript’,’php’)
//array proyectos(ej. ‘mi página personal’,etc)
const fullStackDeveloper = {
    language: ["Javascript", "Php"],
    proyectos: ["Mi página personal", "Proyecto de clase"],
};
console.log(fullStackDeveloper);

// Crea un objeto de nombre Perro que tenga las propiedades: nombre, raza, color y edad con sus respectivos valores
const perro = {
    nombre: "Canelo",
    raza: "Golden Retriever",
    color: "Canela",
    edad: 4
};
console.log(perro);

// Crea un objeto de nombre Noticia que tenga las propiedades: titular y cuerpo con sus respectivos valores
const noticia = {
    titular: "Comienza el bootcamp en Palacio Corominas",
    cuerpo:{
        introducción: "Hoy ha comenzado el bootcamp de Desarrollo Web",
        nudo: "Todos los alumnos son muy majos y están capacitadísimos",
        desenlace: "Seguro que consiguen lo que se propongan",
    }
};
console.log(noticia);

// Crea un objeto de nombre Persona que tenga las propiedades: nombre, apellidos y edad con sus respectivos valores
const persona = {
    nombre: "Hugo", 
    apellidos: "Castillo",
    edad: 34,
};
console.log(persona);

// Muestra por consola el nombre de la variable Persona
console.log(persona.nombre);

// Muestra por consola el lenguaje javascript de la variable FullStackDeveloper
console.log(fullStackDeveloper.language[0]);

// Crea un objeto de nombre Portatil que tenga la propiedad marca, accede a esta propiedad con .marca y muestrala por consola
const portatil = {
    marca: "HP",
};
console.log(portatil.marca);

// Obtén el valor de la propiedad marca del objeto anteriormente creado (Portatil) con ["marca"] y muestrala por consola
console.log(portatil.marca);

// Crea un objeto de nombre Concierto con una propiedad llamada grupos que es un array, obtén el valor de la propiedad y muestrala por consola
const concierto = {
    grupos: ["The Killers", "Muse", "Foo Fighters"],
};
console.log(concierto.grupos);

// Crea un objeto de nombre Led, con las propiedades: rojo, verde y azul,
//obtén el valor de las propiedades guardándolo en la variable array RGB[Rojo, Verde, Azul] y muestra este array por consola
const led = {
    rgb: ["rojo", "verde", "azul"],
};
console.log(led.rgb);

// Crea un objeto de nombre O_Error con la propiedad código, obtén el valor de la propiedad y muestrala por consola
const o_error = {
    codigo: "error",
};
console.log(o_error.codigo);

// Crea un objeto de nombre Grupo con la propiedad integrantes (array),obtén el valor de la propiedad guardándolo en la variable integrante
// y muestra por consola a uno de los integrantes
const grupo = {
    integrantes: ["Manuel", "Pepe", "Luisa"],
};
console.log(grupo.integrantes[2]);

// Crea un objeto de nombre Impresora con la propiedad objeto tinta{rojo, verde, azul}, obtén el valor de la propiedad
//guardándolo en la variable nivelesTinta y muestrala por consola
const impresora = {
    tinta: {
        nivelesTinta: ["rojo", "verde", "azul"],
    }
};
console.log(impresora.tinta);


// Crea un objeto de nombre Movil con la propiedad especificaciones obtén el valor de la propiedad con ["especificaciones"]
//guardándolo en la variable especificaciones y muestrala por consola
const movil = {
   especificaciones: {
    especificaciones: "iPhone 6",
   } 
};
console.log(movil.especificaciones);

// Dado el objeto de nombre Portatil con la propiedad marca, modifica el valor de la propiedad marca por el valor “MSI”, consolea el resultado
portatil.marca = "MSI";
console.log(portatil.marca);


// Dado el objeto de nombre Concierto añade el valor Guns N' Roses a la propiedad grupos, consolea el resultado
concierto.grupos.push("Guns N' Roses");
console.log(concierto.grupos);

// Dado el objeto de nombre Concierto, crea la propiedad fecha, dale un valor y
//después modifica el valor de la propiedad por el valor new Date() (fecha de hoy), consolea el resultado
concierto.fecha="12/09/1950";
console.log(concierto.fecha);
concierto.fecha="new date 26/09/2022";
console.log(concierto.fecha);

// Dado el objeto de nombre Grupo modifica el valor de la propiedad integrantes quitándole un integrante,
//consolea el número de integrantes actual (ojo! el número, no los nombres de los integrantes)
grupo.integrantes = 2;
console.log(grupo.integrantes);

