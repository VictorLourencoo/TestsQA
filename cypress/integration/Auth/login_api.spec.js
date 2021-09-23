
/// <reference types="Cypress" />

describe('(Testes SaaS) - ENEVA - Autenticação', () => {

  context('Errors - Autenticação', () => {


    it('(error) Teste status code', () => {
      /*const email = Cypress.env('email_Investidor')
      const senha = Cypress.env('password')*/
      const email = 'rafael@sunne.com'
      const senha = 'admin'
      cy.request({
        method: 'POST',
        url: ' https://api.sunne.com.br/public/authenticate',

        body: {
          email: email,
          marketPlaceTag: "eneva",
          password: senha
        },
        failOnStatusCode: false
      }).its('body')
        .then(response => {
          expect(response.status).to.equals(401)

        })

    })
  })
})