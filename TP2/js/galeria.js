"use strict"

// carrusel generico
let carruseles = document.querySelectorAll(".carrusel_generico");
const scrollCarruselJuegos = 1000;

let btn_carruseles_right = document.querySelectorAll(".btn_carrusel_right");
btn_carruseles_right.forEach((boton,index)=>{
    boton.addEventListener("click", ()=>{
        let carrusel = carruseles[index];
        carrusel.scrollLeft += scrollCarruselJuegos;
        carrusel.addEventListener("scroll", verificarFinCarrusel);
        function verificarFinCarrusel() {
            if (carrusel.scrollLeft + carrusel.clientWidth >= carrusel.scrollWidth) {
                boton.style.backgroundColor = "#2E90CC";
            } else {
                boton.style.backgroundColor = "#3FBFE9";
            }
        }
    })
});

let btn_carruseles_left = document.querySelectorAll(".btn_carrusel_left");
btn_carruseles_left.forEach((boton,index)=>{
    let carrusel = carruseles[index];
    carrusel.addEventListener("scroll", verificarInicioCarrusel);
    function verificarInicioCarrusel() {
        if (carrusel.scrollLeft === 0) {
            boton.style.backgroundColor = "#2E90CC";

        } else {
            boton.style.backgroundColor = "#3FBFE9";

        }
    }
    boton.addEventListener("click", ()=>{
        carrusel.scrollLeft -= scrollCarruselJuegos;
    })
});


// Intercambio de imagenes
if((document.getElementById("imagenSeleccionada")) && (document.querySelectorAll(".cont_img_car img"))){
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
    
}




