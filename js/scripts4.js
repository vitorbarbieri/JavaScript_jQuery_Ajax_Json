//  ------------------------------ Aula 24 - BOM (Browser Object Model)
/* 
window.onmousemove = function (e) {
    if (e.pageY < 5) {
        alert('Não perca os descontos exclusivos na seção de promoções');
    }
}
*/
//  ------------------------------ Aula 25 - Local Storage
/* 
// window.localStorage.setItem('nome', 'Vitor Barbieri da Silva');
// window.localStorage.setItem('idade', '29');
// console.log("Nome: " + localStorage.nome)
// console.log("Idade: " + localStorage['idade']);
// localStorage.removeItem('nome');
// console.log("Nome: " + localStorage.nome)

document.getElementById("enviar-nome").onclick = function salvarNome() {
    var nome = document.getElementById("nome-usuario").value;
    
    // Verifica se campo foi preenchido
    if (nome == "" || nome == null) {
        return;
    }
    
    // Guardar o nome digitado em local-storage
    window.localStorage.setItem('nome', nome);

    // Esconder o formulário
    document.getElementById("name-field").style.display = "none";
    
    // Atualizar e mostrar mensagem de boas vindas
    document.getElementById("welcome-text").innerHTML = "Olá " + nome + ", tudo bem?";
    document.getElementById("not-me").innerHTML = "Não é " + nome + "?";
    document.getElementById("welcome-area").style.display = "initial";
};

document.getElementById("nome-usuario").onkeydown = function (e) {
    var tecla = e.key;
    if (tecla == "Enter") {
        document.getElementById("enviar-nome").click();
    }
};

if (localStorage.nome != null && localStorage.nome != "") {
    var nome = localStorage.nome;
    
    // Esconder o formulário
    document.getElementById("name-field").style.display = "none";
    
    // Atualizar e mostrar mensagem de boas vindas
    document.getElementById("welcome-text").innerHTML = "Olá " + nome + ", tudo bem?";
    document.getElementById("not-me").innerHTML = "Não é " + nome + "?";
    document.getElementById("welcome-area").style.display = "initial";
}

document.getElementById("not-me").onclick = function () {
    // Limpar local-storage
    window.localStorage.removeItem('nome');

    // Esconder mensagem de boas vindas
    document.getElementById("welcome-area").style.display = "none";
    
    // Mostrar o formulário
    document.getElementById("name-field").style.display = "initial";
};
*/
//  ------------------------------ Aula 26 - Data e Hora
/* 
var data_nascimento = "1993-10-07";
var ano_nascimento = new Date(data_nascimento).getFullYear();
var mes_nascimento = ("00" + new Date(data_nascimento).getMonth()).slice(-2);
var dia_nascimento = ("00" + new Date(data_nascimento).getDate()).slice(-2);
console.log("Data Atual: " + dia_nascimento + "/" + mes_nascimento + "/" + ano_nascimento)
var data_atual = new Date();
var ano_atual = new Date(data_atual).getFullYear();
var mes_atual = ("00" + new Date(data_atual).getMonth()).slice(-2);
var dia_atual = ("00" + new Date(data_atual).getDate()).slice(-2);
console.log("Data Atual: " + dia_atual + "/" + mes_atual + "/" + ano_atual)
if (mes_atual <= mes_nascimento && dia_atual <= dia_nascimento) {
    console.log("Idade: " + (ano_atual - ano_nascimento - 1))
} else {
    console.log("Idade: " + (ano_atual - ano_nascimento))
}

var data = new Date();
data = data.getTime();
var anos = data / 31536000000;
console.log(Math.floor(anos));

var data1 = new Date("2018-03-20"); // 20/03/2018
data1 = data1.getTime();
var data2 = new Date(2018, 3, 6); // 06/04/2018
// var data2 = new Date("2018-04-06");
data2 = data2.getTime();
var dif = (data2 - data1) / 86400000;
document.getElementById("dias_entrega").innerHTML = Math.floor(dif) + " dias";
 */
//  ------------------------------ Aula 27 - Métodos Tempo
/* 
// console.log("Mensagem 1");
// window.setTimeout(function () { 
//     console.log("Mensagem 2");
// }, 3000); // 3000ms = 3s

document.getElementById("mostrar-loader").onclick = function () {
    document.getElementById("spinner-loader").style.display = "initial";
    window.setTimeout(function () {
        document.getElementById("spinner-loader").style.display = "none";
    }, 5000)
};

// var count = 0;
// var inter = window.setInterval(function () {
//     console.log(count + " segundos");
//     count++;
//     if (count > 10) {
//         window.clearInterval(inter);
//     }
// }, 1000);

window.setInterval(function () {
    var data = new Date();
    var hora = ("00" + data.getHours()).slice(-2);
    var minuto = ("00" + data.getMinutes()).slice(-2);
    var segundo = ("00" + data.getSeconds()).slice(-2);
    document.getElementById("relogio").innerHTML = hora + ":" + minuto + ":" + segundo
}, 1000);
 */
//  ------------------------------ Aula 41 - Comando Switch

var categoria = '2';

switch (categoria) {
    case '1':
        console.log("Valor a pagar: R$ 11,22");
        break;
    case '2':
        console.log("Valor a pagar: R$ 22,45");
        break;
    case '3':
        console.log("Valor a pagar: R$ 16,88");
        break;
    case '4':
        console.log("Valor a pagar: R$ 33,65");
        break;
    default: 
        console.log("Categoria não encontrada");
}