var nome = "João";  // podem ser usadas aspas duplas
var sobrenome = 'Gomes';  // ou aspas simples
var cpf = '111.111.111-11';  
var telefone = "998887655";  // por mais que só tenha números, como não é usado para realizar cálculos, deve ser do tipo string
var ddd = '21';
var email = 'joao@gmail.com';
var biografia = "João começou a sua carreira como desenvolvedor web em 2010 e já participou de importantes projetos, como...";

var nome_completo = nome + " " + sobrenome;
console.log("Nome completo: " + nome_completo);

console.log("(" + ddd + ")" + telefone);

console.log("Primeira letra do nome: " + nome[0]);
console.log("Última letra do nome: " + nome[nome.length - 1]);
console.log("Tamanho do telefone: " + telefone.length);