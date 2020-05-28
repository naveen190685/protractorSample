//LoginPage.ts
import { element, browser, By, $ } from "protractor";
import { BasePage } from "../BasePage";


export class LoginPage extends BasePage{
     clickSignin(){
        element(By.linkText("Sign in")).click()
        .then(
            ()=>browser.sleep(5000));
    }

    loginWith(user: String, pass: String){
        $("input#username").sendKeys("naveen")
        .then(()=>
            $("input#password").sendKeys("kuchbhi"))
        .then(()=>
            $("button[type='submit']").click())
        .then(()=>
            browser.sleep(5000))
    }
}