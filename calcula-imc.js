// para buscar um determidado conteudo do arquivo nos utilizamos o queryselecor para fazer a busca
// passando entre aspas a tag ou classe, id, que estamos buscando
// para fazer a alteração importamos a variavel com o textcontent e passamos o valor para alterarmos
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoEhValido = validaPeso(peso); //true ou false
  var alturaEhValida = validaAltura(altura);

  if (!pesoEhValido) {
    console.log("Peso inválido");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
    //paciente.style.backgroundColor = "orange"; // modifica o estilo da cor quando a linha for invalida (não deve ser usada sempre)
    paciente.classList.add("paciente-invalido"); // criamos uma classe no css onde importamos com o classList para fazermos a alteração no style
  }

  if (!alturaEhValida) {
    console.log("Altura inválida");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
  }

  if (alturaEhValida && pesoEhValido) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc; // formata a quantidade de casas decimais de um elemento
  }
}

function validaPeso(peso) {
  if (peso >= 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura < 3) {
    return true;
  } else {
    return false;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura); // 100 / 2.0 * 2.0 = 100 / 4 >>>>> 25
  return imc.toFixed(2);
}
