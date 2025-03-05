document.querySelector(".fade-layer").addEventListener("click", showMenu)

document.querySelector(".menu-button").addEventListener("click", showMenu)

function showMenu(){
    let menu = document.querySelector("nav.menu")
    menu.classList.toggle("show")

    let fade = document.querySelector(".fade-layer")
    fade.classList.toggle("visible")
}