// Codigo de AOS
AOS.init({
    easing: 'ease-out-back', duration: 2000
})

// Codigo para el Dark/Light mode
const checkbox = document.querySelector('input[name=mode]');

checkbox.addEventListener('change', function () {
    if (this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000)
}