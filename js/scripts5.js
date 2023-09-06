// $(function () {
$(document).ready(function () {

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
    /* 
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
        */
    //  ---------------------------------------- Aula 55 - Formulário
    /* 
    //  Input
    var nome = $("#campo_nome").val();
    console.log(nome);
    $("#campo_nome").val("Vitor Barbieri");
    nome = $("#campo_nome").val();
    console.log(nome);
    
    //  Select Box
    var valor_select = $("#options").val();
    console.log(valor_select);
    valor_select = $("#options").find(":selected").text(); // Busca o elemento que possua o atributo "selected"
    console.log(valor_select);
    $("#options").change(function () {
        var novo_selecionado = $("#options").find(":selected").text();
        console.log(novo_selecionado);
    });
    
    //  Radio Button
    var valor_radio_selecionado = $("input[name='genero']:checked").val();
    console.log(valor_radio_selecionado);
    var valor_radio_selecionado = $("input[name='genero']:checked").parents("span").text();
    console.log(valor_radio_selecionado);
    $("input[name='genero']").change(function () {
        var valor_radio_selecionado = $("input[name='genero']:checked").parents("span").text();
        console.log(valor_radio_selecionado);
    });
    
    //  CheckBox
    $("input[name='interesse']").change(function () {
        var checkboxes_selecionados = $("input[name='interesse']:checked");
        var textos = [];
        $.each(checkboxes_selecionados, function (index, value) {
            textos.push($(value).parent("span").text());
        });
        console.log(textos);
    });
    */
    //  ---------------------------------------- Aula 56 - Manipulação de Classe CSS
    /* 
    // Adicionar classe:
    $("#adicionar_classe").click(function () {
        $("#paragrafo-classes").addClass("styling");
    });
    
    // Remover classe:
    $("#remover_classe").click(function () {
        $("#paragrafo-classes").removeClass("styling");
    });
    
    // Alternar classe:
    $("#alternar_classe").click(function () {
        $("#paragrafo-classes").toggleClass("styling");
    });
    */
    //  ---------------------------------------- Aula 57 - Eventos

    $("#nome").keyup(function () {
        var conteudo = $("#nome").val();
        if (conteudo) {
            $("#confirmar").show();
        } else {
            $("#confirmar").hide();
        }
    });
    

});