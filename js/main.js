// Codigo de AOS
AOS.init({
    easing: 'ease-out-back', duration: 2000
})

// Efecto para *APRENDE EN UN LUGAR...
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