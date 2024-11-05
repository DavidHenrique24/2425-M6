console.log("Hola");

function crearFicha(event) {
    event.preventDefault(); //Para preveer comportamiento por defecto del boton
    const nombre = document.querySelector('#nombre').value;
    const apellido1 = document.querySelector('#ap1').value;
    const apellido2 = document.querySelector('#ap2').value;
    const dni = document.querySelector('#dni').value;
    const imagenUrl = document.querySelector('#imagenUrl').value;

    console.log(nombre);
    console.log(apellido1);
    console.log(apellido2);
    console.log(dni);
    console.log(imagenUrl);

    document.querySelector('.card-title').innerHTML = `${nombre} ${apellido1} ${apellido2}`;
    document.querySelector('.card-body p span').innerHTML = dni;
    document.querySelector('.card-img-top').src = imagenUrl;
}

// Captura el botón y añade el evento
const botonCrearFicha = document.querySelector('#crearFiche');

botonCrearFicha.addEventListener('click', crearFicha);
