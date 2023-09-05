//  ---------------------------------------- Aula 52
/* 
// $("div").ação(); -> Seleciona todos os elementos DIV
// $("#exemplo").ação(); -> Seleciona o elemento com id="exemplo"
// $(".exemplo").ação(); -> Seleciona todos os elementos com a class="exemplo"

$(".exemplo").html("Olá");
$("#esconder").click(function () {
    if ($(".exemplo").css("display") == "none") {
        $(".exemplo").show();
    } else {
        $(".exemplo").hide();
    }
});
*/
//  ---------------------------------------- Aula 53
/* 
var conteudo_html = $("#paragrafo-html").html();
console.log(conteudo_html);
var conteudo_texto = $("#paragrafo-html").text();
console.log(conteudo_texto);

$("#paragrafo-html").html("Mudar conteúdo do parágrafo");
conteudo_html = $("#paragrafo-html").html();
console.log(conteudo_html);
$("#paragrafo-html").text("Mudar conteúdo do parágrafo");
conteudo_texto = $("#paragrafo-html").html();
console.log(conteudo_texto);


var url_link = $("#paragrafo-link").attr("href");
console.log(url_link);

$("#paragrafo-link").attr("href", "https://www.google.com.br")
url_link = $("#paragrafo-link").attr("href");
console.log(url_link);


$("#mudar_imagem").click(function () {
    $("#imagem_js").attr("src", "../img/flamengo.png");
});


// Remover o conteúdo, mantendo o elemento:
$("#paragrafo-empty").empty();
// Remover o elemento:
$("#paragrafo-empty").remove();
*/
//  ---------------------------------------- Aula 54 - Loop Each

console.log("----- Array ----- ")
var lista = ["HTML","CSS","Javascript", "jQuery", "PHP"];
$.each(lista, function(indice, valor) {
    console.log("O elemento de índice [" + indice + "] tem valor de " + valor);
});

console.log("----- Objeto ----- ")
var pessoa = {
    'nome': 'João Pedro',
    'DN': '20/01/1990',
    'CPF': '111.111.111-11'
};
$.each(pessoa, function( chave, valor ) {
    console.log('O elemento de chave [' + chave + '] tem o valor de ' + valor);
});

var interesses = $("#interesses li");
$.each(interesses, function(chave, valor) {
    console.log($(valor).text())
});
// $.each(interesses, function () {
//     console.log($(this).text());
// });