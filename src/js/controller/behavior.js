// -> Importaciones.

// -> Comportamiento de los elementos.

// -> Media query para Header.
export function MediaQueryHeader() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        // clase del Header
        const header = document.querySelector('.header-contenido');
        
        // Hacer invisible la navegacion
        document.querySelector('.nav-header').classList.add('invisible');
        
        // -> Añadir el boton para mostrar el nav
        const botonNav = document.createElement('button');
        botonNav.innerHTML = '<p>&#9776;</p>'
        botonNav.classList.add('boton-nav')


        // Creando el Elemento h2 para añadir
        const titulo = document.createElement('h2');
        titulo.innerHTML = '<span>L</span>ucas'
        titulo.classList.add('titulo-header');

        // -> Funcion Listener para el boton para desplegar el nav
        botonNav.addEventListener('click' , function() {
            document.querySelector('nav').classList.toggle('visible');
        })
    
        // - Validar que no exista el titulo y el boton
        const condTitulo = document.querySelector('.titulo-header');
        const condBoton = document.querySelector('.boton-nav');
        if (!condTitulo && !condBoton) {
            header.prepend(titulo);
            document.querySelector('.header').appendChild(botonNav);
        }
        
    } else {
        // - Validar si el titulo existe
        const condTitulo = document.querySelector('.titulo-header');
        const condBoton = document.querySelector('.boton-nav');
        if (condTitulo) {
            condTitulo.remove();
            condBoton.remove();

            // -remover la clase invisible del nav header
            const header = document.querySelector('.nav-header');
            header.classList.remove('invisible');
            header.classList.add('visible')

        }
    }
}


  

