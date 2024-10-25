console.log("Hola");

// 1. Capturar clics amb addEventListener()
document.querySelector("#boton1").addEventListener("click", function() {
    console.log("Buenas boton 1");
});

document.querySelector("#boton2").addEventListener("click", function() {
    console.log("Que tal boton 2");
});

document.querySelector("#boton3").addEventListener("click", function() {
    console.log("adios boton 3");
});

// 2. Manipulació del DOM amb innerHTML
document.querySelector("#boton").addEventListener("click", function() {
    document.querySelector("#miDiv").innerHTML = "Como tan muchachos";
});

// 3. Mostrar/ocultar elements amb style.display
document.querySelector("#toggleButton").addEventListener("click", function() {
    const div2 = document.querySelector("#miDiv2");
    if (div2.style.display === "none") {
        div2.style.display = "block"; // Muestra el elemento
    } else {
        div2.style.display = "none"; // Oculta el elemento
    }
});

// 4. Generar números aleatoris amb Math.random()
document.querySelector("#botonM").addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.querySelector("#resultado").textContent = "Numero aleatorio: " + randomNumber;
});

// 5. Manipular atributs amb setAttribute()
document.querySelector("#canviarImatge").addEventListener("click", function() {
    document.querySelector("#imatge").setAttribute("src", "https://i.redd.it/okarun-mclovin-v0-cdqrnvjswqsd1.png?width=536&format=png&auto=webp&s=de08ae879f6b7f84501bcbcd72fe5630b4ec3bff");
});

// 6. Afegir i eliminar classes amb classList
document.querySelector("#toggleClass").addEventListener("click", function() {
    document.querySelector("#miElement").classList.toggle("actiu");
});

// 7. Recorrer un array amb forEach() (Corregido con forEach)
const frutas = ["Manzana", "Platano", "Pera"];
frutas.forEach(fruta => {
    const li = document.createElement("li");
    li.textContent = fruta;
    document.querySelector("#fruitList").appendChild(li);
});

// 8. Accedir a un array de dues dimensions
const quiz = [
    ["Cuanto es 2+2", "4"],
    ["Quien tiene mas champions?", "Madrid"]
];

document.querySelector("#pregunta").textContent = quiz[0][0];
document.querySelector("#resposta").textContent = quiz[0][1];

// 9. Suma de dos números
function sumar(num1, num2) {
    return num1 + num2;
}

document.querySelector("#botonSuma").addEventListener("click", function() {
    const resultat = sumar(5, 10);
    document.querySelector("#resultat").textContent = "El resultado es " + resultat;
});

// 10. Validar una entrada buida
document.querySelector("#botonValidar").addEventListener("click", function() {
    const entrada = document.querySelector("#entrada").value;
    if (entrada === "") {
        alert("El campo no puede estar vacio");
    } else {
        alert("Entrada valida");
    }
});

// 11. Interacció amb addEventListener()
document.querySelector("#botonAlerta").addEventListener("click", function() {
    alert("AlertaaaAA");
});

// 12. Control de flux amb if...else
function comNum(numero) {
    if (numero > 10) {
        console.log("El numero es mayor que 10");
    } else {
        console.log("El numero es menor o igual a 10");
    }
}

// 13. Manipulació d'atributs amb getAttribute()
document.querySelector("#mostrarSrc").addEventListener("click", function() {
    const src = document.querySelector("#imagen").getAttribute("src");
    document.querySelector("#resultat1").textContent = "El src es: " + src;
});

// 14. Eliminar l'atribut amb removeAttribute()
document.getElementById("eliminarAtri").addEventListener("click", function() {
    document.getElementById("imagenEliminar").removeAttribute("alt");
});

// 15. Mostrar números de forma condicional
function mostrarNumerosParelelos(array) {
    array.forEach(function(num) {
        if (num % 2 === 0) {
            console.log(num);
        }
    });
}

const numeros = [1, 2, 3, 4, 5, 6];
mostrarNumerosParelelos(numeros);


