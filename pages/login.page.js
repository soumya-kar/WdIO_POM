const eleUtil= require('../util/elementUtil')
class LoginPage{

    //page locators
     get username() {return $('#username')}
     get password() {return $('#password')}
     get loginBtn() {return $('#loginBtn')}
     get signUpLink() {return $('.signup-link>a')}
     get signInError() {return $('.private-alert__inner>h5')}
     

     //page actions
     getLoginPageTitle(){
         return eleUtil.getPageTitle();
     }

     isSignUpPageExist(){
        // eleUtil.waitForElementToDisplay(this.signUpLink);
        return eleUtil.elementIsDisplayed(this.signUpLink);
     }

     doLogin(emailId, pwd){
        eleUtil.doClearAndSetValue(this.username, emailId);
        eleUtil.doClearAndSetValue(this.password, pwd);
        eleUtil.doClick(this.loginBtn);
     }




    }

module.exports= new LoginPage();