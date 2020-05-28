"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//BasePage.ts
var protractor_1 = require("protractor");
var url_1 = require("url");
var BasePage = /** @class */ (function () {
    function BasePage() {
    }
    BasePage.prototype.openBrowser = function (urlAddress) {
        protractor_1.browser.waitForAngularEnabled(false)
            .then(function () {
            return new url_1.URL(urlAddress);
        })
            .then(function () {
            return protractor_1.browser.get(urlAddress);
        }).then(function () { return protractor_1.browser.sleep(5000); });
    };
    return BasePage;
}());
exports.BasePage = BasePage;
//# sourceMappingURL=BasePage.js.map