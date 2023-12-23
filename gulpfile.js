// -> importacion de Librerias que se van a utilizar 
    // - gulp -> Libreria para automatizar procesos como la codificacion de sass a css y compilar archivos de otros lenguajes para enviarlos a nuevas Ubicaciones del proyecto.
    // - sass -> Lenguaje para trabajar el diseño del proyecto en estilo de codigo cascada
    // - plumber -> Validaciones para Evitar que la shell que este ejecutando y realizando la compilacion de gulp no falle.

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

// -> Tarea inicial donde se busca la carpeta donde estan los ingresos de datos .scss en la carpeta de src
// -> Para luego enviarlo a la carpeta de destino donde este el css de la pagina en la build del proyecto.
gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(plumber(function(error) {
            console.log('Error en Sass: ', error.message);
            this.emit('end'); // Evita que la tarea se detenga
        }))
        .pipe(sass())
        .pipe(gulp.dest('build/css'));
});

gulp.task('javascript', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(plumber(function(error) {
            console.log('Error en javascript:', error.message);
            this.emit('end'); // Asegúrate de que 'this' se refiera al stream de Gulp
        }))
        .pipe(gulp.dest('build/js'));
});



// -> Funcion que estara esperando cambios para ejecutar la funcion de sobreescribir el codigo de sass como css
gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('src/js/**/*.js', gulp.series('javascript'));
});


// -> Tarea que define que se va a estar trabajando con dos funciones en forma secuencial.
    // -> en este caso se esta haciendo la funcion llamada 'sass' para escribir los cambios que no se habian realizado.
    // -> luego se hara la funcion de 'watch' que estara esperando cambios.
gulp.task('default', gulp.series('sass', 'javascript', 'watch'));
