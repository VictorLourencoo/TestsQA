/// <reference types="Cypress" />


Cypress.Commands.add('Login_cliente', () => {
  cy.visit('/login')

  cy.get('#mat-input-0').type(Cypress.env('email_cliente'))
  cy.get('#mat-input-1').type(Cypress.env('password'))
  cy.get('.button-login').click()

})

Cypress.Commands.add('logout_cliente', () => {
  cy.get('.user-button').click()
  cy.get('mat-sidenav-container app-side-nav-person > div > mat-list:nth-child(5) > button:nth-child(3)').click()


})
