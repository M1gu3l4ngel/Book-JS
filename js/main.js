// Codigo de AOS
AOS.init({
    easing: 'ease-out-back', duration: 2000
})

// Codigo efecto para titulo animado
let message = "APRENDE EN UN LUGAR...";
let msgCount = 0;
let blinkCount = 0;
let blinkFlg = 0;
let timer1, timer2;
let messageLabel = document.getElementById("messageLabel");

function textFunc() {
    messageLabel.innerHTML = message.substring(0, msgCount);

    if (msgCount == message.length) {
        // Stop Timer
        clearInterval(timer1);

        // Start blinking animation!
        timer2 = setInterval("blinkFunc()", 200);

    } else {
        msgCount++;
    }
}

function blinkFunc() {

    // Blink 5 times
    if (blinkCount < 1) {
        if (blinkFlg == 0) {
            messageLabel.innerHTML = message;
            blinkFlg = 1;
            blinkCount++;
        } else {
            messageLabel.innerHTML = "";
            blinkFlg = 0;
        }
    } else {
        // Stop Timer
        clearInterval(timer2);
    }
}
timer1 = setInterval("textFunc()", 120); // Every 150 milliseconds


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