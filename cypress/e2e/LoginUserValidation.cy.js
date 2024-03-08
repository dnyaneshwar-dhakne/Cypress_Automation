describe('Login', () =>{

    it("Test1-login successfully", () =>{
    
        cy.visit("https://courses.ultimateqa.com/")         //opening url
        
        cy.xpath("//a[@href='/users/sign_in']").click()     //clicking on sign in

        cy.xpath("//input[@id='user[email]']").type("dsdhakne111@gmail.com")   //entering username

        cy.xpath("//input[@id='user[password]']").type("Dhakne@123")    //entering password
    
        cy.xpath("//button[@class='button button-primary g-recaptcha']").click()  //clicking on sign in

         let expName="\n          Dnyaneshwar D\n          \n          \n        ";

         cy.xpath("//button[@class='dropdown__toggle-button']").then( (x) =>  {

                let actName=x.text()

                        //BDD style
                         expect(actName).to.equal(expName)  
                         
                         //TDD style
                         assert.equal(actName,expName)
                         
                                                             })

        })


})