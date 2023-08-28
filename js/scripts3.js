//  ------------------------------ Aula 16 - Eventos

document.getElementById("hover-me").onmouseover = function () {
    alert("Você passou com o cursor no botão");
};
document.getElementById("leave-me").onmouseout = function () {
    alert("Você saiu do botão");
};

document.onkeydown = function () { // Monitora em qualquer lugar da página
    if (event.keyCode == 65) {
        alert('Você apertou a tecla: ' + event.keyCode);
        alert('Você apertou a tecla: ' + event.key);
    }
};

function button_clicked() {
    alert("Você clicou no botão");
}