"use strict"

window.addEventListener("scroll", function () {
    let nav = document.querySelector(".header__nav");
    if (this.window.scrollY > 0) {
        nav.classList.add("sticky");
        nav.style.height = "103px";
    } else {
        nav.classList.remove("sticky");
        nav.style.height = "227px";

    }
});