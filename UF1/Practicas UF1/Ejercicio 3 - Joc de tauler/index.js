console.log("holasss");
// Array de preguntas
let casillas = document.querySelectorAll('.div'); 
let quiz = [
  {
    pregunta: "¿Qué etiqueta usamos para las tablas?", 
    respuestas: ["ol", "ul", "table", "cotufa"],
    correcta: 2
  },
  {
    pregunta: "¿Qué etiqueta se utiliza para crear un enlace?", 
    respuestas: ["link", "a", "href", "url"],
    correcta: 1
  },
  {
    pregunta: "¿Cuál es la etiqueta para insertar una imagen?", 
    respuestas: ["img", "image", "src", "pic"],
    correcta: 0
  }, 
  {
    pregunta: "¿Cuál es la etiqueta HTML para crear un párrafo?", 
    respuestas: ["p", "paragraph", "para", "text"],
    correcta: 0
  },
  {
    pregunta: "¿Qué etiqueta HTML se utiliza para incluir hojas de estilo?", 
    respuestas: ["css", "style", "link", "script"],
    correcta: 2
  }
];

// Variables para el estado del jugador
let posicioActual = 1; // La posición actual del jugador
let encerts = 0; // Contador  correctas
let errors = 0; // Contador incorrectas

console.log('Posición inicial:', posicioActual);
console.log('Encerts:', encerts);
console.log('Errors:', errors);

let preguntaActual; // guardar la pregunta actual

// Función para mostrar las preguntas
function mostrarPreguntas() {
  // Selección de una pregunta aleatoria
  const preAleatorio = Math.floor(Math.random() * quiz.length);
  preguntaActual = quiz[preAleatorio]; // Asigna la pregunta aleatoria

  document.querySelector('#question').innerHTML = preguntaActual.pregunta;

  const divPreguntas = document.querySelector('#answers'); // Crea constante para respuestas
  divPreguntas.innerHTML = ''; // Vacia las respuestas anteriores

  // Crear los botones de respuesta dinámicamente
  let botonRespuestas = '';
  for (let i = 0; i < preguntaActual.respuestas.length; i++) { // Pone las respuestas en los botones
    botonRespuestas += 
    `
    <button class="btn btn-primary" id="answer${i+1}">${preguntaActual.respuestas[i]}</button>
    `;
  }
  document.querySelector('#answers').innerHTML = botonRespuestas; // Muestra los botones respuesta

  const opcionEscogida = document.querySelectorAll('#answers button'); // Selecciona los botones de respuesta
  const numRespuestaCorrecta = preguntaActual.correcta; 
  const resultado = document.querySelector('#result'); // Div donde se muestra el resultado
  resultado.style.display = "none"; // Oculta el resultado al inicio

  // Asignar eventos de click a cada botón de respuesta
  for (let i = 0; i < opcionEscogida.length; i++) {
    opcionEscogida[i].addEventListener('click', function() { 
      resultado.style.display = "block"; // Muestra el resultado al seleccionar respuesta
      
      if (opcionEscogida[i].innerHTML == preguntaActual.respuestas[numRespuestaCorrecta]) {
        resultado.className = 'alert alert-success'; // Pintar de verde el mensaje 
        resultado.innerHTML = `La respuesta es Correcta!!`;
        moverJugador(true); 
      } else {
        resultado.className = 'alert alert-danger'; // Pinta de rojo el mensaje
        resultado.innerHTML = `La respuesta es incorrecta.`; // Mensaje de error
        moverJugador(false); 
      }
    });
  }
}


// Función para mover al jugador

function moverJugador(endavant) {
  if (endavant == true) {
      // Marcar la casilla actual en rojo
      casillas[posicioActual].classList.add('div-point');
      
      // Si no es la primera casilla, marcar la anterior en gris
      if (posicioActual > 0) {
          casillas[posicioActual - 1].classList.add('div-gris');
          casillas[posicioActual - 1].classList.remove('div-point');
      }
      posicioActual += 1;  //aumenta las posiciones
      encerts += 1; //aumenta los aciertos
      console.log(`Respuesta correcta! Nueva posición: ${posicioActual}`); //muestra la posicion que estas en consola
  } else {
     
      for (let i = 0; i < casillas.length; i++) {  // Si el jugador se equivoca, eliminar las clases gris de todas las casillas anteriores
          casillas[i].classList.remove('div-gris');
      }
      casillas[posicioActual - 1].classList.remove('div-point');// Remove el color rojo de la casilla actual
      posicioActual -= 3; // Retroceder tres posiciones
      if (posicioActual < 1) {
          posicioActual = 1;  // Si la posición es menor a 1, establecerla en 1
      }
      errors += 1;  // Actualizar los errores
      console.log(`Respuesta incorrecta! Nueva posición: ${posicioActual}`);
      casillas[posicioActual - 1].classList.add('div-point');// Aplicar el color rojo a la nueva casilla actual
  }
  comprovaFinalJoc();// Comprueba si se ha llegado a la última casilla
}


function comprovaFinalJoc(){
    if (posicioActual == 20){ 
    console.log(`Has llegado a la casilla 20, Felicidades!!!, aciertos: ${encerts}, erorres: ${errors}`);
    document.querySelector("#next-question").style.display = "none";
  
    }
   

}


mostrarPreguntas();


document.querySelector('#next-question').addEventListener('click', function() {
    
  mostrarPreguntas(); 
});




