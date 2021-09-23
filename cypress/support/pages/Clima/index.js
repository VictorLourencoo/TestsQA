/// <reference types="Cypress" />


Cypress.Commands.add('clima', () => {
  cy.request({
    method: 'GET',
    url: '/clima?lat=-5.76&lng=-39.63',


  })
})