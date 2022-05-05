const btnEntrar = document.getElementById('btn-entrar');

btnEntrar.addEventListener('click', function () {
  const email = document.getElementById('inputEmail');
  const senha = document.getElementById('inputSenha');

  email.value === 'tryber@teste.com' && senha.value === '123456'
    ? alert('Olá, Tryber!')
    : alert('Email ou senha inválidos.');
});
