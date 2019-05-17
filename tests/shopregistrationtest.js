describe('Automate shopping website', function() {

	var shopReg = require("../pages/shopregistrationpage.js");
	var using = require('jasmine-data-provider');
	var shopRegData = require("../dataproviders/shopregistrationdata.js");

	// Setup
	beforeEach(function() {
		shopReg.getShopURL();
	});

	// Test case 1
	using(shopRegData.shopregistrationdata, function(data, description) {
		it(description, function() {
			shopReg.name.sendKeys(data.name);
			shopReg.email.sendKeys(data.email);
			shopReg.password.sendKeys(data.password);
			shopReg.icecream.click();
			shopReg.gender.click();
			shopReg.employmentStatus.click();
			shopReg.birthday.sendKeys(data.dob);
			shopReg.submit.click().then(function() {
				shopReg.successText.getText().then(function(text) {
					expect(text).toContain(data.result);
				})
			})

		})
	});

	// Test case 2
	using(shopRegData.formNameValidationdata, function(data, description) {
		it('Validate Form name data', function() {
			shopReg.name.sendKeys(data.name);
			shopReg.email.click().then(function() {
				shopReg.nameMinCharError.getText().then(function(text) {
					expect(text).toContain(data.result);
				})
			})

		})

	});
	
	// Test case 3
	using(shopRegData.formEmailValidationdata, function(data, description) {
		it('Validate Form email data', function() {
			shopReg.email.sendKeys(data.email);
			shopReg.name.click().then(function() {
				shopReg.nameMinCharError.getText().then(function(text) {
					expect(text).toContain(data.result);
				})
			})

		})

	});

	// tear down
	afterEach(function() {
		
	});

})
