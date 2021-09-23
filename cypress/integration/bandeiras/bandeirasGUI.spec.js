import "cypress-localstorage-commands";

const n = ["janeiro", "fevereiro", "março",
  "abril", "maio", "junho", "julho", "agosto",
  "setembro", "outubro", "novembro", "dezembro"][(new Date()).getMonth()]


const ano = new Date().getFullYear()
var bandeira = `${n}, ${ano}`
const investidor = Cypress.env('email_Investidor')
const cliente = Cypress.env('email_cliente')
const senha = Cypress.env('password')

describe('Testar Bandeiras do mes atual', () => {

  it("(Teste SaaS - Front) Lista de bandeira mes atual  - user Investidor", () => {

    cy.Auth_gui(investidor, senha)
    cy.intercept(
      'GET',
      'https://api.sunne.com.br/api/bandeiras/getAll'
    ).as('bandeiras')

    cy.wait('@bandeiras')

    cy.get('mat-toolbar > button').click()
    cy.get('.ng-trigger-indicatorRotate.ng-star-inserted').click()
    cy.Listar_Bandeiras(bandeira)
  })




  it("(Teste SaaS - Front) Lista de bandeira mes atual  - user Cliente", () => {

    cy.Auth_gui(cliente, senha)
    cy.intercept(
      'GET',
      'https://api.sunne.com.br/api/bandeiras/getAll'
    ).as('bandeiras')

    cy.wait('@bandeiras')

    cy.get('mat-toolbar > button').click()
    cy.get('.ng-trigger-indicatorRotate.ng-star-inserted').click()
    cy.Listar_Bandeiras(bandeira)
  })
})
