"use strict"

// Scroll de la galera
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

imagenes.forEach(function (imagen) {


    imagen.addEventListener("click", function () {

        setTimeout(function () {
            imagenSeleccionada.style.transition = "opacity 0.3s ease-in-out";
            imagenSeleccionada.style.opacity = "0";
        }, 300);

        setTimeout(function () {
            imagenSeleccionada.style.opacity = "1";
            imagenSeleccionada.src = imagen.src;
        }, 550);

    })
});
