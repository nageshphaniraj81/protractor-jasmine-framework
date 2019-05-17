function checkoutpage() {
	this.checkoutButton = element(by.css("button[class*='success']"));
	this.continueShoppingButton = element(by.css("button[class*='default']"));
	this.checkifSamsungAdded = element(by.linkText("Samsung Note 8"));
	this.checkifIPhoneAdded = element(by.linkText("iphone X"));
	this.checkifNokiaEdgeAdded = element(by.linkText("Nokia Edge"));
	this.checkifBlackberryAdded = element(by.linkText("Blackberry"));

}

module.exports = new checkoutpage();
