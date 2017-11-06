# 2da clase: JS Fundamentals
Luego haber conocido [los fundamentos de JS][tutoJS1], vamos a realizar algunos **ejercicios** para aplicar lo aprendido

##1.- Condicionales
- Crear el `obj persona` con las propiedades: `name`, `edad`, `casado`.
- definir texto "estado civil" según su condición de "casado"
```js
/*** creando obj ***/
let persona = {
  name: 'pepe',
  edad: 22,
  casado: false
}

/*** condicionales ***/
// forma 1: tipico if else
let estadoCivil // declaramos variable
if (persona.casado) {// forma corta, en vez de hacer "persona.casado === true"
  estadoCivil = 'está casado'
} else {
  estadoCivil = 'está solano'
}

// forma 2: ternarios
// asignamos el texto "está casado" si "casado = true", caso contrario, "está solano"
let estadoCivil = persona.casado ? 'está casado' : 'está solano'

// forma 3: short
// iniciamos nuestra variable con un valor por defecto por ejem.
let estadoCivil = 'está solano'
// luego, si y solo si, "casado = true", entonces, setearemos el txt correspondiente
persona.casado && (estadoCivil = 'está casado')

```
##2.- Template String
- imprimir los datos del obj
```js
// imprimimos con la clásica concatenación (ES5)
console.info(persona['name'] + ' tiene ' + persona.edad + ' años y ' + estadoCivil)
// o con template string (ES6)
console.info(`${persona.name} tiene ${persona.edad} años y ${estadoCivil}`)
```

##3- Funciones
- crear una `función` para que se encarge de imprimir en consola
```js
/*** definimos nuestra función "imprimir", que recibe como parámetro "objPersona" (que será nuestro objeto) ***/
function imprimir(objPersona) {
  let estadoCivil = objPersona.casado ? 'está casado' : 'está solano'
  console.info(`${objPersona.name} tiene ${objPersona.edad} años y ${estadoCivil}`)
}
```

**hasta ahora, nuestro cod va así**:
```js
/*** creando obj ***/
let persona = {
  name: 'pepe',
  edad: 22,
  casado: false
}

/*** definimos nuestra función "imprimir", que recibe como parámetro "objPersona" (que será nuestro objeto) ***/
function imprimir(objPersona) {
  let estadoCivil = objPersona.casado ? 'está casado' : 'está solano'
  console.info(`${objPersona.name} tiene ${objPersona.edad} años y ${estadoCivil}`)
}

// invocando al método imprimir
imprimir(persona)
```

##4- Object Assign
- modificar todas las `propiedades` de nuestro `obj persona`.
```js
// forma 1: acceso directo a la propiedad mediante el "."
persona.name = 'lalo'

// forma 2: acceso por variable en corchete, pasándole un valor de tipo "string"
persona['edad'] = 33

// forma 3: haciendo un "merge" de objs
persona = Object.assign({}, persona, {casado: true})
```

##5.- [Destructuring][tutoDestructuring]
- definir valores por defecto a las `propiedades del obj` recibido en la `función imprimir` para imprimir dichos valores

  los valores por defecto serán:
  ```js
  {
    name: 'Chaca',
    edad: 18,
    casado: true
  }
  ```
```js
// forma 1: ES5
function imprimirES5(objPersona) {
  // si el parámetro "objPersona" no existe o no está definido (undefined), entonces setearemos un obj vacio, sino, devolvemos su valor
  ojbPersona = (ojbPersona === undefined) ? {} : ojbPersona
  // si la propiedad "name" del obj no está definida, entonces seteamos el valor por defecto "chaca", sino, devolvemos su valor
  let name = ojbPersona.name === undefined ? 'Chaca' : ojbPersona.name
  let edad = ojbPersona.edad === undefined ? 18 : ojbPersona.edad
  let casado = ojbPersona.casado === undefined ? true :  ojbPersona.casado

  let estadoCivil = casado ? 'está casado' : 'está solano'
  console.info(`${name} tiene ${edad} años y ${estadoCivil}`)
}

// forma 2: ES6 (DESTRUCTURING)
function imprimirES6(
  // se realiza la destructuración al lado izquierdo.
  // el obj vacio de la derecha, nos permite invocar a la función sin ningun parámetro
  {name = 'Chaca', edad = 18, casado = true} = {}
) {
  let estadoCivil = casado ? 'está casado' : 'está solano'
  console.info(`${name} tiene ${edad} años y ${estadoCivil}`)
}

imprimirES6(persona) // imprimir los valores del obj
imprimirES6() // imprimir los valores por defecto
```

##6.- [Spread][tutoSpread]
- Crear una copia del `objeto persona`, luego modificar la propiedad `name`
```js
// al trabajar con obj, esta forma no hace una copia; sino que crea una referencia al mismo objeto.
// es decir, si hacemos una modificación en saiyajin.name, ese cambio también se realizará en persona.name
let saiyajin = persona
console.info(persona) // {name: 'pepe', edad: 22, casado: false}
console.info(saiyajin) // {name: 'pepe', edad: 22, casado: false}

saiyajin.name = 'richi'
console.info(persona) // {name: 'richi', edad: 22, casado: false}
console.info(saiyajin) // {name: 'richi', edad: 22, casado: false}

// una de las formas correctas para hacer copias de obj
let ozarus1 = Object.assign({}, persona)
// con los spreads, tomaremos cada item, y los colocaremos en un nuevo "contenedor", en este ej sera "ozarus2"
let ozarus2 = {...persona}

ozarus2.name = 'richi'
console.info(persona, ozarus1) // {name: 'pepe', edad: 22, casado: false}
console.info(ozarus2) // {name: 'richi', edad: 22, casado: false}
```

**hasta ahora, nuestro cod va así**:
```js
/*** creando obj ***/
let persona = {
  name: 'pepe',
  edad: 22,
  casado: false
}

/*** definimos nuestra función "imprimir", que recibe como parámetro "objPersona" (que será nuestro objeto) ***/
function imprimir(objPersona) {
  let estadoCivil = objPersona.casado ? 'está casado' : 'está solano'
  console.info(`${objPersona.name} tiene ${objPersona.edad} años y ${estadoCivil}`)
}

// invocando al método imprimir
imprimir(persona)

// modificar todas las "propiedades" de nuestro "obj persona".
persona = Object.assign({}, persona, {
  name: 'Chacón',
  edad: 18,
  casado: true
})

// función para imprimir valores por defecto cuando no exista la propiedad "X"
function imprimirES6(
  // se realiza la destructuración al lado izquierdo.
  // el obj vacio de la derecha, nos permite invocar a la función sin ningun parámetro
  {name = 'Chaca', edad = 18, casado = true} = {}
) {
  let estadoCivil = casado ? 'está casado' : 'está solano'
  console.info(`${name} tiene ${edad} años y ${estadoCivil}`)
}

imprimirES6(persona)

// hacemos una copia del obj persona
let ozarus1 = Object.assign({}, persona)
// con los spreads, tomaremos cada item, y los colocaremos en un nuevo "contenedor", en este ej sera "ozarus2"
let ozarus2 = {...persona}

ozarus2.name = 'richi'
console.info(persona, ozarus1) // {name: 'Chacón', edad: 22, casado: false}
console.info(ozarus2) // {name: 'richi', edad: 22, casado: false}
```

##7.- Hoisting
Es llamada a la acción cuando, las declaraciones (variables, funciones) son movidas a la parte superior de su `scope` (ámbito).
```js
let a = 2
foo() // funciona porque la declaración de "foo()" es "hoisted"

function foo() {
  a = 3
  console.info(a) // 3
  let a  // esta declaración es "hoisted" a la parte superior de "foo()"
}

console.info(a)	// 2
```

##8.- Closures
Una `función "A"` definida dentro de otra `función "B"`. Donde la `función interna "A"`, tiene acceso al scope (ámbito) de la `función contenedora "A"`.

Además, la `función interna "A"`, recordará y podrá acceder a las variables de la `función contenedora "A"`, aún cuando la `función contenedora "A"` ya haya sido ejecutada.

- crear la `función "sumador"` que recibe como parámetro un número "X", dicha función retornará la `función "add"` (esta función será nuestro closure), que además recibe como parámetro un número "Y", y nos devolverá la suma de "X" (`variable externa`) más "Y" (variable local, pasada como parámetro)
```js
function sumador(x) {
  return function add(y) {
    return x + y
  }
}

// el valor "10" es nuestra variable "X", la cual será recordada por la función "add".
// la variable add10 ahora hace referencia a la función interna "add", la cual ya tiene seteado "X = 10",
let add10 = sumador(10)
let add20 = sumador(20)

// ahora solo hay que invocar a nuestra función "add10" y pasarle el valor al que queremos sumarle "10"
// en este caso "5" es nuestra variable "Y"
add10(5) // 15 ... debido a 10 + 5
add20(7) // 27
```

##9.- Promesas
Representa un valor que puede estar disponible ahora, en el futuro, o nunca.

El objeto `Promise` es usado para operaciones asíncronas.

A través de su método `then`, podremos recibir un **valor** o **la razón** del por qué la promesa no pudo **ser cumplida**.

Un ejemplo en la vida real usando promesas, sería:

> Imagina que tu mamá te **promete** que te comprará un nuevo cel la próxima semana. Tu mamá puede comprarte el cel; o no, si es que ella no está contenta.

Eso es una **promesa**. Y tiene **3 estados**:
1. **fulfilled (cumplida)**: la acción relacionada con la promesa se completa con éxito.
2. **rejected (rechazada)**: la acción relacionada con la promesa no se completa con éxito.
3. **pending (pendiente)**: aún no se completa ni se rechaza.

El ej. anterior, en JS sería:

```js
// definimos si mamá está feliz
var isMomHappy = false

// creamos la promesa y la instanciamos en la variable "willIGetNewPhone"
var willIGetNewPhone = new Promise(
  // el constructor de la promesa recibe una funcion (callback) con 2 parámetros (las funciones resolve y reject)
  // esas 2 funciones, son las que resuelven o rechazan la promesa
  function (resolve, reject) {
    // en el callback se realizará un proceso asíncrono o síncrono (generalmente asícrono)
    // para el ej, hacemos un proceso síncrono
    if (isMomHappy) {
      var phone = {
        brand: 'Samsung',
        color: 'black'
      }
      // invocamos a "resolve" con el valor de la variable "phone"
      // esta será el valor de nuestra promesa
      resolve(phone) // fulfilled
    } else {
      // rechazamos la promesa invocando a "reject"
      // con una razón; en este caso, "un error, mom is not happy"
      var reason = new Error('mom is not happy')
      reject(reason) // reject
    }
  }
)
```
Ahora que ya tenemos la promesa, usémosla!

```js
// llamamos a nuestra promesa
var askMom = function () {
  willIGetNewPhone
    .then(function (fulfilled) {
      // yeah!, obtenemos un nuevo cel
      console.log(fulfilled) // output: { brand: 'Samsung', color: 'black' }
    })
    .catch(function (error) {
      // oops, mamá no lo compró
      console.log(error.message) // output: 'mom is not happy'
    })
}
// como "isMomHappy" está inicializado con "false"; nuestra promesa será rechazada
askMom() // output: 'mom is not happy'
// cambia el valor de "isMomHappy", y ten un nuevo cel :)
```

Podemos concatenar los métodos `.then()`, pasándoles un valor o promesa

En el ejm. siguiente, le pasaremos valores.

```js
var promise = new Promise(
  function(resolve, reject) {
    resolve(1)
  }
)

promise.then(function(val) {
  console.log(val) // 1
  return val + 2
}).then(function(val) {
  console.log(val) // 3
})
```
### ¿Por qué son importantes las promesas?

`JavaScript` es de **un solo hilo**, es decir, dos porciones de secuencia de comandos no se pueden ejecutar al mismo tiempo, tienen que ejecutarse uno después del otro.

Veamos un ejm. de código síncrono y asíncrono

```js
/* sync */
function add (num1, num2) {
  return num1 + num2
}
const result = add(1, 2) // lo obtenemos de inmediato
console.log(result) // 3

/* async */
const result = getAddResultFromServer('http://www.example.com?num1=1&num2=2')
// obtenemos indefinido, pq necesitamos esperar por el resp del server
console.log(result) // undefined

/* solucion usando callbacks (promises evitan el uso anidaciones de callbacks "callback hell") */
function addAsync (num1, num2, callback) {
  // use the famous jQuery getJSON callback API
  return $.getJSON('http://www.example.com', {
    num1: num1,
    num2: num2
  }, callback)
}

addAsync(1, 2, success => {
  // callback
  const result = success // obtenemos result = 3
  console.log(result) // 3
})
```

```js
// 1 ej:
// en la variable "partido10Octubre", almacenamos la referencia a una función, la cuál nos retornará un objeto "Promise"
var partido10Octubre = function(isColombiaDerrotado) {
  return new Promise(
    function(resolve, reject) {
      if (isColombiaDerrotado) {
        var tablaPosiciones = {
          uruguay: 32,
          brazil: 30,
          peru: 28,
          argentina: 27
        }
        resolve(tablaPosiciones) // promesa resuelta
      } else {
        var reason = new Error('matemáticamente no se pudo')
        reject(reason) // promesa rechazada
      }
    }
  )
}

// en la variable "verPartido" almacenamos una referencia a una función anónima, la cuál invocará nuestra promesa ya creada
var verPartido = function (isColombiaDerrotado) {
  partido10Octubre(isColombiaDerrotado)
    // pasamos como callback la funcion "msgToRusia" al método .then()
    .then(msgToRusia)
    .then(function(resolve) {
      // recibimos el valor de "message", ya que es el resultado de la promesa devuelta en el .then() anterior
      console.log(resolve)
    })
    .catch(function(error) {
      // si la promesa es rechazada o ocurrió algún error
      console.log(error)
    })
}

// definición de función
function msgToRusia (marcador) {
  var message = 'Hey Rusia, Perú logró tener ' + marcador.peru
  // retornamos una promesa resuelta con el valor de "message"
  return Promise.resolve(message)
}

verPartido(true) // Hey Rusia, Perú logró tener 28
verPartido(false) // matemáticamente no se pudo
```

```js
// 2 ej:
var candeDelivery = new Promise(
  function(resolve, reject) {
    // simulamos un llamado al servidor, el cual es un proceso asyn
    // en este caso, resolveremos la promesa luego de 3 segundos
    setTimeout(function() {
      resolve(10)
    }, 3000)
  }
)

candeDelivery
  .then(function(time) {
    console.log(time) // 10
    return time * 2 // enviamos el resultado al siguiente .then()
  })
  .then(function(time) {
    console.log(time) // 20
  })
  .catch(function(err) {
    console.log(err)
  })
```
[readmeMain]: <README.md>
[tutoDestructuring]: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment>
[tutoSpread]: <https://davidwalsh.name/spread-operator>
[tutoJS1]: <https://www.youtube.com/watch?v=le-URjBhevE&list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5>
