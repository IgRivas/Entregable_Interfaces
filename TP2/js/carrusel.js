
// Carrousel carreras
let btn_left_carrusel_carreras = document.getElementById("btn_left_carrusel_carreras");
let btn_right_carrusel_carreras = document.getElementById("btn_right_carrusel_carreras");
let section_carrousel = document.getElementById("carrousel_carreras");
const scroll = 500;

btn_right_carrusel_carreras.addEventListener("click", () => {
    section_carrousel.scrollLeft += scroll;
});

btn_left_carrusel_carreras.addEventListener("click", () => {
    section_carrousel.scrollLeft -= scroll;
});