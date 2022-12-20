describe('Newsletter Subscribe Form', () => {
    beforeEach(function newLetterFormPreCondition(){
        cy.visit("http://localhost:3000")
    })

    it("allows users to subscribe to the email list", () => {
        cy.getByData('email-input')
        .type('tom@gmail.com')
        
        cy.getByData('submit-button')
        .click()

        cy.getByData('success-message')
        .should('exist')
        .contains('tom@gmail.com')
    })

    it("does Not allow an invalid email address", () => {
        cy.getByData('email-input')
        .type('tom')

        cy.getByData('submit-button')
        .click()

        cy.getByData('sucess-message')
        .should('not.exist')
    })

    it("does not allow an already existing user to signUp to the NewsLetter", ()=>{
        cy.getByData('email-input')
        .type('john@example.com')

        cy.getByData('submit-button')
        .click()

        cy.getByData('server-error-message')
        .should('exist')
        .contains('already exists. Please use a different email address')
    })
})