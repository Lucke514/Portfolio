// -> Funcion para descargar el CV desde la Aplicacion Web.
export function descargarCv() {
    // -> Ruta del CV
    const rutaCv = '../../resources/Lucas-Gonzalez.pdf';

    // -> Cambia la localizacion del navegador al pdf.
    window.location.href = rutaCv;
}

// -> Funcion para crear el boton de descargar cv.
export function crearBoton() {
    // Creando variable para almacenar el nav del header
    const navHeader = document.querySelector('.nav-header');

    // Creando el elemento de Boton
    const boton = document.createElement('button');
    boton.innerText = 'CV';
    boton.classList.add('boton', 'boton-cv');

    // -> event listener boton.
    boton.addEventListener('click' , descargarCv)

    navHeader.appendChild(boton);
}


