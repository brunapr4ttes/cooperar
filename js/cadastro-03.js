const imputCondicao = document.getElementById("imput-condicao");
  const concluir = document.getElementById("botao-concluir");

 concluir.addEventListener('click', function(event) {
    if (imputCondicao.value === '') {
      alert('Selecione uma condição antes de avançar.');
      event.preventDefault();
    }
  })