// Codigo de AOS
AOS.init({
    easing: 'ease-out-back', duration: 2000
})

// Codigo para el Dark/Light mode
const checkbox = document.querySelector('input[name=mode]');

checkbox.addEventListener('change', function () {
    trans()
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('data-theme', 'dark')
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('data-theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000)
}

const tema = localStorage.getItem('data-theme')
if (tema) {
    document.documentElement.setAttribute('data-theme', tema)
}