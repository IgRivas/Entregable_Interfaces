"use strict"

// Desplegable categorias
const slidebar_burguer = document.querySelector(".sidebar_burguer");
const slidebar_perfil = document.querySelector(".sidebar_perfil");

document.querySelector(".cont_burguer").addEventListener("click", showBurguer);
document.querySelector(".btn_cerrar_burguer").addEventListener("click", hiddenBuguer);

function showBurguer() {
    slidebar_burguer.classList.remove("noVisible_burguer");
    slidebar_burguer.classList.add("visible_burguer");
}

function hiddenBuguer() {
    slidebar_burguer.classList.add("noVisible_burguer");
}

document.querySelector(".cont_perfil_img").addEventListener("click", showMenuPerfil);
document.querySelector(".btn_cerrar_perfil").addEventListener("click", hiddenMenuPerfil);

function showMenuPerfil() {
    slidebar_perfil.classList.remove("noVisible_perfil");

    slidebar_perfil.classList.add("visible_perfil");
}
function hiddenMenuPerfil() {
    slidebar_perfil.classList.add("noVisible_perfil");
}