/// <reference types="Cypress" />


Cypress.Commands.add('DownloadFatura_Investidor', () => {
  //CLICAR NO MENU FATURAS

  cy.get('#container_menu > div > div:nth-child(3) > button').click();
  cy.get('table > tbody > tr:nth-child(1) .mat-column-fatura > button').click()
})
Cypress.Commands.add('DownloadFatura_Cliente', () => {
  //CLICAR NO MENU FATURAS

  cy.get('#container_menu > div > div:nth-child(4) > button').click();
  cy.get('table > tbody > tr:nth-child(1) .mat-column-download > button').click()
})


