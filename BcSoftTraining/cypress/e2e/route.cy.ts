describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.get('div#test_login').should('have.text', 'i\'m login')
    cy.get('button').click();
    cy.url().should('contain', 'dashboard')
  })
})