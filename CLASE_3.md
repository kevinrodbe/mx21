### 3era clase:
Construiremos nuestra "**Candy Tienda**" en `Angular 4`, y manejaremos los estados de nuestra app con `Redux` y `ngrx`
> Tener instalado los [pre-requisitos][readmeMain] y [tener conocimientos de HTML, CSS y **JS**][readmeMain]

1. Creamos nuestro proyecto

	Desde la terminal crearemos el esqueleto de una app


```sh
ng new candy-tienda
```

> Tomará regular tiempo para crear un **Hi World** e instalar todas las dependencias que necesitaremos para comenzar a codear.

2. Iniciamos nuestro app

	Entramos a la carpeta de nuestro proyecto y levantamos el server

	```sh
	ng serve --open
	```

> Si te da conflicto con puerto ocupado, le das `ng serve --port 5200`. El 5200 puede ser cualquier puerto libre.

Yeah! Veremos lo siguiente 🎉

![Hi Angular][ng-hi]

## Intro
`Angular` a partir de la versión **2**, se basa en una **arquitectura basada en componentes**.

### Pero, ¿qué es un componente?

Es un objeto que estructura y representa un elemento de la UI.

```
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── typings.d.ts

```

[readmeMain]: <README.md>
[ng-hi]: imgs/ng-hi.png