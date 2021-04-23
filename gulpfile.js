const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const shell = require('gulp-shell');
const concat = require('gulp-concat');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');

const scssSrc = './src/styles/**/*.scss';
const cssDest = './lib';
const cssBuild = `${cssDest}/island-ui.css`;

const tokensSrc = './src/styles/foundation/tokens.json';
const tokensBuild = './src/styles/foundation/_tokens/_tokens.json';

gulp.task('tokenize', shell.task(`json-to-scss ${tokensSrc} ${tokensBuild}`));

gulp.task('styles', () => {
  return gulp.src('./src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('island-ui.css'))
    .pipe(gulp.dest(cssDest)) // This will output the non-minified version
    .pipe(rename({ extname: '.min.css' }))
    .pipe(cleanCss())
    .pipe(gulp.dest(cssDest)); // This will output the minified version
});

gulp.task('cleanSCSS', () => {
  return del([
    cssBuild,
  ]);
});

gulp.task('watch', () => {
  gulp.watch(tokensSrc, (done) => {
    gulp.series(['tokenize'])(done);
  });
  gulp.watch(scssSrc, (done) => {
    gulp.series(['cleanSCSS', 'styles'])(done);
  });
});

gulp.task('watchtokens', () => {
  gulp.watch(tokensSrc, (done) => {
    gulp.series(['tokenize'])(done);
  });
});

gulp.task('default', gulp.series(['cleanSCSS', 'styles']));
