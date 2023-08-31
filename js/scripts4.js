//  ------------------------------ Aula 24 - BOM (Browser Object Model)

window.onmousemove = function (e) {
    if (e.pageY < 5) {
        alert('Não perca os descontos exclusivos na seção de promoções');
    }
}