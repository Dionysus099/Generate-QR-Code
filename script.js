let input = document.querySelector("input")
let button = document.querySelector("button")

let qrcode = new QRCode(document.querySelector("#qrcode"), {
    text: "https://github.com/Dionysus099",
    width: 300,
    height: 300,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

button.addEventListener("click", () => {
    let inputVal = input.value;

    qrcode.makeCode(inputVal);
})