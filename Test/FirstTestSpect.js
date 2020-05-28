"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoginPage_1 = require("./Page/LinkedIn/LoginPage");
//FirstTestSpec.ts
var loginIn = new LoginPage_1.LoginPage();
describe("this is my first test", function () {
    //Below code is using page objects
    it("Go to sign in section of LinkedIn", function () {
        loginIn.openBrowser("https://www.linkedin.com");
        loginIn.clickSignin();
        expect(2).toEqual(2);
    });
    it("user should be log in", function () {
        loginIn.loginWith("userMe", "passWordMe");
        expect(2).toEqual(2);
    });
    // //Below code is without page object model
    // it("Sign in to the page without page object", ()=>{
    //     browser.waitForAngularEnabled(false)
    //     .then(()=>
    //             browser.get("https://www.linkedin.com"))
    //     .then(()=>
    //            element(By.linkText("Sign in")).click())
    //     .then(()=>
    //             browser.sleep(5000))
    //     .then(()=>
    //     $("input#username").sendKeys("naveen"))
    //     .then(()=>
    //         $("input#password").sendKeys("kuchbhi"))
    //     .then(()=>
    //         $("button[type='submit']").click())
    //     .then(()=>
    //         browser.sleep(5000))
    // })
});
//# sourceMappingURL=FirstTestSpect.js.map