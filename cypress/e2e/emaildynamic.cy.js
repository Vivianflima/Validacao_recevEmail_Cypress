import { generateDynamicEmail, generateDynamicName } from '../support/dynamicData.js';

describe('Envio de email dinâmico, validação do recebimento', () => {
  let emailTeste; // Variável para armazenar o e-mail gerado

  it('envio de email via API', () => {
    // Gerar dados dinâmicos
    const nomeDinamico = generateDynamicName();
    emailTeste = generateDynamicEmail(nomeDinamico); // Armazenar o e-mail gerado

    // Log dos dados gerados
    cy.log(`Nome: ${nomeDinamico}, Email: ${emailTeste}`);

    // Realizar a requisição
    cy.request({
      method: 'POST',
      url: 'https://gratis.com.br/testaemail_ok.mv',
      form: true, 
      body: {
        nomecompleto: nomeDinamico,
        emailteste: emailTeste,
        B1: 'Testar!'
      }
    }).then((response) => {
      // Verifica se a resposta foi bem-sucedida (código de status 200)
      expect(response.status).to.eq(200);
      
    });
  });
  
  it('Confirma recebimento', () => {
    // Capturar o e-mail gerado na primeira etapa
    const email = emailTeste;

    cy.visit(`https://www.mailinator.com/v4/public/inboxes.jsp?to=${email}`);
    cy.contains('equipe@gratis.com.br').should('be.visible');
  })
});


