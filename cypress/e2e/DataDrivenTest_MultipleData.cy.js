describe('DataDriven Test',()=>{

    it('GettingMultipleDataFromFixtures',()=>{
    
    cy.fixture("data.json").then( (data)=>{

        cy.visit("https://practicetestautomation.com/practice-test-login/");
      
     data.forEach((UserData) => {
       
        cy.xpath("//input[@id='username']").type(UserData.Username);
        cy.xpath("//input[@id='password']").type(UserData.Password);
        cy.xpath("//button[@id='submit']").click();

        if(UserData.Username=="student" && UserData.Password=="Password123"){

            cy.xpath("//h1[text()='Logged In Successfully']")
            .should('have.text', UserData.Expected);

            cy.xpath("//a[text()='Log out']").click()
        }

        else{

            cy.xpath("//div[@id='error']")
            .should('have.text', UserData.Expected);
        }

     });


    })
        
    
    })
    
    
    
    })
    
    
 