import { HomePage } from "../pages/home-page";
import { LogoutPage } from "../pages/logout-page";
import { testData } from "../utils/commonData";



describe("Para Bank -Log Out",()=>{
    beforeEach(()=>{
        cy.visit('/index.htm');
    })
    it("Log out", ()=>{
        HomePage.loginApp(testData);
        LogoutPage.logOut();
        LogoutPage.verifyLoggedOut();        
    })
})

