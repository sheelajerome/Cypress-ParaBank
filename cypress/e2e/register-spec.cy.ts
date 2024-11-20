import { RegisterPage } from "../pages/register-page"
import { testData } from "../utils/commonData";

describe("Para Bank-Sign Up",()=>{
    beforeEach(()=>{
        cy.visit('/index.htm');
    })
    it("Signing up in Para Bank", ()=>{
       
       RegisterPage.registerUser(testData);
       RegisterPage.verifyRegisteredUser();
    })
})