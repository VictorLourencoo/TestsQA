/// <reference types="Cypress" />


describe('Verificação da api de Clima', () => {
  const email = Cypress.env('email_Investidor')
  const senha = Cypress.env('password')


  beforeEach(() => { cy.Auth_gui(email, senha); })

  it('Verificar integração do clima', () => {
    cy.get('#container_menu > div > div:nth-child(4) > button').click()
    cy.get('#container_menu > div > div:nth-child(4) > button').should('be.visible')
    cy.get('div:nth-child(2) > div:nth-child(2) > div:nth-child(1)').should('be.exist')


    cy.clima()
      .then(response => {
        expect(response.status).to.equal(200)
        expect(response.body.temperature)

      })

  })


})
