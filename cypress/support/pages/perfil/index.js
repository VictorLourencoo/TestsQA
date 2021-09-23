Cypress.Commands.add('perfil_user', () => {
  cy.get('mat-toolbar > button').click()
  //botao para perfil
  cy.get('app-side-nav-person > div > mat-list:nth-child(2) > button').click()
  //verificar se botao de atualizar senha esta desabilitado 
  cy.get('.input-button.atualizar.mat-raised-button.mat-button-base').should('be.disabled').as('botaoAtualizar')

  //verificando se o card de troca de senha exist
  cy.get('app-meu-perfil > div > div:nth-child(2) > ').should('be.exist')
})

Cypress.Commands.add('perfil_user_cliente', () => {
  cy.get('mat-toolbar > button').click()
  //botao para perfil
  cy.get('app-side-nav-person > div > mat-list:nth-child(2) > button').click()
  //verificar se botao de atualizar senha esta desabilitado 
  cy.get('.input-button.atualizar.mat-raised-button.mat-button-base').should('be.disabled').as('botaoAtualizar')

  //verificando se o card de troca de senha exist
  cy.get('app-meu-perfil-cliente > div > div:nth-child(3)').should('be.exist')
})