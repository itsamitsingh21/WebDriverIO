const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get rechargeLink() { return $('a[data-autoid="ProductListCarousel:cta1"]') }
    get mildHybridCars() { return $('a[data-autoid="ProductListCarousel:cta2"]') }


    /**
     * Click on Recharge Link
     */
    clickOnHybridCarLink () {
        this.mildHybridCars.click();
    }
 /**
     * Click on mildHybrid Link
     */
  clickOnRechargeLink () {
    this.rechargeLink.click();
}

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
