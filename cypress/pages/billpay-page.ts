


export class BillPay {


    public static bill_Pay(BillTestdata: { name: string, streetName: string, city: string, state: string, zipcode: string, phoneNumber: string, accNumber: string, amount: string }) {

        cy.get('#leftPanel > ul > :nth-child(4) > a').click();
        cy.get(':nth-child(1) > [width="20%"] > .input').type(BillTestdata.name);
        cy.get(':nth-child(2) > [width="20%"] > .input').type(BillTestdata.streetName);
        cy.get(':nth-child(3) > [width="20%"] > .input').type(BillTestdata.city);
        cy.get(':nth-child(4) > [width="20%"] > .input').type(BillTestdata.state);
        cy.get(':nth-child(5) > [width="20%"] > .input').type(BillTestdata.zipcode);
        cy.get('input[name="payee\\.phoneNumber"]').type(BillTestdata.phoneNumber);
        cy.get(':nth-child(8) > :nth-child(2) > .input').type(BillTestdata.accNumber);
        cy.get(':nth-child(9) > [width="20%"] > .input').type(BillTestdata.accNumber);
        cy.get(':nth-child(11) > [width="20%"] > .input').type(BillTestdata.amount);
        cy.get(':nth-child(14) > :nth-child(2) > .button').click();


    }
    public static verifyBillPay() {

        cy.get('#billpayResult > .title').should('have.text','Bill Payment Complete');
    }
}