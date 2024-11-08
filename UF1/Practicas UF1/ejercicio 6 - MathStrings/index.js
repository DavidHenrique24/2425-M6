console.log("Hola")

//1- Aleatorio
//Parseint para sacar de texto a numero
document.querySelector("#btnAleatorio").addEventListener("click", function(){
    let num1 = parseInt(document.querySelector("#num1").value);
    let num2 = parseInt(document.querySelector("#num2").value);
    let numAleatorio = Math.floor(Math.random() * (num2 - num1 + 1))

    document.querySelector("#numeroAleatorio").innerHTML =  numAleatorio;
})

//2-Strings 




