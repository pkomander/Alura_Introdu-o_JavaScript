var boataoAdicionar = document.querySelector("#adicionar-paciente");
boataoAdicionar.addEventListener("click", function (event) {
  event.preventDefault(); // informa um evento padrão do script ao click do usuario

  var form = document.querySelector("#form-adiciona"); // pega os elementos do form para serem preenchidos e dps enviados

  //   extraindo informações do paciente do form
  var paciente = obtemPacienteDoFormulario(form);
  console.log(paciente);

  var erros = validaPaciente(paciente);
  console.log(erros);
  if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
  }

  adicionaPacienteNaTabela(paciente);

  // limpa o form apos o preenchimento
  form.reset();

  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = ""; // utilizado para pegar um elemento ou alteralo, como no exemplo ao lado <-
});

function adicionaPacienteNaTabela(paciente) {
  // cria a tr do paciente
  var pacienteTr = montaTr(paciente);

  //   cria uma variavel para pegar os elementos da tabela e modificar
  var tabela = document.querySelector("#tabela-pacientes");

  //   pega a variavel da tabela e adiciona todos os elementos que foram passados para pacienteTr
  tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function obtemPacienteDoFormulario(form) {
  //criando um objeto paciente
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };
  return paciente;
}

function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  //   cria um elemento de acorda com a tabela pegando o elemento da tabela e o criado para a tr, td
  //   adiciona todos os elementos modificados da tabela há tr com o appendChild
  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente) {
  var erros = []; //array

  if (paciente.nome.length == 0) {
    erros.push("O nome não pode ser em branco");
  }

  if (!validaPeso(paciente.peso)) {
    erros.push("Peso é inválido"); //add um item ao array
  }

  if (!validaAltura(paciente.altura)) {
    erros.push("Altura é inválida");
  }

  if (paciente.gordura.length == 0) {
    erros.push("A gordura não pode ser em branco");
  }

  if (paciente.peso.length == 0) {
    erros.push("O peso não pode ser em branco");
  }

  if (paciente.altura.length == 0) {
    erros.push("A altura não pode ser em branco");
  }

  return erros;
}
