import { HomePage } from "../pages/home-page";
import { OpenNewAccount } from "../pages/open-newacc-page";
import { RequestLoan } from "../pages/request-loan-page";
import { testData } from "../utils/commonData";


describe("Para Bank -Request Loan",()=>{
    beforeEach(()=>{
        cy.visit('/index.htm');
    })
    it("Loan Request", ()=>{
        HomePage.loginApp(testData);
        RequestLoan.request_Loan();
        RequestLoan.verifyLoan();
    })
})

