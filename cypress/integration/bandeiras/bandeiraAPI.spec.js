import "cypress-localstorage-commands";


const ano = new Date().getFullYear()
var mes = (new Date().getMonth() + 1)
var bandeira_api = `${ano}-0${mes}`

const email = Cypress.env('email_Investidor')
const senha = Cypress.env('password')
describe('Bandeira_api', () => {
  before(() => {
    cy.Auth_api(email, senha)

  })

  it("teste api, listar Bandeiras", () => {
    const token = window.localStorage.getItem('token_investidor')
    const auth = `Bearer ${token}`
    cy.log(auth)
    cy.api_listar_Bandeiras(auth).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body[0].inclusionDate).contains(bandeira_api)
    })
  })
})
