//  ------------------------------ Aula 16 - Eventos
/* 
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
 */
//  ------------------------------ Aula 17 - Manupulação do CSS

document.getElementById("botao_cor").onclick = function() {
    this.style['background-color'] = "purple"; // contem traço, não funciona o ".", não obedece a nomeclatura
    this.style.transform = "translateX(100px)";
};