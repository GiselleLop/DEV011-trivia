const Respuesta = document.querySelector("#nombreResp");
Respuesta.textContent =
  "Hola " + localStorage["nombre"] + " ¡Te deseo mucha suerte!.";

const botonResponder = document.querySelector(".btnResp");
botonResponder.addEventListener("click", mostrarResp, resultado, evt);

function evt() {
  evt.preventDefault();
}

function mostrarResp() {
  const Respuesta1 = document.querySelector("#r1").value;
  const Respuesta2 = document.querySelector("#r6").value;
  const Respuesta3 = document.querySelector("#r12").value;

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

  if (document.getElementById("r1").checked == true) {
    (p1 = "Correcta"), (c1 = 1);
  } else {
    (p1 = "Incorrecta"), (c1 = 0);
  }

  //2erpregunta//
  if (document.getElementById("r6").checked == true) {
    (p2 = "Correcta"), (c2 = 1);
  } else {
    (p2 = "Incorrecta"), (c2 = 0);
  }

  //3erpregunta//
  if (document.getElementById("r12").checked == true) {
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
