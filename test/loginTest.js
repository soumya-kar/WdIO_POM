const loginPage= require('../pages/login.page')
const eleUtil= require('../util/elementUtil')
const testData = require('../config')
describe("Log in Test", ()=>{
    it ("Verify page title", () =>{
        browser.url('/');
        browser.maximizeWindow();
        browser.pause(15000)
        let title= loginPage.getLoginPageTitle();
        console.log('Page title is :'+title);
        assert.equal('HubSpot Login', title, 'title is not found')
     })
    it ("Verify sign up link exists on Log in page", () =>{
        console.log(loginPage.isSignUpPageExist())
        assert.equal(true, loginPage.isSignUpPageExist(), 'Sign up link is not displayed')
    })

    it ("Verify invalid log in", () =>{
       loginPage.doLogin(testData.username, testData.password_invalid);
       assert.equal("This doesn't look right.", eleUtil.getTextFrom(loginPage.signInError), 'Correct Signin error message is not displayed')
    })

    it ("Verify valid log in", () =>{
        browser.refresh();
        loginPage.doLogin(testData.username, testData.password_valid);
        $("(//*[@role='none']//a[contains(.,'Contacts') and @id='nav-primary-contacts-branch'])[1]").waitForDisplayed(15000);
        assert.equal('Account Setup | HubSpot', browser.getTitle(), 'User has not successfully logged in')
     })
   

})