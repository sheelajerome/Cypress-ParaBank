import { expect } from "chai";

export class TransferFund{
    
    public static FundTransfer(){    
        const amount ='5' ;
        let fromAcc, toAcc;
        cy.get('#leftPanel > ul > :nth-child(3) > a').click();
       
        cy.get('#amount').type(amount);
        cy.wait(1000);
        

        cy.get('#fromAccountId').select(0).then(($fromAccount) => {
            fromAcc = $fromAccount.text(); 
            cy.log(fromAcc);
        });
       
        
        cy.get('#toAccountId').select(0).then(($toAccount) => {
            toAcc = $toAccount.text(); 
            cy.log(toAcc);
        });

        cy.wait(1000);
        cy.get(':nth-child(4) > .button').click();
        cy.get('#showResult > :nth-child(2)').click();
        
    }
    public static verifyFundTransfer()
    {
        cy.get('#showResult > .title').should('have.text','Transfer Complete!');
    }
}