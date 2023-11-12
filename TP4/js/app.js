// "use strict"

window.addEventListener("scroll", function () {
    let nav = document.querySelector(".header__nav");
    let logo = document.querySelector(".header__nav-logo");
    let contLogo = document.querySelector(".header__nav-divLogo");
    if (this.window.scrollY > 0) {
        console.log("hola");
        nav.classList.add("sticky");
        nav.style.height = "103px";
        logo.style.width = "133px";
        logo.style.height = "68px";
        contLogo.style.marginTop = "0px";
    } else {
        nav.classList.remove("sticky");
        nav.style.height = "227px";
        logo.style.width = "590px";
        logo.style.height = "301px";
        contLogo.style.marginTop = "50px";

    }
});

// agarro todos los layer

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

window.addEventListener("scroll", () => {
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
});

