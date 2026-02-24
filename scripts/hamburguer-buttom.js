let menu = document.querySelector("#hambuger-button")
let nav = document.querySelector("#nav")


menu.addEventListener("click", () => {
    nav.classList.toggle("hidden")
})