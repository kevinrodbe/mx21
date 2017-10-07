# Workshop Tienda Virtual Mx21

Será un workshop dividido en 4 semanas de front y 4 de back.

En dónde desarrollaremos el CRUD de una tienda virtual usando:

* Angular 4

* C#

La parte del front será dividida en 2 partes:

* Maquetación:

  Usaremos:
    - **SASS** para hacer CSS más fácil y con mucho menos líneas.

    - **Gulp** para evitar hacer tareas manuales repetitivas. Por ejemplo:

      * Hacer nuestro CSS compatible con todos los navegadores
      * Insertar plugins para escribir menos CSS (yey!)
      * Crear un server para ver nuestro trabajo desde cualquier dispositivo en la misma red Wifi, y hacer actualizaciones automáticamente cada vez que hagamos cambios en nuestro código.

* Angular

## Pre-requisitios
1. Elegir un editor de texto (Te recomiendo **VsCode**, por sus integraciones nativas y plugins)
2. Instalar Node. Tenemos 2 formas de hacerlo:
	* [node][nodeLink]: Descargas la versión Actual y le das **full next**
	* [nvm][nvmLink]: Seguir las intrucciones y listo (por consola)

	Porque vamos a necesitar usar **NPM**, que es el manejador de paquetes para el desarrollo front.
3. Gulp
```sh
npm install -g @angular/cli
```
4. Angular CLI
```sh
npm install -g @angular/cli
```

El **código final** de la clase estará dentro de la carpeta `final`, y **lo que iremos avanzando** estará en la carpeta `clase`.

Para levantar cualquiera de los avances:

1. Tener instalado los pre-requisitos.
2. Ubícate con la terminal **dentro de la carpeta deseada** y le das los siguientes comandos:
3. `npm install`
4. `gulp`
5. Enjoy it 🎉

## Primeros pasos
* [Intro a HTML, CSS y SASS][tutoHTML1]
* [Intro a HTML, CSS][tutoHTML2]

## Avance de las clases:

### 1era clase:

1. Creamos la carpeta en donde vamos a trabajar y nos ubicamos con el terminal.
```sh
mkdir mx21 && cd mx21
```
2. Inicializamos nuestro proyecto. Le decimos a **NPM** que maneje esta carpeta.
Nos mostrará algunas preguntas (le puedes dar full **[enter]**)
```sh
npm init
```
  Luego de terminar de responder, se creará el archivo `package.json` con toda nuestras respuestas.

  Así tendremos un resumen de nuestro proyecto, que permitirá a **NPM manejarlo**

3. Instalamos las dependencias que necesitaremos para este workshop
```sh
npm install --save-dev
# ó la forma corta
npm i -D
```
> --save-dev indica que es una dependencia para desarrollo

Podemos **instalarlos todos de golpe**
```sh
npm i -D gulp autoprefixer browser-sync gulp-cssnano gulp-postcss gulp-sass gulp-watch rucksack-css gulp-if gulp-load-plugins yargs npm-run-all
```
Cuando termine de instalar, veremos que el archivo `package.json` se modificó y tiene listada en la sección `devDependencies` todas las dependencias instaladas.

4. Creamos el archivo `gulpfile.js` en la raiz de nuestro proyecto.
```sh
touch gulpfile.js
```
5.- Crearemos nuestras tareas, como:
* Montar un Server con **live reload**
* Compilar **SASS** para obtener nuestro CSS compatible con otro navegadores, etc.

Para más detalle de **Gulp**, te recomiendo este [artículo con el que aprendí Gulp][tutoGulp].

El **código final** de nuestro archivo Gulp será:
```js
var gulp = require('gulp');

/*
  Vamos a usar esta lib "gulp-load-plugins" para abrir todos "los plugins" de gulp.
  Asi evitaremos hacer la "tipica declaracion:

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

```

[tutoHTML1]: <http://marksheet.io/>
[tutoHTML2]: <https://learn.shayhowe.com/>
[tutoJS1]: <https://www.youtube.com/watch?v=le-URjBhevE&list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5>
[tutoGulp]: <https://frontendlabs.io/1669--gulp-js-en-espanol-tutorial-basico-primeros-pasos-y-ejemplos>
[nodeLink]: <https://nodejs.org/es/>
[nvmLink]: <https://github.com/creationix/nvm#installation>
