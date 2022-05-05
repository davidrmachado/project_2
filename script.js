const btnEntrar = document.getElementById("btn-entrar");

btnEntrar.addEventListener("click", () => {
  const email = document.getElementById("inputEmail").value;
  const senha = document.getElementById("inputPassword").value;

  email === "tryber@teste.com" && senha === "123456"
    ? alert("Olá, Tryber!")
    : alert("Email ou senha inválidos.");
});
