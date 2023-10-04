"use strict"

// Scroll de la galeria
let btn_right = document.querySelector(".cont_btn_carrousel_right");
let btn_left = document.querySelector(".cont_btn_carrousel_left");

let cont_img_car = document.querySelector(".cont_img_car");
const scrollAmount = 500;

btn_right.addEventListener("click", () => {
    cont_img_car.scrollLeft += scrollAmount;
});

btn_left.addEventListener("click", () => {
    cont_img_car.scrollLeft -= scrollAmount;
});

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



