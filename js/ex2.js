//  Exercício 1

var n1 = parseFloat(document.getElementById("num_1").innerHTML);
var n2 = parseFloat(document.getElementById("num_2").innerHTML);
var soma = n1 + n2;
document.getElementById("resultado").innerHTML = "<strong>" + soma + "</strong>";

//  Exercício 2

function celsiusToFahrenheit(temp) {
    return (9 * temp / 5) + 32;
}
var celsius = parseFloat(document.getElementById("caixa_azul").innerHTML);
var fahrenheit = celsiusToFahrenheit(celsius);
document.getElementById("caixa_amarela").innerHTML = fahrenheit.toFixed(2);

//  Exercício 3

var grupos = [
    ["João", "Maria"],
    ["Pedro", "Joana", "André", "Júlio"],
    ["Carolina", "Helena", "Marcelo"]
];
var novoGrupo = grupos.slice(-2,);
novoGrupo.push(["Mariana", "Felipe", "Carla"]);
console.log(novoGrupo);

//  Exercício 4

var curso = {
    'titulo': "Aprenda programação em Python",
    'categoria': ['programação', 'tecnologia', 'python'],
    'n_aval_5_estrelas': 420,
    'n_aval_4_estrelas': 80,
    'n_aval_3_estrelas': 33,
    'n_aval_2_estrelas': 20,
    'n_aval_1_estrela': 4,
    'total_aval': function () {
        return this.n_aval_1_estrela + this.n_aval_2_estrelas + this.n_aval_3_estrelas + this.n_aval_4_estrelas + this.n_aval_5_estrelas;
    },
    'media_aval': function () {
        return (1 * this.n_aval_1_estrela + 2 * this.n_aval_2_estrelas + 3 * this.n_aval_3_estrelas + 4 * this.n_aval_4_estrelas + 5 * this.n_aval_5_estrelas) / this.total_aval();
    }

}

var categoria = curso.categoria[0];
document.getElementById("categoria_principal").innerHTML = categoria;

document.getElementById("total_aval").innerHTML = curso.total_aval();
document.getElementById("media_aval").innerHTML = curso.media_aval().toFixed(2);

//  Exercício 5

var pessoa = {
    'nome': "Pedro",
    'sobrenome': "Gomes",
    'email': "pedrogomes@gmail.com",
}

function imprimirTabela(nome, sobrenome, email) {
    var nomeCompleto = nome + " " + sobrenome;
    var tabela = "<div class='tableBox'>";
    tabela +=        "<table>";
    tabela +=            "<tr>";
    tabela +=                "<th>Nome Completo</th>";
    tabela +=                "<th>E-mail</th>";
    tabela +=            "</tr>";
    tabela +=            "<tr>";
    tabela +=                "<td>" + nomeCompleto + "</td>";
    tabela +=                "<td>" + email + "</td>";
    tabela +=            "</tr>";
    tabela +=        "</table>";
    tabela +=    "</div>";
    return tabela;
}

var tabelaHtml = imprimirTabela(pessoa.nome, pessoa.sobrenome, pessoa.email);
document.getElementById("tabela").innerHTML = tabelaHtml;