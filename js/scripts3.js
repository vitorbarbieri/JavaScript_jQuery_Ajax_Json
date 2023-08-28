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
/* 
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
*/
//  ------------------------------ Aula 19 - Loops for e for/in

/* for (let i = 0; i < 5; i++) {
    console.log(i);
}

var alunos = ['Pedro', 'Maria', 'José', 'João', 'Carlos'];
for (let i = 0; i < alunos.length; i++) {
    console.log("Aluno " + (i + 1) + ": " + alunos[i]);
}

var carro = {
    'Ano': 2018,
    'Modelo': 'Fox',
    'Cilindradas': '1.8',
    'Combustível': 'Gasolina'
}
for (var prop in carro) {
    console.log(prop + ": " + carro[prop]);
}

var elementos = document.getElementsByClassName("exemplo");
for (c = 0; c < elementos.length; c++) {
    elementos[c].style.color = "orange";
    elementos[c].style['font-weight'] = "bold";
}
*/
//  ------------------------------ Aula 20 - Loops while e do/while
/* 
var count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

var count2 = 10;
do {
    console.log(count2);
    count2++;
} while (count2 < 5)
*/
//  ------------------------------ Aula 21 - Condicionais (if, else if, else)
/* 
var idade = 17;
if (idade < 18) {
    console.log('Menor de idade');
} else {
    console.log('Maior de idade');
}

idade = 18;
if (idade < 18) {
    console.log('Menor de 18');
} else if (idade == 18) {
    console.log('Tem 18 anos');
} else {
    console.log('Maior de 18');
}

nota = 7;
faltas = 3;
// Resolução com and: 
if (nota >= 7 && faltas <= 4) {
    console.log( 'O aluno foi aprovado' );
} else {
    console.log( 'O aluno foi reprovado' );
}
// Resolução com or: 
if (nota < 7 || faltas > 4) {
    console.log( 'O aluno foi reprovado' );
} else {
    console.log( 'O aluno foi aprovado' );
}

var nome = "";
if (nome) {
    console.log(nome);
} else {
    console.log("Nome não informado");
}
*/
//  ------------------------------ Aula 25 - Aninhamento de loops e condicionais (nesting)

var socio = false;
var idade = 25;
if (socio == true || idade >= 65) {
    console.log('O ingresso é grátis');
} else {
    if (idade < 18) {
        console.log('O ingresso custa: R$ 6,00');
    } else {
        console.log('O ingresso custa: R$ 12,00');
    }
}

var funcionarios = [
    {
        'nome': 'Carlos Henrique da Silva',
        'idade': 45,
        'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']
    },
    {
        'nome': 'Maria Helena Pereira',
        'idade': 32,
        'filhos': undefined
    },
    {
        'nome': 'José Feliciano Maia',
        'idade': 39,
        'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
    }
];
var list_element = document.getElementById("filhos");
list_element.innerHTML = "";
for (var a = 0 ; a < funcionarios.length ; a++) {
    if (funcionarios[a].filhos) {
        var lista_filhos = funcionarios[a].filhos;
        for (var b = 0 ; b < lista_filhos.length ; b++) {
            list_element.innerHTML += '<li>' + lista_filhos[b] + ' - Filho(a) de ' + funcionarios[a].nome + '</li>';
        }
    }
}