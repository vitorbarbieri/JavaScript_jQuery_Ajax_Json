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
/* 
document.getElementById("botao_cor").onclick = function() {
    this.style['background-color'] = "purple"; // contem traço, não funciona o ".", não obedece a nomeclatura
    this.style.transform = "translateX(100px)";
};
*/
//  ------------------------------ Aula 18 - Outros Métodos getElement

var exemplo = document.getElementsByClassName("exemplo");
exemplo[0].innerHTML = "Teste 1"
exemplo[1].style.color = "red";
exemplo[2].style['background-color'] = "purple";
exemplo[2].style.color = "#fff";

var exemplo = document.getElementsByTagName("p");
exemplo[4].innerHTML = "Teste 1"
exemplo[5].style.color = "red";
exemplo[6].style['background-color'] = "purple";
exemplo[6].style.color = "#fff";