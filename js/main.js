// Codigo de el Toggle
const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeText = body.querySelector(".mode-text");


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

//searchBtn.addEventListener("click", () => {
//sidebar.classList.remove("close");
//})

// Codigo de AOS
AOS.init({
    easing: 'ease-out-back', duration: 2000
})