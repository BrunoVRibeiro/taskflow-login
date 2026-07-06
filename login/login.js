// Usuários de teste (login local temporário)
const usuarios = [
    { usuario: "admin", senha: "1234" },
    { usuario: "ucpel", senha: "senha" }
];

// Valida as credenciais informadas no formulário.
// Corresponde ao método autenticar() do Diagrama de Classes.

function autenticar(evento) {
    evento.preventDefault();

    const usuario = document.getElementById("user").value.trim();
    const senha = document.getElementById("pass").value;

    // Procura o usuário na lista de teste
    const encontrado = usuarios.find(
        (u) => u.usuario === usuario && u.senha === senha
    );

    if (encontrado) {
        alert("Login realizado com sucesso!");
        // Guarda a sessão simples do usuário (RF04)
        sessionStorage.setItem("usuarioLogado", usuario);
        // Redireciona para a área interna (caminho em minúsculas
        // para compatibilidade com servidores case-sensitive)
        window.location.href = "../home/home.html";
    } else {
        // Feedback de erro claro (RF03)
        alert("Usuário ou senha inválidos!");
    }
}

// O listener no evento "submit" do formulário mantém a validação
// nativa dos campos obrigatórios (required) e o envio pela tecla Enter.
document.getElementById("loginForm").addEventListener("submit", autenticar);
