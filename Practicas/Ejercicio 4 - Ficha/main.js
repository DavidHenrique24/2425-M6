console.log("Hola");

function crearFicha() {
    // Capturar los valores de los inputs
    const nombre = document.querySelector('#nombre').value;
    const apellido1 = document.querySelector('#ap1').value;
    const apellido2 = document.querySelector('#ap2').value;
    const dni = document.querySelector('#dni').value;
    const imagenUrl = document.querySelector('#imagenUrl').value;

    console.log('Nombre:', nombre);
    console.log('Primer apellido:', apellido1);
    console.log('Segundo apellido:', apellido2);
    console.log('DNI:', dni);
    console.log('URL de la imagen:', imagenUrl);

    document.querySelector('.card-title').innerHTML = `${nombre} ${apellido1} ${apellido2}`;
    document.querySelector('.card-body p span').innerHTML = dni;
    document.querySelector('.card-img-top') = imagenUrl;
}

// captura de pantalla 
const botonCrearFicha = document.querySelector('#crearFiche');
botonCrearFicha.addEventListener('click', crearFicha);
