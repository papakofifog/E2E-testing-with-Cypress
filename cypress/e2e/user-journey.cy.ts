describe("User Journey", () =>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
    it("a use can find a course on the home page and complete the courses lessons", () =>{

        context('View and complete course 1', ()=>{
            cy.getByData('course-0').find('a').eq(3).click()
            cy.location('pathname').should('eq','/testing-your-first-application')
            cy.getByData('next-lesson-button').click()
            

        })

        context('View and complete course 2',()=>{
            cy.location('pathname').should('eq', "/testing-your-first-application/app-install-and-overview")
            cy.getByData('challenge-answer-0').click()
            cy.getByData('next-lesson-button').should('exist').click()
            
            
        })

        context('View and complete course 3', () =>{
            cy.location("pathname").should(
                "eq",
                "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
            )
            cy.getByData('challenge-answer-0').click()
            cy.getByData('next-lesson-button').should('exist').click()
        })

        context('View and complete course 4', () =>{
            cy.location("pathname").should(
                "eq",
                "/testing-your-first-application/setting-up-data-before-each-test"
              )
    
              cy.getByData('challenge-answer-0').click()
    
              cy.getByData('next-lesson-button')
              .should("exist")
              .click()
        })
        context('Return to the Home page', () =>{
            cy.location("pathname").should(
                "eq",
                "/"
          )
        })
        

    })
})