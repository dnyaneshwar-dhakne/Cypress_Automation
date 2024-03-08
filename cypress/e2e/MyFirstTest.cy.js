describe('MyFirstTest', () => {
   
    it('test1-positive', () => {
      cy.visit('https://www.facebook.com/')
    
       cy.title().should('eq', 'Facebook')

    })
   
    it('test2-negative', () => {
        cy.visit('https://www.facebook.com/')

        cy.title().should('eq', 'Facebook1')

      })

})