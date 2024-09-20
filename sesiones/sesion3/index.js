console.log("sesion 3 !!");

const boton1 = document.querySelector("#btn1");
console.log("boton1", boton1);
console.log (document.querySelector("h1"));
const titulo= document.querySelector("h1");
console.log ("interior del h1 ", titulo.innerHTML);

//Cambiamos el interior del h1 con un nuevo codigo HTML 
titulo.innerHTML = "<em> Titulo otro 3</em>";
//Vemos el evento click del boton1
function fnBoton1(){
    console.log("Click boton 1");
};
boton1.addEventListener("click", fnBoton1);

//Lo mismo del boton1 pero de forma resumida para el dos
document.querySelector("#btn2").addEventListener("mouseover",function(){
    console.log("click en boton 2");
})

//Evaluando textos 
const operacion = "2+3";
console.log("operacion ", operacion, eval(operacion));


