import { AccountsOverview } from "../pages/accounts-overview-page";
import { HomePage } from "../pages/home-page";
import { testData } from "../utils/commonData";

describe('Para Bank - Account Overview',()=>{
    beforeEach(()=>{
        cy.visit('/index.htm');
    })
    it('account balance',()=>{
      
      
       HomePage.loginApp(testData);
    //    AccountsOverview.viewBalace();
       AccountsOverview.verifyBalance();
        
    })
})