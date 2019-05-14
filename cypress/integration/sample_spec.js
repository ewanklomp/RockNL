describe('Open band', function() {
  it('Book band', function() {
    cy.visit("http://localhost:4200")
	cy.get('a#btnBand').click()
	cy.get('button.button').click()
	cy.get('input#inputName').type('test naam')
	cy.get('input#inputMail').type('test mail')
	cy.get('button#btnBetaal.btn').click()
  })
})