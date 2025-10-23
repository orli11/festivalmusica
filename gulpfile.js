import { src, dest, watch } from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

// Compile SCSS to CSS
export function css( done ) {
    src('src/scss/app.scss')
        .pipe( sass().on('error', sass.logError) ) //Aplica SASS, si hay un error lo muestra en consola
        .pipe( dest('build/css') )
    done()
}

// Watch for changes in SCSS files and run the css task
export function dev() {
    watch('src/scss/**/*.scss', css) // watch(archivos a observar, tarea a ejecutar)
}

