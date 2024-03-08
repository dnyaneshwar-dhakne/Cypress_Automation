describe('Assertions', () =>{

    it("Test1-Implicit Assertions", () =>{
    
    cy.visit("https://parabank.parasoft.com/parabank/index.htm")
    
    // cy.url().should('include', 'parabank.parasoft')
    // cy.url().should('eq', 'https://parabank.parasoft.com/parabank/index.htm')
    // cy.url().should('contain', 'parasoft.com')
    // cy.url().should('not.contain', 'abcTest')

    // cy.url().should('include', 'parabank.parasoft')
    // .should('eq', 'https://parabank.parasoft.com/parabank/index.htm')
    // .should('contain', 'parasoft.com')
    // .should('not.contain', 'abcTest')

    cy.url().should('include', 'parabank.parasoft')
    .and('eq', 'https://parabank.parasoft.com/parabank/index.htm')
    .and('contain', 'parasoft.com')
    .and('not.contain', 'abcTest')

    cy.xpath("//img[@class='logo']").should('be.visible') //logo visible
    .and('exist') //logo exist

    })
    

    })