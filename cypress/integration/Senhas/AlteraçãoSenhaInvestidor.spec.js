/// <reference types="Cypress" />
const email = Cypress.env('email_Investidor')
var senha = 'Sunne2022'






describe('Teste de alteração de senha', () => {
  beforeEach(() => {
    cy.Auth_gui(email, senha);
    cy.intercept(
      'GET',
      'https://api.sunne.com.br/api/bandeiras/getAll'

    ).as('bandeiras')

    cy.wait('@bandeiras')
    cy.perfil_user()

  })
  context('errors', () => {
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
  context('Success', () => {
    it('alterando senha longa', () => {
      const novasenha = 'Sunne4521458409Sunne'
      cy.Trocar_senha(senha, novasenha, novasenha);
      cy.get('#toast-container').contains('Senha alterada com sucesso!')
      senha = 'Sunne4521458409Sunne'
    })
    /*
    it('alterando senha com caracteres especiais', () => {
      const email = 'cs_eneva@investidor.com'
      const novasenha = '@#!$#$@%!$!$$'
      const senha = 'Sunne4521458409Sunne'
  
      
      cy.Trocar_senha(senha, novasenha, novasenha);
      cy.get('#toast-container').contains('Senha alterada com sucesso!')
  
    })
    */

    it('alterando para senha padrão', () => {

      const novasenha = 'Sunne2022'
      cy.Trocar_senha(senha, novasenha, novasenha);
      cy.get('#toast-container').contains('Senha alterada com sucesso!')
    })

  })
})


