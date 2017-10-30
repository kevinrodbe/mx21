var gulp = require('gulp');
/*
  Vamos a usar esta lib "gulp-load-plugins" para abrir todos "los plugins" de gulp.
  Asi evitaremos hacer la "tipica declaracion":

    var sass = require('gulp-sass');

  Para lograr tener menos lineas de codigo, e ir defrente a la implementacion 🎉
*/
var $ = require('gulp-load-plugins')();

var browserSync = require('browser-sync').create('Mx server');
var autoprefixer = require('autoprefixer');
var argv = require('yargs');
var rucksack = require('rucksack-css');

var myArgs = argv.argv;
var minificar = myArgs.env === 'prod' ? true : false;
var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

var optionsBS = {
  online: false,
  open: 'local',
  server: {
    baseDir: './',
    directory: false
  },
  logLevel: 'debug',
  logPrefix: 'Mx',
  browser: ['google chrome']
};

var styleConfig = {
  main: './src/style/main.scss',
  src: './src/style/*.scss',
  dest: './dist/css/',
  scss: {
    errLogToConsole: true,
    outputStyle: 'expanded'
  },
  plugins: [
    autoprefixer({ browsers: AUTOPREFIXER_BROWSERS }),
    rucksack()
  ],
  nano: {
    discardComments: {
      removeAll: true
    }
  }
}

var imgConfig = {
  src: './src/img/**/*.*',
  dest: './dist/img/'
}

var fontsConfig = {
  src: './src/fonts/**/*.*',
  dest: './dist/fonts/'
}

gulp.task('css', function() {
  return gulp.src(styleConfig.main)
    .pipe($.sass(styleConfig.scss).on('error', $.sass.logError))
    .pipe($.postcss(styleConfig.plugins))
    .pipe($.if(minificar, $.cssnano(styleConfig.nano)))
    .pipe(gulp.dest(styleConfig.dest))
    .pipe(browserSync.stream())
});

gulp.task('mxserver', function() {
  return browserSync.init(optionsBS)
});

gulp.task('img', function() {
  return gulp.src(imgConfig.src)
    .pipe(gulp.dest(imgConfig.dest))
});

gulp.task('fonts', function() {
  return gulp.src(fontsConfig.src)
    .pipe(gulp.dest(fontsConfig.dest))
});

gulp.task('miron', function() {
  gulp.watch(styleConfig.src, ['css'])
  gulp.watch(imgConfig.src, ['img'])
  gulp.watch('*.html').on('change', browserSync.reload)
});

gulp.task('build', ['css', 'img', 'fonts']);

gulp.task('default', ['build', 'mxserver', 'miron']);
