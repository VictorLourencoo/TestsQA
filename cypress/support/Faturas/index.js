/// <reference types="Cypress" />


Cypress.Commands.add('Faturas_pendentes', (code) => {
  cy.request({
    method: 'POST',
    body: {
      paymentCode: code
    },
    url: 'https://invoice.sunne.com.br/backoffice/getInfoPayment',
  })
})




/*Cypress.Commands.add('faturas', (Authorization) => {
  cy.request({
    method: 'GET',
    headers: {
      Authorization
    },
    url: 'https://api.sunne.com.br/api/powerPlant/search/fatura/getByMonth/3?page=1&limit=10&currentDate=',

  }).then(rs => {
    expect(rs.status).to.equal(200)

    expect(rs.body.faturas.result[0].status).to.equal('pending')
    window.localStorage.setItem('code1', rs.body.faturas.result[0].codigoPagamento)




  })
})

*/