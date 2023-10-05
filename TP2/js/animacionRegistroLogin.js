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


document.addEventListener("DOMContentLoaded", function () {
    function updateCounter() {
        const counterElement = document.getElementById("cont");
        let count = 0;
        const interval = 50;
        const counterInterval = setInterval(function () {
            if (count == 100) {
                clearInterval(counterInterval);


            } else {
                count++;
                counterElement.innerHTML = count + "%";
            }
        }, interval);
    }

    updateCounter();

    let overlayAnimacionLoader = document.querySelector(".section_loader");

    setTimeout(function () {
        overlayAnimacionLoader.style.display = "none"
    }, 5000)

});

