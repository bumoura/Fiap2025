# POSTECH - Desafio da Aula Inaugural

Este projeto foi desenvolvido para a aula inaugural do curso de **Full Stack Development** da FIAP. Ele consiste em um formulário web que permite coletar informações de um grupo de alunos e enviá-las para uma API externa.

## 🚀 Funcionalidades
- 📋 Formulário para coletar informações de até 5 membros do grupo.
- ✍️ Campo para inserir a história do grupo.
- ✅ Validação de campos obrigatórios.
- 📡 Envio de dados para uma API externa.
- 🎨 Interface responsiva e moderna.
- 🎬 Efeito de **fade-in** ao carregar a página.

## 🛠 Tecnologias Utilizadas
- **HTML5** - Estrutura da página.
- **CSS3** - Estilização e responsividade.
- **JavaScript** - Lógica do formulário e interações dinâmicas.
- **API REST** - Envio dos dados para: [fsdt-contact.onrender.com/contact](https://fsdt-contact.onrender.com/contact).

## 📁 Estrutura do Projeto
```
.
├── index.html      # Estrutura HTML da página
├── style.css       # Estilos CSS
├── script.js       # Lógica JavaScript
└── README.md       # Este arquivo
```

## ▶️ Como Usar
1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```
2. Abra o arquivo **index.html** em seu navegador.
3. Preencha os campos do formulário com as informações do grupo.
4. Clique em **"Enviar"** para submeter os dados.

## 📤 Formato dos Dados Enviados
O formulário envia os dados no seguinte formato JSON:
```json
{
    "names": ["Nome1", "Nome2", "Nome3", "Nome4", "Nome5"],
    "message": "História do grupo"
}
```

## 📌 Requisitos
- Navegador web moderno com suporte a **JavaScript ES6+**.
- Conexão com a internet para envio dos dados.

## 👥 Desenvolvido por
- **Bruna Moura** - RM362412
- **Fagner Silva** - RM361772
- **Leonardo Tomaz** - RM362575
- **Breno** - RM362474
- **Melqui Santos** - RM364683

---
📌 *Este projeto foi criado para fins educacionais no curso de Full Stack Development da FIAP.*
