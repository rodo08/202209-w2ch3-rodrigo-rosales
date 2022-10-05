const reset = document.getElementById("reset");
const percentage = document.getElementById("percentage");
const erase = document.getElementById("erase");
const division = document.getElementById("division");
const seven = document.getElementById("seven");
const eigth = document.getElementById("eigth");
const nine = document.getElementById("nine");
const multiplication = document.getElementById("multiplication");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const plus = document.getElementById("plus");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const minus = document.getElementById("minus");
const dobleZero = document.getElementById("doble-zero");
const zero = document.getElementById("zero");
const dot = document.getElementById("dot");
const equal = document.getElementById("equal");
const screen = document.getElementById("screen");

const calculatorIsdi = () => {
  one.addEventListener("click", () => {
    screen.innerText += "1";
  });

  two.addEventListener("click", () => {
    screen.innerText += "2";
  });

  three.addEventListener("click", () => {
    screen.innerText += "3";
  });

  four.addEventListener("click", () => {
    screen.innerText += "4";
  });

  five.addEventListener("click", () => {
    screen.innerText += "5";
  });

  six.addEventListener("click", () => {
    screen.innerText += "6";
  });

  seven.addEventListener("click", () => {
    screen.innerText += "7";
  });

  eigth.addEventListener("click", () => {
    screen.innerText += "8";
  });

  nine.addEventListener("click", () => {
    screen.innerText += "9";
  });

  zero.addEventListener("click", () => {
    screen.innerText += "0";
  });

  dobleZero.addEventListener("click", () => {
    screen.innerText += "00";
  });

  dot.addEventListener("click", () => {
    screen.innerText += ".";
  });

  plus.addEventListener("click", () => {
    screen.innerText += "+";
  });

  minus.addEventListener("click", () => {
    screen.innerText += "-";
  });

  division.addEventListener("click", () => {
    screen.innerText += "/";
  });

  multiplication.addEventListener("click", () => {
    screen.innerText += "*";
  });

  percentage.addEventListener("click", () => {
    screen.innerText += "*0.01*";
  });

  reset.addEventListener("click", () => {
    screen.innerText = "";
  });

  erase.addEventListener("click", () => {
    screen.innerText = screen.innerText.slice(0, -1);
  });

  equal.addEventListener("click", () => {
    try {
      // eslint-disable-next-line no-eval
      screen.innerText = eval(screen.innerText);
      // console.log(screen.innerText);
    } catch {
      screen.innerText = "ERROR";
    }
  });
};

calculatorIsdi();
