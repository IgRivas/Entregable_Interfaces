"use strict"

if (document.querySelector(".cont_animacion_registro") && document.querySelector(".overlayFormulario")) {
    let cont_animacion_registro = document.querySelector(".cont_animacion_registro");
    let overlayFormulario = document.querySelector(".overlayFormulario");
    document.getElementById("btn_form").addEventListener("click", () => {
        cont_animacion_registro.classList.toggle("quitar");
        overlayFormulario.style.display = "block";

        setTimeout(function () {
            window.location.href = "./home.html";
        }, 3000);

    });
}

document.addEventListener("DOMContentLoaded", function () {
    function actualizarCont() {
        const cont = document.getElementById("cont");
        let count = 0;
        const intervalo = 50;
        const contadorIntervalo = setInterval(function () {
            if (count == 100) {
                clearInterval(contadorIntervalo);
            } else {
                count++;
                cont.innerHTML = count + "%";
            }
        }, intervalo);
    }

    actualizarCont();

    let overlayAnimacionLoader = document.querySelector(".section_loader");
    let icon = document.querySelectorAll(".cont_biblioteca");
    setTimeout(function () {
        overlayAnimacionLoader.style.display = "none";
        if (document.querySelector(".btn")) {
            document.querySelector(".btn").style.zIndex = "2";
        }
        icon.forEach(function (icono) {
            icono.style.zIndex = "1";
        });
    }, 5000)

});

