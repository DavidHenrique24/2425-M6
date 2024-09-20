console.log("sesion 1 !!")

//Cometarios 
/*Comentario diferente (puede usar control mas k mas c*/ 

//variable 
var nombre = "Pepe"
let apellidos = "Potamo"
const dominio = "@fpllefia.com"
const nombreCompleto= apellidos.toLocaleLowerCase() + nombre.toLocaleLowerCase()
const email=nombreCompleto+dominio
console.log("nombreCompleto", nombreCompleto)
console.log("email: ",email)

//Concatenar texto con variables
const email2 = 'otroemail' + dominio 
console.log("email2: ",email2);
// Utilizando hackstricks
const email3 = `otroemail${dominio}`
console.log(`email3: `, email3);

//ejemplo de backstick 
const miCodigoHtml = `
<div>
<p>Hola</p>
</div>
`
console.log(miCodigoHtml);
