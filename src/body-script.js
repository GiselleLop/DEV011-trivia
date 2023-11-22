const Respuesta = document.querySelector("#nombreResp");
Respuesta.textContent =
  "Hola " + localStorage["nombre"] + " ¡Te deseo mucha suerte!.";

const botonResponder = document.querySelector(".btnResp");
botonResponder.addEventListener("click", apagar);

function evt() {
  evt.preventDefault();
}

function mostrarResp() {
  const Respuesta1 = document.querySelector("#r4").value;
  const Respuesta2 = document.querySelector("#r7").value;
  const Respuesta3 = document.querySelector("#r11").value;

  const resCorrect = document.querySelector("#Correct");
  resCorrect.textContent =
    "Las respuestas correctas son : " +
    Respuesta1 +
    ", " +
    Respuesta2 +
    ", " +
    Respuesta3 +
    ".";
}

function resultado() {
  let p1;
  let p2;
  let p3;
  let c1;
  let c2;
  let c3;
  let nota;

  if (document.getElementById("r4").checked == true) {
    (p1 = "Correcta"), (c1 = 1);
  } else {
    (p1 = "Incorrecta"), (c1 = 0);
  }

  //2erpregunta//
  if (document.getElementById("r7").checked == true) {
    (p2 = "Correcta"), (c2 = 1);
  } else {
    (p2 = "Incorrecta"), (c2 = 0);
  }

  //3erpregunta//
  if (document.getElementById("r11").checked == true) {
    (p3 = "Correcta"), (c3 = 1);
  } else {
    (p3 = "Incorrecta"), (c3 = 0);
  }

  const ReNota = document.querySelector("#reC1");
  ReNota.textContent = "Respuesta: " + p1;

  const ReNota2 = document.querySelector("#reC2");
  ReNota2.textContent = "Respuesta: " + p2;

  const ReNota3 = document.querySelector("#reC3");
  ReNota3.textContent = "Respuesta: " + p3;

  const RePunt = document.querySelector("#punt1");
  RePunt.textContent = "Puntaje : " + c1;

  const RePunt2 = document.querySelector("#punt2");
  RePunt2.textContent = "Puntaje : " + c2;

  const RePunt3 = document.querySelector("#punt3");
  RePunt3.textContent = "Puntaje : " + c3;

  nota = c1 + c2 + c3;
  const puntajeTot = document.querySelector("#punTotal");
  puntajeTot.textContent = "Su puntaje final es de: " + nota + " puntos.";
}

let segundos = 11;
let segundos2 = 11;
const timer1 = setInterval(temporizador, 1000);
let segundos3 = 11;
let timer2;
let timer3;

function temporizador() {
  segundos--;
  if (segundos == 0) {
    clearInterval(timer1);
    document.getElementById("r1").disabled = true;
    document.getElementById("r2").disabled = true;
    document.getElementById("r3").disabled = true;
    document.getElementById("r4").disabled = true;

    document.getElementById("r5").disabled = false;
    document.getElementById("r6").disabled = false;
    document.getElementById("r7").disabled = false;
    document.getElementById("r8").disabled = false;

    document.getElementById("r9").disabled = false;
    document.getElementById("r10").disabled = false;
    document.getElementById("r11").disabled = false;
    document.getElementById("r12").disabled = false;

    timer2 = setInterval(temporizador2, 1000);
  } else {
    document.getElementById("r5").disabled = true;
    document.getElementById("r6").disabled = true;
    document.getElementById("r7").disabled = true;
    document.getElementById("r8").disabled = true;

    document.getElementById("r9").disabled = true;
    document.getElementById("r10").disabled = true;
    document.getElementById("r11").disabled = true;
    document.getElementById("r12").disabled = true;
  }
  const timer = document.querySelector("#timer1");
  timer.textContent = "Tiempo" + ": " + segundos + " segundos.";
}

function temporizador2() {
  segundos2--;
  if (segundos2 == 0) {
    clearInterval(timer2);
    document.getElementById("r5").disabled = true;
    document.getElementById("r6").disabled = true;
    document.getElementById("r7").disabled = true;
    document.getElementById("r8").disabled = true;
    timer3 = setInterval(temporizador3, 1000);
  } else {
    document.getElementById("r9").disabled = true;
    document.getElementById("r10").disabled = true;
    document.getElementById("r11").disabled = true;
    document.getElementById("r12").disabled = true;
  }
  const timer = document.querySelector("#timer2");
  timer.textContent = "Tiempo" + ": " + segundos2 + " segundos.";
}

function temporizador3() {
  segundos3--;
  if (segundos3 == 0) {
    clearInterval(timer3);
    document.getElementById("r9").disabled = true;
    document.getElementById("r10").disabled = true;
    document.getElementById("r11").disabled = true;
    document.getElementById("r12").disabled = true;
  } else {
    document.getElementById("r9").disabled = false;
    document.getElementById("r10").disabled = false;
    document.getElementById("r11").disabled = false;
    document.getElementById("r12").disabled = false;
  }
  const timer = document.querySelector("#timer3");
  timer.textContent = "Tiempo" + ": " + segundos3 + " segundos.";
}

function apagar() {
  if (segundos3 > 0) {
    clearInterval(timer3);
  }
  mostrarResp();
  resultado();
}
