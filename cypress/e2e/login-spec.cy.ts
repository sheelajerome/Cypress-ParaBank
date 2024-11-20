import { HomePage } from "../pages/home-page";
import { testData } from "../utils/commonData";

describe("Para Bank -Login Suite",()=>{
    beforeEach(()=>{
        cy.visit('/index.htm');
    })
    it("login", ()=>{
        HomePage.loginApp(testData);
        HomePage.verifyLogin(testData);

    })
})

