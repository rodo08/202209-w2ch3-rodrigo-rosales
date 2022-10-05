let num1 = Number(prompt("Ingresar primer valor para calcular"));
let num2 = Number(prompt("Ingresar segundo valor para calcular"));
let raizCuadrada;

function sumar(num1, num2) {
  let sumatoria = num1 + num2;
  return sumatoria;
}

function restar(num1, num2) {
  let resta = num1 - num2;
  return resta;
}

function multiplicar(num1, num2) {
  let multiplicacion = num1 * num2;
  return multiplicacion;
}

function dividir(num1, num2) {
  let division = num1 / num2;
  if (division % 2 !== 0) {
    division = Math.round(division * 1000) / 1000;
  }
  return division;
}

if (isNaN(num1) || isNaN(num2)) {
  alert("valores invalidos");
  console.log("Recarga la pagina e ingresa valores validos");
} else if (num1 === 0 && num2 === 0) {
  alert("valores invalidos");
  console.log("Recarga la pagina e ingresa valores validos");
} else if (num1 === 0) {
  raizCuadrada = Math.sqrt(num2);
  if (raizCuadrada % 2 !== 0) {
    console.log(
      `La raiz cuadrada de ${num2} es ${Math.round(raizCuadrada * 1000) / 1000}`
    );
    //document.write(raizCuadrada.toFixed(3));
  } else {
    console.log(`La raiz cuadrada de ${num2} es ${raizCuadrada}`);
  }
} else if (num2 === 0) {
  raizCuadrada = Math.sqrt(num1);
  if (raizCuadrada % 2 !== 0) {
    console.log(
      `La raiz cuadrada de ${num1} es ${Math.round(raizCuadrada * 1000) / 1000}`
    );
    //document.write(raizCuadrada.toFixed(3));
  } else {
    console.log(`La raiz cuadrada de ${num1} es ${raizCuadrada}`);
  }
} else {
  console.log(`Tus numeros son ${num1} y ${num2}`);
  console.log(
    `La suma es igual a ${sumar(num1, num2)} | La resta es igual a ${restar(
      num1,
      num2
    )} | La multiplicacion es igual a ${multiplicar(
      num1,
      num2
    )} | La division es igual a ${dividir(num1, num2)}`
  );
}
