import { HomePage } from "../pages/home-page";
import { OpenNewAccount } from "../pages/open-newacc-page";
import { testData } from "../utils/commonData";


describe("Para Bank -Open New Account",()=>{
    beforeEach(()=>{
        cy.visit('/index.htm');
    })
    it("openAccount", ()=>{
        HomePage.loginApp(testData);
        OpenNewAccount.openAccount();
        OpenNewAccount.verifyAccountCreated();

        
    })
})

