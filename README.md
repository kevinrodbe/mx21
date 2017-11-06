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
1. Elegir un editor de texto (Te recomiendo **VSCode**, por sus integraciones nativas y plugins)
2. Instalar Node. Tenemos 2 formas de hacerlo:
	* [node][nodeLink]: Descargas la versión Actual y le das **full next**
	* [nvm][nvmLink]: Seguir las intrucciones y listo (por consola)

	Porque vamos a necesitar usar **NPM**, que es el manejador de paquetes para el desarrollo front.
3. Gulp
```sh
npm i gulp-cli -g
```
4. Angular CLI
```sh
npm i -g @angular/cli
```

El **código final** de la maqueta estará dentro de la carpeta `ui`, y **lo que iremos avanzando** estará en la carpeta `clase`.

Para levantar solo la maqueta:

1. Tener instalado los pre-requisitos.
2. Ubícate con la terminal **dentro de la carpeta ui** y ejecutas los siguientes comandos:
3. `npm install`
4. `gulp`
5. Enjoy it 🎉

Para levantar la tienda en Angular 4:

1. Tener instalado los pre-requisitos.
2. Ubícate con la terminal **dentro de la carpeta ng4** y ejecutas los siguientes comandos:
3. `npm install`
4. `npm start`
5. Enjoy it 🎉

## Primeros pasos
* [Intro a HTML, CSS y SASS][tutoHTML1]
* [Intro a HTML, CSS][tutoHTML2]
* [Intro a JS*][tutoJS1]
* [Intro a ES6*][tutoES6]
* [Intro a Angular*][tutoNg4]

*: Recomendado revisar antes de las clases

## Avances de las clases:
1. [Workflow con Gulp][clase1]
2. [JS Fundamentals][clase2]
3. [Creación de la Cande Tienda][clase3]

[tutoHTML1]: <http://marksheet.io/>
[tutoHTML2]: <https://learn.shayhowe.com/>
[tutoJS1]: <https://www.youtube.com/watch?v=le-URjBhevE&list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5>
[tutoNg4]: <https://www.youtube.com/watch?v=KhzGSHNhnbI&list=PLillGF-RfqbYeckUaD1z6nviTp31GLTH8>
[tutoES6]: <https://www.youtube.com/watch?v=2LeqilIw-28&list=PLillGF-RfqbZ7s3t6ZInY3NjEOOX7hsBv>
[nodeLink]: <https://nodejs.org/es/>
[nvmLink]: <https://github.com/creationix/nvm#installation>

[clase1]: <CLASE_1.md>
[clase2]: <CLASE_2.md>
[clase3]: <CLASE_3.md>