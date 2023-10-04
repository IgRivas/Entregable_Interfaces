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


// Footer

let btn_categorias_footer = document.getElementById("btn_categorias_footer");
let cont_categorias = document.querySelector(".cont_categorias_ocultar");

let btn_contacto_footer = document.getElementById("btn_contacto_footer");
let cont_contacto_footer = document.querySelector(".cont_contacto_footer");

let btn_legal_footer = document.getElementById("btn_legal_footer");
let cont_legar_footer = document.querySelector(".cont_legal_footer");

btn_categorias_footer.addEventListener("click", () => {
    
    cont_categorias.style.animation = "animacionFooter 0.3 ease-in infinite";
    
    setTimeout(()=>{
        cont_categorias.classList.toggle("con_categorias_visible");
        cont_categorias.style.animation ="";
    },400)
});


btn_contacto_footer.addEventListener("click", () => {
    cont_contacto_footer.classList.toggle("cont_contacto_footer");
});

btn_legal_footer.addEventListener("click", () => {
    cont_legar_footer.classList.toggle("cont_legal_footer");
});
