describe('SimpleDataDriven',()=>{

it('GettingDataFromFixtures',()=>{

cy.visit("https://parabank.parasoft.com/parabank/index.htm");

cy.fixture("Parabank.json").then( (data)=>{

    cy.xpath("//input[@name='username']").type(data.username);

    cy.xpath("//input[@name='password']").type(data.password);
    
    cy.xpath("//input[@value='Log In']").click();
    

})



})


})