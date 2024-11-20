import { BillPay } from "../pages/billpay-page";
import { HomePage } from "../pages/home-page";

import { billPayTestData, testData } from "../utils/commonData";



describe("Para Bank -Bill Pay",()=>{
    beforeEach(()=>{
        cy.visit('/index.htm');
    })
    it("BillPay", ()=>{
        HomePage.loginApp(testData);
        BillPay.bill_Pay(billPayTestData);
        BillPay.verifyBillPay();


    })
})

