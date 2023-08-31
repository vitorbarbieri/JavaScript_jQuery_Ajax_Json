//  ------------------------------ Aula 24 - BOM (Browser Object Model)
/* 
window.onmousemove = function (e) {
    if (e.pageY < 5) {
        alert('Não perca os descontos exclusivos na seção de promoções');
    }
}
*/
//  ------------------------------ Aula 25 - Local Storage

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