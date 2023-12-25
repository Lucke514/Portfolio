// -> Funcion para crear el formulario
export function crearFormulario() {
    const formulario = document.createElement('form');

    formulario.innerHTML = `
        <h1> Rellene Todos los campos </h1>
    
        <div class="formulario-contenido">
            <label for="Nombre"> Nombre </label>
            <input type="text" id="Nombre" >
        
            <label for="Apellido"> Apellido </label>
            <input type="text" id="Apellido">
        
            <label for="telefono"> Telefono </label>
            <input type="text" id="telefono">
        
            <label for="email"> Correo </label>
            <input type="text" id="email">

            <label for="mensaje"> Mensaje </label>
            <textarea name="mensaje" id="mensaje" cols="30" rows="5"></textarea>

            <input type="submit" value="Enviar" class="boton">
        </div>
    `

    formulario.classList.add('formulario-overlay')

    return formulario;
}

//  -> Funcion para mostrar el formulario dentro del body         
export function mostrarFormulario() {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.appendChild(crearFormulario()) 

    // -> Prohibir el Scroll de la pagina
    document.body.style.overflow = 'hidden';

    // -> Boton para cerrar el formulario
    const cerrarFormulario = document.createElement('p');
    cerrarFormulario.textContent = 'X';
    cerrarFormulario.classList.add('btn-cerrar');
    
    cerrarFormulario.onclick = function() {
        overlay.remove();
        // -> Permitir el Sroll en la pagina
        document.body.style.overflow = '';
    }

    // -> Agregando el boton de cerrarFormulario al overlay
    overlay.appendChild(cerrarFormulario); 

    const body = document.querySelector('body');
    body.appendChild(overlay);
}

