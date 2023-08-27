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
/* O slice começa no primeiro elemento, e vai até o penúltimo elemento, neste caso o índice 4, 
com este elemento excluído. */
console.log(alunos.slice(-3,));
// O console mostrará [ "Fernanda", "Pedro", "Elisa" ]
// O slice inclui os três últimos elementos.