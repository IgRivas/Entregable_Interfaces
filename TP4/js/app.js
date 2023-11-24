// "use strict"
const animacionEntrada = "opacidad 1s ease-in-out 0.5s forwards";

// Parallax
let layer_9 = document.querySelector(".layer-9");
let layer_8 = document.querySelector(".layer-8");
let layer_7 = document.querySelector(".layer-7");
let layer_6 = document.querySelector(".layer-6");
let layer_5 = document.querySelector(".layer-5");
let layer_4 = document.querySelector(".layer-4");
let layer_3 = document.querySelector(".layer-3");
let layer_2 = document.querySelector(".layer-2");
let layer_1 = document.querySelector(".layer-1");
let layer_3_spiderman = document.querySelector(".layer-3_spiderman");

// Barra de navegacion
let nav = document.querySelector(".nav");
let logo = document.querySelector(".nav-logo");
let contLogo = document.querySelector(".nav-divLogo");

// Seccion "Conoce a Spidey y sus sorprendentes amigos"
let duende = document.querySelector(".section__duende-pj");


// Barra de navegacion
window.addEventListener("scroll", function () {

    if (this.window.scrollY > 0) {
        // Pongo animaciones de entrada
        layer_3.style.animation = animacionEntrada;
        layer_5.style.animation = animacionEntrada;
        layer_4.style.animation = animacionEntrada;
        layer_2.style.animation = animacionEntrada;
        layer_1.style.animation = animacionEntrada;

        // Fijo la barra de navegacion
        nav.classList.add("sticky");
        nav.style.height = "103px";
        logo.style.width = "133px";
        logo.style.height = "68px";
        contLogo.style.marginTop = "0px";
    } else {
        // Vuelvo la barra de navegacion a su estado original
        nav.classList.remove("sticky");
        nav.style.height = "227px";
        logo.style.width = "590px";
        logo.style.height = "301px";
        contLogo.style.marginTop = "50px";
    }

    // PARALLAX
    let value = window.scrollY;
    //Muevo a la izquierda el spiderman rosa
    layer_5.style.transform = `translateX(${value * -0.3}px)`;
    //Muevo a la derecha el spiderman negro
    layer_4.style.transform = `translateX(${value * 0.3}px)`;
    //La telaraña del spiderman negro lo tiene que acompañar
    layer_1.style.transform = `translateX(${value * 0.3}px)`;
    //Muevo para arriba el spiderman comun 
    layer_3.style.transform = `translateY(${value * -0.3}px)`;
    //La telaraña del spiderman comun tambien lo debe acompañar
    layer_2.style.transform = `translateY(${value * -0.3}px)`;
    // Seccion "Conoce a Spidey y sus sorprendentes amigos"
    duende.style.transform = `translateY(${value * 0.10}px)`;


    //Mas amigos, mas diversion
    let cont_column_right = document.querySelectorAll(".cont_column-right");
    let img_column = this.document.querySelector(".sticky-image");
    cont_column_right.forEach(element => {
        //Esto nos da informacion sobre las dimensiones y la posicion del elemento 
        let rect = element.getBoundingClientRect();
        if (rect.bottom <= this.window.innerHeight) {
            // Restablecer todas las clases
            cont_column_right.forEach(el => {
                el.classList.remove("col_visible");
                el.classList.add("col_noVisible");
            });

            // Aplicar las clases necesarias al elemento actual
            element.classList.add("col_visible");
            element.classList.remove("col_noVisible");

            // Cambiar la imagen según la clase del elemento actual
            if (element.classList.contains("contenido1")) {
                img_column.src = "./img/marcos/marcoColumna1.png";
            }
            if (element.classList.contains("contenido2")) {

                img_column.src = "./img/marcos/marcoColumna2.png";
            }
            if (element.classList.contains("contenido3")) {
                img_column.src = "./img/marcos/marcoColumna3.png";
            }
            if (element.classList.contains("contenido4")) {
                img_column.src = "./img/marcos/marcoColumna4.png";
            }


        }
    });
});


// Ghost spider
let cards_ghostSpider = document.querySelectorAll(".section__ghostSpider-item");
let section__ghostSpider = document.querySelector(".section__ghostSpider");
let ghost_spider_img = document.querySelectorAll(".section__ghostSpider-img");

// Solucione que funcionen todas las animaciones, dandole el scale a los img en si y el traslate a el contenedor del img

section__ghostSpider.addEventListener("mouseover", () => {
    cards_ghostSpider.forEach(element => {
        element.style.transform = "translateX(0)";
    });
});

ghost_spider_img.forEach(element => {
    element.addEventListener("mouseover", () => {
        element.style.transform = "scale(1.2)";
    });

    element.addEventListener("mouseleave", () => {
        element.style.transform = "scale(1)";
    });
});


// Spidey y sus amigos -Cards-
window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    duende.style.transform = `translateY(${scrollY * 0.10}px)`;
});

function checkScroll() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(function (card) {
        const rect = card.getBoundingClientRect();

        // Verifica si la parte superior de la tarjeta está por debajo del límite inferior de la ventana
        // y si la parte inferior de la tarjeta está por encima del límite superior de la ventana
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        // Verifica si la tarjeta ya tiene la clase 'visible'
        const hasVisibleClass = card.classList.contains('visible');

        if (isVisible && !hasVisibleClass) {
            // Si la tarjeta es visible y no tiene la clase 'visible', la agrega
            card.classList.add('visible');
        }
    });
}

// Agrega un evento de desplazamiento para llamar a la función cuando sea necesario
window.addEventListener('scroll', checkScroll);

// Llama a la función inicialmente para verificar las tarjetas que ya están visibles al cargar la página
checkScroll();


// Los vengadores acompañando tu aventura 

let parallax_vengadores = document.querySelector(".section__vengadores-parallax");
parallax_vengadores.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".section__vengadores-parallax_move").forEach(element => {
        let value = -4;
        let x = (e.clientX * value) / 100;
        let y = (e.clientY * value) / 100;
        element.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});



//Spritesheet 
document.addEventListener("DOMContentLoaded", function () {
    let currentImageIndex = 0;
    const spritesheetImages = document.querySelectorAll('.spritesheet img');

    function showNextImage() {
        spritesheetImages[currentImageIndex].style.display = 'none';
        currentImageIndex = (currentImageIndex + 1) % spritesheetImages.length;

        spritesheetImages[currentImageIndex].style.display = 'block';
    }

    // Cambia de imagen cada 1000 milisegundos (1 segundo)
    setInterval(showNextImage, 200);
});


// Mas amigos mas diversion

