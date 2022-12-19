describe('Newsletter Subscribe Form', () => {
    beforeEach(function newLetterFormPreCondition(){
        cy.visit("http://localhost:3000")
    })

    it("allows users to subscribe to the email list", () => {
        cy.getByData('email-input')
        .type('example@gmail.com')
        
        cy.getByData('submit-button')
        .click()

        cy.getByData('success-message').contains('Success: example@gmail.com has been succesfully subscribed')
    })
})