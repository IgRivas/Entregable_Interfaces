"use strict"

// Scroll de la galeria
const cont_img_car = document.querySelector(".cont_img_car");
const tamanioScroll = 645;
let maxScroll = cont_img_car.scrollWidth + cont_img_car.clientWidth;

// scroll y cambio de color right
let btn_right = document.querySelector(".cont_btn_carrousel_right")
btn_right.addEventListener("click", () => {
    cont_img_car.scrollLeft += tamanioScroll;
    verificarFinCarrusel();
});
cont_img_car.addEventListener("scroll", verificarFinCarrusel);
function verificarFinCarrusel() {
    if (cont_img_car.scrollLeft + cont_img_car.clientWidth >= cont_img_car.scrollWidth) {
        btn_right.style.backgroundColor = "#2E90CC";
    } else {
        btn_right.style.backgroundColor = "#3FBFE9";
    }
}

// scroll y cambio de color left
let btn_left = document.querySelector(".cont_btn_carrousel_left");
btn_left.addEventListener("click", () => {
    cont_img_car.scrollLeft -= tamanioScroll;
});
cont_img_car.addEventListener("scroll", verificarInicioCarrusel);
function verificarInicioCarrusel() {
    if (cont_img_car.scrollLeft === 0) {
        btn_left.style.backgroundColor = "#2E90CC";

    } else {
        btn_left.style.backgroundColor = "#3FBFE9";

    }
}

// Intercambio de imagenes

let imagenSeleccionada = document.getElementById("imagenSeleccionada");
let imagenes = document.querySelectorAll(".cont_img_car img");
let contenedorImgPrincipal = document.querySelector(".contenedor_img_principal");

imagenes.forEach(function (imagen) {
    imagen.addEventListener("click", () => {
        const imagenClonada = imagen.cloneNode();
        imagenClonada.style.animation = "animacionGaleria 0.4s ease-in forwards";
        //Evitamos que se duplique
        contenedorImgPrincipal.innerHTML = "";
        contenedorImgPrincipal.appendChild(imagenClonada);
        setTimeout(() => {
            imagenSeleccionada.src = imagen.src;
            imagenClonada.style.animation = "";
        }, 400);
    })
});



