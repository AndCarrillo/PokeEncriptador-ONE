function encriptar() {
    var texto = document.getElementById("inputText").value.toLowerCase();

    var txtCifrado = texto
        .replace(/e/g, "enter")
        .replace(/o/g, "ober")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/u/g, "ufat");

    document.getElementById("imgRi").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("text2").style.display = "none";
    document.getElementById("outputText").value = txtCifrado;
    document.getElementById("outputText").style.display = "block";
    document.getElementById("boton-copiar").style.display = "block";
}

function desencriptar() {
    var texto = document.getElementById("inputText").value.toLowerCase();

    var txtCifrado = texto
        .replace(/enter/g, "e")
        .replace(/ober/g, "o")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ufat/g, "u");

    document.getElementById("imgRi").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("text2").style.display = "none";
    document.getElementById("outputText").value = txtCifrado;
    document.getElementById("outputText").style.display = "block";
    document.getElementById("boton-copiar").style.display = "block";
}

function copy() {
    var contenido = document.getElementById("outputText");
    contenido.select();
    document.execCommand("copy");

    var notification = document.getElementById("copy-notification");
    notification.style.display = "flex";

    document.getElementById("boton-copiar").style.display = "none";
    setTimeout(function() {
        notification.style.display = "none";
        document.getElementById("boton-copiar").style.display = "block";
    }, 3000);
}
