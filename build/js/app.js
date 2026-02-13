document.addEventListener('DOMContentLoaded', function() {
    navegacionFija();
    crearGaleria();
    resaltarEnlace();
    scrollNav();
});

function navegacionFija() {
    const header = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');

    window.addEventListener('scroll', function(){
        if(sobreFestival.getBoundingClientRect().bottom < 1){ // Revisa si la parte inferior de la sección está por encima de la ventana
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
}

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

    //Btn cerrar modal
    const cerrarModalBtn = document.createElement('BUTTON');
    cerrarModalBtn.textContent = 'X';
    cerrarModalBtn.classList.add('btn-cerrar');
    cerrarModalBtn.onclick = cerrarModal;

    modal.appendChild(imagen); // Agregar la imagen al modal
    modal.appendChild(cerrarModalBtn); // Agregar el botón de cerrar al modal

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

function resaltarEnlace() {
    document.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navegacion-principal a');

        let actual = '';
        sections.forEach( section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if(window.scrollY >= (sectionTop - sectionHeight / 3)) {
                actual =section.id;
            }
        })
        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === '#' + actual) {
                link.classList.add('active');
            }
        })
    })
}

function scrollNav() {
    const navLinks = document.querySelectorAll('.navegacion-principal a');

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const sectionScroll = e.target.getAttribute('href'); // Obtener el valor del atributo href del enlace clickeado
            const section = document.querySelector(sectionScroll); // Seleccionar la sección correspondiente utilizando el valor del href

            section.scrollIntoView({behavior: 'smooth'}); // Desplazarse suavemente a la sección seleccionada
        })
    })
}