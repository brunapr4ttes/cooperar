const inemail = document.getElementById("imput-email");
const insenha = document.getElementById("imput-senha");
const entrar = document.getElementById("botao-concluir");

entrar.addEventListener('click', function(event) {
  let email = inemail.value;
  let senha = insenha.value;
  let validacoesPassaram = true;

  if (!validarEmail(email)) {
    alert("Insira um email válido");
    validacoesPassaram = false;
    return
  }

  if (!validarSenha(senha)) {
    alert("A senha não atende aos requisitos mínimos" + "\n Requisitos da senha: pelo menos 8 caracteres, pelo menos uma letra maiúscula, um número e um caractere especial");
    validacoesPassaram = false;
    return
  }

  if (!validacoesPassaram) {
    event.preventDefault();
  }
});

function validarEmail(email) {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexEmail.test(email);
}

function validarSenha(senha) {
  // Requisitos da senha: pelo menos 8 caracteres, pelo menos uma letra maiúscula, um número e um caractere especial (feito com pesquisa)
  const regexSenha = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regexSenha.test(senha);
}