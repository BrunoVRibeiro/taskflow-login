# ✅ TaskFlow — Sistema de Login

Protótipo desenvolvido como entrega final da disciplina de **Projeto Integrador V - B** (Análise e Desenvolvimento de Sistemas — UCPel), integrando os conteúdos de **Gestão da Qualidade** e **Engenharia de Software II**.

O projeto implementa o módulo de autenticação de um APP de Tarefas: tela de login com validação local de credenciais e área interna protegida por sessão simples, sem integração com banco de dados (delimitação de escopo documentada no relatório final).

**Autores:** Anderson Matheus De Souza Melo e Bruno Luiz Vahl Ribeiro

---

## 🗂 Estrutura do Projeto

```
taskflow/
│
├── index.html                  # Redireciona a raiz para a tela de login
├── login/
│   ├── login.html              # Tela de login
│   ├── login.js                # Validação de credenciais e sessão
│   ├── styles.css              # Estilos da tela de login
│   └── logo.png                # Logotipo do projeto
│
├── home/
│   ├── home.html               # Área interna protegida
│   └── home.css                # Estilos da área interna
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # Publicação automática no GitHub Pages
│
└── .gitignore
```

> Todos os diretórios e arquivos usam nomes em **minúsculas e sem espaços**, garantindo compatibilidade com servidores case-sensitive (como o GitHub Pages).

---

## 🔑 Funcionalidades

- Login com verificação local de usuário/senha (RF01).
- Validação nativa de campos obrigatórios via `<form>` (RF02), incluindo envio com a tecla Enter.
- Mensagens claras de erro para credenciais inválidas (RF03).
- Área interna protegida: acesso direto sem sessão redireciona ao login (RF04).
- Logout seguro com encerramento da sessão (RF05).
- Interface responsiva para telas menores (RNF03).
- Simulação de sessão com `sessionStorage`.

Os botões **"Registrar-se"** e **"Esqueci minha senha"** são ilustrativos nesta versão (RF06 e RF07, previstos para versão futura com back-end).

---

## 🧪 Usuários de Teste

| Usuário | Senha |
|---------|-------|
| admin   | 1234  |
| ucpel   | senha |

> ⚠️ As credenciais ficam em uma lista local no `login.js`, **sem criptografia** — limitação conhecida do protótipo, registrada no caso de teste CT10 do relatório. Em versão futura, a autenticação será movida para um back-end (PHP + MySQL) com senhas em hash.

---

## 🚀 Como Executar

### Opção 1 — Direto no navegador
1. Baixe ou clone o repositório:
   ```bash
   git clone https://github.com/SEU-USUARIO/taskflow-login.git
   ```
2. Abra o arquivo `login/login.html` (ou `index.html`) em um navegador moderno (Chrome, Firefox ou Edge).
3. Faça login com um dos usuários de teste acima.

### Opção 2 — Servidor local (VS Code)
1. Instale a extensão **Live Server** no Visual Studio Code.
2. Abra a pasta do projeto e clique em **"Go Live"**.
3. Acesse `http://localhost:5500/login/login.html`.

### Opção 3 — GitHub Pages (publicação automática)
1. Envie o projeto para um repositório no GitHub (branch `main` ou `master`).
2. Em **Settings → Pages**, selecione **GitHub Actions** como fonte.
3. A cada `git push`, o workflow `.github/workflows/deploy.yml` publica o site automaticamente.

---

## 🛠 Tecnologias

- **HTML5** — estrutura semântica das páginas.
- **CSS3** — estilização, tema escuro e responsividade.
- **JavaScript (ES6)** — validação de login, controle de sessão e logout.
- **Git / GitHub + GitHub Actions** — versionamento e deploy no GitHub Pages.
- **Boxicons** — ícones dos campos do formulário.

---

## 🔮 Evolução Futura

- Back-end em **PHP 8.4** com banco de dados **MySQL**.
- Senhas criptografadas com `password_hash`.
- Cadastro de usuários e recuperação de senha funcionais.
- Testes automatizados.
- Uso de branches por funcionalidade e changelog.
