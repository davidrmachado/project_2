const buttonEntrar = document.getElementById("btn-entrar");

buttonEntrar.addEventListener("click", function (e) {
  const email = document.getElementById("inputEmail");
  const senha = document.getElementById("inputSenha");

  if (email.value === "tryber@teste.com" && senha.value === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
});
