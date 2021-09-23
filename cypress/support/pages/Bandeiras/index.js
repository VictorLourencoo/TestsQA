/// <reference types="Cypress" />




Cypress.Commands.add('Listar_Bandeiras', (mes) => {
  cy.get('.first_bandeira.ng-star-inserted > div > div.flags').contains(mes)
  cy.get('.ng-star-inserted > div > div.hoje.ng-star-inserted').should('be.visible')
  cy.get('.bandeiras.first_bandeira.ng-star-inserted > div > div.hoje.ng-star-inserted').should('be.visible')
})

Cypress.Commands.add('api_listar_Bandeiras', (Authorization) => {
  cy.request({
    method: 'GET',
    headers: {
      Authorization
    },
    url: 'https://api.sunne.com.br/api/bandeiras/getAll',
  })
})