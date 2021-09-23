/// <reference types="Cypress" />



Cypress.Commands.add('Auth_gui', (email, senha) => {

  cy.visit('https://eneva.sunne.com.br/login')

  cy.get('#mat-input-0').type(email)
  cy.get('#mat-input-1').type(senha)
  cy.get('.button-login').click()

})


Cypress.Commands.add('Auth_api', (email, senha) => {
  cy.request({
    method: 'POST',
    url: ' https://api.sunne.com.br/public/authenticate',
    body: {
      email: email,
      marketPlaceTag: "eneva",
      password: senha
    }
  }).its('body').then(response => {
    window.localStorage.setItem('token_investidor', response.token)

  })
})
Cypress.Commands.add('logout', () => {
  cy.get('.user-button').click()
  cy.get('app-side-nav-person > div > mat-list:nth-child(5) > button:nth-child(4)').click()


})











