"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//LoginPage.ts
var protractor_1 = require("protractor");
var BasePage_1 = require("../BasePage");
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginPage.prototype.clickSignin = function () {
        protractor_1.element(protractor_1.By.linkText("Sign in")).click()
            .then(function () { return protractor_1.browser.sleep(5000); });
    };
    LoginPage.prototype.loginWith = function (user, pass) {
        protractor_1.$("input#username").sendKeys("naveen")
            .then(function () {
            return protractor_1.$("input#password").sendKeys("kuchbhi");
        })
            .then(function () {
            return protractor_1.$("button[type='submit']").click();
        })
            .then(function () {
            return protractor_1.browser.sleep(5000);
        });
    };
    return LoginPage;
}(BasePage_1.BasePage));
exports.LoginPage = LoginPage;
//# sourceMappingURL=LoginPage.js.map