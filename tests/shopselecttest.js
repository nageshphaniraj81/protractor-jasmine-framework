describe('Automate shopping website', function() {

	var shopSel = require("../pages/shopselectpage.js");
	var using = require('jasmine-data-provider');

	// Setup
	beforeEach(function() {
		shopSel.getShopURL();
	});

	// Test case 1- Select 3 Items
	it('Validate Shopping', function() {
		shopSel.shopLink.click();
		shopSel.selectSamsung();
		shopSel.selectIPhone();
		shopSel.selectNokia();
		shopSel.checkOutText.getText().then(function(value) {
			var res = value.split("(");
			var x = Number(res[1].trim().charAt(0));
			expect(x).toBe(3);			
		})
	}),
	
	// Test case 2- Select 2 Items
	it('Validate Shopping', function() {
		shopSel.shopLink.click();
		shopSel.selectSamsung();
		shopSel.selectIPhone();
		shopSel.checkOutText.getText().then(function(value) {
			var res = value.split("(");
			var x = Number(res[1].trim().charAt(0));
			expect(x).toBe(2);			
		})
	}),
	
	// Test case 3- Select 1 Items
	it('Validate Shopping', function() {
		shopSel.shopLink.click();
		shopSel.selectSamsung();
		shopSel.checkOutText.getText().then(function(value) {
			var res = value.split("(");
			var x = Number(res[1].trim().charAt(0));
			expect(x).toBe(1);			
		})
	}),
	
	// Test case 4- Select no Items
	it('Validate Shopping', function() {
		shopSel.shopLink.click();
		shopSel.checkOutText.getText().then(function(value) {
			var res = value.split("(");
			var x = Number(res[1].trim().charAt(0));
			expect(x).toBe(0);			
		})
	}),

	// tear down
	afterEach(function() {

	});

})
