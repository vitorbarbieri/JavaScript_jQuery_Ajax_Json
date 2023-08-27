//  Exercício 1

alert("O arquivo 'ex1.js' está funcionando");

//  Exercício 2

var nomeCompleto = "Vitor Barbieri da Silva";
var anoNascimento = 1993;
var idade = 2023 - anoNascimento;
console.log("Olá, eu me chamo " + nomeCompleto + ", tenho " + idade + " anos e estou estudando JavaScript");

//  Exercício 3

var nome = "Ana";
var matricula = "6516832"
var n1 = 8.8;
var n2 = 9.4;
var media = (n1 + n2) / 2;
console.log("O aluno " + nome + ", matrícula " + matricula + ", obteve a média final " + media.toFixed(2));

//  Exercício 4

var telefone = "9985854236"
console.log("Resultado do teste: " + telefone.length == 9)

//  Exercício 5

console.log(Math.pow(32,6));

//  Exercício 6

// a) OK - começa com letra
// b) NOK - começa com caracter inválido
// c) NOK - é uma keywords 
// d) NOK - possue hífen (-)
// e) OK - começa com letra
// f) NOK - começa com número
// g) NOK - possui espaço

//  Exercício 7

var quantidade = "25";
var numero = 6;
var pressao;
var temperatura = 40;
temperatura = null;

console.log(quantidade += quantidade); // 2525
console.log( (7+5) / numero + 2 ); // 4
console.log(pressao); // undefined
console.log(temperatura); // null
console.log(typeof pressao); // undefined
console.log(typeof temperatura); // object

//  Exercício 8

var idade = 65;

console.log(idade != 65); // false
console.log(idade >= 65);  // true
console.log("65" == idade); // true
console.log(65 !== idade); // false
console.log(typeof (idade > 60)); // boolean
console.log(typeof (idade > 70)); // boolean