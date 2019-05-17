
describe('Automate shopping website checkout page', function() {

	var shopSel = require("../pages/shopselectpage.js");
	var shopcheckOut = require("../pages/checkoutpage.js");
	var using = require('jasmine-data-provider');
	
	// Setup
	beforeEach(function() {
		shopSel.getShopURL();
	});

	 // Test case 1- Validate clicking on checkout button navigate
	 // to checkout page
	 it('Validate checkout button', function() {
	 shopSel.shopLink.click();
	 shopSel.checkOutButton.click().then(function() {
	 var exits = shopcheckOut.checkoutButton.isDisplayed();
	 expect(exits).toBe(true);
	 })
	 }),
	
	 // Test case 2 - Validate product selected in select page is
	 // displayed in checkout page - Samsung
	 it('Validate Shopping', function() {
	 shopSel.shopLink.click();
	 shopSel.selectSamsung();
	 shopSel.checkOutButton.click().then(function() {
	 var exits = shopcheckOut.checkifSamsungAdded.isDisplayed();
	 expect(exits).toBe(true);
	 })
	 }),
	
	 // Test case 3 - Validate product selected in select page is
	 // displayed in checkout page - iPhone
	 it('Validate Shopping', function() {
	 shopSel.shopLink.click();
	 shopSel.selectIPhone();
	 shopSel.checkOutButton.click().then(function() {
	 var exits = shopcheckOut.checkifIPhoneAdded.isDisplayed();
	 expect(exits).toBe(true);
	 })
	 }),
	
	 // Test case 4 - Validate product selected in select page is
	 // displayed in checkout page - Nokia Edge
	 it('Validate Shopping', function() {
	 shopSel.shopLink.click();
	 shopSel.selectNokia();
	 shopSel.checkOutButton.click().then(function() {
	 var exits = shopcheckOut.checkifNokiaEdgeAdded.isDisplayed();
	 expect(exits).toBe(true);
	 })
	 })

	// To add 4 items and check if sum of all items total is correctly displayed
	// as final total
	it('Validate total', function() {		
		shopSel.shopLink.click()
		var total = 0;
	    shopSel.selectSamsung();
		shopSel.selectNokia();
		shopSel.selectIPhone();
		shopSel.selectBlackberry();		
		shopSel.checkOutButton.click().then(() =>{				
			element(by.css("td[class='text-right']")).getText().then(function(finalamount){				
				var famount1 = finalamount.substring(3);
				var fAmount = parseInt(famount1,10);				
			element.all(by.css("tbody tr")).each((item)=>{					
				item.element(by.css("td:nth-of-type(4)")).getText().then((amount)=>{
					var amount1 = amount.substring(3);
					var numAmount = parseInt(amount1,10);
					if(!isNaN(numAmount)){
						total = total + numAmount;						
						if(total = 300000){		
						expect(total).toBe(fAmount);
						}
					 }					 
					
				  })
				
			  })				
			})
		 })		  
	 })
	 
	

	// tear down
	afterEach(function() {

	});

})



