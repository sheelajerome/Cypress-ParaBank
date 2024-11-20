import { HomePage } from "../pages/home-page";
import { TransferFund } from "../pages/transfer-funds";
import { testData } from "../utils/commonData";

describe("Para Bank- Fund Transfer",()=>{
   
    beforeEach(()=>{
        cy.visit('/index.htm');
    })
    it("Fund Transfer", ()=>{
        HomePage.loginApp(testData);
        TransferFund.FundTransfer();
      TransferFund.verifyFundTransfer();
    })
    
})