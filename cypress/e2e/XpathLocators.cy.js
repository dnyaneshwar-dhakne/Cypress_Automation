describe('XpathLocator', () =>{

it('Test1-getting all links-positive scenario', () =>{

cy.visit("https://www.facebook.com/")

cy.xpath("//a").should('have.length', 47)

})

it('Test2- getting all links-negative scenario', () =>{

    cy.visit("https://www.facebook.com/")
    
    cy.xpath("//a").should('have.length', 50)
    
    })

})