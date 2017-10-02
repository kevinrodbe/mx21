var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var postcss    = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var rucksack = require('rucksack-css');

// Static server
gulp.task('mxserver', function() {
  browserSync.init({
    server: {
        baseDir: "./"
    }
  });
});

gulp.task('sass', function () {
  return gulp.src('./src/styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer({browsers: [
        'ie >= 10',
        'ie_mob >= 10',
        'ff >= 30',
        'chrome >= 34',
        'safari >= 7',
        'opera >= 23',
        'ios >= 7',
        'android >= 4.4',
        'bb >= 10'
      ]}),
      rucksack()
    ]))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.stream());
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/styles/*.scss', ['sass']);
});

gulp.task('miron', function() {
  gulp.watch('./src/styles/*.scss', ['sass']);
  gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'mxserver', 'miron']);