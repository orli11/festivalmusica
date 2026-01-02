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

        galeria.appendChild(imagen); // Agregar la imagen al contenedor de la galería
    }
}