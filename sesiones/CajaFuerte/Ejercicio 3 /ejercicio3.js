

//Ejercicio 3 - Strings 


// Exercici 1 - Interpolació de variables amb cometes obertes
function interpolarVariables(nom, edat) {
    // A completar
}

console.log(interpolarVariables("Joan", 25)); // Retorna "El meu nom és Joan i tinc 25 anys."

// Exercici 2 - charAt
function obtenirCaracter(cadena, posicio) {
    // A completar
}

console.log(obtenirCaracter("Hola", 1)); // Retorna "o"

// Exercici 3 - indexOf
function trobarPosicio(cadena, subcadena) {
    // A completar
}

console.log(trobarPosicio("JavaScript és genial", "genial")); // Retorna 13

// Exercici 4 - repeat
function repetirCadena(cadena, vegades) {
    // A completar
}

console.log(repetirCadena("Hola", 3)); // Retorna "HolaHolaHola"

// Exercici 5 - substring
function obtenirSubstring(cadena, inici, fi) {
    // A completar
}

console.log(obtenirSubstring("JavaScript", 0, 4)); // Retorna "Java"


function obtenirSubstr(cadena, inici, longitud) {
    // A completar
}

console.log(obtenirSubstr("JavaScript", 4, 6)); // Retorna "Script"

// Exercici 7 - split
function dividirCadena(cadena, separador) {
    // A completar
}

console.log(dividirCadena("poma,pera,plàtan", ",")); // Retorna ["poma", "pera", "plàtan"]

// Exercici 8 - startsWith
function comencaAmb(cadena, subcadena) {
    // A completar
}

console.log(comencaAmb("JavaScript", "Java")); // Retorna true

// Exercici 9 - endsWith
function acabaAmb(cadena, subcadena) {
    // A completar
}

console.log(acabaAmb("JavaScript", "Script")); // Retorna true

// Exercici 10 - includes
function contéSubcadena(cadena, subcadena) {
    // A completar
}

console.log(contéSubcadena("JavaScript és genial", "genial")); // Retorna true

// Exercici 11 - search
function cercarCadena(cadena, subcadena) {
    // A completar
}

console.log(cercarCadena("JavaScript és genial", "genial")); // Retorna 13

// Exercici 12 - match
function buscarCoincidencies(cadena, patró) {
    // A completar
}

console.log(buscarCoincidencies("Hola 123, adéu 456", /\d+/g)); // Retorna ["123", "456"]

// Exercici 13 - replace
function substituirCadena(cadena, vellSubcadena, nouSubcadena) {
    // A completar
}

console.log(substituirCadena("Hola món", "món", "JavaScript")); // Retorna "Hola JavaScript"

// Exercici 14 - replaceAll
function substituirTotes(cadena, vellSubcadena, nouSubcadena) {
    // A completar
}

console.log(substituirTotes("Hola món, món", "món", "JavaScript")); // Retorna "Hola JavaScript, JavaScript"

// Exercici 15 - toLowerCase
function convertirMinuscules(cadena) {
    // A completar
}

console.log(convertirMinuscules("Hola Món")); // Retorna "hola món"

// Exercici 16 - toUpperCase
function convertirMajuscules(cadena) {
    // A completar
}

console.log(convertirMajuscules("Hola Món")); // Retorna "HOLA MÓN"

// Exercici 17 - trimStart
function eliminarEspaisInicials(cadena) {
    // A completar
}

console.log(eliminarEspaisInicials("   Hola Món")); // Retorna "Hola Món"

// Exercici 18 - trimEnd
function eliminarEspaisFinals(cadena) {
    // A completar
}

console.log(eliminarEspaisFinals("Hola Món   ")); // Retorna "Hola Món"

// Exercici 19 - trim
function eliminarEspaisExtrems(cadena) {
    // A completar
}

console.log(eliminarEspaisExtrems("   Hola Món   ")); // Retorna "Hola Món"
