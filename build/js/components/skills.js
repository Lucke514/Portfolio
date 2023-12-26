// -> Funcion para crear los cuadros de mis habilidades
export function insertarHabilidades() {
    // - Variable para las Skills
    const divHabilidades = document.querySelector('.habilidades');

    // - Array de las habilidades
    const habilidades = [
        {
            nombre : 'JavaScript',
            svg : `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-javascript" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff9999" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                <path d="M7.5 8h3v8l-2 -1" />
                <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
            </svg>`
        }
        ,
        {
            nombre : 'HTML',
            svg : `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-html5" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff9999" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
            </svg>
            `
        }
        ,
        {
            nombre : 'CSS',
            svg : `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-css3" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff9999" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
            </svg>
            `
        }
        ,
        {
            nombre : 'PHP',
            svg : `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-php" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff9999" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 12m-10 0a10 9 0 1 0 20 0a10 9 0 1 0 -20 0" />
                <path d="M5.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653" />
                <path d="M15.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653" />
                <path d="M12 7.5l-1 5.5" />
                <path d="M11.6 10h2.4l-.5 3" />
            </svg>
            `
        }
        ,
        {
            nombre : 'Node.js',
            svg : `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-nodejs" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff9999" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" />
                <path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" />
            </svg>
            `
        }
        ,
        {
            nombre : 'SASS',
            svg : `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-sass" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff9999" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 10.523c2.46 -.826 4 -.826 4 -2.155c0 -1.366 -1.347 -1.366 -2.735 -1.366c-1.91 0 -3.352 .49 -4.537 1.748c-.848 .902 -1.027 2.449 -.153 3.307c.973 .956 3.206 1.789 2.884 3.493c-.233 1.235 -1.469 1.823 -2.617 1.202c-.782 -.424 -.454 -1.746 .626 -2.512s2.822 -.992 4.1 -.24c.98 .575 1.046 1.724 .434 2.193" />
            </svg>
            `
        }
        ,
        {
            nombre : 'MySQL',
            svg : `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-mysql" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff9999" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3" />
                <path d="M9 7h.01" />
            </svg>
            `
        }
        ,
        {
            nombre : 'SQL',
            svg : `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sql" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff9999" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z" />
                <path d="M17 8v8h4" />
                <path d="M13 15l1 1" />
                <path d="M3 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1" />
            </svg>
            `
        }
        ,
        {
            nombre : 'Python',
            svg : `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-python" width="60" height="60" viewBox="0 0 24 24" stroke-width="2" stroke="#ff9999" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3" />
                <path d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3" /><path d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4" />
                <path d="M11 6l0 .01" /><path d="M13 18l0 .01" />
            </svg>
            `
        }
        ,
        {
            nombre : 'Git',
            svg : `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-git-merge" width="60" height="60" viewBox="0 0 24 24" stroke-width="2" stroke="#ff9999" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M7 8l0 8" />
                <path d="M7 8a4 4 0 0 0 4 4h4" />
            </svg>
            `
        }

    ]

    // - Crear componente para las habilidades
    habilidades.forEach(element => {
        const habilidad = document.createElement('div');
        habilidad.classList.add('habilidad');

        habilidad.innerHTML = `
            ${element.svg}
            <p>${element.nombre}</p>
        
        `;

        divHabilidades.appendChild(habilidad);
    });
} 