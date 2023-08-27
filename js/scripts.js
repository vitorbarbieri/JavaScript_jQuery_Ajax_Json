//  Aritmética básica

var num1 = 20;
var num2 = 3;

var soma = num1 + num2;
var subtracao = num1 - num2;
var divisao = num1 / num2;
var multiplicacao = num1 * num2;

var media = (num1 + num2) / 2;

console.log("Soma: " + soma);
console.log("Subtração: " + subtracao);
console.log("Divisão: " + divisao);
console.log("Multiplicação: " + multiplicacao);
console.log("Média: " + media);

//  O Objeto Math

var potencia = Math.pow(2,4);  //  Potenciação. Resltado: 16
var arredonda = Math.round(2.7); // Arredondamento. Resultado: 3
var arredonda_cima = Math.ceil(4.3) // Arredondamento para cima. Resultado: 5
var arredonda_baixo = Math.floor(4.6) // Arredondamento para baixo. Resultado: 4
var raiz = Math.sqrt(36) // Raiz quadrada. Resultado: 6

//  Operadores incrementais

var increment = 20;
increment = increment + 5;
console.log(increment);

increment = 1;
increment += 5;
console.log(increment);

increment = 10;
increment++;
console.log(increment); // O console mostrará 11

increment = 20;
increment--;
console.log(increment); // O console mostrará 19

//  Como converter o tipo de uma variável

var ddd = 21;
var telefone = 998887655;

var ddd_string = ddd.toString();
var tel_string = telefone.toString();

var telefone_completo = "(" + ddd_string + ")" + tel_string;
console.log(telefone_completo); // retorna '21998887655'                


var idade = '17';
idade = parseInt(idade);
idade++;

console.log(idade); // O console mostrará 18