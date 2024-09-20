console.log("Hola")
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