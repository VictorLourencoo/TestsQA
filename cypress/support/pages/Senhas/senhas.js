/// <reference types="Cypress" />

Cypress.Commands.add('Trocar_senha', (senha, novaSenha, confirmaSenha) => {


  //Verificação de erros

  //confimar senha diferente
  cy.get('[name="senhaAtual"]').type(senha).as('senhaAtual')
  cy.get('[name="novaSenha"]').type('123').as('novaSenha')
  cy.get('div:nth-child(1) > div:nth-child(2) > div > div').contains('A senha deve conter pelo menos 6 dígitos')
  cy.get('@novaSenha').clear()
  cy.get('@novaSenha').type(novaSenha)
  cy.get('.mat-raised-button.mat-button-base').should('not.enabled')

  cy.get('[name="novaSenhaConfirm"]').type(confirmaSenha).as('confirmarNovaSenha')

  cy.get('.mat-raised-button.mat-button-base').click()


  //verificar mensagem de erro
  cy.get('#toast-container > div > div').should('be.exist')
  cy.get('@novaSenha').clear()
  cy.get('@senhaAtual').clear()
  cy.get('@confirmarNovaSenha').clear()
})


Cypress.Commands.add('api_TrocarSenha', (senha, novaSenha) => {
  cy.request({
    method: 'POST',
    url: 'https://api.sunne.com.br/public/resetPassword',
    body: {
      oldPassword: senha,
      newPassword: novaSenha
    }
  })
})
