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
