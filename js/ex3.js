//  Exercício 1

function celsiusToFahrenheit(temp) {
    return (9 * temp / 5) + 32;
}

document.getElementById("converter").onclick = function() {
    var celsius = parseFloat(document.getElementById("temp_celsius").value);
    if (!celsius) {
        celsius = 0;
        document.getElementById("temp_celsius").value = celsius;
    }
    var fahrenheit = celsiusToFahrenheit(celsius);
    document.getElementById("temp_fahr").innerHTML = "<strong>" + fahrenheit.toFixed(2) + "</strong>";
};

//  Exercício 2

document.getElementById("anos_copa").innerHTML = "";
for (ano = 1930; ano <= 2018; ano += 4) {
    document.getElementById("anos_copa").innerHTML += "<li>" + ano + "</li>"
}

//  Exercício 3

document.getElementById("calcular").onclick = function() {
    var n1 = parseFloat(document.getElementById("nota1").value);
    if (!n1) {
        n1 = 0.0;
        document.getElementById("nota1").value = 0;
    }
    var n2 = parseFloat(document.getElementById("nota2").value);
    if (!n2) {
        n2 = 0.0;
        document.getElementById("nota2").value = 0;
    }
    var falta = parseInt(document.getElementById("n_faltas").value);
    if (!falta) {
        falta = 0;
        document.getElementById("n_faltas").value = 0;
    }

    var media = (n1 + n2) / 2;
    var presenca = ((20 - falta) / 20) * 100;

    var desc = "";
    if (media >= 6.5 && presenca >= 70) {
        desc = "Aprovado";
    } else {
        if (media >= 6.5 ) {
            desc = "Reprovado por falta (" + presenca.toFixed(2) + "%)";
        } else {
            if (presenca >= 70) {
                desc = "Reprovado por média (" + media.toFixed(2) + ")";
            } else {
                desc = "Reprovado por falta e média";
            }
        }
    }
    document.getElementById("result").innerHTML = desc;
};

//  Exercício 4

var vendas_cursos = [
    {
        'aluno': 'Emmanuel Gomes',
        'data': '10/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    },
    {
        'aluno': 'Carla Dias',
        'data': '10/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },
    {
        'aluno': 'Rafael Marques',
        'data': '11/06/2018',
        'valor': 39.99,
        'reembolso': '13/06/2018'
        
    },
    {
        'aluno': 'Maria Isabel Pereira',
        'data': '11/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },
    {
        'aluno': 'Andre Luis Silva',
        'data': '12/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    }
];

document.getElementById("vendas_cursos").innerHTML = "";
var tabela_vendas = "";
var totalVendas = 0;
for (var i = 0; i < vendas_cursos.length; i++) {
    var curso = vendas_cursos[i];
    if (!curso.reembolso) {
        tabela_vendas += "<tr>";
        tabela_vendas +=     "<td>" + curso.aluno + "</td>";
        tabela_vendas +=     "<td>" + curso.data + "</td>";
        tabela_vendas +=     "<td>" + curso.valor + "</td>";
        tabela_vendas += "</tr>";

        totalVendas += curso.valor;
    }
}
document.getElementById("vendas_cursos").outerHTML = tabela_vendas;
document.getElementById("total_vendas").innerHTML = totalVendas.toFixed(2);