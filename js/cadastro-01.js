const innome = document.getElementById('imput-nome');
  const insobrenome = document.getElementById('imput-sobrenome');
  const incpf = document.getElementById('imput-cpf');
  const indata = document.getElementById('imput-nascimento');
  const inemail = document.getElementById("imput-email");
  const insenha = document.getElementById("imput-senha");

  const avancar = document.getElementById("botaoavancar");

  avancar.addEventListener('click', function(event){
    let nome = innome.value;
    let sobrenome = insobrenome.value;
    let cpf = incpf.value;
    let data = indata.value;
    let email = inemail.value;
    let senha = insenha.value;

    console.log(genero);

    let validacoesPassaram = true;

    if(/\d/.test(nome) || nome === ''){
      alert('Insira seu nome corretamente');
      validacoesPassaram = false;
    }

    if(/\d/.test(sobrenome) || sobrenome === ''){
      alert('Insira seu sobrenome corretamente');
      validacoesPassaram = false;
    }

    if(cpf.length !== 11 || isNaN(cpf)){
      alert('Digite seu CPF corretamente');
      validacoesPassaram = false;
    }

    if (!validarEmail(email)){
      alert("Insira um email válido");
      validacoesPassaram = false;
    }

    if (!validarSenha(senha)){
      alert("A senha não atende aos requisitos mínimos" + "\n Requisitos da senha: pelo menos 8 caracteres, pelo menos uma letra maiúscula, um número e um caractere especial");
      validacoesPassaram = false;
    }

    if (!validacoesPassaram) {
      event.preventDefault();
    }
  });

  function validarEmail(email){
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  }

  function validarSenha(senha){
    // Requisitos da senha: pelo menos 8 caracteres, pelo menos uma letra maiúscula, um número e um caractere especial (feito com pesquisa)
    const regexSenha = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regexSenha.test(senha);
  }
