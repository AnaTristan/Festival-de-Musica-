
const { src, dest, watch } = require("gulp");
//parallel

const sass = require("gulp-sass")(require('sass'));
const plumber = require('gulp-plumber');

//Imagenes
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
//const webp = require('gulp-webp');

//function verWebp(done) {
//const opciones = {
//quality: 50
// };

// src('src/img/**/*.{png,jpg}')
// .pipe(webp(opciones))
//.pipe(dest("build/img"))
//done();
//}

function imagenes(done) {

    const opciones = {
        optimizationLevel: 3
    };

    src('src/scss/**/*.scss')
        .pipe(cache(imagemin(opciones)))
        .pipe(dest("build/img"))
    done();
}


// compiling sass
function css(done) {

    src('src/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(dest("build/css"));

    done();
}

// watch 
function dev(done) {
    watch('src/scss/**/*.scss', css);

    done();
}

exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
//exports.verWebp = verWebp;
// exports.dev=parallel(imagenes,verWebp,dev);/