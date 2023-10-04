"use strict"

// Desplegable categorias
const slidebar_burguer = document.querySelector(".sidebar_burguer");
const slidebar_perfil = document.querySelector(".sidebar_perfil");
const overlay = document.querySelector(".overlay");

document.querySelector(".cont_burguer").addEventListener("click", showBurguer);
document.querySelector(".btn_cerrar_burguer").addEventListener("click", hiddenBuguer);
function showBurguer() {
    slidebar_burguer.classList.remove("noVisible_burguer");
    slidebar_burguer.classList.add("visible_burguer");
    overlay.style.display = 'block';
}

function hiddenBuguer() {
    slidebar_burguer.classList.add("noVisible_burguer");
    overlay.style.display = 'none';
}

const btnAbrirMenu = document.querySelector(".cont_perfil_img");
btnAbrirMenu.addEventListener("click", () => {
    slidebar_perfil.style.width = "293px";
    overlay.style.display = 'block';

});

// Agrega un evento clic al botón de cerrar el menú
document.querySelector(".btn_cerrar_perfil").addEventListener("click", () => {
    slidebar_perfil.style.width = "0";
    overlay.style.display = 'none';

});


"use strict"

// Scroll de la galera
// let btn_right = document.querySelector(".cont_btn_carrousel_right");
// let btn_left = document.querySelector(".cont_btn_carrousel_left");

// let carrouselLi_container = document.querySelector(".carrouselLi_container");
// const scrollAmount = 200;

// btn_right.addEventListener("click", () => {
//     carrouselLi_container.scrollLeft += scrollAmount;
// });

// btn_left.addEventListener("click", () => {
//     carrouselLi_container.scrollLeft -= scrollAmount;
// });