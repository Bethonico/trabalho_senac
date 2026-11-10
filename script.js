var formulario = document.getElementById("form-contato");

formulario.addEventListener("submit", function (evento) {
    
    evento.preventDefault();

    var nome = document.getElementById("nome").value.trim();
    var email = document.getElementById("email").value.trim();

    if (nome === "" && email === "") {
        alert("Preencha o nome e o e-mail!");
    } else if (nome === "") {
        alert("Preencha o seu nome!");
    } else if (email === "") {
        alert("Preencha o seu e-mail!");
    } else if (!email.includes("@") || !email.includes(".")) {
        alert("Digite um e-mail válido (precisa ter @ e .)");
    } else {
        alert("Cadastro feito com sucesso, " + nome + "! Bem-vindo ao clube.");
        formulario.reset();
    }
});