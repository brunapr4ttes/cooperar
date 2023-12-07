const incep = document.getElementById("imput-cep");
  const inendereco = document.getElementById("imput-endereco");
  const innumero = document.getElementById("imput-numero");
  const inbairro = document.getElementById("imput-bairro");
  const incomplemento = document.getElementById("imput-complemento");

  const avancar = document.getElementById("botaoavancar");

  avancar.addEventListener('click', function(event){
    let cep = incep.value;
    let endereco = inendereco.value;
    let numero = innumero.value;
    let bairro = inbairro.value;
    let complemento = incomplemento.value;

    let validacoesPassaram = true;

    
    if(cep.length !== 8 || isNaN(cep)){
      alert('Digite um CEP válido');
      validacoesPassaram = false;
    }

    
    if(endereco === ''){
      alert('Insira um endereço válido');
      validacoesPassaram = false;
    }

    
    if(numero === ''){
      alert('Insira um número válido');
      validacoesPassaram = false;
    }

    
    if(bairro === ''){
      alert('Insira um bairro válido');
      validacoesPassaram = false;
    }

    if (!validacoesPassaram) {
      event.preventDefault();
    }
  })