let paginaActual = 1;
const totalPaginas = 4; // Número total de páginas (pares, es decir, 2 páginas por conjunto)

function cambiarPagina(direccion) {
    const pagina1 = document.getElementById('pagina1');
    const pagina2 = document.getElementById('pagina2');
    const pagina3 = document.getElementById('pagina3');
    const pagina4 = document.getElementById('pagina4');

    // Asegurar que la página actual esté en el rango válido
    paginaActual += direccion;
    if (paginaActual < 1) {
        paginaActual = 1;
    } else if (paginaActual > totalPaginas) {
        paginaActual = totalPaginas;
    }

    // Reseteamos las clases de todas las páginas
    pagina1.classList.remove('girada', 'regresa');
    pagina2.classList.remove('girada', 'regresa');
    pagina3.classList.remove('girada', 'regresa');
    pagina4.classList.remove('girada', 'regresa');

    // Cambiamos la visibilidad de las páginas dependiendo de la actual
    if (paginaActual === 1) {
        // Página 1 y 2 visibles
        pagina1.style.visibility = 'visible';
        pagina2.style.visibility = 'visible';
        pagina3.style.visibility = 'hidden';
        pagina4.style.visibility = 'hidden';
    } else if (paginaActual === 2) {
        // Página 3 y 4 visibles, 1 y 2 ocultas
        pagina1.style.visibility = 'hidden';
        pagina2.style.visibility = 'hidden';
        pagina3.style.visibility = 'visible';
        pagina4.style.visibility = 'visible';
    }

    // Aplicar animación de rotación si se avanza o retrocede
    if (paginaActual === 2) {
        pagina1.classList.add('girada');
        pagina2.classList.add('girada');
    } else {
        pagina1.classList.remove('girada');
        pagina2.classList.remove('girada');
        pagina3.classList.remove('girada');
        pagina4.classList.remove('girada');
    }


}





