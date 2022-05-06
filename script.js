const btnEntrar = document.getElementById('btn-entrar');
const agreementCheck = document.getElementById('agreement');

btnEntrar.addEventListener('click', () => {
  const email = document.getElementById('inputEmail').value;
  const senha = document.getElementById('inputPassword').value;
  return email === 'tryber@teste.com' && senha === '123456'
    ? alert('Olá, Tryber!') : alert('Email ou senha inválidos.');
});

agreementCheck.addEventListener('click', () => {
  document.getElementById('submit-btn').toggleAttribute('disabled');
});

// Função para exibir caracteres restantes da área de texto:

const textarea = document.getElementById('textarea');
const count = document.getElementById('counter');

function contador() {
  const caracteresTotais = textarea.value.length;
  const restantes = 500 - caracteresTotais;
  count.innerHTML = restantes;
}

textarea.addEventListener('keyup', contador);
