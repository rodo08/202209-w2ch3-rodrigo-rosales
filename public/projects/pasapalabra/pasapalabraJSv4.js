const questions = [
  {
    letter: "a",
    answer: "abducir",
    status: 0,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },
  {
    letter: "b",
    answer: "bingo",
    status: 0,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },
  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question: "CON LA C. Niño, crío, bebé",
  },
  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },
  {
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },
  {
    letter: "f",
    answer: "facil",
    status: 0,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },
  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },
  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },
  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Templo cristiano",
  },
  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },
  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },
  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Hombre lobo",
  },
  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },
  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Demostración de poca inteligencia",
  },
  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },
  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },
  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },
  {
    letter: "q",
    answer: "queso",
    status: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },
  {
    letter: "r",
    answer: "raton",
    status: 0,
    question: "CON LA R. Roedor",
  },
  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },
  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },
  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },
  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },
  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },
  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },
  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
  },
  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
];

const questionsCopy = questions;
let counterOk = 0;
let typedAnswer;
let userAnswerInput;
let answerButton;
let pasapalabra;
const pasapalabraArr = [];
let tempAnswer;
let tempObj;
let letterId;
let play;
let seconds = 120;

const game = () => {
  /// ///////////////////////////////FUNCION PARA MOSTRAR PREGUNTAS

  const launchQuestions = () => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < questionsCopy.length; i++) {
      if (questionsCopy[i].status === 0) {
        document.getElementById("singleQuestionLetter").innerHTML =
          questionsCopy[i].question;
        tempAnswer = questionsCopy[i].answer;
        tempObj = questionsCopy[i];
        letterId = questionsCopy[i].letter;
        break;
      }
    }
  };

  /// ///////////////////////////////FUNCION PARA RESPONDER Y BOTONES DE RESPUESTA Y PASAR

  const resolveQuestions = () => {
    userAnswerInput = document.getElementById("user-answer-input");
    userAnswerInput.addEventListener("input", () => {
      typedAnswer = userAnswerInput.value;
      typedAnswer = typedAnswer.toLowerCase();
      // console.log(typedAnswer);
    });

    answerButton = document.getElementById("answer-button");
    answerButton.addEventListener("click", () => {
      if (typedAnswer === tempAnswer) {
        document.getElementById("singleQuestionLetter").innerHTML = "Correcto!";
        document.getElementById(letterId.toString()).style.backgroundColor =
          "#9ce4c5";
        // eslint-disable-next-line no-plusplus
        counterOk++;
        // console.log(counterOk);
        userAnswerInput.value = "";
        questionsCopy.splice(0, 1);
        // console.log('ok');
        pasapalabra.disabled = true;
        answerButton.disabled = true;
        // console.log(pasapalabraArr);
      } else if (typedAnswer !== tempAnswer) {
        document.getElementById("singleQuestionLetter").innerHTML =
          "Incorrecto!";
        document.getElementById(letterId.toString()).style.backgroundColor =
          "#e4a79c";
        userAnswerInput.value = "";
        questionsCopy.splice(0, 1);
        // console.log('wrong');
        pasapalabra.disabled = true;
        answerButton.disabled = true;
        // console.log(pasapalabraArr);
      }
    });

    pasapalabra = document.getElementById("pasapalabra");
    pasapalabra.addEventListener("click", () => {
      document.getElementById("singleQuestionLetter").innerHTML =
        "Pasapalabra!";
      document.getElementById(letterId.toString()).style.backgroundColor =
        "#e4e29c";
      pasapalabraArr.push(tempObj);
      userAnswerInput.value = "";
      questionsCopy.splice(0, 1);
      // console.log('skip');
      pasapalabra.disabled = true;
      answerButton.disabled = true;
    });
  };

  launchQuestions();

  resolveQuestions();

  /// ///////////////////////////////MOSTRAR PREGUNTAS RESTANTES

  const launchRemainingQuestions = () => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < [pasapalabraArr].length; i++) {
      if (pasapalabraArr[i].status === 0) {
        document.getElementById("singleQuestionLetter").innerHTML =
          pasapalabraArr[i].question;
        tempAnswer = pasapalabraArr[i].answer;
        tempObj = pasapalabraArr[i];
        letterId = pasapalabraArr[i].letter;
        break;
      }
    }
  };

  /// ///////////////////////////////FUNCION PARA RESPONDER Y BOTONES DE RESPUESTAS RESTANTES

  const resolverRemainingQuestions = () => {
    userAnswerInput = document.getElementById("user-answer-input");
    userAnswerInput.addEventListener("input", () => {
      typedAnswer = userAnswerInput.value;
      typedAnswer = typedAnswer.toLowerCase();
      // console.log(typedAnswer);
    });

    answerButton = document.getElementById("answer-button");
    answerButton.addEventListener("click", () => {
      pasapalabra.disabled = true;
      if (typedAnswer === tempAnswer) {
        document.getElementById("singleQuestionLetter").innerHTML = "Correcto!";
        document.getElementById(letterId.toString()).style.backgroundColor =
          "#9ce4c5";

        // console.log(counterOk);
        userAnswerInput.value = "";
        pasapalabraArr.splice(0, 1);
        // console.log('ok');
        pasapalabra.disabled = true;
        answerButton.disabled = true;
      } else if (typedAnswer !== tempAnswer) {
        document.getElementById("singleQuestionLetter").innerHTML =
          "Incorrecto!";
        document.getElementById(letterId.toString()).style.backgroundColor =
          "#e4a79c";
        userAnswerInput.value = "";
        pasapalabraArr.splice(0, 1);
        // console.log('wrong');
        pasapalabra.disabled = true;
        answerButton.disabled = true;
      }
    });
  };

  /// ///////////////////////////////BOTON "SIGUIENTE"

  const nextQuestion = document.getElementById("next-question");
  nextQuestion.addEventListener("click", () => {
    if (questionsCopy.length > 0) {
      launchQuestions();
      pasapalabra.disabled = false;
      answerButton.disabled = false;
    } else if (questionsCopy.length === 0 && pasapalabraArr.length === 0) {
      document.getElementById(
        "counters"
      ).outerHTML = `<p id="counters" class="counter">Respondiste ${counterOk} respuestas correctas :)</p>`;
      document.getElementById("singleQuestionLetter").innerHTML =
        "Respondiste todas las preguntas! :D";
    } else {
      pasapalabra.disabled = false;
      answerButton.disabled = false;
      launchRemainingQuestions();
      resolverRemainingQuestions();
    }
  });

  /// ///////////////////////////////TEMPORIZADOR

  const timer = setInterval(() => {
    // eslint-disable-next-line no-plusplus
    seconds--;
    document.getElementById(
      "seg"
    ).outerHTML = `<p id="seg" class="seg">${seconds}</p>`;
    if (seconds === 0) {
      clearInterval(timer);
    }

    if (seconds === 0) {
      document.getElementById("singleQuestionLetter").innerHTML =
        "Se acabo el tiempo! :(";
      document.getElementById(
        "counters"
      ).outerHTML = `<p id="counters" class="counter">Respondiste ${counterOk} respuestas correctas :)</p>`;
      pasapalabra.disabled = true;
      answerButton.disabled = true;
    }
  }, 1000);
};

/// ///////////////////////////////BOTON "JUGAR"

// eslint-disable-next-line prefer-const
play = document.getElementById("play");

play.addEventListener("click", () => {
  play.disabled = true;
  document.getElementById("play").style.backgroundColor = "#dfdfdf";
  game();
});
