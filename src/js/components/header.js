import { toggleScroll } from '../utilities/utility.js';

// -> Funcion para descargar el CV desde la Aplicacion Web.
function descargarCv() {
    // - Ruta del CV
    const rutaCv = '../../resources/Lucas-Gonzalez.pdf';

    // - Cambia la localizacion del navegador al pdf.
    window.location.href = rutaCv;
}

// --> Funciones para insertar elementos dentro de el header <-- //

// -> Funcion para crear el boton de descargar cv.
export function InsertBotonCV() {
    // - Creando variable para almacenar el nav del header
    const navHeader = document.querySelector('.nav-header');

    // - Creando el elemento de Boton
    const boton = document.createElement('button');
    boton.innerText = 'CV';
    boton.classList.add('boton', 'boton-cv');

    // - vent listener boton.
    boton.addEventListener('click' , descargarCv)

    navHeader.appendChild(boton);
}

export function InsertBotonNav() {
    const botonNav = document.createElement('button');
    botonNav.innerHTML = '<p>&#9776;</p>'
    botonNav.classList.add('boton-nav')
    botonNav.onclick = function() {
        document.querySelector('nav').classList.toggle('visible');

        //Prohibir y permitir el Scroll
        toggleScroll();
    }

    return document.querySelector('.header-contenido').appendChild(botonNav);
}

export function InsertTitulo() {
    const titulo = document.createElement('h2');
    titulo.innerHTML = '<span>L</span>ucas'
    titulo.classList.add('titulo-header');
    
    
    return document.querySelector('.header-contenido').prepend(titulo);
}

// --> Funciones para remover elementos dentro de el header <-- //

// -> Funcion para eliminar el boton Nav
export function RemoveBotonNav() {
    const botonNav = document.querySelector('.boton-nav');

    if (botonNav) {
        botonNav.remove();
    }
}

// -> Funcion para eliminar el titulo
export function RemoveTitulo() {
    const titulo = document.querySelector('.titulo-header');

    if (titulo) {
        titulo.remove();
    }
}