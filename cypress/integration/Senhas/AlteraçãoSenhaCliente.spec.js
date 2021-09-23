/// <reference types="Cypress" />


describe('Teste de alteração de senha', () => {
  const email = Cypress.env('email_cliente')
  var senha = 'Sunne2022'

  beforeEach(() => {
    cy.Auth_gui(email, senha);
    cy.intercept(
      'GET',
      'https://api.sunne.com.br/api/bandeiras/getAll'

    ).as('bandeiras')

    cy.wait('@bandeiras')
    cy.perfil_user_cliente()

  })


  context('Errors', () => {
    it('(error) Comfirmar senha nao confere', () => {


      const novasenha = 'Sunne4521458409Sunne'
      const confirmaSenha = 'Sunne452145409Sunne'

      cy.Trocar_senha(senha, novasenha, confirmaSenha);

      cy.get('#toast-container').contains('Confirmação de senha incorreta')
    })
    it('(error) Senha Atual não confere', () => {


      const novasenha = '123456'
      const confirmaSenha = '123456'
      cy.Trocar_senha('senhaErrada', novasenha, confirmaSenha);
      cy.get('#toast-container').contains('Senha atual incorreta')
    })

  })


  context('success', () => {
    it('alterando senha longa', () => {
      const novasenha = 'Sunne4521458409Sunne'
      cy.Trocar_senha(senha, novasenha, novasenha);
      cy.get('#toast-container').contains('Senha alterada com sucesso!')
      senha = 'Sunne4521458409Sunne'
    })


    it('alterando para senha padrão', () => {

      const novasenha = 'Sunne2022'
      cy.Trocar_senha(senha, novasenha, novasenha);
      cy.get('#toast-container').contains('Senha alterada com sucesso!')

    })

  })



})




