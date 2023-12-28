/*
    @Nota : Para que funcione este metodo de importacion en el HTML el src de Script
            Debe tener la caracteristica de (type = 'module'), de lo contrario 
            no se ejecutara la funcion importada y aparecera un error en la consola.
*/

// Importa la función desde header.js
import { InsertBotonCV } from './components/header.js'; 

// Importa la función desde webform.js
import { crearFormulario , mostrarFormulario} from './components/webform.js';

// Importa la funcion desde Behavior.js
import { MediaQueryHeader } from './controller/behavior.js';

// Importar la Funcion para crear las habilidades;
import {insertarHabilidades} from './components/skills.js';



// Llama las funciones Iniciales
InsertBotonCV();
MediaQueryHeader();
crearFormulario();
insertarHabilidades();


// Event Listener de los elementos

// Realizar un Listener para poder validar el cambio de tamaño de la pantalla.
window.addEventListener('resize' , MediaQueryHeader);

// ->Mostrar formulario con eventListener
document.querySelector('#mailForm').addEventListener('click' , mostrarFormulario);