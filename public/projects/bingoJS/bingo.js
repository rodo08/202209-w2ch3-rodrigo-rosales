const bingo = () => {
  let playAgain;

  const fullGame = () => {
    let min = 1;
    let max = 20;
    let arrLottery = [];
    let counter = 0;
    let counterDos = 0;
    let counterTres = 0;
    let newLotteryNumber;
    let randomNumber = min + Math.round(Math.random() * max);
    let points;

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ARRAY CON NUMEROS ALEATORIOS
    let numbers = [];
    let numberAmount = 20;
    while (numbers.length < numberAmount) {
      let randomNum = Math.ceil(Math.random() * numberAmount);
      var exists = false;
      for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] == randomNum) {
          exists = true;
          break;
        }
      }
      if (!exists) {
        numbers[numbers.length] = randomNum;
      }
    }

    let askName = prompt(
      "Hola, cual es tu nombre? :) (Tu nombre debe tener al menos 3 caracteres diferentes, sin numeros)"
    );

    while (askName === "" || askName.length < 3 || isNaN(askName) != true) {
      alert("Error, por favor ingresa un nombre valido");
      askName = prompt(
        "Hola, cual es tu nombre? :) (Tu nombre debe tener al menos 3 caracteres diferentes, sin numeros)"
      );
    }

    console.log(`Bienvenido ${askName}!`);

    const scoreSystem = alert(
      "El juego posee el siguiente sistema de puntuacion: \nCompletar el juego en 15 turnos = 50 puntos; \nCompletar el juego en 16 turnos = 40 puntos; \nCompletar el juego en 17 turnos = 30 puntos; \nCompletar el juego en 18 turnos = 20 puntos; \nCompletar el juego en 19 turnos = 10 puntos; \nCompletar el juego en 20 turnos = 0 puntos;"
    );

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>DETERMINAR NUMEROS DE CARTON

    let playerCard = () => {
      let rowTemp = [];

      let numberCard = (min, max) => {
        randomNumber = min + Math.round(Math.random() * max);

        while (randomNumber > 20) {
          randomNumber = min + Math.round(Math.random() * max);
        }

        return randomNumber;
      };

      while (rowTemp.length < 15) {
        rowTemp.push(numberCard(min, max));
        rowTemp.sort();
        for (let i = 0; i < rowTemp.length; i++) {
          if (rowTemp[i] === rowTemp[i + 1]) {
            rowTemp = [];
            rowTemp.push(numberCard(min, max));
            rowTemp.sort();
          }
        }
      }

      firstRow = rowTemp.slice(0, 5);
      secondRow = rowTemp.slice(5, 10);
      thirdRow = rowTemp.slice(10, 15);
    };

    playerCard();

    let numberSet = confirm(
      `Hola ${askName}, tus numeros son: \n${firstRow} \n${secondRow} \n${thirdRow}, \nsi jugaras con estos numeros presiona "Aceptar", de lo contrario, presiona "Cancelar" y obtener difrentes numeros`
    );

    while (numberSet == false) {
      playerCard();
      numberSet = confirm(
        `Hola ${askName}, tus numeros son: \n${firstRow} \n${secondRow} \n${thirdRow}, \nsi jugaras con estos numeros presiona "Aceptar", de lo contrario, presiona "Cancelar" y obtener difrentes numeros`
      );
    }

    let startBingo = alert("Ya decidiste tus numeros, Comienza el Juego!");

    console.log(">>>>>>>>>>>>>>>>>>>>>>>>  BINGO  <<<<<<<<<<<<<<<<<<<<<<<<<<<");

    console.log(
      `tus numeros son: \n \n${firstRow} \n${secondRow} \n${thirdRow}`
    );

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> MARCA COINCIDENCIAS

    let matches = () => {
      let randomSelection = (datos) => {
        return datos[Math.floor(Math.random() * datos.length)];
      };

      arrLottery.push(randomSelection(numbers));

      for (let i = 0; i < numbers.length; i++) {
        if (arrLottery.includes(numbers[i])) {
          numbers.splice(numbers.indexOf(numbers[i]), 1);
        }
      }

      let lastElement = arrLottery[arrLottery.length - 1];

      let ball = alert(`Ha salido ${lastElement}!`);

      console.log(`\nNumero/s sorteado/s: ${arrLottery}`);

      let firstRowFill = () => {
        counter = 0;
        for (let i = 0; i < firstRow.length; i++) {
          if (firstRow[i] == "X") {
            counter++;
          }
        }
        if (firstRow.length === counter) {
          alert("Linea!");
          firstRow = ["X,X,X,X,X"];
        }
      };

      let secondRowFill = () => {
        counterDos = 0;
        for (let i = 0; i < secondRow.length; i++) {
          if (secondRow[i] == "X") {
            counterDos++;
          }
        }
        if (secondRow.length === counterDos) {
          alert("Linea!");
          secondRow = ["X,X,X,X,X"];
        }
      };

      let thirdRowFill = () => {
        counterTres = 0;
        for (let i = 0; i < thirdRow.length; i++) {
          if (thirdRow[i] == "X") {
            counterTres++;
          }
        }
        if (thirdRow.length === counterTres) {
          alert("Linea!");
          thirdRow = ["X,X,X,X,X"];
        }
      };

      for (let i = 0; i < firstRow.length; i++) {
        for (let j = 0; j < arrLottery.length; j++) {
          if (firstRow[i] === arrLottery[j]) {
            alert("tienes un numero!");
            console.log(`tienes el numero ${firstRow[i]} en la primera fila`);
            firstRow[i] = "X";
          }
        }
        firstRowFill();
      }

      for (let i = 0; i < secondRow.length; i++) {
        for (let j = 0; j < arrLottery.length; j++) {
          if (secondRow[i] === arrLottery[j]) {
            alert("tienes un numero!");
            console.log(`tienes el numero ${secondRow[i]} en la segunda fila`);
            secondRow[i] = "X";
          }
        }
        secondRowFill();
      }

      for (let i = 0; i < thirdRow.length; i++) {
        for (let j = 0; j < arrLottery.length; j++) {
          if (thirdRow[i] === arrLottery[j]) {
            alert("tienes un numero!");
            console.log(`tienes el numero ${thirdRow[i]} en la tercera fila`);
            thirdRow[i] = "X";
          }
        }
        thirdRowFill();
      }

      console.log(
        `tu carton queda asi: \n \n${firstRow} \n${secondRow} \n${thirdRow}`
      );

      //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> REPETICION DE SORTEO DE NUMERO

      if (
        firstRow.length === 1 &&
        secondRow.length === 1 &&
        thirdRow.length === 1
      ) {
        newLotteryNumber = alert(
          `Termino el juego, gracias por jugar ${askName} :)`
        );
      } else {
        newLotteryNumber = confirm("Sortear otro numero?");
      }
    };

    matches();

    switch (newLotteryNumber) {
      case true:
        while (newLotteryNumber == true) {
          matches();
        }

      case false:
        console.log(`Terminaste el juego en ${arrLottery.length} turnos`);
        console.log(`\nGracias por jugar ${askName} :)`);
        break;

      default:
        console.log(`\nGracias por jugar ${askName} :)`);
        break;
    }

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> RRANKING

    const ranking = () => {
      let finalScore = () => {
        if (arrLottery.length == 15) {
          points = 50;
        } else if (arrLottery.length == 16) {
          points = 40;
        } else if (arrLottery.length == 17) {
          points = 30;
        } else if (arrLottery.length == 18) {
          points = 20;
        } else if (arrLottery.length == 19) {
          points = 10;
        } else if (arrLottery.length <= 20) {
          points = 0;
        }

        return points;
      };

      finalScore();

      let arrNames = [
        "Javiera",
        "Pedro",
        "Romina",
        "Eduardo",
        "Marcela",
        "Carlos",
      ];
      let arrScores = [0, 10, 20, 30, 40, 50];

      let playerGenerator = (nombre, puntaje) => {
        return {
          name: nombre,
          score: puntaje,
        };
      };

      let arrRanking = [
        {
          name: askName,
          score: points,
        },
      ];

      for (let i = 0; i < arrNames.length; i++) {
        for (let j = 0; j < arrScores.length; j++) {}
        let randomIndex = 0 + Math.round(Math.random() * 5);
        arrRanking.push(playerGenerator(arrNames[i], arrScores[randomIndex]));
      }

      arrRanking.sort((o1, o2) => {
        if (o1.score > o2.score) {
          return -1;
        } else if (o1.score < o2.score) {
          return 1;
        } else {
          return 0;
        }
      });

      console.log("\n>>> RANKING DE POSICIONES <<<");

      for (let i = 0; i < arrRanking.length; i++) {
        console.log(
          ` ${i + 1} > ${arrRanking[i].name} obtuvo ${
            arrRanking[i].score
          } puntos`
        );
      }
    };

    ranking();

    playAgain = confirm("Quieres jugar otra partida?");
  };

  fullGame();

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> REINICIAR PARTIDA

  while (playAgain == true) {
    fullGame();
  }

  if (playAgain == false) {
    console.log("\nBye :)");
  }
};

bingo();
