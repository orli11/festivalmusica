import { src, dest, watch, series } from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

export function js(done) { // Tarea para copiar los archivos JS
    src('src/js/app.js') //Identifica y selecciona los archivos JS
        .pipe( dest('build/js') ) //Los copia a la carpeta de destino   
    done()  
}

// Compile SCSS to CSS
export function css( done ) {
    src('src/scss/app.scss', { sourcemaps: true }) //Identifica el archivo principal de SASS
        .pipe( sass().on('error', sass.logError) ) //Aplica SASS, si hay un error lo muestra en consola
        .pipe( dest('build/css', { sourcemaps: true}) )
    done()
}

// Watch for changes in SCSS files and run the css task
export function dev() {
    watch('src/scss/**/*.scss', css) // watch(archivos a observar, tarea a ejecutar)
    watch('src/js/**/*.js', js) // watch(archivos a observar, tarea a ejecutar)
}

export default series( js, css, dev) // series ejecuta las tareas en orden 
