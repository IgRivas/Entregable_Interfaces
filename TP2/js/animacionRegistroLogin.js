"use strict"

let cont_animacion_registro = document.querySelector(".cont_animacion_registro");
let overlayFormulario = document.querySelector(".overlayFormulario");
document.getElementById("btn_form").addEventListener("click", () => {
    cont_animacion_registro.classList.toggle("quitar");
    overlayFormulario.style.display = "block";

    setTimeout(function () {
        window.location.href = "./home.html";
    }, 3000);

});