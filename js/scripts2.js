//  ------------------------------ Aula 11 - Trabalhando com o DOM
/* 
var conteudo_caixa = document.getElementById("caixa_azul").innerHTML;
document.getElementById("caixa_azul").innerHTML = "<h1>" + conteudo_caixa + "</h1>"; 

document.getElementById("caixa_amarela").innerHTML = "<h1>Caixa amarela</h1>"; 
 */
//  ------------------------------ Aula 12 - Funções
/*
function valorIMC (peso, altura) {
    return peso / (Math.pow(altura, 2));
}

var meuPeso = parseFloat(document.getElementById("peso").innerHTML); // Sempre bom converter o conteúdo do HTML para número, caso for realizar cálculos
var minhaAltura = parseFloat(document.getElementById("altura").innerHTML);

var imc = valorIMC(meuPeso, minhaAltura).toFixed(2);
document.getElementById("imc").innerHTML = imc;
*/
//  ------------------------------ Aula 13 - Arrays
/* 
var alunos = ["João", "Maria", "José"];
var num_primos = [2, 3, 5, 7, 11, 13];
console.log(alunos.length); // o console mostrará 3
console.log(alunos[0]);  // o console mostrará "João"

var grupos = [
    ["João", "Maria"],
    ["Pedro", "Joana", "André", "Júlio"],
    ["Carolina", "Helena", "Marcelo"]
];
console.log(grupos.length); // o console mostrará 3
console.log(grupos[1]);  // o console mostrará [ "Pedro" , "Joana", "André", "Júlio" ]
console.log(grupos[1][2]);  // o console mostrará "André"

var cursos = ["HTML", "Python", "PHP"];
cursos.push("Javascript");
console.log(cursos);  // O console mostrará [ "HTML", "Python", "PHP", "Javascript" ]
cursos.unshift("Bootstrap");
console.log(cursos);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP", "Javascript" ]
cursos.pop();
console.log(cursos);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP" ]
cursos.shift();
console.log(cursos);  // O console mostrará [ "HTML", "Python", "PHP" ]

var ingredientes = ["pão branco", "queijo", "presunto"];
ingredientes[0] = "pão integral";
console.log(ingredientes);  // O console mostrará [ "pão integral", "queijo", "presunto" ]

alunos = ["João", "Maria", "José", "Fernanda", "Pedro", "Elisa"];
console.log(alunos.slice(0, 3)); // O console mostrará [ "João" , "Maria", "José" ]

alunos = ["João", "Maria", "José", "Fernanda", "Pedro", "Elisa"];
console.log(alunos.slice(0, -2));
// O console mostrará [ "João" , "Maria", "José", "Fernanda" ]
// O slice começa no primeiro elemento, e vai até o penúltimo elemento, neste caso o índice 4, com este elemento excluído.
console.log(alunos.slice(-3,));
// O console mostrará [ "Fernanda", "Pedro", "Elisa" ]
// O slice inclui os três últimos elementos.
*/
//  ------------------------------ Aula 14 - Objetos
/* 
var funcionario = {
    'nome': 'Pedro Souza Gomes',
    'ano_nasc': 1972,
    'cpf': '111.111.111.11',
    'cargo': 'Analista de Sistemas'
};
console.log(funcionario['cpf']); //  O console mostrará '111.111.111.11'
console.log(funcionario.cpf); // Podemos usar a notação com ponto (dot notation)
funcionario['cargo'] = 'Gerente de T.I.';  // alterar um valor associado a uma chave existente
funcionario.cnh = '1982736654';  // adicionar uma nova dupla de chave e valor
console.log(funcionario);

var cursos = [
    {
        'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
        'avaliacoes': 680,
        'alunos': 2300,
        'categorias': ['programacao', 'tecnologia']
    },
    {
        'titulo': 'Aprenda PHP e faça sites dinâmicos',
        'avaliacoes': 180,
        'alunos': 350,
        'categorias': ['desenvolvimento web', 'programacao']
    },
    {
        'titulo': 'Excel do Zero ao Avançado',
        'avaliacoes': 420,
        'alunos': 1800,
        'categorias': ['produtividade', 'gestão']
    }
];
console.log(typeof cursos);
console.log(cursos[1]['categorias'][0]);
cursos[2]['categorias'][1] = 'Administração de empresas';
console.log(cursos[2]['categorias']);  // O console mostrará ['produtividade', 'Administração de empresas']
cursos[2].categorias[1] = 'Administração de empresas';
console.log(cursos[2].categorias); 
*/
//  ------------------------------ Aula 14 - Métodos de Objetos

var aluno = {
    'nome': 'Maria',
    'sobrenome': 'Pereira',
    'ano_nasc': 1992,
    'nome_completo': function() {
        return this.nome + " " + this.sobrenome;
    },
    'idade': function() {
        return 2023 - this.ano_nasc;
    }
}
console.log("Nome completo: " + aluno.nome_completo()); // Com método, só pode usar a notação com ponto
console.log("Idade: " + aluno.idade());

console.log('Hello World'); // log é um método do objeto console 

Math.round(2.7);  // round é um método do objeto Math

var num = 3; 
var num_string = num.toString(); // toString é um método que pode ser aplicado a qualquer tipo de dados.

var conteudo_caixa = document.getElementById("caixa_azul").innerHTML;  // getElementById é um método do objeto document.
// innerHTML é propriedade do objeto que o método getElementById retorna.


var cursos = [ "HTML", "Python", "PHP" ];
cursos.push("Javascript"); // push é um método que pode ser aplicado em arrays.