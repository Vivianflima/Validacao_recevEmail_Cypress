
# Projeto de Validação de Recebimento de E-mail

Este é um projeto para validar de forma simples o recebimento de e-mail utilizando os sites https://gratis.com.br/testaemail_ok.mv para o envio de e-mail e o provedor de e-mails descartáveis Mailinator.com para a confirmação de recebimento.

## Estrutura do Projeto

O projeto consiste em duas specs para o Cypress:

- `email.cy.js`: Contém um teste com um nome e e-mail "chumbados" para melhor visualização e entendimento do teste.
- `emaildynamic.cy.js`: Contém um teste que consome a função gerada no arquivo `dynamicData.js`, que gera e-mails dinâmicos em cada execução do teste.

## Como Usar

### Clonar o Repositório

Clone este repositório para o seu ambiente local:

```bash
git clone https://github.com/Vivianflima/Validacao_recevEmail_Cypress.git
```

### Instalar Dependências

Navegue até o diretório do projeto e instale as dependências necessárias:

```bash
cd nome-do-projeto
npm install
```

### Rodar os Testes Cypress

Execute o Cypress para rodar os testes:

```bash
npm run cypress:open
```

Isso abrirá a interface do Cypress, onde você pode selecionar qual spec deseja executar e visualizar os resultados dos testes.

## Arquivo .gitignore

Este projeto inclui um arquivo `.gitignore` que especifica quais arquivos e pastas devem ser ignorados pelo Git. Isso inclui arquivos temporários, dependências de terceiros e outros arquivos que não devem ser incluídos nos commits do Git.

Certifique-se de revisar e personalizar o arquivo `.gitignore` conforme necessário para atender às necessidades específicas do seu projeto.


