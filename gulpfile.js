// Initialize modules
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const brosersync = require('browser-sync').create();

// Use dart-sass for @use
sass.compiler = require('dart-sass');

// Sass Task
function scssTask() {
    return src('app/scss/style/scss', { sourcemaps: true}).pipe(sass()).pipe(postcss([autoprefixer(), cssnano()])).pipe
}