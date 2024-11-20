import { HomePage } from "../pages/home-page";
import { UpdateContact } from "../pages/update-contactinfo-page";
import { testData } from "../utils/commonData";



describe("Para Bank -Update contact info",()=>{
    beforeEach(()=>{
        cy.visit('/index.htm');
    })
    it("Update Contact Info", ()=>{
        HomePage.loginApp(testData);
        UpdateContact.update_ContactInfo();
        UpdateContact.verifyUpdatedContactInfo();

    })
})

