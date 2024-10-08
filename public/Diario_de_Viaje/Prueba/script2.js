let paginaActual = 1;

function cambiarPagina(direccion) {
    const paginaIzquierda = document.querySelector('.izquierda');
    const paginaDerecha = document.querySelector('.derecha');
    
    // Si el usuario pasa hacia la derecha
    if (direccion === 1 && paginaActual === 1) {
        paginaIzquierda.classList.add('girada');
        paginaDerecha.classList.remove('regresa');
        paginaActual = 2;
    } 
    // Si el usuario regresa hacia la izquierda
    else if (direccion === -1 && paginaActual === 2) {
        paginaIzquierda.classList.remove('girada');
        paginaDerecha.classList.add('regresa');
        paginaActual = 1;
    }
    
    actualizarContenido();
}

function actualizarContenido() {
    const contenidoIzquierda = document.getElementById('pagina1');
    const contenidoDerecha = document.getElementById('pagina2');
    
    if (paginaActual === 1) {
        contenidoIzquierda.innerHTML = '<p>Primera página del diario.</p>';
        contenidoDerecha.innerHTML = '<p>Segunda página del diario.</p>';
    } else {
        contenidoIzquierda.innerHTML = '<p>Tercera página del diario.</p>';
        contenidoDerecha.innerHTML = '<p>Cuarta página del diario.</p>';
    }
}
