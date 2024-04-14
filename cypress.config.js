const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Configurações específicas para os testes E2E
  e2e: {
    setupNodeEvents(on, config) {
      // Implemente os ouvintes de eventos do Node aqui
    },
    // Ativando o Cypress Studio experimental
    experimentalStudio: true
  }
});
