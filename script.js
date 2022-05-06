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
