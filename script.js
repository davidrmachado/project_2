const btnEntrar = document.getElementById("btn-entrar");

btnEntrar.addEventListener("click", function () {
  let email = document.getElementById("inputEmail");
  let senha = document.getElementById("inputSenha");

  email.value == "tryber@teste.com" && senha.value == "123456"
    ? alert("Olá, Tryber!")
    : alert("Email ou senha inválidos.");
});
