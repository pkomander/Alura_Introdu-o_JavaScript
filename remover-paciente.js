// querySelectorAll para remover todos os pacientes
var pacientes = document.querySelectorAll(".paciente");

// para remover somente o elemento alvo do evento
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {
  event.target.parentNode.classList.add("fadeOut");
  setTimeout(function () {
    event.target.parentNode.remove();
  }, 500);
});
