// Seleciona o formulário e a área de mensagens
const form = document.getElementById("formContato");
const retorno = document.getElementById("mensagemRetorno");
const temaBtn = document.getElementById("temaBtn");

// Validação do formulário
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  // Verifica campos vazios
  if (nome === "" || email === "" || mensagem === "") {
    retorno.textContent = "Por favor, preencha todos os campos.";
    retorno.style.color = "red";
    return;
  }

  // Validação simples de e-mail
  const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!padraoEmail.test(email)) {
    retorno.textContent = "Digite um e-mail válido.";
    retorno.style.color = "red";
    return;
  }

  // Simulação de envio
  retorno.textContent = "Mensagem enviada com sucesso!";
  retorno.style.color = "green";

  // Limpa o formulário
  form.reset();
});

// Alternância de tema claro/escuro
temaBtn.addEventListener("click", function() {
  document.body.classList.toggle("escuro");
});