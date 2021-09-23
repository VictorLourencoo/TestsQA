/// <reference types="Cypress" />

describe('logout sistema Cliente', () => {
  const email = Cypress.env('email_Investidor')
  const senha = Cypress.env('password')
  before(() => cy.Auth_gui(email, senha))

  it('O usuario deve realizar logout no sistema', () => {

    cy.intercept(
      'GET',
      'https://api.sunne.com.br/api/bandeiras/getAll'
    ).as('bandeiras')

    cy.wait('@bandeiras')

    cy.logout()
    cy.url().should('eq', 'https://eneva.sunne.com.br/login')
  })
})

