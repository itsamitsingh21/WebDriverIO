const LoginPage = require('../pageobjects/login.page');

describe('User validate page title', () => {
    it('should get page title', () => {
        LoginPage.open();
        var title = browser.title(); 
        expect(title).toHaveTextContaining(
            'A million more | Volvo Cars');
    });
});

describe('User click on  link', () => {
    it('should click on hybridCar Link', () => {
        LoginPage.open();
        LoginPage.clickOnHybridCarLink();
        var title = browser.title();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'Mild hybrids and other powertrains | Volvo Cars');
    });
});


