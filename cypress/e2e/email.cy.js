describe('Envio de email, validação do recebimento', () => {
 

    it('envio de email via API', () => {
    cy.request({
      method: 'POST',
      url: 'https://gratis.com.br/testaemail_ok.mv',
      form: true, 
      body: {
        nomecompleto: 'cantinho',
        emailteste: 'cantinho1@mailinator.com',
        B1: 'Testar!'
      }
    }).then((response) => {
      // Verifica se a resposta foi bem-sucedida (código de status 200)
      expect(response.status).to.eq(200);
  
      });
  });
  
  it('Confirma recebimento', () => {
    cy.visit('https://www.mailinator.com/v4/public/inboxes.jsp?to=cantinho1')
    cy.contains('equipe@gratis.com.br').should('be.visible');
  })
})