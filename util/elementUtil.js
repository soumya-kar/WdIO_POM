
const waitTime=15000;
class ElementUtil {

    doClick(element){
       this.waitForElementToDisplay(element);
       this.waitForElementToBeEnabled(element);
        element.click();
    }

    doClearAndSetValue(element, value){
       // this.waitForElementToDisplay(element);
        element.clearValue();
        element.addValue(value);
    }

    getTextFrom(element){
       // this.waitForElementToDisplay(element);
        return element.getText();
    }

    elementIsDisplayed(element){
       // this.waitForElementToDisplay(element);
        return element.isDisplayed();
    }

    getPageTitle(){
        return browser.getTitle();
    }

    waitForElementToDisplay(element){
        element.waitForDisplayed();
    }

    waitForElementToBeEnabled(element){
        element.waitForEnabled(15000);
    }

}

module.exports= new ElementUtil();