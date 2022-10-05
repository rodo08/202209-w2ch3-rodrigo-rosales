const pasapalabra = () => {
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
      question:
        "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
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
      question:
        "CON LA S. Comunidad salvadora de todo desarrollador informático",
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
      question:
        "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
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

  let questions2 = [
    {
      letter: "a",
      answer: "alas",
      status: 0,
      question:
        "CON LA A. Parte del cuerpo de algunos animales, como las aves o insectos, que les sirve para volar.",
    },
    {
      letter: "b",
      answer: "biberón",
      status: 0,
      question:
        "CON LA B. Botella para dar leche y otros líquidos a niños muy pequeños.. Suele ser de cristal y tiene una tetina de plástico",
    },
    {
      letter: "c",
      answer: "cera",
      status: 0,
      question:
        "CON LA C. Sustancia sólida fabricada por algunos insectos, sobre todo la que hacen las abejas para formar las celdillas de los panales. ",
    },
    {
      letter: "d",
      answer: "dragon",
      status: 0,
      question:
        "CON LA D. Animal fantástico que aparece en cuentos infantiles e historias antiguas, es de gran tamaño y echa fuego por la boca.",
    },
    {
      letter: "e",
      answer: "escondidas",
      status: 0,
      question:
        "CON LA E. Juego de niños que consistes en que un jugador debe encontrar a los demás que se han escondido.",
    },
    {
      letter: "f",
      answer: "flotador",
      status: 0,
      question:
        "CON LA F. Objeto de plástico, goma u otro material que sirve para flotar en el agua.",
    },
    {
      letter: "g",
      answer: "golf",
      status: 0,
      question:
        "CON LA G. Deporte que consiste en meter una pelotita, golpeándola con un bastón especial, en una serie de hoyos muy alejados unos de otros.",
    },
    {
      letter: "h",
      answer: "hipo",
      status: 0,
      question:
        "CON LA H. Sacudidas bruscas del cuerpo que le dan a alguien y hacen que el aire salga de golpe por la boca produciendo un ruido.",
    },
    {
      letter: "i",
      answer: "iglu",
      status: 0,
      question:
        "CON LA I. Casa redonda que hacen los esquimales con bloques de hielo.",
    },
    {
      letter: "j",
      answer: "jueves",
      status: 0,
      question:
        "CON LA J. Día de la semana que está entre el miércoles y el viernes.",
    },
    {
      letter: "k",
      answer: "karate",
      status: 0,
      question:
        "CON LA K. Lucha de origen japonés que consiste sobre todo en el combate con manos y pies.",
    },
    {
      letter: "l",
      answer: "lagartija",
      status: 0,
      question:
        "CON LA L. Animal parecido a un lagarto pequeño que se mueve muy deprisa y vive en los huecos de los muros y entre las rocas.",
    },
    {
      letter: "m",
      answer: "magia",
      status: 0,
      question:
        "CON LA M. Arte y espectáculo en el que se realizan mediante trucos cosas que parecen imposibles.",
    },
    {
      letter: "n",
      answer: "naranja",
      status: 0,
      question:
        "CON LA N. Fruto de forma redonda dividido en gajos y de sabor dulce y algo ácido.",
    },
    {
      letter: "ñ",
      answer: "ñu",
      status: 0,
      question:
        "CON LA Ñ. Mamífero de color pardo que tiene la cabeza grande con cursos curvos y barba.",
    },
    {
      letter: "o",
      answer: "oxigeno",
      status: 0,
      question:
        "CON LA O. Gas que forma parte del aire y lo necesitamos para respirar.",
    },
    {
      letter: "p",
      answer: "paracaidas",
      status: 0,
      question:
        "CON LA P. Gran bolsa de tela que se utiliza para tirarse desde mucha altura porque frena la velocidad de la caída.",
    },
    {
      letter: "q",
      answer: "quimica",
      status: 0,
      question:
        "CON LA Q. Ciencia que trabaja con los elementos de la tabla periodica",
    },
    {
      letter: "r",
      answer: "rayo",
      status: 0,
      question:
        "CON LA R. Descarga eléctrica que se produce cuando hay tormenta, es como un gran garabato que se dibuja en el cielo y que a veces llega a la tierra.",
    },
    {
      letter: "s",
      answer: "sirena",
      status: 0,
      question: "CON LA S. Ser fantástico, mitad mujer y mitad pez.",
    },
    {
      letter: "t",
      answer: "tijeras",
      status: 0,
      question:
        "CON LA T. Objeto para cortar formado por dos piezas afiladas por uno de los lados y unidas en aspa de manera que pueden abrirse y cerrarse.",
    },
    {
      letter: "u",
      answer: "uña",
      status: 0,
      question:
        "CON LA U. Placa dura que cubre la punta de los dedos del hombre y de muchos animales.",
    },
    {
      letter: "v",
      answer: "vagon",
      status: 0,
      question:
        "CON LA V. Cada vehículo de un tren o metro que transporta personas o mercancías.",
    },
    {
      letter: "w",
      answer: "water",
      status: 0,
      question: "CON LA W. Agua en idioma inglés.",
    },
    {
      letter: "x",
      answer: "xilofono",
      status: 0,
      question:
        "CON LA X. Instrumento musical que tiene unas láminas de madera o metal que se golpean con unos macillos.",
    },
    {
      letter: "y",
      answer: "yayo",
      status: 0,
      question: "CON LA Y. Nombre cariñoso y familiar para el abuelo.",
    },
    {
      letter: "z",
      answer: "zoologico",
      status: 0,
      question:
        "CON LA Z. Parque con animales de muchas partes del mundo que puede ser visitado por el público.",
    },
  ];

  let questions3 = [
    {
      letter: "a",
      answer: "anticuario",
      status: 0,
      question: "CON LA A. Persona que colecciona antiguedades.",
    },
    {
      letter: "b",
      answer: "baba",
      status: 0,
      question: "CON LA B. Liquido encontrado en la boca de los humanos",
    },
    {
      letter: "c",
      answer: "capo",
      status: 0,
      question:
        "CON LA C. Jefe de una mafia, especialmente de narcotraficantes.",
    },
    {
      letter: "d",
      answer: " desodorante",
      status: 0,
      question: "CON LA D.  Producto que se utiliza para reducir el olor. ",
    },
    {
      letter: "e",
      answer: "efimero",
      status: 0,
      question: "CON LA E. Pasajero, de corta duración. ",
    },
    {
      letter: "f",
      answer: "faja",
      status: 0,
      question:
        "CON LA F. Prenda interior elástica que ciñe la cintura o la cintura y las caderas. ",
    },
    {
      letter: "g",
      answer: "gominola",
      status: 0,
      question:
        "CON LA G. Golosina blanda masticable, generalmente cubierta de azúcar. ",
    },
    {
      letter: "h",
      answer: "historia",
      status: 0,
      question:
        "CON LA H. Conjunto de todos los hechos ocurridos en tiempos pasados. ",
    },
    {
      letter: "i",
      answer: "ivan",
      status: 0,
      question: "CON LA I. Nombre muy comun de origen ruso.",
    },
    {
      letter: "j",
      answer: "jornal",
      status: 0,
      question: "CON LA J. Persona que trabaja en el rubro de la construccion",
    },
    {
      letter: "k",
      answer: "king",
      status: 0,
      question: "CON LA K. Rey en ingles.",
    },
    {
      letter: "l",
      answer: "linaje",
      status: 0,
      question:
        "CON LA L. Ascendencia o descendencia de una familia, especialmente noble. ",
    },
    {
      letter: "m",
      answer: "madriguera",
      status: 0,
      question:
        "CON LA M. Cueva en que habitan ciertos animales, especialmente los conejos.",
    },
    {
      letter: "n",
      answer: "nunca",
      status: 0,
      question: "CON LA N. Sinonimo de jamas.",
    },
    {
      letter: "ñ",
      answer: "acuñar",
      status: 0,
      question: "CONTIENE LA Ñ. Hacer o fabricar moneda. ",
    },
    {
      letter: "o",
      answer: "onirico",
      status: 0,
      question: "CON LA O. Perteneciente o relativo a los sueños. ",
    },
    {
      letter: "p",
      answer: "piolet",
      status: 0,
      question:
        "CON LA P. Instrumento con forma de pico que utilizan los alpinistas para asegurar sus movimientos sobre la nieve o el hielo.",
    },
    {
      letter: "q",
      answer: "equilatero",
      status: 0,
      question:
        "CONTIENE LA Q. Se dice del triángulo que tiene todos los lados iguales. ",
    },
    {
      letter: "r",
      answer: "rapido",
      status: 0,
      question: "CON LA R. Sinonimo de veloz.",
    },
    {
      letter: "s",
      answer: "sentar",
      status: 0,
      question:
        "CON LA S. Poner o colocar a alguien en una silla o banco, de manera que quede apoyado y descansando sobre las nalgas.",
    },
    {
      letter: "t",
      answer: "tipi",
      status: 0,
      question:
        "CON LA T. Tienda de piel de forma cónica que utilizaban como viviendas los indios de las praderas de América del Norte.",
    },
    {
      letter: "u",
      answer: "unilateral",
      status: 0,
      question:
        "CON LA U. Que se refiere o se circunscribe solamemente a una parte o a un aspecto de algo. ",
    },
    {
      letter: "v",
      answer: "vilano",
      status: 0,
      question: "CON LA V. Flor del cardo.",
    },
    {
      letter: "w",
      answer: "water",
      status: 0,
      question: "CON LA W. Agua en idioma inglés.",
    },
    {
      letter: "x",
      answer: "xerxes",
      status: 0,
      question: "CON LA X. Enemigo de Leonidas.",
    },
    {
      letter: "y",
      answer: "ensayar",
      status: 0,
      question:
        "CONTIENE LA Y. Preparar el montaje o ejecución de un espectáculo. ",
    },
    {
      letter: "z",
      answer: "zurdo",
      status: 0,
      question: "CON LA Z. Antonimo de diestro.",
    },
  ];

  let questionsEdit1 = [
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
      question:
        "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
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
      question:
        "CON LA S. Comunidad salvadora de todo desarrollador informático",
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
      question:
        "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
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

  let questionsEdit2 = [
    {
      letter: "a",
      answer: "alas",
      status: 0,
      question:
        "CON LA A. Parte del cuerpo de algunos animales, como las aves o insectos, que les sirve para volar.",
    },
    {
      letter: "b",
      answer: "biberón",
      status: 0,
      question:
        "CON LA B. Botella para dar leche y otros líquidos a niños muy pequeños.. Suele ser de cristal y tiene una tetina de plástico",
    },
    {
      letter: "c",
      answer: "cera",
      status: 0,
      question:
        "CON LA C. Sustancia sólida fabricada por algunos insectos, sobre todo la que hacen las abejas para formar las celdillas de los panales. ",
    },
    {
      letter: "d",
      answer: "dragon",
      status: 0,
      question:
        "CON LA D. Animal fantástico que aparece en cuentos infantiles e historias antiguas, es de gran tamaño y echa fuego por la boca.",
    },
    {
      letter: "e",
      answer: "escondidas",
      status: 0,
      question:
        "CON LA E. Juego de niños que consistes en que un jugador debe encontrar a los demás que se han escondido.",
    },
    {
      letter: "f",
      answer: "flotador",
      status: 0,
      question:
        "CON LA F. Objeto de plástico, goma u otro material que sirve para flotar en el agua.",
    },
    {
      letter: "g",
      answer: "golf",
      status: 0,
      question:
        "CON LA G. Deporte que consiste en meter una pelotita, golpeándola con un bastón especial, en una serie de hoyos muy alejados unos de otros.",
    },
    {
      letter: "h",
      answer: "hipo",
      status: 0,
      question:
        "CON LA H. Sacudidas bruscas del cuerpo que le dan a alguien y hacen que el aire salga de golpe por la boca produciendo un ruido.",
    },
    {
      letter: "i",
      answer: "iglu",
      status: 0,
      question:
        "CON LA I. Casa redonda que hacen los esquimales con bloques de hielo.",
    },
    {
      letter: "j",
      answer: "jueves",
      status: 0,
      question:
        "CON LA J. Día de la semana que está entre el miércoles y el viernes.",
    },
    {
      letter: "k",
      answer: "karate",
      status: 0,
      question:
        "CON LA K. Lucha de origen japonés que consiste sobre todo en el combate con manos y pies.",
    },
    {
      letter: "l",
      answer: "lagartija",
      status: 0,
      question:
        "CON LA L. Animal parecido a un lagarto pequeño que se mueve muy deprisa y vive en los huecos de los muros y entre las rocas.",
    },
    {
      letter: "m",
      answer: "magia",
      status: 0,
      question:
        "CON LA M. Arte y espectáculo en el que se realizan mediante trucos cosas que parecen imposibles.",
    },
    {
      letter: "n",
      answer: "naranja",
      status: 0,
      question:
        "CON LA N. Fruto de forma redonda dividido en gajos y de sabor dulce y algo ácido.",
    },
    {
      letter: "ñ",
      answer: "ñu",
      status: 0,
      question:
        "CON LA Ñ. Mamífero de color pardo que tiene la cabeza grande con cursos curvos y barba.",
    },
    {
      letter: "o",
      answer: "oxigeno",
      status: 0,
      question:
        "CON LA O. Gas que forma parte del aire y lo necesitamos para respirar.",
    },
    {
      letter: "p",
      answer: "paracaidas",
      status: 0,
      question:
        "CON LA P. Gran bolsa de tela que se utiliza para tirarse desde mucha altura porque frena la velocidad de la caída.",
    },
    {
      letter: "q",
      answer: "quimica",
      status: 0,
      question:
        "CON LA Q. Ciencia que trabaja con los elementos de la tabla periodica",
    },
    {
      letter: "r",
      answer: "rayo",
      status: 0,
      question:
        "CON LA R. Descarga eléctrica que se produce cuando hay tormenta, es como un gran garabato que se dibuja en el cielo y que a veces llega a la tierra.",
    },
    {
      letter: "s",
      answer: "sirena",
      status: 0,
      question: "CON LA S. Ser fantástico, mitad mujer y mitad pez.",
    },
    {
      letter: "t",
      answer: "tijeras",
      status: 0,
      question:
        "CON LA T. Objeto para cortar formado por dos piezas afiladas por uno de los lados y unidas en aspa de manera que pueden abrirse y cerrarse.",
    },
    {
      letter: "u",
      answer: "uña",
      status: 0,
      question:
        "CON LA U. Placa dura que cubre la punta de los dedos del hombre y de muchos animales.",
    },
    {
      letter: "v",
      answer: "vagon",
      status: 0,
      question:
        "CON LA V. Cada vehículo de un tren o metro que transporta personas o mercancías.",
    },
    {
      letter: "w",
      answer: "water",
      status: 0,
      question: "CON LA W. Agua en idioma inglés.",
    },
    {
      letter: "x",
      answer: "xilofono",
      status: 0,
      question:
        "CON LA X. Instrumento musical que tiene unas láminas de madera o metal que se golpean con unos macillos.",
    },
    {
      letter: "y",
      answer: "yayo",
      status: 0,
      question: "CON LA Y. Nombre cariñoso y familiar para el abuelo.",
    },
    {
      letter: "z",
      answer: "zoologico",
      status: 0,
      question:
        "CON LA Z. Parque con animales de muchas partes del mundo que puede ser visitado por el público.",
    },
  ];

  let questionsEdit3 = [
    {
      letter: "a",
      answer: "anticuario",
      status: 0,
      question: "CON LA A. Persona que colecciona antiguedades.",
    },
    {
      letter: "b",
      answer: "baba",
      status: 0,
      question: "CON LA B. Liquido encontrado en la boca de los humanos",
    },
    {
      letter: "c",
      answer: "capo",
      status: 0,
      question:
        "CON LA C. Jefe de una mafia, especialmente de narcotraficantes.",
    },
    {
      letter: "d",
      answer: " desodorante",
      status: 0,
      question: "CON LA D.  Producto que se utiliza para reducir el olor. ",
    },
    {
      letter: "e",
      answer: "efimero",
      status: 0,
      question: "CON LA E. Pasajero, de corta duración. ",
    },
    {
      letter: "f",
      answer: "faja",
      status: 0,
      question:
        "CON LA F. Prenda interior elástica que ciñe la cintura o la cintura y las caderas. ",
    },
    {
      letter: "g",
      answer: "gominola",
      status: 0,
      question:
        "CON LA G. Golosina blanda masticable, generalmente cubierta de azúcar. ",
    },
    {
      letter: "h",
      answer: "historia",
      status: 0,
      question:
        "CON LA H. Conjunto de todos los hechos ocurridos en tiempos pasados. ",
    },
    {
      letter: "i",
      answer: "ivan",
      status: 0,
      question: "CON LA I. Nombre muy comun de origen ruso.",
    },
    {
      letter: "j",
      answer: "jornal",
      status: 0,
      question: "CON LA J. Persona que trabaja en el rubro de la construccion",
    },
    {
      letter: "k",
      answer: "king",
      status: 0,
      question: "CON LA K. Rey en ingles.",
    },
    {
      letter: "l",
      answer: "linaje",
      status: 0,
      question:
        "CON LA L. Ascendencia o descendencia de una familia, especialmente noble. ",
    },
    {
      letter: "m",
      answer: "madriguera",
      status: 0,
      question:
        "CON LA M. Cueva en que habitan ciertos animales, especialmente los conejos.",
    },
    {
      letter: "n",
      answer: "nunca",
      status: 0,
      question: "CON LA N. Sinonimo de jamas.",
    },
    {
      letter: "ñ",
      answer: "acuñar",
      status: 0,
      question: "CONTIENE LA Ñ. Hacer o fabricar moneda. ",
    },
    {
      letter: "o",
      answer: "onirico",
      status: 0,
      question: "CON LA O. Perteneciente o relativo a los sueños. ",
    },
    {
      letter: "p",
      answer: "piolet",
      status: 0,
      question:
        "CON LA P. Instrumento con forma de pico que utilizan los alpinistas para asegurar sus movimientos sobre la nieve o el hielo.",
    },
    {
      letter: "q",
      answer: "equilatero",
      status: 0,
      question:
        "CONTIENE LA Q. Se dice del triángulo que tiene todos los lados iguales. ",
    },
    {
      letter: "r",
      answer: "rapido",
      status: 0,
      question: "CON LA R. Sinonimo de veloz.",
    },
    {
      letter: "s",
      answer: "sentar",
      status: 0,
      question:
        "CON LA S. Poner o colocar a alguien en una silla o banco, de manera que quede apoyado y descansando sobre las nalgas.",
    },
    {
      letter: "t",
      answer: "tipi",
      status: 0,
      question:
        "CON LA T. Tienda de piel de forma cónica que utilizaban como viviendas los indios de las praderas de América del Norte.",
    },
    {
      letter: "u",
      answer: "unilateral",
      status: 0,
      question:
        "CON LA U. Que se refiere o se circunscribe solamemente a una parte o a un aspecto de algo. ",
    },
    {
      letter: "v",
      answer: "vilano",
      status: 0,
      question: "CON LA V. Flor del cardo.",
    },
    {
      letter: "w",
      answer: "water",
      status: 0,
      question: "CON LA W. Agua en idioma inglés.",
    },
    {
      letter: "x",
      answer: "xerxes",
      status: 0,
      question: "CON LA X. Enemigo de Leonidas.",
    },
    {
      letter: "y",
      answer: "ensayar",
      status: 0,
      question:
        "CONTIENE LA Y. Preparar el montaje o ejecución de un espectáculo. ",
    },
    {
      letter: "z",
      answer: "zurdo",
      status: 0,
      question: "CON LA Z. Antonimo de diestro.",
    },
  ];

  let askName;
  let questionsEdit = [];
  let leftover = [];
  let counterLoose = 0;
  let counterWin = 0;
  let questionTemp;
  let playAgain;

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> INICIO

  let greeting = () => {
    askName = prompt(
      "Hola, cual es tu nombre? :) (Tu nombre debe tener al menos 3 caracteres diferentes, sin numeros)"
    );

    while (askName === "" || askName.length < 3 || isNaN(askName) != true) {
      alert("Error, por favor ingresa un nombre valido");
      askName = prompt(
        "Hola, cual es tu nombre? :) (Tu nombre debe tener al menos 3 caracteres diferentes, sin numeros)"
      );
    }

    alert(
      `Bienvenido a >>Pasapalabra<< ${askName}! \nEn Pasapalabra, el juego mostrara una definición; deberás adivinar que palabra estamos preguntando.\n \n> Si sabes la respuesta escribela\n> Puedes saltarte la pregunta escribiendo "pasapalabra"\n> Si quieres terminar la partida escribe "end"`
    );
  };

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> RESPONDIENDO PREGUNTAS
  questionsEdit = questionsEdit1;
  let requestAnswer = () => {
    for (let i = 0; i < questionsEdit.length; i++) {
      questionTemp = prompt(
        questionsEdit[i].question,
        'Pasar a la siguiente pregunta? escribe "pasapalabra". Para terminar, "end"'
      );
      questionTemp = questionTemp.toLowerCase();
      if (questionTemp === questionsEdit[i].answer) {
        questionsEdit[i].status = 1;
        console.log(
          `\n${questionsEdit[i].question}: ${questionsEdit[i].answer} >>> Correcto! :D`
        );
        alert("Correcto!");
        counterWin++;
      } else if (
        questionTemp !== questionsEdit[i].answer &&
        questionTemp !== "end" &&
        questionsEdit[i].answer &&
        questionTemp !== "pasapalabra"
      ) {
        questionTemp = questionTemp.toLowerCase();
        questionsEdit[i].status = 2;
        console.log(
          `\n${questionsEdit[i].question}: ${questionTemp}\n>>>> Incorrecto! :O`
        );
        alert("Incorrecto!");
        counterLoose++;
      } else if (questionTemp === "end") {
        questionTemp = questionTemp.toLowerCase();
        questionsEdit[i].status = 0;
        console.log("Juego finalizado =/");
        break;
      } else if (questionTemp === "pasapalabra") {
        questionTemp = questionTemp.toLowerCase();
        questionsEdit[i].status = 3;
        console.log(
          `${questionsEdit[i].question} \n>> PASAPALABRA << \nPasa a siguiente pregunta`
        );
        alert(">> PASAPALABRA <<");
        leftover.push(questionsEdit[i]);
        //console.log('\n>>>>>>>>>>>>>>>>>>> PASAPALABRA');
      }
    }
  };

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> RESPONDIENDO PREGUNTAS PENDIENTES

  let closingGame = () => {
    alert("YA NO PUEDES PASAR PREGUNTAS! D:");

    for (let i = 0; i < leftover.length; i++) {
      questionTemp = prompt(
        leftover[i].question,
        "Escribe una respuesta, ya no podras pasar preguntas :O"
      );
      questionTemp = questionTemp.toLowerCase();
      if (questionTemp === leftover[i].answer) {
        leftover[i].status = 1;
        console.log(
          `\n${leftover[i].question}: ${leftover[i].answer} >>> Correcto! :D`
        );
        alert("Correcto!");
        counterWin++;
      } else if (
        questionTemp !== leftover[i].answer &&
        questionTemp !== "end"
      ) {
        questionTemp = questionTemp.toLowerCase();
        leftover[i].status = 2;
        console.log(
          `\n${leftover[i].question}: ${questionTemp}\n>>>> Incorrecto! :O`
        );
        alert("Incorrecto!");
        counterLoose++;
      } else if (questionTemp === "end") {
        questionTemp = questionTemp.toLowerCase();
        leftover[i].status = 0;
        console.log("Juego finalizado =/");
        break;
      }
    }
  };

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> RANKING

  const ranking = () => {
    let arrNames = ["Patricia", "Juan", "Sofia", "Manuel", "Ingrid", "Diego"];
    let arrScores = [0, 9, 20, 15, 11, 27];

    let playerGenerator = (nombre, puntaje) => {
      return {
        name: nombre,
        score: puntaje,
      };
    };

    let arrRanking = [
      {
        name: askName,
        score: counterWin,
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

    alert("Juego Terminado!");
    console.log(
      `Tu puntaje final es de ${counterWin} respuestas correctas y de ${counterLoose} respuestas incorrectas`
    );

    console.log("\n>>> RANKING DE POSICIONES <<<");

    for (let i = 0; i < arrRanking.length; i++) {
      console.log(
        ` ${i + 1} > ${arrRanking[i].name} obtuvo ${
          arrRanking[i].score
        } aciertos`
      );
    }
  };

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> MONTANDO SECUENCIA DE FUNCIONES

  greeting();
  requestAnswer();
  if (questionTemp !== "end") {
    closingGame();
  }
  if (questionTemp !== "end") {
    ranking();
  }

  playAgain = confirm("Desea jugar otra partida?");

  if (playAgain == true) {
    questionsEdit = questionsEdit2;
    leftover = [];
    counterLoose = 0;
    counterWin = 0;
    greeting();
    requestAnswer();
    if (questionTemp !== "end") {
      closingGame();
    }
    if (questionTemp !== "end") {
      ranking();
    }
    playAgain = confirm("Desea jugar otra partida?");

    if (playAgain == true) {
      questionsEdit = questionsEdit3;
      leftover = [];
      counterLoose = 0;
      counterWin = 0;
      greeting();
      requestAnswer();
      if (questionTemp !== "end") {
        closingGame();
      }
      if (questionTemp !== "end") {
        ranking();
        alert(
          "Respondiste todas las preguntas! \nGracias por jugar >> PASAPALABRA <<"
        );
        console.log(
          "Respondiste todas las preguntas! \nGracias por jugar >> PASAPALABRA <<"
        );
      }
    }
  }
};

pasapalabra();
