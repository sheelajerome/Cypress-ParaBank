

export class RequestLoan {


    public static request_Loan() {
        cy.wait(1000);
        cy.get('#leftPanel > ul > :nth-child(7) > a').click();

        cy.get('#amount').type('1000');

        cy.get('#downPayment').type('500');
        cy.get('[colspan="2"] > .button').click();
    }
    public static verifyLoan() {
        cy.get('#loanRequestApproved > :nth-child(1)').should('have.text','Congratulations, your loan has been approved.')
    }
}