describe('Testing Login Journey'), () => {
  it('Successful Login', () => {
    
    cy.get('#email').should('be.visible').and('exist').type('testcase1@yopmail.com' )
    cy.get('#password').should('be.visible').and('exist').type('Esther123@' )
    cy.get('button[type="submit"]').click
    cy.get('.AppPage_topside_name__7zj2X').should('contain.text', ('Esther_Inc'))
    
  })
  it('Invalid Email Login', () => {
    
    cy.get('#email').should('be.visible').and('exist').type('testcase1@yopmail.' )
    cy.get('#password').should('be.visible').and('exist').type('Esther123@' )
    cy.get('button[type="submit"]').click
    cy.get('MimaInput_error__QkKJM').should('contain', ('Enter a valid Email'))
  }
)
it('Empty Email Login', () => {
 
  cy.get('#email').should('be.visible').and('exist').type('' )
  cy.get('#password').should('be.visible').and('exist').type('Esther123@' )
  cy.get('button[type="submit"]').click()
  cy.get('MimaInput_error__QkKJM').should('contain', ('Email Address is required'))
}
)
}
