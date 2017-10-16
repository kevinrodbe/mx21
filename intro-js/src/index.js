// intro:
var promise = new Promise(
	function(resolve, reject) {
  	resolve(1);
	}
);

promise.then(function(val) {
  console.log(val); // 1
  return val + 2;
}).then(function(val) {
  console.log(val); // 3
})

// p q?

// sync
function add (num1, num2) {
	return num1 + num2;
}
const result = add(1, 2); // lo obtenemos inmediato
// async
const result = getAddResultFromServer('http://www.example.com?num1=1&num2=2');
// obtenemos indefinido, pq necesitamos esperar por el resp del server

// cb
function addAsync (num1, num2, callback) {
	// use the famous jQuery getJSON callback API
	return $.getJSON('http://www.example.com', {
			num1: num1,
			num2: num2
	}, callback);
}

addAsync(1, 2, success => {
	// callback
	const result = success; // you get result = 3 here
});

// 1 ej:
var partido10Octubre = function(isColombiaDerrotado) {
	return new Promise(
		function(resolve, reject) {
			if (isColombiaDerrotado) {
				var tablaPosiciones = {
					uruguay: 32,
					brazil: 30,
					peru: 28,
					argentina: 27
				};
				resolve(tablaPosiciones); // resolve
			} else {
				var reason = new Error('matemáticamente no se pudo');
				reject(reason); // reject
			}
		}
	);
}

var verPartido = function (resultadoPartido) {
	partido10Octubre(resultadoPartido)
		.then(msgToRusia)
    .then(function(resolve) {
      // fuckYeah! vamos a Rusia
      console.log(resolve);
    })
    .catch(function(error) {
      // será para la prox
      console.log(error.message);
    });
};

// plus
function msgToRusia (marcador) {
	var message = 'Hey Rusia, Perú logró tener ' + marcador.peru;
	return Promise.resolve(message);
};

// 2 ej:
var candeDelivery = new Promise(
  function(resolve, reject) {
    setTimeout(function() {
      resolve(10);
    }, 3000);
  }
)

candeDelivery
  .then(function(time) {
    console.log(time);
    return time * 2;
  })
  .then(function(time) {
    console.log(time);
    return time * 3;
  })
  .catch(function(err) {
    console.log(err);
  })
