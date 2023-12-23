// -> Funcion para añadir un Boton en la Navegacion del header para descargar mi Curriculum.

function crearBoton() {
    // Creando variable para almacenar el nav del header
    const navHeader = document.querySelector('.nav-header');

    // Creando el elemento de Boton
    const boton = document.createElement('button');
    boton.innerHTML = 'CV';
    boton.classList.add('boton', 'boton-cv');
    navHeader.appendChild(boton);
}



// Call a la funcion de Crear boton
crearBoton();