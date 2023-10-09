"use strict"
// Desplegable categorias
const slidebar_burguer = document.querySelector(".sidebar_burguer");
const slidebar_perfil = document.querySelector(".sidebar_perfil");
const overlay = document.querySelector(".overlay");

document.querySelector(".cont_burguer").addEventListener("click", () => {
    slidebar_burguer.style.width = "250px";
    overlay.style.display = 'block';
});

document.querySelector(".btn_cerrar_burguer").addEventListener("click", () => {
    slidebar_burguer.style.width = "0";
    overlay.style.display = 'none';
});

// Desplegable del menu perfil
document.querySelector(".cont_perfil_img").addEventListener("click", () => {
    slidebar_perfil.style.width = "293px";
    overlay.style.display = 'block';
});

document.querySelector(".btn_cerrar_perfil").addEventListener("click", () => {
    slidebar_perfil.style.width = "0";
    overlay.style.display = 'none';
});

// Footer
let secciones = document.querySelectorAll(".seccion_footer");
let botonesFooter = document.querySelectorAll(".btn_seccion_footer");

botonesFooter.forEach((boton, index) => {
    boton.addEventListener("click", () => {
        if (secciones[index].style.display === "none" || secciones[index].style.display === "") {
            secciones[index].style.display = "block";
        } else {
            secciones[index].style.display = "none";
        }
    })
})


// Intercambio de pantallas juego
if (document.querySelector("._4_en_linea_juego") && document.querySelector(".cont_recuadro_juego") && document.getElementById("btn_jugar")) {
    let juego = document.querySelector("._4_en_linea_juego");
    let recuadro = document.querySelector(".cont_recuadro_juego");
    let btn_jugar = document.getElementById("btn_jugar");

    btn_jugar.addEventListener("click", () => {
        recuadro.style.display = "none";
        juego.style.display = "block";
    });

    document.querySelector(".share").addEventListener("click", () => {
        document.querySelector(".cont_4_en_linea_barra_redes").classList.toggle("aparece_redes");
    })
}



