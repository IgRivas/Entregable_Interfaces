"use strict"

let btnIniciaSesion = document.querySelector(".btn_inicia_sesion").addEventListener("click", showLogin);

function showLogin() {

    // Oculto los input
    let contInputs = [
        document.querySelector(".form_name"),
        document.querySelector(".form_apellido"),
        document.querySelector(".form_username"),
        document.querySelector(".form_edad"),
        document.querySelector(".form_mail"),
        document.querySelector(".form_password"),
        document.querySelector(".form_passwordRep"),
        document.querySelector(".captcha")
    ];

    contInputs.forEach(element => {
        element.classList.toggle("dis_none");
    });

    // Aparecen los botones de login
    let contInputLogin = document.querySelectorAll(".cont_input_login");
    console.log(contInputLogin);

    contInputLogin.forEach(element => {
        element.classList.toggle("showLogin");
    });

    document.querySelector(".cont_linea").classList.toggle("showLinea");

    // Le cambio el texto al boton
    document.querySelector(".btn_registrarse").textContent = "Iniciar sesion";

    //Le cambio el tamaño al fondo
    document.querySelector(".content_imgForm").classList.toggle("content_imgForm_login");
    cambiarFondoForm();

    //Le cambio el titulo
    document.querySelector(".titulo_registro").textContent = "Inicia secion en SoulsGames";
}

function cambiarFondoForm() {
    let imagenForm = document.getElementById("imagenForm");
    imagenForm.src = "imagenes/fondoFormularioLogin.png";
}
