/*
    @Nota : Para que funcione este metodo de importacion en el HTML el src de Script
            Debe tener la caracteristica de (type = 'module'), de lo contrario 
            no se ejecutara la funcion importada y aparecera un error en la consola.
*/

// Importa la función desde header.js
import { crearBoton , descargarCv } from './components/header.js'; 

// Llama a la función para crear el botón
crearBoton();
