//  Exercicio 1

if (localStorage.estado) {
    var estado = localStorage.estado;

    document.getElementById("estados").value = estado;
}

document.getElementById("estados").onchange = function () {
    window.localStorage.setItem("estado", document.getElementById("estados").value);
}

//  Exercício 2

function calcularDataEntrega(estimativa, dia, mes, ano, data) {
    const ultimoDia = new Date(data.getFullYear(), data.getMonth() + 1, 0).getDate();

    var diaEntrega = dia + estimativa;
    var mesEntrega = mes;
    var anoEntrega = ano;

    if (diaEntrega > ultimoDia) {
        diaEntrega -= ultimoDia;
        mesEntrega++;
        if (mesEntrega > 12) {
            mesEntrega = 1;
            anoEntrega++;
        }
    }

    return ("0" + diaEntrega).slice(-2) + "/" + ("0" + mesEntrega).slice(-2) + "/" + ("0" + anoEntrega).slice(-4);
}

document.getElementById("confirmar_pedido").onclick = function () {
    // Data atual
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();

    // Atualiza data do pedido
    document.getElementById("data_pedido").innerHTML = ("0" + dia).slice(-2) + "/" + ("0" + mes).slice(-2) + "/" + ("0" + ano).slice(-4)

    // Calcula data prevista entrega
    var valor = document.getElementById("envios").options[document.getElementById("envios").options.selectedIndex].value;
    var escolha = "";
    switch (valor) {
        case "normal":
            var data = calcularDataEntrega(18, dia, mes, ano, data)
            escolha = data;
            break;
        case "express":
            var data = calcularDataEntrega(12, dia, mes, ano, data)
            escolha = data;
            break;
        default:
            escolha = "Escoha uma opcão válida";
            break;
    }
    document.getElementById("data_entrega").innerHTML = escolha;
}

//  Exercício 3

let hora = 0;
let minuto = 0;
let segundo = 0;
let milisegundo = 0;

let cronometro;

document.getElementById("comecar").onclick = () => start();
document.getElementById("parar").onclick = () => pause();
document.getElementById("zerar").onclick = () => reset();

function start() {
    pause();
    cronometro = setInterval(() => { timer(); }, 10);
}

function pause() {
    clearInterval(cronometro);
}

function reset() {
    hora = 0;
    minuto = 0;
    segundo = 0;
    milisegundo = 0;
    document.getElementById("cronometro").innerHTML = ("0" + hora).slice(-2) + ":" + ("0" + minuto).slice(-2) + ":" + ("0" + segundo).slice(-2) + " " + ("00" + milisegundo).slice(-3);
}

function timer() {
    if ((milisegundo += 10) == 1000) {
        milisegundo = 0;
        segundo++;
    }
    if (segundo == 60) {
        segundo = 0;
        minuto++;
    }
    if (minuto == 60) {
        minuto = 0;
        hora++;
    }
    document.getElementById("cronometro").innerHTML = ("0" + hora).slice(-2) + ":" + ("0" + minuto).slice(-2) + ":" + ("0" + segundo).slice(-2) + " " + ("00" + milisegundo).slice(-3);
}

//  Exercício 4

var carros = [
    {
        'placa': 'AAA-0198',
        'categoria': '1',
    },
    {
        'placa': 'HBP-2837',
        'categoria': '2',
    },
    {
        'placa': 'PLQ-0928',
        'categoria': '4',
    },
    {
        'placa': 'KQE-2093',
        'categoria': '5',
    },
    {
        'placa': 'AMR-9087',
        'categoria': '5',
    },
    {
        'placa': 'BQE-8111',
        'categoria': '3',
    },
    {
        'placa': 'GXL-9001',
        'categoria': '2',
    },
    {
        'placa': 'KPM-7740',
        'categoria': '1',
    }
];

let total = 0;
for (let i = 0; i < carros.length; i++) {
    let categoria = carros[i].categoria;
    switch (categoria) {
        case "1":
            total += 11.22;
            break;
        case "2":
            total += 22.45;
            break;
        case "3":
            total += 16.88;
            break;
        case "4":
            total += 33.65;
            break;
        default:
            break;
    }
}
document.getElementById("faturamento_total").innerHTML = total.toFixed(2);