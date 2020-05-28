//BasePage.ts
import { browser, $, By, element, WebElement } from "protractor";
import { URL } from "url";

export class BasePage{
    openBrowser(urlAddress: string){
        browser.waitForAngularEnabled(false)
        .then(()=>
            new URL(urlAddress))
        .then(()=>
        browser.get(urlAddress)).then(
            ()=>browser.sleep(5000));
    }
}