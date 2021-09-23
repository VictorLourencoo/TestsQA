
/// <reference types="Cypress" />
const email = Cypress.env('email_Investidor')
const senha = Cypress.env('password')
describe('Sistema de download de faturas', () => {
  beforeEach(() => {
    cy.Auth_gui(email, senha);
    cy.intercept(
      'GET',
      'https://api.sunne.com.br/api/bandeiras/getAll'
    ).as('bandeiras')

    cy.wait('@bandeiras')

  })

  it('Download fatura Investidor', () => {
    cy.DownloadFatura_Investidor();
  })
})