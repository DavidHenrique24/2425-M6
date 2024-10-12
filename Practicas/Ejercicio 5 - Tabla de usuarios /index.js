console.log("Hola");

let bd = []; // Array para almacenar los datos de los usuarios

function crearFicha(event) {
    event.preventDefault();  // Prevenir el comportamiento por defecto del botón
    const nombre = document.querySelector('#nombre').value;
    const apellido1 = document.querySelector('#ap1').value;
    const apellido2 = document.querySelector('#ap2').value;
    const dni = document.querySelector('#dni').value;
    const imagenUrl = document.querySelector('#imagenUrl').value;
    const usuario = {
        nombre: nombre,
        apellido: `${apellido1} ${apellido2}`,
        dni: dni,
        imagenUrl: imagenUrl
    };

    
    bd.push(usuario); // Agregar el objeto usuario al array bd

    // Actualizar la ficha con los nuevos datos
    document.querySelector('.card-title').innerHTML = `${nombre} ${apellido1} ${apellido2}`;
    document.querySelector('.card-body p span').innerHTML = dni;
    document.querySelector('.card-img-top').src = imagenUrl;

    // Pinta la tabla con los usuarios
    pintaTabla();
}

function pintaTabla() {
    // Captura el cuerpo de la tabla donde se mostrarán los usuarios
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';  // Limpia la tabla antes de llenarla 

    // Recorrer el array bd y generar las filas de la tabla
    for (let i = 0; i < bd.length; i++) {
        const usuario = bd[i];
        const fila = `
            <tr>
              <td>${i + 1}</td>
              <td><img width="30" src="${usuario.imagenUrl}" alt=""></td>
              <td>${usuario.nombre}</td>
              <td>${usuario.apellido}</td>
              <td>${usuario.dni}</td>
            </tr>
        `;
        // Insertar la fila generada en la tabla
        tbody.innerHTML += fila;
    }
}

// Capturar el botón y añadir el evento
const botonCrearFicha = document.querySelector('#crearFiche');
botonCrearFicha.addEventListener('click', crearFicha);
