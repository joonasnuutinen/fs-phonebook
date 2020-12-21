describe('Front page', function() {
  it('can be opened', function() {
    cy.visit('http://localhost:3001')
    cy.contains('Phonebook')
  })
})
