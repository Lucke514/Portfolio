// -> Importaciones.
import { InsertBotonNav, RemoveBotonNav, InsertTitulo, RemoveTitulo } from '../components/header.js';

// -> Comportamiento de los elementos.

// -> Media query para Header.
export function MediaQueryHeader() {
    const condTitulo = document.querySelector('.titulo-header');
    const condBoton = document.querySelector('.boton-nav');
    const navHeader = document.querySelector('.nav-header');

    if (window.matchMedia("(max-width: 768px)").matches) {
        // Hacer invisible la navegación
        navHeader.classList.add('invisible');

        // Insertar título y botón si no existen
        if (!condTitulo) {
            InsertTitulo();
        }
        if (!condBoton) {
            InsertBotonNav();
        }
        
    } else {
        // Remover botón y hacer visible la navegación si existe título
        if (condTitulo) {
            RemoveBotonNav();
            RemoveTitulo();
            navHeader.classList.remove('invisible');
            navHeader.classList.add('visible');
        }
    }
}
