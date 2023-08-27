//  ------------------------------ Aula 10 - Trabalhando com o DOM
/* 
var conteudo_caixa = document.getElementById("caixa_azul").innerHTML;
document.getElementById("caixa_azul").innerHTML = "<h1>" + conteudo_caixa + "</h1>"; 

document.getElementById("caixa_amarela").innerHTML = "<h1>Caixa amarela</h1>"; 
 */
//  ------------------------------ Aula 11 - Funções

function valorIMC (peso, altura) {
    return peso / (Math.pow(altura, 2));
}

var meuPeso = parseFloat(document.getElementById("peso").innerHTML); // Sempre bom converter o conteúdo do HTML para número, caso for realizar cálculos
var minhaAltura = parseFloat(document.getElementById("altura").innerHTML);

var imc = valorIMC(meuPeso, minhaAltura).toFixed(2);
document.getElementById("imc").innerHTML = imc;