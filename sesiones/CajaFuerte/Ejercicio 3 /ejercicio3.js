

//Ejercicio 3 - Strings 


// Exercici 1 - Interpolació de variables amb cometes obertes
function interpolarVariables(nom, edat) {
    return `Mi nombre es ${nom} y tengo ${edat} anyos."`
}

console.log(interpolarVariables("Joan", 25)); // Retorna "El meu nom és Joan i tinc 25 anys."

// Exercici 2 - charAt
function obtenirCaracter(cadena, posicion) {
   return cadena.charAt(posicion);
}

console.log(obtenirCaracter("Hola", 1)); // Retorna "o"

// Exercici 3 - indexOf
function trobarPosicio(cadena2, subcadena) {
    return cadena2.indexOf(subcadena)
}

console.log(trobarPosicio("JavaScript es genial", "genial")); // Retorna 13

// Exercici 4 - repeat
function repetirCadena(cadena3, repite) {
    return cadena3.repeat(repite)
}

console.log(repetirCadena("Hola", 3)); // Retorna "HolaHolaHola"

// Exercici 5 - substring
function obtenirSubstring(cadena4, inicio, final) {
    return cadena4.substring(inicio, final);
}

console.log(obtenirSubstring("JavaScript", 0, 4)); // Retorna "Java"


//Exercici 6 - substr
function obtenirSubstr(cadena5, inicio2, longitud) {
    return cadena5.substr(inicio2, longitud);
    
}

console.log(obtenirSubstr("JavaScript", 4, 6)); // Retorna "Script"

// Exercici 7 - split
function dividirCadena(cadena6, separador) {
    return cadena6.split(separador);
}

console.log(dividirCadena("poma,pera,plàtan", ",")); // Retorna ["poma", "pera", "plàtan"]

// Exercici 8 - startsWith
function comencaAmb(cadena7, subcadena) {
    return cadena7.startsWith(subcadena);
}

console.log(comencaAmb("JavaScript", "Java")); // Retorna true

// Exercici 9 - endsWith
function acabaAmb(cadena8, subcadena2) {
    return cadena8.endWith(subcadena);
}

console.log(acabaAmb("JavaScript", "Script")); // Retorna true

// Exercici 10 - includes
function contéSubcadena(cadena9, subcadena3) {
    return cadena9.includes(subcadena3);
}

console.log(contéSubcadena("JavaScript és genial", "genial")); // Retorna true

// Exercici 11 - search
function cercarCadena(cadena10, subcadena4) {
    return cadena10.search(subcadena4);
}
console.log(cercarCadena("JavaScript és genial", "genial")); // Retorna 13

// Exercici 12 - match
function buscarCoincidencies(cadena11, patron) {
    return cadena11.match(patron);
}

console.log(buscarCoincidencies("Hola 123, adeu 456", /\d+/g)); // Retorna ["123", "456"]

// Exercici 13 - replace
function substituirCadena(cadena12, vellSubcadena, nouSubcadena) {
    return cadena12.replace( vellSubcadena, nouSubcadena);
}

console.log(substituirCadena("Hola món", "món", "JavaScript")); // Retorna "Hola JavaScript"

// Exercici 14 - replaceAll
function substituirTotes(cadena13, vellSubcadena2, nouSubcadena2) {
     return cadena13.replaceAll( vellSubcadena, nouSubcadena);
}

console.log(substituirTotes("Hola món, món", "món", "JavaScript")); // Retorna "Hola JavaScript, JavaScript"

// Exercici 15 - toLowerCase
function convertirMinuscules(cadena14) {
    return cadena.toLowerCase();
}

console.log(convertirMinuscules("Hola Món")); // Retorna "hola món"

// Exercici 16 - toUpperCase
function convertirMajuscules(cadena15) {
     cadena15.toUpperCase();
}

console.log(convertirMajuscules("Hola Món")); // Retorna "HOLA MÓN"

// Exercici 17 - trimStart
function eliminarEspaisInicials(cadena16) {
    cadena16.trimStart();
}

console.log(eliminarEspaisInicials("   Hola Món")); // Retorna "Hola Món"

// Exercici 18 - trimEnd
function eliminarEspaisFinals(cadena17) {
    return cadena17.trimEnd();

}

console.log(eliminarEspaisFinals("Hola Món   ")); // Retorna "Hola Món"

// Exercici 19 - trim
function eliminarEspaisExtrems(cadena18) {
    return cadena18.trim();
    
}
console.log(eliminarEspaisExtrems("   Hola Món   ")); // Retorna "Hola Món"
