import { RegisterPage } from "./register-page";

export class HomePage{

   
    public static loginApp(userCred:{userName:string, password: string}){

    //xpath can be used alternatively by installing "cypres-xpath"
        //cy.xpath("//input[@name='username']").type(userName);
         //cy.xpath("//input[@name='password']").type(password);

         
        cy.get("input[name='username']").type(userCred.userName);
        cy.get("input[name='password']").type(userCred.password);
        cy.get('div.login > .button').click();

    }
    public static verifyLogin(userDetails:{firstName:string, lastName:string})
    {
        //div[@id='leftPanel']/p
        cy.get('.smallText').should('contain.text',`Welcome ${userDetails.firstName} ${userDetails.lastName}`);
    
    }
}