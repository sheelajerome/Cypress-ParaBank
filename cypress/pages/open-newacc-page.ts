

export class OpenNewAccount{

   
    public static openAccount(){

   
   cy.get('#leftPanel > ul > :nth-child(1) > a').click();
   cy.get('#type').select(0);
   cy.get('#fromAccountId').select(0);
   cy.get('form > div > .button').click();
   
    }
    public static verifyAccountCreated()
    {
        cy.get('#openAccountResult > :nth-child(2)').should('have.text','Congratulations, your account is now open.')
    }
}