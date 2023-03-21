const button = document.querySelector("#button");
button.addEventListener("click", () => {
    const text = document.querySelector("#input").value;
    if (text != "") {
        const QRCdeUrl = generateQRCode(text);
        const img = document.querySelector("#qr-code");
        img.src = QRCdeUrl;
        img.parentElement.classList.add("qr-code--show");
    }
});

function generateQRCode(text) {
    // Convert the text to url encoded utf8
    const utf8Text = encodeURIComponent(text);
    // Create the QR Code
    return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${utf8Text}`;
}
