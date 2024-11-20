export class AccountsOverview {

    public static viewBalace() {
        //account overview in dashboard
        cy.get('#leftPanel > ul > :nth-child(2) > a').click();

        //available balance in dashboard


    }
    public static verifyBalance() {

        var total1, total2;
        
        cy.get(':nth-child(2) > b').then(($total) => {
            total1 = $total.text(); // Extract the text
            cy.log(total1);
        });

        cy.get('tbody > :nth-child(1) > :nth-child(3)').then(($total) => {
            var total2 = $total.text(); // Extract the text
            cy.log(total2);
        });
        expect(total1).to.be.equal(total2);
    }
}