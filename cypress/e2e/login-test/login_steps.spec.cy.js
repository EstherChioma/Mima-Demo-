let data

describe('Testing Login Journey', () => {
  before(function(){
    cy.fixture('selectors').then(function(sel){
    data = sel
    })
  })
  it('Successful Login', () => {
    
    cy.get(data.emailField).should('be.visible').and('exist').type('testcase1@yopmail.com' )
    cy.get(data.passwordField).should('be.visible').and('exist').type('Esther123@' )
    cy.get(data.loginBtn).click()
    cy.get(data.EstherIncField).should('contain.text', 'Esther_Inc')
    
  })
  it('Invalid Email Login', () => {
    
    cy.get(data.emailField).should('be.visible').and('exist').type('testcase1@yopmail.' )
    cy.get(data.passwordField).should('be.visible').and('exist').type('Esther123@' )
    cy.get(data.loginBtn).click
    cy.get(data.EnterValidEmail).should('contain', 'Enter a valid Email')
  }
)
it('Empty Email Login', () => {
  cy.get(data.passwordField).should('be.visible').and('exist').type('Esther123@' )
  cy.get(data.loginBtn).click()
  cy.get(data.AddressNotFound).should('contain', 'Email Address is required')
}
)
})
