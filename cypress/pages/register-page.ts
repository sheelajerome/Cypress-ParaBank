export class RegisterPage{

    public static registerUser(signup:{firstName:string,lastName:string,streetName:string,city:string,state:string,zipcode:string,phoneNumber:string,ssnNumber:string,userName:string,password:string}){  
        cy.get('#loginPanel > :nth-child(3) > a').click();
        cy.get('#customer\\.firstName').type(signup.firstName);
        cy.get('#customer\\.lastName').type(signup.lastName);
        cy.get('#customer\\.address\\.street').type(signup.streetName);
        cy.get('#customer\\.address\\.city').type(signup.city);
        cy.get('#customer\\.address\\.state').type(signup.state);
        cy.get('#customer\\.address\\.zipCode').type(signup.zipcode);
        cy.get('#customer\\.phoneNumber').type(signup.phoneNumber);
        cy.get('#customer\\.ssn').type(signup.ssnNumber);

        cy.get('.form2').click();

        cy.get('#customer\\.username').type(signup.userName);
        cy.get('#customer\\.password').type(signup.password);
        cy.get('#repeatedPassword').type(signup.password);

        cy.get('[colspan="2"] > .button').click();
        
    }
    public static verifyRegisteredUser()
    {
        cy.get('#rightPanel > p').should('contain.text','Your account was created successfully. You are now logged in.')
    }
}