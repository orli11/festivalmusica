document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
});

function crearGaleria() {
    const CANTIDAD_IMAGENES = 16;
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= CANTIDAD_IMAGENES; i++) {
        const imagen = document.createElement('IMG'); // Crear un elemento de imagen
        imagen.src = `src/img/gallery/full/${i}.jpg`; // Establecer la ruta de la imagen
        imagen.alt = 'Imagen de la galería'; // Establecer el texto alternativo

        // Event Handler para abrir la imagen en grande al hacer clic
        imagen.onclick = function() {
            mostrarImagen(i);
        }

        galeria.appendChild(imagen); // Agregar la imagen al contenedor de la galería
    }
}

function mostrarImagen (i){
    const imagen = document.createElement('IMG'); // Crear un elemento de imagen
    imagen.src = `src/img/gallery/full/${i}.jpg`; // Establecer la ruta de la imagen
    imagen.alt = 'Imagen de la galería'; // Establecer el texto alternativo


    //Generar modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = cerrarModal;

    modal.appendChild(imagen); // Agregar la imagen al modal

    //Agregar al html
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden'); // Evitar el scroll del body al abrir el modal
    body.appendChild(modal);
}

function cerrarModal(){
    const modal = document.querySelector('.modal');
    modal.classList.add('fade-out'); // Agregar clase para animación de cierre
    setTimeout(() => {
        modal?.remove(); // Eliminar el modal si existe

        const body = document.querySelector('body');
        body.classList.remove('overflow-hidden'); // Evitar el scroll del body al abrir el modal
        
    }, 500); // Retardo para permitir animación de cierre
} 