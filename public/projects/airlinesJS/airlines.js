const flights = [
  { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

let flightsMod = [];
let ultimosVuelosDelDia = [];
let tipoUsuario;

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

console.log(" ");

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
