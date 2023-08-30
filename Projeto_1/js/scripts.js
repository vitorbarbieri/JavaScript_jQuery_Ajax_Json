// Menu Mobile

function fecharMenu() {
  document.getElementById("sliding-header-menu-outer").style.right = "-320px";
}

document.getElementById("hamburguer-icon").onclick = function () {
  document.getElementById("sliding-header-menu-outer").style.right = "0";
};

document.getElementById("sliding-header-menu-close-button").onclick = function () {
  fecharMenu();
}

document.getElementsByClassName("open-icon")[0].onmouseover = function () {
  this.style.cursor = "pointer";
};

document.getElementsByClassName("close-icon")[0].onmouseover = function () {
  this.style.cursor = "pointer";
}

// About us Tab

var aboutUs = {
  "Missão": "Fazer com que cada cliente seja reconhecido como autoridade em seu segmento de atuação. Agregar valor ao negócio, potencializar o crescimento das operações e promover e estreitar o relacionamento do cliente com o seu público alvo, por meio da geração de conteúdo de relevância.",
  "Visão": "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
  "Valores": "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Superação dos resultados</li><li>Melhoria contínua</li></ul>"
};

var unselected_color = "#646872";
var selected_color = "#2A2D34";

var about_tags = document.getElementsByClassName("single-tab");
for (var i = 0; i < about_tags.length; i++) {
  about_tags[i].onclick = function () {
    for (var j = 0; j < about_tags.length; j++) {
      const element = about_tags[j];
      element.style['background-color'] = unselected_color;
      element.style['font-weight'] = "normal";
    }

    this.style['background-color'] = selected_color;
    this.style['font-weight'] = "bold";

    document.getElementById("box-text").innerHTML = aboutUs[this.innerHTML];
  };
}

// Slider de serviços

var our_services = [
  {
    'title': 'Webdesign',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Marketing Digital',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }

];

var select_service = 0;

document.getElementById("service-previous").onclick = function () {
  if (select_service == 0) {
    element = our_services.length - 1
    select_service = element;
  } else {
    element = select_service - 1
    select_service -= 1;
  }
  document.getElementById("service-title").innerHTML = our_services[element].title + ".";
  document.getElementById("service-text").innerHTML = our_services[element].text;
}

document.getElementById("service-next").onclick = function () {
  if (select_service == our_services.length - 1) {
    element = 0
    select_service = element;
  } else {
    element = select_service + 1
    select_service += 1;
  }
  document.getElementById("service-title").innerHTML = our_services[element].title + ".";
  document.getElementById("service-text").innerHTML = our_services[element].text;
}

// Data Footer

var ano_atual = new Date;
ano_atual = ano_atual.getFullYear();
document.getElementById("current_year").innerHTML = ano_atual;
