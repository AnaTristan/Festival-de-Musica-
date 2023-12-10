
const { src, dest, watch} = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const plumber=require('gulp-plumber');


// compiling sass
function css( done ){

    src('src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(dest("build/css"));

    done();
}

// watch 
function dev( done ){
    watch('src/scss/**/*.scss', css);

    done();
}

exports.css = css;
exports.dev = dev;