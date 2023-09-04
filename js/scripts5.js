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