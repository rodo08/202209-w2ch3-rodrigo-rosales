let arrArguments = [];
let pregunta;
let raizCuadrada;

const calculadoraPro = (arrArguments) => {
  for (let i = 0; i < arrArguments.length; i++) {
    if (isNaN(arrArguments[i]) || arrArguments[0] === 0) {
      alert("valor invalido");
      console.log(
        "Valor no permitido. La operacion es invalida. Intentalo otra vez"
      );
    } else if (arrArguments.length > 1) {
      let totalSuma = arrArguments[0];
      let totalResta = arrArguments[0];
      let totalMult = arrArguments[0];
      let totalDiv = arrArguments[0];

      sumar = () => {
        for (let i = 1; i < arrArguments.length; i++) {
          totalSuma += arrArguments[i];
        }
        return `La suma es igual a ${totalSuma},`;
      };

      resta = () => {
        for (let i = 1; i < arrArguments.length; i++) {
          totalResta -= arrArguments[i];
        }
        return ` la resta es igual a ${totalResta},`;
      };

      division = () => {
        for (let i = 1; i < arrArguments.length; i++) {
          totalDiv /= arrArguments[i];
          totalDiv = Math.round(totalDiv * 1000) / 1000;
          if (totalDiv === Infinity) {
            totalDiv = "Valor dividido por cero, no posee un valor definido";
          }
        }
        return `la division es igual a ${totalDiv}.`;
      };

      multiplicar = () => {
        for (let i = 1; i < arrArguments.length; i++) {
          totalMult *= arrArguments[i];
        }
        return ` la multiplicacion es igual a ${totalMult}, `;
      };

      console.log(
        sumar(arrArguments) +
          resta(arrArguments) +
          multiplicar(arrArguments) +
          division(arrArguments)
      );
    } else if (arrArguments.length === 1 && arrArguments[i] !== 0) {
      raizCuadrada = arrArguments[i];
      raizCuadrada = Math.sqrt(raizCuadrada);
      raizCuadrada = Math.round(raizCuadrada * 1000) / 1000;
      console.log(`la raiz cuadrada de ${arrArguments} es ${raizCuadrada}`);
    }
  }
};

const ingresarNumeros = () => {
  do {
    let numTemp = Number(prompt("Ingresa numero a calcular", "0"));
    if (numTemp == " ") {
    }
    pregunta = prompt("ingresar otro valor?  escribe Si / No");
    arrArguments.push(numTemp);
  } while (pregunta == "s" || pregunta == "si");

  console.log(`Ingresaste ${arrArguments}`);
  calculadoraPro(arrArguments);
  pregunta = prompt("Calcular otros numeros? escribe Si / No");

  if (pregunta == "s" || pregunta == "si") {
    arrArguments = [];
    ingresarNumeros();
  } else {
    console.log("Bye :)");
  }
};

ingresarNumeros();
