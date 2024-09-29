console.log("Hola");
const alumnes = [
    {
      nom: "Joan Pérez",
      edat: 18,
      correu: "joan.perez@example.com",
      moduls: [
        { nom: "Desenvolupament Web", nota: 8.5 },
        { nom: "Bases de Dades", nota: 7.0 },
        { nom: "Sistemes Operatius", nota: 6.5 }
      ]
    },
    {
      nom: "Maria Sánchez",
      edat: 19,
      correu: "maria.sanchez@example.com",
      moduls: [
        { nom: "Desenvolupament Web", nota: 9.0 },
        { nom: "Bases de Dades", nota: 8.0 },
        { nom: "Sistemes Operatius", nota: 7.5 }
      ]
    },
    {
      nom: "Pere Martínez",
      edat: 20,
      correu: "pere.martinez@example.com",
      moduls: [
        { nom: "Desenvolupament Web", nota: 7.5 },
        { nom: "Bases de Dades", nota: 6.0 },
        { nom: "Sistemes Operatius", nota: 8.0 }
      ]
    }
  ];
  
//array 
const frutas = ['pera', 'manzana ', 'platano', 9 , 32, "34"]
//acceder posicion de arrays
console.log(frutas[2]);
//se cuenta desde 0
//array de dos dimensiones 
const barquitos = [["1A", "1B", "1C"],["2A", "2B", "2C"],["3A", "3B", "3C"]]
//busca el array de la fila y el lugar
console.log(barquitos[2][1]); 

//objetos java
const persona= {
    nombre : "Pepe",
    apellidos: "lotillas Rotas"
}
console.log('nombre: ', persona.nombre);

const arrayPersonas = [
    {
      nombre : 'Pepe',
      apellidos : 'Lotillas Rotas'
    },
    {
      nombre : 'Sara',
      apellidos : 'Lotillas Rotas'
    },
    {
      nombre : 'Andres',
      apellidos : 'Roto Rotas'
    }
  ]
  
  console.log(arrayPersonas[2].nombre);
//agarrar elementos de objetos con . (importante)
  console.log("Maria tiene de nota un: ", alumnes[1].moduls[1].nota);
  console.log("El nombre del modulo de Pere es: ", alumnes[2].moduls[1].nom);

//recorrer elementos de un array con for 
for(let i=0; i<arrayPersonas.length;i++){
    console.log('nombre de ',i,alumnes[i].nom)
}
//Generando html apartir de un array
//Crear lista desordenada con los nombres de los alumnos

let listaHTML = '<ul>';

for(let i= 0;i<arrayPersonas.length;i++){

  listaHTML += `
  <li> ${arrayPersonas[i].nombre} </li>
  `
}
listaHTML += '</ul>';

document.querySelector('#miLista').innerHTML= listaHTML

let tabla = '<td>'
for(let i= 0;i<arrayPersonas.length;i++){
  tabla += `
  <tr> ${arrayPersonas[i]}</tr>
  `
}


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
  }
];

let quizPre = "";

for(let i = 0; i < quiz.length; i++) {
  quizPre += `
    <h2>${quiz[i].pregunta}</h2>
    <button>${quiz[i].respuestas[0]}</button>
    <button>${quiz[i].respuestas[1]}</button>
    <button>${quiz[i].respuestas[2]}</button>
    <button>${quiz[i].respuestas[3]}</button>
  `;
}

document.querySelector('#quizHtml').innerHTML = quizPre;
