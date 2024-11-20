

export class UpdateContact {


    public static update_ContactInfo() {
        cy.wait(1000);
        cy.get('#leftPanel > ul > :nth-child(6) > a').click();
        cy.get('#customer\\.address\\.city').click();
        cy.get('#customer\\.address\\.city').clear();
        cy.get('#customer\\.address\\.city').type('nagercoil');
        cy.get('[colspan="2"] > .button').click();  
        
        
    }
    public static verifyUpdatedContactInfo() {
        //const stmt =  cy.get('#rightPanel>div> :nth-child(2)> :nth-child(2)')
        cy.get('#updateProfileResult > p').should('contain.text','Your updated address and phone number have been added to the system. ');
       }
}