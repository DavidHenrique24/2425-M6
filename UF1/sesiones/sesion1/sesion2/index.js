console.log("Hola sesion 2");

//Pedir datos con Prompt
/*
const numero = prompt('Introduce un numero: ')
console.log('numero: ', numero);
const numero2 = prompt('Introduce otro numero: ')
console.log('numero2: ', numero2);
console.log('suma: ',parseInt(numero) + parseInt(numero2))
*/

const numeroAdivinar = 10
let numeroIntentos = 0
let numeroIntroducido= -1 
while(numeroIntentos < 3 && numeroAdivinar != numeroIntroducido){
    numeroIntroducido = prompt('Introduce un numero: ')
    if (numeroIntroducido < numeroAdivinar){
        console.log("ha introducido un numero inferior al adivinado")
    }
    else if(numeroIntroducido > numeroAdivinar){
    console.log('Introducido un numero superior al adivinado')
    }else{
        console.log("Has adivinado")
    }
    numeroIntentos++
    
}



