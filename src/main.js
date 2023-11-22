
function comenzar(){
  window.location.href="body.html";
  }
const boton = document.querySelector(".btn");
boton.addEventListener("click", devolvernombre )

function devolvernombre(){
localStorage["nombre"] = document.querySelector("#nombre").value;  
}