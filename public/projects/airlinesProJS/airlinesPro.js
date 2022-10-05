const flights = [
  {
    id: 00,
    to: "New York",
    from: "Barcelona",
    cost: 700,
    scale: false,
  },
  {
    id: 01,
    to: "Los Angeles",
    from: "Madrid",
    cost: 1100,
    scale: true,
  },
  {
    id: 02,
    to: "Paris",
    from: "Barcelona",
    cost: 210,
    scale: false,
  },
  {
    id: 03,
    to: "Roma",
    from: "Barcelona",
    cost: 150,
    scale: false,
  },
  {
    id: 04,
    to: "London",
    from: "Madrid",
    cost: 200,
    scale: false,
  },
  {
    id: 05,
    to: "Madrid",
    from: "Barcelona",
    cost: 90,
    scale: false,
  },
  {
    id: 06,
    to: "Tokyo",
    from: "Madrid",
    cost: 1500,
    scale: true,
  },
  {
    id: 07,
    to: "Shangai",
    from: "Barcelona",
    cost: 800,
    scale: true,
  },
  {
    id: 08,
    to: "Sydney",
    from: "Barcelona",
    cost: 150,
    scale: true,
  },
  {
    id: 09,
    to: "Tel-Aviv",
    from: "Madrid",
    cost: 150,
    scale: false,
  },
];

let flightsMod = [];
let ultimosVuelosDelDia = [];

for (let i = 0; i < flights.length; i++) {
  flightsMod.push(flights[i]);
}

for (let i = 0; i < flightsMod.length; i++) {
  if (flightsMod[i].scale === true) {
    flightsMod[i].scale = ", con escala";
  } else {
    flightsMod[i].scale = ", sin escala";
  }
}

let nombreUsuario = prompt(
  "Hola, cual es tu nombre? :) (Tu nombre debe tener al menos 3 caracteres diferentes, sin numeros)"
);

while (
  nombreUsuario === "" ||
  nombreUsuario.length < 3 ||
  !isNaN(nombreUsuario)
) {
  alert("Error, por favor ingresa un nombre valido");
  nombreUsuario = prompt(
    "Hola, cual es tu nombre? :) (Tu nombre debe tener al menos 3 caracteres diferentes, sin numeros)"
  );
}

let bienvenida = alert(
  `Bienvenido/a ${nombreUsuario}, estos son los vuelos disponibles para ti:`
);

for (let i = 0; i < flightsMod.length; i++) {
  console.log(
    `El vuelo con origen ${flightsMod[i].from} en direccion a ${flightsMod[i].to} ${flightsMod[i].scale}, tiene un valor de ${flightsMod[i].cost}€`
  );
}

function precioMedio(flightsMod) {
  let valorMedio = flightsMod[0].cost;
  for (let i = 1; i < flightsMod.length; i++) {
    valorMedio += flightsMod[i].cost;
  }
  valorMedio = valorMedio / flightsMod.length;
  return Math.round(valorMedio * 1000) / 1000;
}

console.log(
  `La media de los precios en la oferta de vuelos es ${precioMedio(
    flightsMod
  )}€`
);
console.log(" ");

let arrEscala = [];
for (let i = 0; i < flightsMod.length; i++) {
  if (flightsMod[i].scale == ", con escala") {
    arrEscala.push(flightsMod[i]);
  }
}

console.log(`existen ${arrEscala.length} vuelos que realizan escalas:`);

for (let i = 0; i < arrEscala.length; i++) {
  console.log(`Vuelo en direccion a ${arrEscala[i].to}`);
}

console.log(" ");

for (let i = flightsMod.length - 5; i < flightsMod.length; i++) {
  ultimosVuelosDelDia.push(flightsMod[i].to);
}

console.log(
  `los destinos de los ultimos vuelos del dia son: ${ultimosVuelosDelDia}`
);

let tipoUsuario = prompt(
  `${nombreUsuario}, si eres Administrador ingresa "admin", de lo contrario, ingresa "user"`
);

while (tipoUsuario !== "admin" && tipoUsuario !== "user") {
  alert('Error, no ingresaste si eres "user" o "admin"');
  tipoUsuario = prompt(
    `${nombreUsuario}, si eres Administrador ingresa "admin", de lo contrario, ingresa "user"`
  );
}

//USER

let valor = 0;

if (tipoUsuario == "user") {
  console.log("entraste a usuario");
  let precio = Number(
    prompt("ingresa un precio para buscar entre nuestros vuelos")
  );
  while (isNaN(precio + 1) === true || precio == "") {
    alert("Error, no ingresaste un valor valido");
    precio = prompt("ingresa un precio para buscar entre nuestros vuelos");
  }

  valor = Number(valor + precio);
  let arrTempCosto = [];
  console.log(" ");
  console.log(`Vuelo/s que se ajustan al valor indicado (${precio}€):`);
  for (let i = 0; i < flightsMod.length; i++) {
    if (flightsMod[i].cost <= valor) {
      arrTempCosto.push(flightsMod[i]);
      console.log(
        `Vuelo con destino origen ${flightsMod[i].from} en direccion ${flightsMod[i].to}, cuesta ${flightsMod[i].cost}`
      );
    }
  }

  console.log("Bye :)");
}

if (tipoUsuario == "admin") {
  console.log("entraste a admin");

  let accionAdmin = prompt(
    'Si quieres agregar un nuevo vuelo, ingresa "n" | Si quieres eliminar un vuelo presiona "e"'
  );

  while (accionAdmin !== "n" && accionAdmin !== "e") {
    alert('Error, no ingresaste "n" o "e"');
    accionAdmin = prompt(
      'Si quieres agregar un nuevo vuelo, ingresa "n" | Si quieres eliminar un vuelo presiona "e"'
    );
  }

  //CREAR VUELOS

  if (accionAdmin == "n") {
    console.log(" ");

    console.log(
      `Vuelos disponibles ${flightsMod.length}, el maximo programasble de vuelos es 15`
    );

    for (let i = 0; i < flightsMod.length; i++) {
      console.log(
        `${flightsMod[i].id} vuelo con origen ${flightsMod[i].from} en direccion a ${flightsMod[i].to} ${flightsMod[i].scale}, tiene un valor de ${flightsMod[i].cost}€`
      );
    }

    let numeroId = flightsMod.length;

    if (flightsMod.length == 16) {
      alert("Se alcanzo el maximo de vuelos programables");
    }

    let preguntaOrigen = prompt("Ingresa el origen del vuelo");
    while (isNaN(preguntaOrigen) === false || preguntaOrigen == "") {
      alert("Error, no ingresaste un origen valido");
      preguntaOrigen = prompt("Ingresa el origen del vuelo");
    }

    let preguntaDestino = prompt("Ingresa el destino del vuelo");
    while (
      preguntaDestino === preguntaOrigen ||
      isNaN(preguntaDestino) === false ||
      preguntaDestino == ""
    ) {
      alert("Error, no ingresaste un destino valido");
      preguntaDestino = prompt("Ingresa el destino del vuelo");
    }

    let preguntaPrecio = prompt("Ingresa el valor del precio");
    while (isNaN(preguntaPrecio) === true || preguntaPrecio == "") {
      alert("Error, no ingresaste un numero valido");
      preguntaPrecio = prompt("Ingresa el valor del precio");
    }

    let preguntaEscala = Number(
      prompt("Ingresa sin escala (1) o con escala (2)")
    );
    while ((preguntaEscala == 1 || preguntaEscala == 2) == false) {
      alert("Error, no ingresaste si tiene o no escala");
      preguntaEscala = Number(
        prompt("Ingresa sin escala (1) o con escala (2)")
      );
    }
    if (preguntaEscala == 1) {
      preguntaEscala = "sin escala";
    } else if (preguntaEscala == 2) {
      preguntaEscala = "con escala";
    }

    const vuelosNuevos = new Object();

    vuelosNuevos.id = numeroId;
    vuelosNuevos.to = preguntaDestino;
    vuelosNuevos.from = preguntaOrigen;
    vuelosNuevos.cost = preguntaPrecio;
    vuelosNuevos.scale = preguntaEscala;

    //console.log(vuelosNuevos);
    if (flightsMod.length < 15) {
      flightsMod.push(vuelosNuevos);
    } else {
      alert("Se alcanzo el maximo de vuelos");
    }

    let otroVuelo = prompt('Agregar un nuevo vuelo? "s" o "n"');
    console.log(otroVuelo);

    while (otroVuelo !== "s" && otroVuelo !== "n") {
      alert('Error, ingresa "s" o "n"');
      otroVuelo = prompt('Agregar un nuevo vuelo? "s" o "n"');
    }

    if (otroVuelo == "n") {
      console.log("Vuelo(s) incluido(s), listado final:");
      console.log("Bye :)");
    } else if (otroVuelo == "s") {
      while (otroVuelo == "s") {
        console.log(" ");

        console.log(
          `Vuelos disponibles ${flightsMod.length}, el maximo programasble de vuelos es 15`
        );

        for (let i = 0; i < flightsMod.length; i++) {
          console.log(
            `${flightsMod[i].id} vuelo con origen ${flightsMod[i].from} en direccion a ${flightsMod[i].to} ${flightsMod[i].scale}, tiene un valor de ${flightsMod[i].cost}€`
          );
        }

        let numeroId = flightsMod.length;

        if (flightsMod.length == 15) {
          alert("Se alcanzo el maximo de vuelos programables");
          break;
        }

        let preguntaOrigen = prompt("Ingresa el origen del vuelo");
        while (isNaN(preguntaOrigen) === false || preguntaOrigen == "") {
          alert("Error, no ingresaste un origen valido");
          preguntaOrigen = prompt("Ingresa el origen del vuelo");
        }

        let preguntaDestino = prompt("Ingresa el destino del vuelo");
        while (
          preguntaDestino === preguntaOrigen ||
          isNaN(preguntaDestino) === false ||
          preguntaDestino == ""
        ) {
          alert("Error, no ingresaste un destino valido");
          preguntaDestino = prompt("Ingresa el destino del vuelo");
        }

        let preguntaPrecio = prompt("Ingresa el valor del precio");
        while (isNaN(preguntaPrecio) === true || preguntaPrecio == "") {
          alert("Error, no ingresaste un numero valido");
          preguntaPrecio = prompt("Ingresa el valor del precio");
        }

        let preguntaEscala = Number(
          prompt("Ingresa sin escala (1) o con escala (2)")
        );
        while ((preguntaEscala == 1 || preguntaEscala == 2) == false) {
          alert("Error, no ingresaste si tiene o no escala");
          preguntaEscala = Number(
            prompt("Ingresa sin escala (1) o con escala (2)")
          );
        }
        if (preguntaEscala == 1) {
          preguntaEscala = "sin escala";
        } else if (preguntaEscala == 2) {
          preguntaEscala = "con escala";
        }

        const vuelosNuevos = new Object();

        vuelosNuevos.id = numeroId;
        vuelosNuevos.to = preguntaDestino;
        vuelosNuevos.from = preguntaOrigen;
        vuelosNuevos.cost = preguntaPrecio;
        vuelosNuevos.scale = preguntaEscala;

        //console.log(vuelosNuevos);
        if (flightsMod.length < 15) {
          flightsMod.push(vuelosNuevos);
        } else {
          alert("Se alcanzo el maximo de vuelos");
          break;
        }

        let otroVuelo = prompt('Agregar un nuevo vuelo? "s" o "n"');
        console.log(otroVuelo);

        while (otroVuelo !== "s" && otroVuelo !== "n") {
          alert('Error, ingresa "s" o "n"');
          otroVuelo = prompt('Agregar un nuevo vuelo? "s" o "n"');
        }

        if (otroVuelo == "n") {
          console.log("Vuelo(s) incluido(s), listado final:");
          console.log("Bye :)");
          break;
        }
      }
    }

    console.log(" ");

    console.log(
      `Vuelos disponibles ${flightsMod.length}, el maximo programasble de vuelos es 15`
    );

    for (let i = 0; i < flightsMod.length; i++) {
      console.log(
        `${flightsMod[i].id} vuelo con origen ${flightsMod[i].from} en direccion a ${flightsMod[i].to} ${flightsMod[i].scale}, tiene un valor de ${flightsMod[i].cost}€`
      );
    }

    //ELIMINAR VUELOS
  } else if (accionAdmin == "e") {
    console.log(" ");

    console.log(`Vuelos disponibles ${flightsMod.length}`);

    for (let j = 0; j < flightsMod.length; j++) {
      console.log(
        `${flightsMod[j].id} vuelo con origen ${flightsMod[j].from} en direccion a ${flightsMod[j].to} ${flightsMod[j].scale}, tiene un valor de ${flightsMod[j].cost}€`
      );
    }

    var preguntaEliminarNumero = prompt(
      "Ingresa el numero del vuelo a eliminar"
    );

    while (
      isNaN(preguntaEliminarNumero) === true ||
      preguntaEliminarNumero === "" ||
      preguntaEliminarNumero < 0 ||
      preguntaEliminarNumero > 15
    ) {
      alert("Error, no ingresaste un numero valido");
      preguntaEliminarNumero = prompt("Ingresa el numero del vuelo a eliminar");
    }

    for (let i = 0; i < flightsMod.length; i++) {
      if (preguntaEliminarNumero == flightsMod[i].id) {
        flightsMod.pop(flightsMod[i]);

        console.log(" ");

        console.log(`Eliminado. Vuelos disponibles : ${flightsMod.length}`);
        for (let j = 0; j < flightsMod.length; j++) {
          console.log(
            `${flightsMod[j].id} vuelo con origen ${flightsMod[j].from} en direccion a ${flightsMod[j].to} ${flightsMod[j].scale}, tiene un valor de ${flightsMod[j].cost}€`
          );
        }
      }
    }

    var preguntaEliminarNuevo = prompt('Eliminar otro vuelo? "s" | "n"');
    console.log(" ");

    while (preguntaEliminarNuevo !== "s" && preguntaEliminarNuevo !== "n") {
      alert('Error, ingresa "s" o "n"');
      preguntaEliminarNuevo = prompt('Eliminar otro vuelo? "s" | "n"');
    }

    if (preguntaEliminarNuevo == "n") {
      console.log("Bye :)");
    } else if (preguntaEliminarNuevo == "s") {
      while (preguntaEliminarNuevo == "s") {
        console.log(" ");

        console.log(`Vuelos disponibles ${flightsMod.length}`);

        for (let j = 0; j < flightsMod.length; j++) {
          console.log(
            `${flightsMod[j].id} vuelo con origen ${flightsMod[j].from} en direccion a ${flightsMod[j].to} ${flightsMod[j].scale}, tiene un valor de ${flightsMod[j].cost}€`
          );
        }

        var preguntaEliminarNumero = prompt(
          "Ingresa el numero del vuelo a eliminar"
        );

        while (
          isNaN(preguntaEliminarNumero) === true ||
          preguntaEliminarNumero === "" ||
          preguntaEliminarNumero < 0 ||
          preguntaEliminarNumero > 15
        ) {
          alert("Error, no ingresaste un numero valido");
          preguntaEliminarNumero = prompt(
            "Ingresa el numero del vuelo a eliminar"
          );
        }

        for (let i = 0; i < flightsMod.length; i++) {
          if (preguntaEliminarNumero == flightsMod[i].id) {
            flightsMod.pop(flightsMod[i]);

            console.log(" ");

            console.log(`Eliminado. Vuelos disponibles : ${flightsMod.length}`);
            for (let j = 0; j < flightsMod.length; j++) {
              console.log(
                `${flightsMod[j].id} vuelo con origen ${flightsMod[j].from} en direccion a ${flightsMod[j].to} ${flightsMod[j].scale}, tiene un valor de ${flightsMod[j].cost}€`
              );
            }
          }
        }

        var preguntaEliminarNuevo = prompt('Eliminar otro vuelo? "s" | "n"');
        console.log(" ");

        while (preguntaEliminarNuevo !== "s" && preguntaEliminarNuevo !== "n") {
          alert('Error, ingresa "s" o "n"');
          preguntaEliminarNuevo = prompt('Eliminar otro vuelo? "s" | "n"');
        }

        if (preguntaEliminarNuevo == "n") {
          console.log("Bye :)");
        }
      }
    }
  } else {
    console.log("Bye :)");
  }
}
