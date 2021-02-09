"use strict"

let menu = document.getElementById("nav_menu")
let menuDesktop = document.querySelector(".nav_desktop")

menu.addEventListener("click", () => {
    if (menuDesktop.style.display == "none") {
        menuDesktop.style.display = "block"
    } else {
        menuDesktop.style.display = "none"
    }
})

