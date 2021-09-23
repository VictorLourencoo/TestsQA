/// <reference types="Cypress" />


Cypress.Commands.add('logout', () => {

  cy.get('mat-toolbar > button').should('be.visible').as('perfil')
  cy.get('@perfil').click()
  cy.get('button:nth-child(4)').click()





})