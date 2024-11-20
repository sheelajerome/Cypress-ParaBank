

export class LogoutPage {


    public static logOut() {
        cy.wait(1000);
        cy.get('#leftPanel > ul > :nth-child(8) > a').click();     
        
    }
    public static verifyLoggedOut() {
        cy.get('h2').should('have.text','Customer Login');
       }
}