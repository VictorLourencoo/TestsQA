/*/// <reference types="Cypress" />

const email = Cypress.env('email_Investidor')
const senha = Cypress.env('password')



describe('faturas pendentes', () => {
  before(() => {
    cy.Auth_api(email, senha)

  })
  beforeEach(() => {
    const token = window.localStorage.getItem('token_investidor')
    const auth = `Bearer ${token}`

  })

  
  it('The Loft Rj5BX', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'Rj5BX'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })


  it('Inova-Energy Mnmjl', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'Mnmjl'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })


  it('Natural Leve 2 Ljl7a', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'Ljl7a'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })


  it('Natural Leve (Torres Camara) 1545B', () => {
    // const code = window.localStorage.getItem('code1')
    const code = '1545B'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })


  it('Edifício Residencial Palazzo Residence ymJB5', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'ymJB5'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })


  it('MICHEL PLATINI JERONIMO DIAS Exmrm', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'Exmrm'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })


  it('MEGA BABY ARTIGOS INFANTIS EIRELI BxmOx', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'BxmOx'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })


  it('IGOR DE MOURA NOGUEIRA 7xWrR', () => {
    // const code = window.localStorage.getItem('code1')
    const code = '7xWrR'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })


  it('RD COMERCIO DE ARTIGOS OTICOS LTDA p443b', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'p443b'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })
  it('Inova-Energy 35kyr', () => {
    // const code = window.localStorage.getItem('code1')
    const code = '35kyr'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })





  it('Cond. Summerville (Coqueiros 000) PjV35', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'PjV35'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })

  it('Cond. Allegro 2bGLb', () => {
    // const code = window.localStorage.getItem('code1')
    const code = '2bGLb'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })

  it('Regina Diógenes (Eng Santana Jr.) BxVJL', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'BxVJL'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })

  it('Cond. Summerville (Poço 3) LjVEL', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'LjVEL'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })

  it('Cond. Summerville (Coqueiros 001) QmVLB ', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'QmVLB'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })

  it('Cond. Summerville (Guarita Portaria Praia Vj2z4', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'Vj2z4'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })

  it('Cond. Summerville (4231393) 7xGzg', () => {
    // const code = window.localStorage.getItem('code1')
    const code = '7xGzg'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })

  it('Cond. Summerville (Poço 1) wm9lj', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'wm9lj'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })

  it('Cond. Summerville (Poço 2) p4wGN', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'p4wGN'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })

  it('Eneva (Castelo 2755) q6gqo', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'q6gqo'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })

  it('Bulls Beer (CS A) lyqG0', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'lyqG0'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })


  it('Bulls Beer	a3g3E', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'a3g3E'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })


  it('Restaurante Verdelima (N. 1293) 69EED', () => {
    // const code = window.localStorage.getItem('code1')
    const code = '69EED'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })


  it('Restaurante Verdelima (N. 1283) 5xXky', () => {
    // const code = window.localStorage.getItem('code1')
    const code = '5xXky'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })


  it('Butchers - 746 COMERCIO E DSITRIBUICAO DE CARNES LTDA JxmB5', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'JxmB5'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })


  it('Cond. Summerville (Coqueiros 000) gMDNQ', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'gMDNQ'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })

  it('Belluci Gelatos Rj5nX', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'Rj5nX'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })


  it('Regina Diógenes (Monsenhor Bruno) 15Ag6 ', () => {
    // const code = window.localStorage.getItem('code1')
    const code = '15Ag6'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })

  it(' Balu Doces 2bpVE', () => {
    // const code = window.localStorage.getItem('code1')
    const code = '2bpVE'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })
  it(' PIM FOOD COM E DISTRIB DE ALIMENTOS LTDA Jxxy7', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'Jxxy7'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })

  it('Cond. Vivendas  5xNwj', () => {
    // const code = window.localStorage.getItem('code1')
    const code = '5xNwj'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })

  it('Cond. Allegro 8xz5L', () => {
    // const code = window.localStorage.getItem('code1')
    const code = '8xz5L'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })

  it('Cozinha Mágica (43333089)  v0xdD', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'v0xdD'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })

  it('MARIA IONETE GOMES DE HOLANDA VITAL EIRELI Mnn3X', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'Mnn3X'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })

  it('Qorpo (C3 P1)  0xnP5', () => {
    // const code = window.localStorage.getItem('code1')
    const code = '0xnP5'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })

  it('Qorpo (1 ANDAR 01 T  7xaoA', () => {
    // const code = window.localStorage.getItem('code1')
    const code = '7xaoA'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })

  it(' Qorpo (2 ANDAR T2)15jb6', () => {
    // const code = window.localStorage.getItem('code1')
    const code = '15jb6'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })

  it('Qorpo (CONDOMÍNIO) jzPmQ', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'jzPmQ'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })


  it('Bulls Beer (CS A) q6PMG', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'q6PMG'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })


  it('Restaurante Trepassos jzLNp', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'jzLNp'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })

  it('Cantinho do Frango Sul nWrG5', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'nWrG5'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })


  it('Formetais a3gQa', () => {
    // const code = window.localStorage.getItem('code1')
    const code = '15jb6'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })




  it('Bulls Beer rEV5d ', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'rEV5d'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })


  it('Bulls Beer (CS A) rEVdd ', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'rEVdd'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })


  it('Bulls Beer (CS A) kkVd9', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'kkVd9'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })

  
  it('Bulls Beer (CS A) kkVd9', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'kkVd9'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })




  it('Bulls Beer xa0J6', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'xa0J6'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })



  it('Bulls Beer (CS A) 69XnN', () => {
    // const code = window.localStorage.getItem('code1')
    const code = '69XnN'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })

  it('Barraca Sorriso do Sol Mnd2y', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'Mnd2y'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })

  it('Regina Diógenes (Eng Santana Jr.) VjAPE', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'VjAPE'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })


  it('Ed. Villagio Del Mare PjPW7', () => {
    // const code = window.localStorage.getItem('code1')
    const code = 'PjPW7'
    cy.Faturas_pendentes(code).then(response => {
      expect(response.status).to.equal(200)
      expect(response.body.info.status).to.equals('pending') || to.equals('delayed')

    })
  })



})
*/